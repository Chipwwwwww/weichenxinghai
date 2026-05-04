LINE_CHANNEL_SECRET=
LINE_CHANNEL_ACCESS_TOKEN=
LINE_WEBHOOK_VERIFY_TOKEN=
SUPABASE_URL=
SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
APP_PUBLIC_BASE_URL=
ADMIN_BASE_URL=
AI_PROVIDER=gemini
AI_MODEL=gemini-2.5-flash-lite
GEMINI_API_KEY=
WEBSITE_BASE_URL=
LINE_COMMUNITY_URL=

## 4 7. Supabase 資料表初版設計

以下是第一版建議 schema。實作時可依現有專案命名調整，但欄位意義不要省略，尤其是事件原始資料、券回滾、客服對話、使用者互動狀態。

【資料表導讀】以下 SQL 不是對外文案，而是給 Codex／工程端建立資料庫使用的「資料結構草案」。一般營運只要理解三件事：① 哪些表記錄使用者與訊息；② 哪些表記錄祝福、優惠、邀請與商品；③ 哪些表讓客服、AI 草稿器與後台能查到一致資料。為避免工程名詞看起來突兀，本版新增資料表用途白話總覽。

【內部導讀｜資料庫名詞速查】這段給營運、客服主管與未來交接的人看，與前台客人完全無關。uuid 是一種不容易撞號的唯一識別碼；text 是文字欄位；integer 是整數金額或次數；numeric 是可帶小數的分數或權重；boolean 是 true/false；date 是日期；timestamptz 是含時區的時間戳，適合記錄領券、下單、付款、客服回覆時間；jsonb 是彈性資料欄位，可放原始 webhook、設定或額外資訊；references 代表這個欄位連到另一張表；unique 代表不能重複；index 是加速查詢；RLS 是資料列權限控管；service role 是後端專用高權限金鑰，絕對不能放到前端；raw_payload 是原始事件備份，方便 debug；idempotency 是避免 LINE 重送事件時重複發券或重複建資料。

| 資料表群組 | 白話用途 | 重要欄位／為什麼重要 |
| --- | --- | --- |
| line_users | 記錄 LINE 好友基本狀態。 | line_user_id 用來辨識同一位好友；follow_status 可判斷是否封鎖；tags 可做客服標籤。 |
| line_webhook_events | 保留 LINE 傳來的原始事件，方便追查錯誤。 | line_event_id 防止重複處理；raw_payload 可用來 debug；signature_valid 確認安全驗證。 |
| conversations / messages | 保存客服對話與系統回覆。 | human_requested 決定是否轉真人；direction 區分客人訊息、客服訊息與系統訊息。 |
| daily_contents / blessing_images / blessing_phrases | 管理每日平安圖、字幕版與靜心小語。 | content_date 對應每天內容；image_id / phrase_id 讓祝福包能穩定組合。 |
| user_daily_claims | 記錄誰今天領過平安祝福包。 | unique(line_user_id, claim_date) 防止同一天重複領取與重複發券。 |
| blessing_sessions / blessing_votes / daily_blessing_stats | 管理點亮心意與今日共鳴。 | session 狀態追蹤使用者流程；stats 顯示今日共鳴前三句。 |
| coupon_definitions / user_coupons / coupon_redemptions | 管理結緣回饋與折抵。 | 折抵以商品 discount_cap 控管；不再用每筆張數作主要限制，降低客服複雜度。 |
| user_invite_codes / referral_events / invite_share_logs | 管理邀請好友、好友加入與外傳祝福券。 | invite_code 追蹤來源；referral_events 記錄加入與首購；risk_flag 防洗券。 |
| products / orders | 管理商品、禮盒與訂單摘要。 | discount_cap 是折抵上限核心；sanitized_customer_summary 避免把完整個資暴露給 AI。 |
| feedback_tickets / support_cases | 管理建議、回報與真人客服。 | category / priority / status 讓客服知道要先處理什麼。 |
| voluntary_support_payments | 管理支持創作團隊的獨立自願支持。 | no_consideration_confirmed 確認無對價；thank_you_status 管理感謝訊息；不得觸發券、會員或優先客服。 |
| customer_tag_definitions / line_user_tag_assignments / customer_behavior_events / market_analysis_snapshots | 管理 LIFT 內部標籤、客服判斷、AI 分群與市場分析快照。 | tag_key / visibility / confidence / event_type / segment_key 可讓客服與 AI 分析客群，但只能後台使用，不得外流到前台。 |
| community_rules / community_moderation_logs | 管理 LINE 社群規範、違規處理與管理員紀錄。 | rule_key / violation_type / action_taken / evidence_summary 用於防詐騙、防個資外洩與社群秩序維護。 |
| website_links / website_policy_pages | 管理官網重要頁面與非六格外部接口。 | url_key / target_url / status / last_reviewed_at 讓 OA、社群、客服與官網連結一致。 |
| line_user_other_infos / manual_review_tasks | 管理資料卡「其他資訊」、未分類內容與主管覆核任務。 | info_type / content / visibility / review_status 讓人工可補充、AI 可建議但不得前台外流。 |

-- 使用者
create table line_users (
id uuid primary key default gen_random_uuid(),
line_user_id text unique not null,
display_name text,
picture_url text,
follow_status text default ‘followed’,
first_seen_at timestamptz default now(),
last_seen_at timestamptz default now(),
has_claimed_first_blessing boolean default false,
has_lit_first_blessing boolean default false,
tags text[] default ‘{}’,
metadata jsonb default ‘{}’
);

-- LINE 原始 webhook 事件：debug 與重放用
create table line_webhook_events (
id uuid primary key default gen_random_uuid(),
line_event_id text unique,
line_user_id text,
event_type text not null,
postback_data text,
raw_payload jsonb not null,
signature_valid boolean default false,
processed_at timestamptz,
created_at timestamptz default now(),
error_message text
);

【資料表建議｜LIFT 內部標籤】
create table customer_tag_definitions (
  id uuid primary key default gen_random_uuid(),
  tag_key text unique not null,
  label text not null,
  category text, -- value / risk / behavior / market / service
  visibility text default 'internal_only',
  description text,
  created_at timestamptz default now()
);

create table line_user_tag_assignments (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  tag_key text not null,
  source text default 'staff', -- staff / ai / rule / import
  confidence numeric,
  note text,
  assigned_by uuid,
  created_at timestamptz default now()
);

create table customer_behavior_events (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  event_type text not null, -- viewed_gift_box / asked_coupon / shared_invite / requested_human / rude_message / competitor_probe
  event_value text,
  metadata jsonb default '{}',
  created_at timestamptz default now()
);

create table market_analysis_snapshots (
  id uuid primary key default gen_random_uuid(),
  snapshot_date date not null,
  segment_key text,
  metric_key text,
  metric_value numeric,
  note text,
  created_at timestamptz default now()
);

-- 對話與訊息
create table conversations (
id uuid primary key default gen_random_uuid(),
line_user_id text not null,
status text default ‘open’,
intent text,
human_requested boolean default false,
assigned_staff_id uuid,
last_message_at timestamptz,
created_at timestamptz default now()
);

create table messages (
id uuid primary key default gen_random_uuid(),
conversation_id uuid references conversations(id),
line_user_id text,
direction text not null, -- inbound / outbound / system
message_type text default ‘text’,
text text,
payload jsonb default ‘{}’,
staff_id uuid,
created_at timestamptz default now()
);

-- 每日內容
create table daily_contents (
id uuid primary key default gen_random_uuid(),
content_date date unique not null,
image_id uuid,
phrase_id uuid,
title text,
status text default ‘scheduled’,
created_at timestamptz default now()
);

create table blessing_images (
id uuid primary key default gen_random_uuid(),
storage_path text not null,
public_url text,
theme text,
alt_text text,
status text default ‘active’,
created_at timestamptz default now()
);

create table blessing_phrases (
id uuid primary key default gen_random_uuid(),
text text not null,
category text, -- 平安 / 家人 / 放下 / 啟程 / 守護
status text default ‘active’,
created_at timestamptz default now()
);

create table user_daily_claims (
id uuid primary key default gen_random_uuid(),
line_user_id text not null,
claim_date date not null,
daily_content_id uuid references daily_contents(id),
coupon_issued_id uuid,
created_at timestamptz default now(),
unique(line_user_id, claim_date)
);

-- 點亮祝福
create table blessing_sessions (
id uuid primary key default gen_random_uuid(),
line_user_id text not null,
status text default ‘select_phrases’,
auto_image_id uuid,
generated_card_id uuid,
completed_at timestamptz,
created_at timestamptz default now()
);

【資料表建議｜客群分流與下一步承接】
create table customer_segments (
  id uuid primary key default gen_random_uuid(),
  segment_key text unique not null,
  label text not null,
  description text,
  priority integer default 0,
  recommended_cta text,
  visibility text default 'internal_only',
  created_at timestamptz default now()
);

create table line_user_commercial_signals (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  source_channel text,
  lifecycle_stage text,
  demand_context text[],
  product_affinity text[],
  buying_obstacles text[],
  deal_temperature text,
  invite_value_score numeric,
  risk_score numeric,
  next_best_action text,
  confidence numeric,
  updated_at timestamptz default now()
);

create table next_best_action_logs (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  suggested_action text not null,
  reason text,
  source text default 'rule', -- rule / ai / staff
  accepted_by_staff boolean,
  created_at timestamptz default now()
);

create table campaign_audience_snapshots (
  id uuid primary key default gen_random_uuid(),
  snapshot_date date not null,
  audience_key text,
  filter_summary jsonb default '{}',
  estimated_count integer,
  recommended_message text,
  created_at timestamptz default now()
);

create table blessing_session_items (
id uuid primary key default gen_random_uuid(),
session_id uuid references blessing_sessions(id),
phrase_id uuid references blessing_phrases(id),
created_at timestamptz default now()
);

create table blessing_votes (
id uuid primary key default gen_random_uuid(),
line_user_id text not null,
vote_date date not null,
phrase_id uuid references blessing_phrases(id),
generated_card_id uuid,
created_at timestamptz default now()
);

create table daily_blessing_stats (
id uuid primary key default gen_random_uuid(),
stat_date date not null,
phrase_id uuid references blessing_phrases(id),
vote_count integer default 0,
score numeric default 0,
unique(stat_date, phrase_id)
);

-- 優惠券
create table coupon_definitions (
id uuid primary key default gen_random_uuid(),
code text unique not null,
name text not null,
amount integer not null,
valid_days integer not null,
eligible_product_tags text[] default ‘{}’,
stackable boolean default true,
discount_cap_policy text, -- 依商品折抵上限控管，不以每筆張數作為主要限制
status text default ‘active’,
created_at timestamptz default now()
);

create table user_coupons (
id uuid primary key default gen_random_uuid(),
line_user_id text not null,
coupon_definition_id uuid references coupon_definitions(id),
status text default ‘active’, -- active / reserved / used / expired / voided
issued_reason text,
issued_at timestamptz default now(),
expires_at timestamptz not null,
reserved_order_id uuid,
used_order_id uuid,
metadata jsonb default ‘{}’
);

create table coupon_redemptions (
id uuid primary key default gen_random_uuid(),
user_coupon_id uuid references user_coupons(id),
order_id uuid,
status text default ‘reserved’,
amount_applied integer,
created_at timestamptz default now(),
finalized_at timestamptz
);

-- 商品與訂單摘要
create table products (
id uuid primary key default gen_random_uuid(),
slug text unique not null,
name text not null,
price integer not null,
discount_cap integer not null,
product_tags text[] default ‘{}’,
status text default ‘active’
);

【資料表建議｜邀請好友與好友回流】
create table user_invite_codes (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  invite_code text unique not null,
  invite_url text,
  invite_card_image_url text,
  status text default 'active',
  created_at timestamptz default now()
);

create table referral_events (
  id uuid primary key default gen_random_uuid(),
  invite_code text,
  inviter_line_user_id text,
  invited_line_user_id text,
  event_type text not null, -- link_clicked / followed / first_order_completed / reward_issued / flagged
  order_id uuid,
  coupon_issued_id uuid,
  risk_flag text,
  raw_payload jsonb default '{}',
  created_at timestamptz default now()
);

create table invite_share_logs (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  invite_code text,
  share_type text, -- text / image / link / card
  channel_hint text, -- line_friend / line_group / family_group / social / unknown
  created_at timestamptz default now()
);

create table orders (
id uuid primary key default gen_random_uuid(),
order_no text unique not null,
line_user_id text,
status text default ‘draft’,
payment_method text, -- ecpay / cod_post / manual
payment_status text,
fulfillment_status text,
total_amount integer,
discount_amount integer default 0,
sanitized_customer_summary jsonb default ‘{}’,
created_at timestamptz default now()
);

<RED>-- </RED><RED>真人客服／回饋建議</RED><RED> / 客服</RED><RED>
</RED><RED>create</RED><RED> </RED><RED>table</RED><RED> feedback_tickets (
</RED><RED>id</RED><RED> uuid </RED><RED>primary</RED><RED> </RED><RED>key</RED><RED> </RED><RED>default</RED><RED> gen_random_uuid(),
line_user_id text,
</RED><RED>category</RED><RED> text,
content text,
status text </RED><RED>default</RED><RED> ‘new’,
created_at timestamptz </RED><RED>default</RED><RED> now()
);</RED>

create table support_cases (
id uuid primary key default gen_random_uuid(),
conversation_id uuid references conversations(id),
line_user_id text,
category text,
priority text default ‘normal’,
status text default ‘open’,
assigned_staff_id uuid,
created_at timestamptz default now(),
closed_at timestamptz
);

create table ai_drafts (
id uuid primary key default gen_random_uuid(),
conversation_id uuid references conversations(id),
suggested_reply text,
risk_level text,
risk_reasons text[] default ‘{}’,
model text,
created_at timestamptz default now()
);

【資料表建議｜voluntary_support_payments】
create table voluntary_support_payments (
  id uuid primary key default gen_random_uuid(),
  line_user_id text,
  receiver_person_name text, -- 實際收受支持的自然人；若收款人為公司/商號/品牌帳戶，不得標示為私人自然人支持
  amount integer not null,
  currency text default 'TWD',
  payment_method text, -- manual_transfer / ecpay / other
  payment_status text default 'pending',
  no_consideration_confirmed boolean default true,
  supporter_acknowledged_terms boolean default false,
  supporter_message text,
  thank_you_status text default 'pending', -- pending / sent / skipped
  thank_you_type text, -- message / image / phrase / mixed
  thank_you_sent_at timestamptz,
  progress_update_opt_in boolean default true,
  declaration_version text,
  internal_note text,
  created_at timestamptz default now(),
  paid_at timestamptz
);

create table voluntary_support_updates (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  content text not null,
  update_type text, -- content / website / line / product / service / milestone
  public_visible boolean default true,
  sent_at timestamptz,
  created_at timestamptz default now()
);

create table manual_review_tasks (
  id uuid primary key default gen_random_uuid(),
  line_user_id text,
  task_type text, -- uncategorized_info / community_violation / policy_review / product_question
  content_summary text,
  priority text default 'normal',
  status text default 'open',
  assigned_to uuid,
  resolved_at timestamptz,
  created_at timestamptz default now()
);

create table website_links (
  id uuid primary key default gen_random_uuid(),
  url_key text unique not null,
  label text not null,
  target_url text,
  status text default 'draft',
  last_reviewed_at timestamptz,
  created_at timestamptz default now()
);

create table line_user_other_infos (
  id uuid primary key default gen_random_uuid(),
  line_user_id text not null,
  info_type text, -- manual_note / uncategorized / special_need / follow_up / internal_warning
  content text not null,
  visibility text default 'internal_only',
  source text default 'staff', -- staff / ai / system
  review_status text default 'open',
  created_by uuid,
  created_at timestamptz default now()
);

create table community_rules (
  id uuid primary key default gen_random_uuid(),
  rule_key text unique not null,
  public_title text not null,
  public_description text not null,
  internal_note text,
  severity text default 'normal',
  status text default 'active',
  created_at timestamptz default now()
);

create table community_moderation_logs (
  id uuid primary key default gen_random_uuid(),
  line_user_id text,
  community_name text default '微塵星海｜分享今日祝福',
  violation_type text,
  content_summary text,
  action_taken text, -- remind / hide / delete / mute / remove / escalate
  evidence_summary text,
  reviewed_by uuid,
  created_at timestamptz default now()
);

【資料表建議｜LINE 社群、官網接口與其他資訊】

### 4.1 7.1 必加索引

create index idx_line_users_line_user_id on line_users(line_user_id);
create index idx_messages_conversation_id_created_at on messages(conversation_id, created_at);
create index idx_messages_line_user_id_created_at on messages(line_user_id, created_at);
create index idx_user_coupons_line_user_id_status on user_coupons(line_user_id, status);
create index idx_daily_claims_line_user_date on user_daily_claims(line_user_id, claim_date);
create index idx_blessing_votes_date on blessing_votes(vote_date);
create index idx_support_cases_status_priority on support_cases(status, priority);

### 4.2 7.2 RLS / 權限原則

第一版可用 service role 在 server side 寫資料，但前端與 LIFT 不能直接暴露 service role key。

客戶端只能讀自己的券包與公開商品資料。

LIFT 客服帳號只能讀對話、券包、必要訂單摘要。

完整地址、電話、Email 不直接給 AI；必要時遮罩。

webhook raw payload 只給管理員與工程 debug 看。

coupon_definitions 只能管理員修改。

voluntary_support_payments 只能由 server side 寫入；客服可看付款狀態、感謝狀態與進度更新 opt-in，不應把支持資料拿來觸發商品折扣、會員權益、抽獎或優先客服。

【權限原則｜內部標籤】customer_tag_definitions、line_user_tag_assignments、customer_behavior_events、market_analysis_snapshots 僅允許 server side、管理員、授權客服主管與 AI 草稿器讀取或寫入。前台使用者介面不得顯示內部標籤；客服對客回覆不得提到「你被標成高價值客」「你被標記為高風險互動」等內部判斷。所有市場分析輸出應以彙整數據為主，避免個資外洩與品牌風險。

【權限原則｜分群與精準承接】customer_segments、line_user_commercial_signals、next_best_action_logs、campaign_audience_snapshots 僅供 server side、管理員、授權客服主管與 AI 草稿器使用。前台不可讀取；客服對客訊息不得揭露任何分群、成交溫度、風險分數或消費能力推測。AI 可以用這些欄位建議「下一步怎麼承接」，但輸出給客人的文字只能是自然、友善、合規的服務話術。

## 5 8. API Endpoint 初版清單