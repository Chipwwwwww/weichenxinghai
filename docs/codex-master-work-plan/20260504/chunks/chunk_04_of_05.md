| Endpoint | 方法 | 用途 | 備註 |
| --- | --- | --- | --- |
| /api/line/webhook | POST | LINE webhook 入口。驗證簽章、寫 raw event、分派 action。 | 必須用 raw body 驗簽。 |
| /api/line/reply | POST | 內部封裝 LINE Reply API。 | 通常只給 webhook handler 呼叫。 |
| /api/admin/conversations | GET | LIFT 對話列表。 | 支援狀態、意圖、是否需人工、未讀篩選。 |
| /api/admin/conversations/:id | GET | 讀取單一對話、訊息、券包、訂單摘要。 | 客服工作台核心。 |
| /api/admin/messages/send | POST | 客服從 LIFT 手動送出 LINE 訊息。 | 第一版可先做複製，不一定直接送出。 |
| /api/admin/customer-service/draft | POST | AI 客服草稿器。 | 第二階段，人工確認後再送。 |
| /api/coupons/wallet/:lineUserId | GET | 查使用者券包。 | 今日優惠／查看優惠券按鈕與客服使用。 |
| /api/coupons/simulate | POST | 試算指定商品可折抵金額。 | 避免客服未經試算承諾折抵。 |
| /api/line/blessing/claim | POST | 內部 claim daily blessing。 | 也可由 webhook action 直接呼叫 service。 |
| /api/line/blessing/session | POST/PATCH | 建立與更新點亮祝福 session。 | 只讓使用者選句、完成；圖片由系統自動搭配今日圖源或後台指定圖源。 |
| /api/admin/feedback | GET/PATCH | 真人客服／回饋建議：建議與回報管理。 | 可合併 support cases。 |
| /api/support/voluntary | POST | 建立支持創作團隊的自願支持紀錄，或導向獨立付款流程。 | 不得與商品訂單合併；不自動發券、不解鎖會員權益、不綁抽獎、不給優先客服。 |
| /api/support/voluntary/thank-you | POST | 支持完成後送出感謝訊息、感謝圖或感謝語，並更新 thank_you_status。 | 感謝內容只能作為禮貌性回覆與關係維護，不得包裝成商品、折扣、會員或專屬權益。 |
| /api/support/voluntary/updates | GET/POST | 建立與推送支持後進度更新，例如新增平安圖、小語整理、網站功能、LINE 分享流程、祝福卡、商品頁與客服流程優化。 | 可作為公開進度或一般 LINE 更新，不做付費牆。 |
| /api/line/invite-friends | POST | 建立或讀取邀請好友流程。 | 依 line_user_id 建立 invite_code，回傳邀請文字、邀請連結、邀請卡圖，並寫入 invite_share_logs。 |
| /api/referrals/landing | GET/POST | 處理被邀請者落地與加入來源。 | 解析 invite_code / UTM，寫入 referral_events；不得暴露邀請者個資。 |
| /api/referrals/rewards | POST | 外傳祝福券資格檢查與發券。 | 被邀請好友完成首購後檢查防濫用規則，再發外傳祝福券。 |
| /api/admin/customer-tags | GET/POST/PATCH | 讀取、建立與調整 LIFT 內部客戶標籤。 | 僅後台與 AI API 可用；前台與客人不可讀取。 |
| /api/admin/market-analysis | GET/POST | 整理互動、邀請、查券、商品興趣與客服標籤，用於市場分析。 | 只輸出彙整結果，不輸出完整個資或羞辱性標籤。 |
| /api/admin/community-rules | GET/POST/PATCH | 管理 LINE 社群規範、違規分類、管理員提示與對外公告。 | 僅後台使用；對外只顯示簡化版社群規範。 |
| /api/community/moderation-log | POST | 記錄社群違規、提醒、刪除、禁言、移出與證據備份。 | 不得公開個資；高風險事件進 support_cases。 |
| /api/website/links | GET | 集中管理官網商品頁、條款頁、隱私政策、退款配送與社群規範 URL。 | URL 尚未定案時使用 placeholder，前台需可替換。 |
| /api/admin/other-info | GET/POST/PATCH | 新增、查詢與更新使用者資料卡「其他資訊」與未分類手動輸入。 | 客服可填寫；AI 可建議分類但需人工覆核。 |

### 5.1 8.1 /api/line/webhook 處理草圖

// 伪碼：實作時依現有框架調整
export async function POST(req: Request) {
const rawBody = await req.text();
const signature = req.headers.get(‘x-line-signature’);

verifyLineSignature(rawBody, signature, process.env.LINE_CHANNEL_SECRET);

const payload = JSON.parse(rawBody);
await saveRawWebhookEvent(payload, signature);

enqueueLineEvents(payload.events);
return new Response(‘OK’, { status: 200 });
}

### 5.2 8.2 Postback router 草圖

【API 補強｜邀請好友】新增 /api/line/invite-friends：依 line_user_id 建立或讀取 invite_code，回傳邀請文字、邀請連結與邀請卡圖。新增 /api/referrals/landing：處理 invite_code 落地、LINE 加入來源與 UTM。新增 /api/referrals/rewards：在被邀請好友完成首購後，檢查資格並發外傳祝福券。

switch (action) {
case 'claim_daily_blessing':
  return claimDailyBlessing(event);
case 'blessing_hub':
  return blessingHub(event);
case 'start_send_blessing':
  return startBlessingSession(event);
case 'toggle_blessing_phrase':
  return toggleBlessingPhrase(event, params.phrase);
case 'complete_blessing_session':
  return completeBlessingSession(event);
case 'view_blessing_wall':
  return viewBlessingWall(event); // blessing_hub 內的子 action，不再占 Rich Menu 主格
case 'invite_friends':
  return inviteFriends(event);
case 'copy_invite_text':
  return copyInviteText(event);
case 'share_invite_card':
  return shareInviteCard(event);
case 'view_invite_rewards':
  return viewInviteRewards(event);
case 'view_coupon_wallet':
  return viewCouponWallet(event);
case 'view_gift_boxes':
  return viewGiftBoxes(event);
case 'support_us':
  return supportUs(event);
default:
  return fallback(event);
}

## 6 9. LINE Console / OA 後台設定步驟

LINE Developers 建立或確認 Messaging API Channel。取得 Channel Secret 與 Channel Access Token，放入環境變數。

設定 Webhook URL：正式站使用 https://你的網域/api/line/webhook；本機測試可用 ngrok / Vercel preview。

啟用 Use webhook。若有 LINE 內建自動回覆，先避免與 webhook 回覆衝突；保留最基本的人工客服入口即可。

建立 Rich Menu：使用 2 × 3 圖面，六格文字依本檔定案。每個 area 綁 postback action。

將 Rich Menu 設為 default rich menu。測試 follow、postback、文字訊息、unfollow 是否寫入 Supabase。

LIFT 後台建立客服帳號與權限：客服只能看對話與必要訂單摘要；管理員才能看 coupon / content / webhook logs。

<RED>正式上線前跑 20 筆測試：新朋友加入、收平安、重複收、點亮、查優惠、看禮盒、找真人客服、回報問題、取消、unfollow。</RED>

### <RED>6.1 9.1 Rich Menu 圖面文字建議</RED>

六格每格文字要短、直覺、長輩看得懂：

<RED>收下今日平安
點亮心意／今日共鳴
邀請好友
今日優惠／查看優惠券
看看商品與禮盒
真人客服／回饋建議</RED>

不建議在圖面上加太多小字。每格可以用一個小副標，但若文字會變小，寧可不要：

<RED>今日平安：每日一份祝福</RED>

<RED>點亮心意：選一句祝福</RED>

<RED>今日共鳴：看見大家的祝福</RED>

<RED>今日優惠／查看優惠券：查看結緣回饋</RED>

<RED>禪意禮盒：自用送禮都體面</RED>

<RED>真人客服／回饋建議：客服、建議、回報、支持創作團隊</RED>

## 7 10. LIFT 客服台畫面規格

【LIFT 規格｜未分類與手動輸入原則】LIFT 需要允許後台人員在無法分類、資訊不完整或 AI 判斷不穩時手動輸入「其他資訊」。客服可填：客人背景、送禮對象、特殊需求、疑似但未確認的阻力、客服提醒、下次追蹤時間、不可公開備註、需要主管覆核事項。AI 可以依這些內容建議分類，但不能直接覆蓋人工判斷；所有未分類資料要能被主管定期整理成新的標籤、FAQ、社群規範、商品話術或官網內容。

| 區塊 | 要顯示什麼 | 客服動作 |
| --- | --- | --- |
| 左側列表 | 使用者名稱、最後訊息、未讀、意圖標籤、是否需人工、最後互動時間。 | 篩選：未回覆 / 想看禮盒 / 退款 / 貨到付款 / 高風險。 |
| 中間對話 | LINE inbound/outbound/system messages、使用者點擊紀錄、發券紀錄。 | 複製話術、手動送訊息、標記已處理。 |
| 右側使用者卡 | LINE user id、follow 狀態、券包、今日是否領平安、是否點亮、商品興趣、訂單摘要。 | 查券、查訂單、標籤。 |
| 快捷話術 | 本檔第 5 章話術庫。 | 一鍵複製，第一版不要 AI 自動發送。 |
| AI 草稿器 | 建議回覆、風險等級、風險原因、重新產生。 | 人工確認後複製 / 送出。第二階段。 |
| 問題回報 | feedback tickets / support cases。 | 分派、狀態更新、關閉。 |
| 內部標籤與分群 | 高潛力送禮客、價格敏感、長時間諮詢未下單、疑似同行試探、高壓／騷擾風險、長輩協助者、回購可能、售後風險等標籤。 | 客服可手動加標籤；AI 可建議標籤但需保留來源與信心分數；標籤不可對客顯示。 |
| 市場分析面板 | 各入口點擊、邀請好友轉化、查券後看禮盒比例、客服介入後成交可能、未成交原因、常見疑慮。 | 匯出給營運做商品頁、優惠、廣告與客服話術優化；不輸出個資。 |
| 未分類／其他資訊工作區 | 客人補充資訊、客服手動備註、無法分類內容、特殊情境、下一步提醒、主管覆核狀態。 | 客服可手動輸入、修改、標記需覆核；AI 可建議分類與下一步，但不得自動外流或直接對客顯示。 |

### 7.1 10.1 使用者卡資料

### 【LIFT 使用者卡｜延伸欄位與其他資訊】使用者卡除基本券包與訂單狀態外，應新增「其他資訊」欄位，集中放置來源渠道、生命週期、需求情境、商品傾向、購買阻力、成交溫度、邀請價值、回購可能、售後風險、下一步承接建議、最近一次有效互動、最近一次未完成行為、最適合回覆模板，以及客服手動輸入的無法分類資訊。這些欄位讓客服能快速判斷「先安撫、先查券、先推禮盒、先教下單、先處理風險」；不是拿來對客貼標籤，也不得出現在前台。

| 欄位 | 顯示範例 |
| --- | --- |
| LINE 狀態 | followed / unfollowed |
| 今日平安 | 已領 / 未領 |
| 第一次領祝福券 | 已發 / 未發 |
| 今日點亮 | 已完成 / 進行中 / 未開始 |
| 第一次點亮券 | 已發 / 未發 |
| 目前券包 | 新友 NT$50、初見 NT$50、點亮 NT$100 |
| 商品興趣 | glass / fragrance / purifier / unsure |
| 下單狀態 | 無訂單 / 草稿 / 未付款 / 已付款 / 已出貨 / 已完成 |
| 需人工原因 | 退款、付款異常、物流問題、商品瑕疵、功效質問 |
| 支持創作團隊 | 無紀錄 / pending / paid / 已寄感謝 / 已加入進度更新 |
| 邀請好友 | invite_code / 分享次數 / 好友加入數 / 首購數 / 外傳祝福券狀態 / 異常標記 |
| 內部客戶標籤 | 高潛力送禮客 / 價格敏感 / 長時間諮詢 / 疑似同行試探 / 高壓互動風險 / 回購可能 / 需要真人耐心承接 |
| 市場分析訊號 | 來源、最常點擊入口、商品興趣、查券行為、邀請轉化、未成交原因 |
| AI 建議標籤 | AI 建議 + confidence + risk_reason；人工可接受、修改或拒絕 |
| 其他資訊 | 客服手動備註 / 無法分類內容 / 特殊需求 / 送禮對象 / 家人狀況 / 下次追蹤時間 / 主管覆核 / 不可外流提醒 |

### 7.2 10.2 快捷話術按鈕

第一版 LIFT 應至少有：

首次購買 / 貨到付款

不會網路下單

是不是佛教用品

禪意日常玻璃杯禮盒值得買嗎

小型桌面型空氣清新機｜完整禮盒版真的有用嗎

禪意香氛杯禮盒會不會太香

優惠券怎麼用

想退款 / 商品問題

完整禮盒價值比較

<RED>找真人客服</RED>

## 8 11. 事件路由與回覆規則

| LINE event | 判斷 | 動作 |
| --- | --- | --- |
| follow | 新朋友加入 / 解除封鎖 | upsert user、發新友同行券、送歡迎訊息、寫 messages。 |
| unfollow | 封鎖官方帳號 | 更新 follow_status=unfollowed，不主動刪資料；保留訂單與券紀錄。 |
| message:text | 文字訊息 | 寫入 messages；關鍵字路由；無法判斷則回預設訊息或標記 human_requested。 |
| postback | Rich Menu / quick reply action | 依 action 分派到六格流程。 |
| message:image | 客人傳照片 | 寫入 messages；若 conversation 有退款 / 瑕疵 intent，標記客服處理。 |
| beacon / other | 第一版不用 | 只寫 raw event，不回覆或回 fallback。 |

### 8.1 11.1 關鍵字路由

<RED>【關鍵字路由】新增「真人客服、人工客服、找人、幫我、有人可以幫忙嗎」→ human_requested。新增「邀請好友、分享給朋友、分享祝福、邀請家人、推薦朋友、我的邀請、外傳祝福券」→ invite_friend_interest。新增「支持創作團隊、支持你們、我想支持、贊助、隨喜、捐款、善捐」→ voluntary_support_interest。邀請好友回覆時先承接到邀請文字、邀請卡圖與邀請連結；支持創作團隊回覆時承接到支持說明與付款頁。</RED>

| 使用者文字 | intent | 回覆 / 動作 |
| --- | --- | --- |
| 客服、真人、有人嗎 | human_requested | 標記人工，回覆客服承接文案。 |
| 想看禮盒、禮盒、商品 | product_interest | 回覆三款禮盒總覽。 |
| 玻璃杯 | product_glass | 回覆禪意日常玻璃杯禮盒單品話術。 |
| 香氛杯 | product_fragrance | 回覆禪意香氛杯禮盒單品話術。 |
| 空清機、空氣清新機、清淨機 | product_purifier | 回覆小型桌面型空氣清新機｜完整禮盒版話術。 |
| 優惠、券、折扣 | coupon | 查券包。 |
| 貨到付款、詐騙、先付款 | cod_payment | 回覆貨到付款安心話術。 |
| 退款、退貨、壞掉、瑕疵 | support_high_risk | 標記人工，要求訂單編號 / 手機末三碼 / 照片。 |
| 治過敏、除甲醛、除病毒、PM2.5 | forbidden_claim_risk | 標記人工或回覆合規版，不承諾效果。 |
| 支持創作團隊、支持你們、我想支持、贊助、隨喜、捐款、善捐 | voluntary_support_interest | 回覆支持創作團隊說明與獨立支持流程；可送感謝語與公開進度更新，但不發券、不給會員權益、不綁抽獎或優先客服。 |
| 邀請好友、分享給朋友、分享祝福、邀請家人、推薦朋友、我的邀請、外傳祝福券 | invite_friend_interest | 回覆邀請好友說明與獨立邀請流程；產生邀請文字、邀請連結與邀請卡圖，並提示好友加入與首購後的外傳祝福券規則。 |
| 社群、分享今日祝福、我要加入社群、社群規範、分享小語、修行故事 | community_interest | 回覆 LINE 社群說明、社群規範與加入入口；提醒不得詐騙、外洩個資、私下收款或發布違法／誤導內容，並導回 OA 領祝福、查券或看禮盒。 |
| 官網、官方網站、條款、隱私、退款、配送、服務條款 | website_info | 回覆官網入口與對應頁面：品牌理念、三款禮盒、優惠與活動規則、付款配送、退款退貨、服務條款、隱私權政策與社群規範。 |

## 9 12. 六格與資料表接線總表

<RED>【接線規格｜邀請好友】按鈕「邀請好友」主要資料表：user_invite_codes, referral_events, invite_share_logs, user_coupons, coupon_definitions。是否發券：被邀請好友加入後發新友同行券給新朋友；被邀請好友完成首購後，依資格發外傳祝福券給邀請者。LIFT 顯示：邀請連結、分享次數、好友加入數、好友首購數、外傳祝福券狀態與異常標記。</RED>

| 按鈕 | 主要資料表 | 會發券嗎 | LIFT 要顯示 |
| --- | --- | --- | --- |
| 收下今日平安 | daily_contents, user_daily_claims, user_coupons, messages | 第一次領取發初見祝福券 NT$50 | 今日已領 / 圖文 / 發券狀態 |
| 點亮心意／今日共鳴 | blessing_sessions, blessing_session_items, blessing_votes, daily_blessing_stats, generated_cards, user_coupons | 第一次點亮發點亮心意券 NT$100 | 選的祝福小語、系統搭配圖源、今日共鳴結果、是否發券、是否導向邀請好友 |
| 邀請好友 | user_invite_codes, referral_events, invite_share_logs, user_coupons, coupon_definitions | 被邀請好友加入後發新友同行券；被邀請好友首購後可發外傳祝福券 | 邀請連結、分享次數、好友加入數、好友首購數、外傳祝福券狀態、異常標記 |
| 今日優惠／查看優惠券 | coupon_definitions, user_coupons, coupon_redemptions, products | 只查詢；不新增，除非觸發分享成功 | 券包、可用商品、到期日、折抵試算 |
| 看看商品與禮盒 | products, messages, conversations | 不直接發券 | 商品興趣標籤、點擊商品 |
| 真人客服／回饋建議 | feedback_tickets, support_cases, conversations, voluntary_support_payments | 不直接發券 | 問題類型、狀態、是否需客服、是否有私人自願支持紀錄 |

## 10 13. AI 客服草稿器接入時機與知識包

【AI 知識包｜邀請好友】新增 /ai-knowledge/invite-referral.md：說明邀請好友入口、邀請文字、邀請卡、invite_code、邀請追蹤、外傳祝福券、異常防濫用、不可洗券、不可誤導、不可保證收益或效果。AI 客服遇到「邀請好友、分享、推薦朋友、外傳祝福券」時，應優先回覆邀請流程與客服可協助事項。

AI 草稿器不應該在 LINE 規則未定稿前先做。等本檔六格流程、商品、優惠、物流付款與禁語穩定後，再讓 AI 讀知識包與對話。

| 知識包 | 內容 |
| --- | --- |
| /ai-knowledge/brand.md | 品牌理念、結緣、傳遞祝福、語氣、禁用內部術語。 |
| /ai-knowledge/products.md | 三商品名稱、價格、賣點、FAQ、送禮定位、禁語。 |
| /ai-knowledge/line-oa.md | 本檔六格流程、按鈕、回覆文案、發券與導流規則。 |
| /ai-knowledge/coupons.md | 券種、面額、可疊規則、商品折抵上限、回滾規則。 |
| /ai-knowledge/logistics-payment.md | 綠界、郵局、宅配到府、貨到付款、運費吸收、客服話術。 |
| /ai-knowledge/refund-policy.md | 退貨、退款、取消、未取貨、瑕疵、客服介入。 |
| /ai-knowledge/forbidden-claims.md | 醫療、功效、除菌率、除甲醛、開運改命、未經授權承諾補償的禁語。 |
| /ai-knowledge/customer-tone.md | 長輩友善、簡短、有人情味、像真人。 |
| /ai-knowledge/voluntary-support.md | 支持創作團隊規則：支持入口與商品訂單分開；建議金額 NT$200 / NT$600 / NT$2,000 / NT$6,000 / 自訂金額；可寄送感謝訊息、感謝圖、感謝語與公開進度更新；更新可說明平安圖、小語、網站、LINE 分享流程、祝福卡、客服、商品頁與禮盒體驗的改善。不得把支持包裝成商品、折扣、會員、抽獎、優先客服、投資、公益捐款或宗教功德。 |
| /ai-knowledge/invite-referral.md | 邀請好友入口、邀請文字、邀請卡、invite_code、好友加入追蹤、外傳祝福券、異常防濫用、不可洗券、不可誤導、不可保證收益或效果。 |
| /ai-knowledge/internal-customer-tags.md | LIFT 內部標籤、客群分層、市場分析欄位、AI 建議標籤規則、不可外流前台的底線。AI 可協助客服分流與草稿，但不得在對客訊息中透露標籤或風險判斷。 |
| /ai-knowledge/community-rules.md | LINE 社群「微塵星海｜分享今日祝福」定位、歡迎內容、禁止內容、管理員 SOP、防詐騙、防個資外洩與導回 OA / 官網 / 禮盒流程。 |
| /ai-knowledge/website-links-and-policy.md | 官網重要頁面、商品頁、條款、隱私、退款配送、社群規範、活動規則與不可對客稱為「對立式稱呼」的對外話術。 |
| /ai-knowledge/other-info-and-manual-review.md | LIFT「其他資訊」、未分類手動輸入、主管覆核、AI 建議分類、不可外流前台的資料使用底線。 |

### 10.1 13.1 AI 草稿器輸出格式

{
“suggestedReply”: “可直接貼給客人的回覆”,
“riskLevel”: “low | medium | high”,
“riskReasons”: [“退款”, “功效宣稱”],
“detectedIntent”: “product_purifier”,
“shouldHumanReview”: true,
“internalSummary”: “簡短客服判斷摘要，不暴露 chain-of-thought”
}

### 10.2 13.2 高風險一定人工確認

退款

退貨

商品瑕疵

付款異常

物流遺失

功效質問

醫療 / 健康改善宣稱

補償、折扣、例外承諾

個資或法律問題

## 11 14. 上線分期建議

| 階段 | 目標 | 要完成 | 不要做 |
| --- | --- | --- | --- |
| Phase 0：內容定稿 | 先讓 LINE 對外口徑正確。 | 六格文案、祝福語、商品話術、優惠規則、客服話術。 | 不要先做 AI 自動客服。 |
| Phase 1：Webhook + Supabase | 讓所有 LINE 互動可被記錄。 | Webhook 驗簽、user/message/postback/raw event、基本六格回覆。 | 不要一開始做太複雜推薦。 |
| Phase 2：LIFT 客服台 | 客服可看對話與狀態。 | 對話列表、使用者卡、券包、快捷話術、商品興趣標籤。 | 不要讓 AI 直接自動送出。 |
| Phase 3：優惠與商品承接 | 今日優惠／查看優惠券與禮盒導購可用。 | coupon wallet、simulate、商品頁追蹤、貨到付款提示。 | 不要未經規則發放或承諾折扣。 |
| Phase 4：AI 草稿器 | 提升客服效率。 | AI provider 抽象層、讀知識包、風險標籤、複製草稿。 | 不要接全自動客服。 |
| Phase 5：個人化祝福卡 | 提高分享與留存。 | 祝福卡合成、分享鏈接、加權分發、個人偏好。 | 不要對用戶說演算法或權重。 |
| Phase 2.5：社群與官網接口 | 把 OA、LINE 社群與官網完整接起來。 | LINE 社群規範、官網 URL registry、條款頁、社群導回 OA、客服其他資訊欄位。 |  |

## 12 15. 驗收清單

## 【一致性驗收｜Rich Menu 與邀請好友】上線前必查：六格名稱、Rich Menu 圖面、postback action、客服話術、AI 知識包、Codex prompt 必須一致；第二格必須是「點亮心意／今日共鳴」，第三格必須是「邀請好友」；不得再把「今天想送出祝福」與「看看大家點亮了什麼」拆成兩個 Rich Menu 主格；view_blessing_wall 只能作為 blessing_hub 內的子 action；invite_friends 必須能產生邀請文字、邀請連結、邀請卡圖與邀請追蹤；外傳祝福券必須有資格檢查與防濫用；支持創作團隊不得與商品、折扣、會員、抽獎、優先客服或付費專屬內容綁定。

【一致性驗收｜優惠券與商品折抵】上線前還要檢查：① 第二格全檔統一為「點亮心意／今日共鳴」；② 優惠券規則不得再出現「每筆最多使用幾張券」作為主要限制；③ 商品折抵以禪意日常玻璃杯禮盒 NT$100、禪意香氛杯禮盒 NT$200、小型桌面型空氣清新機｜完整禮盒版 NT$300 為核心；④ 4.3「邀請好友」不得殘留祝福牆資料來源或 fallback 殘段；⑤ 支持創作團隊建議金額統一為 NT$200 / NT$600 / NT$2,000 / NT$6,000 / 自訂金額；⑥ 所有邀請與回饋都必須合法、防洗券、不誤導、不承諾收益。

【一致性驗收｜商品命名與內部標籤】上線前還要檢查：① 對外商品名稱一律為禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版；②「點亮心意／今日共鳴」只作為六格按鈕名，點入後三個選項必須是「今天想送出祝福」「看看大家點亮了什麼」「邀請好友一起收祝福」；③ LIFT 內部標籤與市場分析欄位只在後台與 AI API 使用，不得外流前台；④ customer_tag_definitions、line_user_tag_assignments、customer_behavior_events、market_analysis_snapshots 必須有權限控管；⑤ 客服與 AI 對客話術不得提到客戶標籤、分群、風險判斷或消費能力推測。

【一致性驗收｜圖片使用權與後台分群】上線前還要檢查：① 圖片使用權話術必須統一為「授予完整個人使用權」，但不得授權轉售、冒名官方、違法使用或惡意改作；② 點亮心意券與外傳祝福券的適用範圍必須全檔統一為「全商品」，實際折抵仍依商品折抵上限、有效期限、資格與防濫用檢查；③ LIFT 必須能記錄來源渠道、生命週期、需求情境、商品傾向、購買阻力、成交溫度、邀請價值、風險分數與下一步承接；④ 所有內部分群、精準承接與 AI 標籤不得出現在前台或客服對客話術；⑤ AI 與客服只可用這些資料提升服務效率、導購準度與長期營收，不可做違法、歧視、羞辱或誤導性使用。

【一致性驗收｜OA、社群與官網接口】上線前還要檢查：① LINE OA 對外名稱固定為「微塵星海｜今日祝福」，LINE 社群名固定為「微塵星海｜分享今日祝福」；② OA、社群、官網三者分工清楚：OA 做一對一祝福、查券、客服與交易承接，社群做分享與回流，官網做完整資訊與條款承接；③ 社群必須有對外規範與對內管理 SOP，嚴禁詐騙、個資外洩、私下收款、功效誇大、冒名官方、洗版與違法內容；④ 官網需有品牌理念、商品頁、服務條款、隱私權政策、退款配送、活動規則、社群規範與免責說明，對外不得使用「對立式稱呼」等低信任詞；⑤ 三款禮盒文案必須貼齊產品主文案，不得反向說教或貶低使用者信仰與習慣；⑥ LIFT 使用者卡必須有「其他資訊」與未分類手動輸入，AI 可建議分類但需權限控管與人工覆核，不得外流前台。⑦ 前台文案、客服可複製話術、LINE 自動回覆與商品頁不得出現自我否定、戲謔、內部檢討或過度防衛語氣；若需要風險提醒，應放入內部 SOP、服務條款或客服主管覆核規則，不放進消費者第一眼會看到的文案。

<RED>新朋友加入後：寫入 line_users、發新友同行券、送歡迎訊息。</RED>

點「收下今日平安」：第一次發初見祝福券；同日第二次不重複發。

點「點亮心意／今日共鳴」：不讓使用者選圖，只讓使用者選 1–3 句祝福小語；完成後第一次發點亮心意券，並可在同一入口查看今日共鳴。

點「邀請好友」：可產生邀請文字、邀請連結與邀請卡圖；可追蹤好友加入、好友首購與外傳祝福券狀態。

點「今日優惠／查看優惠券」：可以查券包，顯示可疊規則與商品上限，不得未經試算承諾折抵。

點「看看商品與禮盒」：三商品名稱、價格、賣點一致；小型桌面型空氣清新機固定為完整禮盒版。

<RED>點「真人客服／回饋建議」：可建立真人客服、問題回報、建議回饋與支持創作團隊入口；支持入口需清楚標示為私人自願支持、無對價、非商品交易，不得誤導為公益捐款、會員費、投資、宗教功德或任何商品／服務回饋。</RED>

所有 inbound/outbound message 都寫入 messages，LIFT 可查看。

所有 webhook raw payload 都寫入 line_webhook_events，錯誤可追查。

遇到退款、瑕疵、付款異常、物流問題，自動標記 human_requested。

對外文案沒有出現 OA、私域、漏斗、database、AI、演算法等內部字眼。

所有商品話術沒有醫療、除甲醛、除病毒、保證改善健康、神奇功效、開運改命。

## 13 16. 給 Codex 的實作 Prompt

請依「微塵星海｜LINE 六格文案話術與技術接線整合版」實作 LINE 六格 MVP。

<RED>目標：LINE Rich Menu 六格按鈕定案為：
1. 收下今日平安
2. 點亮心意／今日共鳴
3. 邀請好友
4. 今日優惠／查看優惠券
5. 看看商品與禮盒
6. 真人客服／回饋建議</RED>

<RED>【Codex 補強｜Rich Menu 與邀請好友】請完成：
- 六格 postback action 固定為：claim_daily_blessing, blessing_hub, invite_friends, view_coupon_wallet, view_gift_boxes, support_us。
- blessing_hub 需整合原本「今天想送出祝福」與「看看大家點亮了什麼」：入口提供「我想點亮心意」「看看今日共鳴」「邀請好友一起收祝福」。
- view_blessing_wall 保留為 blessing_hub 內的子 action，不再作為 Rich Menu 主格。
- invite_friends 需產生 invite_code、invite_url、邀請文字、邀請卡圖，並建立 user_invite_codes、referral_events、invite_share_logs。
- 被邀請好友加入 LINE 後發新友同行券；被邀請好友完成首購後，依規則發外傳祝福券給邀請者，並加入防濫用檢查。
- 今日優惠／查看優惠券需可查券包、顯示到期日、疊券規則與商品折抵上限。
- 真人客服／回饋建議需保留支持創作團隊入口，但不得與商品訂單、折扣、會員、抽獎或優先客服綁定。
- 請同步更新 Supabase schema、API routes、LIFT 顯示欄位、AI knowledge、驗收腳本與 PowerShell 5.1 本機驗收。</RED>

<RED>- 「真人客服／回饋建議」需保留「支持創作團隊」入口；此入口是私人自願支持，建議金額 NT$200 / NT$600 / NT$2,000 / NT$6,000 / 自訂金額，不得與商品訂單合併，不得自動發券、折扣、抽獎、會員或優先客服。
- 支持完成後可送出感謝訊息、感謝圖或感謝語，並可推送公開進度更新；進度可包含平安圖、小語、網站、LINE 分享流程、祝福卡、客服、商品頁與禮盒體驗優化。
- 不得稱為商品交易、公益捐款、會員費、投資或宗教功德，不得承諾免稅或任何效果。</RED>

請列出新增/修改檔案，並提供可在 PowerShell 5.1 執行的本機驗收腳本。

【Codex 補強｜LIFT 標籤與市場分析】請同步實作 LIFT 內部標籤與市場分析能力：新增 customer_tag_definitions、line_user_tag_assignments、customer_behavior_events、market_analysis_snapshots；新增 /api/admin/customer-tags 與 /api/admin/market-analysis；在 LIFT 使用者卡顯示內部標籤、AI 建議標籤、來源與 confidence；所有標籤僅限後台與 AI API 使用，前台不可讀取。請把對外商品名統一為完整禮盒名稱，並確認「點亮心意／今日共鳴」點入後的三個子選項維持為「今天想送出祝福」「看看大家點亮了什麼」「邀請好友一起收祝福」。

【Codex 補強｜客群分流與折抵適用】請同步實作 customer_segments、line_user_commercial_signals、next_best_action_logs、campaign_audience_snapshots；新增 /api/admin/customer-segments、/api/admin/commercial-signals、/api/admin/next-best-action、/api/admin/campaign-audiences。請把點亮心意券與外傳祝福券適用範圍改為全商品，但仍由 products.discount_cap、coupon qualification、referral anti-abuse 與 coupon simulation 控制實際折抵。請把圖片使用權對外文案統一為「授予完整個人使用權」，並在不可轉售、不可冒名官方、不可違法使用、不可惡意改作的底線下，鼓勵收藏、轉傳、社群分享與結緣擴散。所有分群與 next-best-action 僅限後台與 AI 草稿器使用，前台不可讀取。

<RED>【API 補強｜分流與精準承接】新增 /api/admin/customer-segments：管理客群分層、推薦 CTA 與內部描述；新增 /api/admin/commercial-signals：彙整來源、生命週期、需求情境、購買阻力、成交溫度、邀請價值與風險分數；新增 /api/admin/next-best-action：依使用者狀態回傳下一步承接建議，例如邀請好友、查券、看禮盒、真人客服、券到期提醒或售後追蹤；新增 /api/admin/campaign-audiences：輸出可投放或可再觸達的匿名化客群摘要。所有 endpoint 僅限後台，不得給前台呼叫。</RED>

【Codex 補強｜LINE 社群與官網接口】請同步實作 LINE 社群與官網接口：新增 LINE OA 名稱「微塵星海｜今日祝福」與社群名「微塵星海｜分享今日祝福」的設定常數；新增 community_rules、community_moderation_logs、website_links、line_user_other_infos、manual_review_tasks；新增 /api/admin/community-rules、/api/community/moderation-log、/api/website/links、/api/admin/other-info。請在 LIFT 使用者卡新增「其他資訊」區塊，允許客服手動輸入無法分類內容、特殊需求、下次追蹤與主管覆核；AI 可讀取遮罩後摘要並建議分類，但不得在前台揭露。請新增 /ai-knowledge/community-rules.md、/ai-knowledge/website-links-and-policy.md、/ai-knowledge/other-info-and-manual-review.md，並更新驗收腳本：檢查 OA / 社群 / 官網連結、社群規範、防詐騙與防個資外洩、三商品文案一致性、官網 URL placeholder、其他資訊欄位與權限控管。

## 14 17. 參考與來源

【實務底線｜支持創作團隊】「支持創作團隊」若要維持私人自願支持定位，前台要獨立於商品訂單；後台要記錄支持金額、感謝訊息、進度更新與聲明版本。可以做感謝信、感謝圖、感謝語、進度回報與公開升級紀錄，這些是關係維護與透明回報；不要設計成可兌換商品、折扣、會員、抽獎、優先客服或付費專屬內容。對外文案以簡短、溫和、可信為主；法律與稅務細節放在內部 SOP 和必要說明，不做誤導性免稅承諾。

本檔整合目前專案底稿中的品牌母文案、三商品口徑、LINE 六格定案、優惠券規則、金物流方案、LINE 社群設計、官方網站接口、條款與客服資料卡規格，以及 LINE 官方技術規範。

微塵星海｜社群與通路文案總底稿 上架前強化版（品牌、商品、LINE 文案與禁語）

微塵星海｜可疊券最終定案版（券種、面額、疊券、商品折抵上限）

微塵星海｜寄件隱名與金物流方案整理（綠界金流、郵局物流、貨到付款、對外話術）

微塵星海｜專案指令 20260414 完整禮盒版更新（小型桌面型空氣清新機｜完整禮盒版、香氛杯、杯墊與合規口徑）

LINE Developers：Webhook、Signature verification、Rich menu 相關文件。

注意：本檔是上架前工程與文案初版規格，不是法律、稅務、醫療或正式合規意見；正式公開前仍需依實際商品標示、金物流設定與平台規範做最後確認。


---

# SOURCE DOCUMENT B — 社群與通路文案總底稿（完整抽取）

# SOURCE DOCX: 微塵星海_社群與通路文案總底稿_LINE六格貼齊定稿版_場域改空間_20260504.docx

微塵星海｜社群與通路文案總底稿

LINE 六格貼齊定稿版｜安心提醒 × 結緣送禮 × 傳承祝福 × LINE 成長閉環

更新日期：2026-05-04｜用途：官網、LINE、客服、社群貼文、商品頁、AI 客服知識包與上架前統一口徑

## 本版一句話定位