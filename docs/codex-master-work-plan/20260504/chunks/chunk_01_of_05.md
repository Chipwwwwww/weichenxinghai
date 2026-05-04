# CODEX MASTER/WORK SAFE PATCH PLAN — 微塵星海 2026-05-04 完整上下文合併版

> This file intentionally merges the execution prompt and the full extracted text of the two latest source documents. It is designed to be dropped directly into Codex.
>
> Working context: **master / work**.
> Do not switch branches. Do not fetch remote branches. Do not depend on hidden docs.

---

## 0. Non-negotiable mission

You are working in the current **master / work** environment.

You must execute a **conservative public website copy correction** for 微塵星海.

This is **NOT**:
- a full LINE / Supabase / LIFT / Webhook / AI implementation;
- a redesign;
- a rewrite;
- a cleanup by deletion;
- a fast 10-minute shallow patch;
- a skeleton replacement of existing pages.

The goal is:

1. Preserve the existing website design, shopping flow, product pages, product data, images, FAQ, navbar, footer, legal long-form pages, customer-service information, shipping/payment content, older valuable educational content, and all important existing content.
2. Patch outdated public-facing wording so the website aligns with the latest 2026-05-04 brand spirit, LINE six-grid, product naming, coupon language, shipping/payment language, and compliance boundaries.
3. Do the best possible job, even if it takes a deeper repo inspection and multiple passes. Quality, preservation, and long-term trust are more important than speed.

Previous draft PRs that simplified the site into skeleton pages were wrong. Do not repeat that pattern.

---

## 1. Execution discipline: do it carefully, not quickly

Before editing, you must inspect the current repository and produce a short plan.

Do **not** begin by deleting or replacing pages.

Required workflow:

1. Inspect the existing site structure.
2. Identify public-facing pages, product data, legal pages, FAQ, nav/footer, metadata, product cards, CTA components, checkout/shop pages, customer-service copy, and any older educational/TCM/health-adjacent content.
3. Classify each target as:
   - preserve as-is;
   - preserve structure and patch wording;
   - add missing page using existing style;
   - flag for manual review.
4. Apply minimal targeted patches.
5. Run text scans for forbidden old terms and risky claims.
6. Run lint/build if available.
7. Produce a final report with preservation evidence.

Do not optimize for a short diff if that means losing important content. Do not optimize for a quick PR if that means shallow brand alignment.

---

## 2. Absolute preservation rules

You must preserve the original site’s valuable work.

Do not:

- replace complete pages with skeleton pages;
- compress rich pages into a few lines;
- delete the original visual design, layout, product cards, images, FAQ, legal long text, navbar, footer, metadata, or CTA sections;
- delete or break `/shop` and `/shop/[id]`;
- redirect `/shop` or `/shop/[id]` to empty replacement pages;
- remove `AddToCartButton`, `PriceDisplay`, `ProductJsonLd`, `CartProvider`, product images, product cards, customer service contact blocks, or legal protection text;
- shrink `data/brandContent.ts` into a minimal product array;
- delete original important content simply because it is not mentioned in the new docs;
- delete existing Chinese-medicine / TCM-related / older educational content. If such content exists and has compliance risk, rewrite it conservatively and compliantly instead of deleting it;
- remove original important business/legal/customer-service/shipping/FAQ/product content;
- expose internal terms on public frontend pages;
- add real API keys or secrets;
- break build/lint by careless text replacement.

If unsure whether a block is important, preserve it and report it in the final notes.

---

## 3. Highest brand principle

Long-term trust first.

微塵星海 is not a traditional Buddhist-goods shop, not a miracle-effect brand, not a discount spam account, and not a technical demo. It turns Buddhist inspiration around **結緣** and **傳遞祝福** into daily blessing images, quiet phrases, LINE interaction, Zen-inspired gift boxes, customer-service support, and daily-life blessing.

Brand sentence:

**把祝福，變成每天都能傳遞的日常。**

Voice:

- like a family member gently reminding;
- like 結緣送禮;
- like 傳承祝福;
- warm, clear, credible, and long-term maintainable;
- never fearmongering, never MLM-like, never discount-only.

Core sales philosophy:

**先結緣，再成交。**

The copy should make customers feel: “你有替我想”, not “你在嚇我買”.

---

## 4. Latest fixed public LINE six-grid

The latest public LINE six-grid is fixed as:

1. 收下今日平安
2. 點亮心意／今日共鳴
3. 邀請好友
4. 今日優惠／查看優惠券
5. 看看商品與禮盒
6. 真人客服／回饋建議

Rules:

- Do not keep `今天想送出祝福` and `看看大家點亮了什麼` as two Rich Menu main grid buttons. They are sub-options inside `點亮心意／今日共鳴`.
- Do not use `協助我們` as the sixth main button. Use `真人客服／回饋建議`.
- If `看看禪意禮盒` or `看看禪意選品` is used as a main entry, update it to `看看商品與禮盒`.
- If `今日優惠` is used as a main entry or page title, update it to `今日優惠／查看優惠券`.

Public LINE naming:

- LINE 對外稱呼：加入 LINE 領今日祝福
- LINE OA 對外名稱：微塵星海｜今日祝福
- LINE 社群名稱：微塵星海｜分享今日祝福

---

## 5. Latest fixed public product names and prices

Use these official public names:

1. 禪意日常玻璃杯禮盒 — NT$888
2. 禪意香氛杯禮盒 — NT$1,980
3. 小型桌面型空氣清新機｜完整禮盒版 — NT$3,980

Do not use `玻璃杯`, `香氛杯`, or `空清機` as official public product titles. They may remain only as internal aliases, search keywords, slugs, or customer shorthand where necessary.

---

## 6. Coupon and payment language

Coupon entry:

Use `今日優惠／查看優惠券` and `結緣回饋`, not cheap discount-club language.

Public coupon wording:

**優惠券可依系統規則疊加使用，主要限制由各商品折抵上限控管。實際折抵以下單頁或系統試算為準。**

Discount caps:

- 禪意日常玻璃杯禮盒：最高折 NT$100
- 禪意香氛杯禮盒：最高折 NT$200
- 小型桌面型空氣清新機｜完整禮盒版：最高折 NT$300

Do not let customer-service copy verbally guarantee final discount amounts.

Shipping/payment wording:

**目前以宅配到府為主，提供線上付款與貨到付款兩種方式。第一次下單若想更安心，也可以直接選擇貨到付款，收到商品後再付款即可。**

Do not make convenience-store pickup the main story unless the existing site already has operational support for it.

---

## 7. Public forbidden internal terms

Do not expose these on public frontend pages, metadata, CTA, FAQ, customer-copyable copy, or product pages:

- OA
- 私域
- 漏斗
- database
- AI
- AI 判斷
- Webhook
- Supabase
- LIFT
- LIFF
- token
- 演算法
- conversion
- 風險標籤
- 分群
- 成交溫度
- 高消費能力
- 高風險客戶
- 同行試探

Allowed internal code, admin-only files, API code, comments, and env examples can keep technical terms when necessary. The ban is for public-facing website and customer-copyable text.

---

## 8. Public forbidden claims

Do not write public claims like:

- 醫療效果
- 神奇效果
- 保證改善健康
- 保證除 PM2.5
- 除甲醛
- 除病毒
- 治療過敏
- 治療失眠
- 強力除臭
- 醫療級淨化
- 開運改命
- 宗教功德保證
- 塑膠都有毒
- 燒香一定傷身

Use compliant alternatives from the source documents.

---

## 9. Website copy targets

Scan and conservatively patch existing files such as:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/contact/page.tsx`
- `app/faq/page.tsx`
- `app/shipping-payment/page.tsx`
- `app/refund-policy/page.tsx`
- `app/privacy/page.tsx`
- `app/terms/page.tsx`
- `app/shop/page.tsx`
- `app/shop/[id]/page.tsx`
- `components/Navbar.tsx`
- `components/Footer.tsx`
- `data/brandContent.ts`
- `data/siteConfig.ts`

If additional public pages exist, scan them too.

Do not delete routes.

If adding optional pages like `/line`, `/coupons`, `/disclaimer`, `/community-guidelines`, or `/support-creation`, use existing design components and do not break current routes.

---

## 10. Homepage direction

Homepage Hero title:

**把祝福，變成每天都能傳遞的日常。**

Homepage CTAs should include:

- 加入 LINE 領今日祝福
- 看看商品與禮盒
- 第一次下單可貨到付款

Use the full source documents below for homepage/product/FAQ wording.

---

## 11. Product direction

### 禪意日常玻璃杯禮盒

Daily-use glass cup gift box. Glass material is less prone to aging and has no plasticizer concern. Includes pure round cork coaster and premium gift box. It is a daily-use blessing.

Allowed:

- 每天入口，材質更安心
- 玻璃材質不易老化，也沒有塑化劑疑慮
- 純圓形軟木杯墊
- 高級禮盒
- 願你每天喝水時，都多一點安心

Forbidden:

- health/medical claims
- detox
- treatment
- mystical energy claims
- “plastic is toxic” fearmongering

### 禪意香氛杯禮盒

Understated fragrance companionship. Sealed fragrance paste, 4.0mm columnar activated-carbon array design, gold lid, premium gift box. Suitable for bedside, entryway, desk, quiet space.

Allowed:

- 香氣內斂陪伴
- 空間氛圍
- 安定感
- 自用有質感，結緣也體面

Forbidden:

- strong deodorization
- formaldehyde removal
- sleep treatment
- allergy treatment
- air-cleaning health claims

### 小型桌面型空氣清新機｜完整禮盒版

Complete gift-box version with unit, power bank, charging cable, charger, instructions, and gift box. Suitable for small spaces near altar table, bedside, desk, reading area, after incense, paired with ventilation.

Allowed:

- 搭配通風與桌邊空氣清新，日常氣氛會更舒服
- 完整禮盒版一次備齊
- 主機、行動電源、充電線、充電器、使用說明與禮盒封裝
- 適合供桌旁、床邊、書桌邊等小空間

Forbidden:

- medical-grade purification
- PM2.5 guarantee
- formaldehyde/virus removal
- sterilization claims
- health improvement
- exclusive hardware
- self-developed hardware
- “only product on market” claims

---

## 12. Support creation team

`支持創作團隊` is only a sub-entry under `真人客服／回饋建議` or an independent explanation page.

It must be voluntary support only.

It must not be:

- product order
- donation receipt
- membership fee
- investment
- religious merit
- discount
- lottery
- priority customer service
- paid exclusive content
- redeemable benefit

Allowed:

- thank-you message
- thank-you image
- progress updates
- transparent reporting about new blessing images, phrases, website, LINE sharing flow, customer service, product pages, and gift-box experience

---

## 13. Community and website interface

LINE OA public name:

**微塵星海｜今日祝福**

LINE community public name:

**微塵星海｜分享今日祝福**

The website is the mother site:

- brand concept
- products
- coupon/activity rules
- shipping/payment
- refund/return
- terms
- privacy
- disclaimer
- LINE community rules
- customer service
- support creation team explanation

---

## 14. Required final checks

Before final response, run build/lint if available. If scripts are missing, report clearly.

Also check:

- no `場域` remains; replace with `空間`;
- latest six-grid names appear;
- official product names appear;
- `/shop` and `/shop/[id]` still work and are not redirects to empty pages;
- product data is not reduced to a minimal array;
- FAQ is preserved;
- privacy/terms/refund long-form pages are preserved;
- internal terms are not exposed in public pages;
- forbidden claims are not introduced;
- important existing content is not deleted.

---

## 15. Final report format

Return:

1. Summary of changes
2. Files modified
3. Files added
4. Evidence that existing design/features were preserved
5. Evidence that shopping/product pages were preserved
6. Evidence that legal long-form pages were preserved
7. Evidence that original important older/TCM/educational content was preserved or conservatively rewritten, if present
8. Remaining uncertainties or TODOs
9. Build/lint result
10. Any content intentionally preserved because it looked important

Start by inspecting the current website and making minimal, targeted patches.
Do not rewrite the site.

---

## 16. Source documents begin below

The following sections are the full extracted text of the two latest source documents. Treat them as the content authority for wording and brand spirit, but preserve the existing website’s important structure and content.



---

# SOURCE DOCUMENT A — LINE 六格文案話術與技術接線（完整抽取）

# SOURCE DOCX: 微塵星海_LINE六格文案話術與技術接線_前台紅字人工終檢版_已檢查無場域_20260504.docx

Table of Contents

## 1 微塵星海｜LINE 六格文案話術與技術接線整合版

<RED>用途：作為 LINE 對外互動、客服話術、Supabase 資料表、Webhook、LIFT 客服台、Console 設定與後續 AI 草稿器的整合接線規格。</RED>
<RED>版本：v0.3｜紅字人工終檢版</RED>
<RED>整理日期：2026-04-29｜最後修訂：2026-05-03</RED>
<RED>狀態：上架前紅字人工終檢版，可交給 Codex / 工程端延伸。</RED>

<RED>【修訂紀錄與色彩標記｜2026-05-03｜紅字人工終檢版】</RED>

<RED>本版已讀到正式 Word 註解 1 則；註解重點為「將所有對外文案（包含客服、產品介紹、LINE 自動回覆、商品說明、社群與官網入口等）統一標成紅字，作為最後人工檢查」。本次依「初期合法引流、維持客戶黏著、擴大客群、長久利益最大化」原則，重新檢查 LINE 回覆、客服可複製話術、商品說明、官網接口、活動規則、LIFT 欄位、API、資料表、AI 知識包、驗收清單與 Codex prompt；對外文字只保留成熟、可信、可成交、可長期維護的品牌語氣。</RED>

<RED>色彩標記統一：歷史多色修訂收斂為深灰或一般文字；本次需要人工終檢的對外文案與新增修訂內容，一律以「清晰紅字」標示。紅字代表：消費者可能看到、客服可能複製、商品頁可能引用、官網或社群可能公開的文字，均需最後人工確認。後台規格、SOP、資料表、API 與內部判斷可保留一般文字；較尖銳的風險判斷、營運標籤與內部檢討語不得外流到 LINE、客服、商品頁、官網或社群公告。</RED>

### 1.1 0. 本檔使用方式與目前判斷

這份文件把 LINE 六格按鈕的「對外文案、客服話術、使用者流程、發券規則、後台接線、Supabase schema、Webhook 與 API」整理成同一份初版規格。先照這份做，可以避免官網、LINE、客服、優惠券與後續 AI 客服草稿器各講各的。

目前已完成：品牌母文案與三商品文案主線。
本階段目標：先定 LINE 六格的回覆與流程，不急著把所有 LINE API 做到最終版。
技術方向：先以 Supabase 作為單一資料源，LINE webhook 負責收訊息與 postback，LIFT 作為客服與營運後台，AI 草稿器排在資料穩定後接入。
對外原則：使用者只看到「LINE」「今日祝福」「禪意禮盒」「客服協助」；不要出現 OA、私域、漏斗、database、AI、演算法等內部字。

名詞備註：你目前提到的 LIFT，本檔先當作「內部客服後台 / 客服工作台」代稱。若後續要做成在 LINE 內開啟的網頁應用，LINE 官方技術名稱通常會是 LIFF。兩者可同時存在：LIFT 給客服人員用，LIFF 給使用者在 LINE 裡填表、選祝福、看券包。

<RED>【全檔固定口徑】對外 Rich Menu 固定為六格：① 收下今日平安；② 點亮心意／今日共鳴；③ 邀請好友；④ 今日優惠／查看優惠券；⑤ 看看商品與禮盒；⑥ 真人客服／回饋建議。後台主 action 固定為：claim_daily_blessing、blessing_hub、invite_friends、view_coupon_wallet、view_gift_boxes、support_us。名詞對照：按鈕「收下今日平安」送出今日平安祝福包；「點亮心意／今日共鳴」合併原本的送出祝福與祝福牆，入口先讓使用者選 1–3 句祝福小語，也可查看今日大家點亮的祝福；「邀請好友」專門做親友轉傳、邀請連結、好友加入追蹤與外傳祝福券；「今日優惠／查看優惠券」查券包、到期與折抵試算；「看看商品與禮盒」承接三商品與客服下單；「真人客服／回饋建議」承接真人客服、回報、建議與支持創作團隊。</RED>

【對外命名總則】凡是 LINE 圖面、歡迎訊息、客服話術、商品頁、優惠券說明、LIFT 可複製話術與 AI 對客草稿，一律使用完整名稱：① 禪意日常玻璃杯禮盒；② 禪意香氛杯禮盒；③ 小型桌面型空氣清新機｜完整禮盒版。內部可以保留 glass / fragrance / purifier 等代碼與關鍵字別名，但不得把「空清機」「香氛杯」「玻璃杯」等簡稱當成正式對外商品名，以免降低禮盒價值與品牌質感。

### 1.2 1. 對外定位總則

| 項目 | 定案口徑 |
| --- | --- |
| 品牌一句話 | 把祝福，變成每天都能傳遞的日常。 |
| LINE 對外稱呼 | 加入 LINE 領今日祝福。不要對客人說 OA、私域、漏斗。 |
| 互動核心 | 收下祝福、點亮心意、看見今日共鳴、邀請好友、領取結緣回饋、看商品與禮盒、找真人客服、支持創作團隊（私人自願支持）。 |
| 銷售語氣 | 像家人提醒、像結緣送禮、像傳承祝福；不要像恐嚇式銷售或直銷。 |
| 商品承接 | 三款對外都要使用完整禮盒名稱：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。 |
| 禁語底線 | 不可宣稱醫療效果、神奇效果、保證改善健康、保證除 PM2.5 / 除甲醛 / 除病毒、開運改命。 |

#### 1.2.1 1.1 使用者旅程總覽

<RED>短影音 / 官網 / 社群貼文 / LINE 社群「微塵星海｜分享今日祝福」/ 親友轉傳平安圖 / 邀請好友連結 → 加入 LINE OA「微塵星海｜今日祝福」→ 領今日平安祝福包（三張同源平安圖＋靜心小語＋使用權聲明）→ 第一次收到新友同行券 / 初見祝福券 → 點「點亮心意／今日共鳴」選 1–3 句祝福小語並查看今日共鳴 → 點「邀請好友」把祝福包、邀請圖或邀請連結傳給家人朋友 → 進入 LINE 社群分享小語、圖片、修行故事或日常祝福 → 回到 OA 查券、看商品與禮盒 → 需要完整資訊時導到官方網站商品頁、條款頁、付款配送與客服說明 → 真人客服協助下單 / 貨到付款 / 售後支援 → 支持創作團隊（獨立自願支持，不兌換商品或服務）→ LIFT 追蹤對話、券包、商品興趣、邀請來源、社群互動、官網入口、訂單與支持後感謝／進度更新。</RED>

#### 1.2.2 1.2 對外不能出現的內部詞

不要直接對客人說：

OA

私域

漏斗

conversion

database

AI 判斷

演算法加權

客服機器人

token

webhook

Supabase

LIFT / LIFF

【前台／後台語彙分流】

前台（LINE 自動回覆、客服可複製話術、官網、商品頁、社群公告）只使用溫和、清楚、可成交且不誤導的品牌語言；後台（LIFT、API、資料表、AI 分析、客服主管覆核）才使用風險、分群、防濫用、轉化與標籤語言。所有僅供內部判斷的檢討語、營運標籤、風險分數與分群判斷，不得出現在消費者會看到的文字、客服複製話術、LINE 選單或商品頁。

替代說法：

| 內部詞 | 對外替代說法 |
| --- | --- |
| OA | LINE |
| 私域 | 每日祝福 / LINE 祝福 |
| 漏斗 | 祝福流程 / 禮盒說明 |
| database | 我們這邊紀錄 / 客服協助確認 |
| AI 判斷 | 我們先幫你整理 / 客服幫你確認 |
| 演算法加權 | 你點亮的祝福，會更容易被延續 |
| 自動化發券 | 已為你送上結緣回饋 |

### <RED>1.3 2. LINE 首頁與加入後第一段文案</RED>

#### <RED>1.3.1 2.1 LINE 首頁簡介</RED>

建議直接放在 LINE 官方帳號簡介、官網 LINE 區塊與加入引導處。

<RED>加入微塵星海 LINE，每天領一份祝福。
我們把佛教裡「結緣」與「傳遞祝福」的精神，整理成每日平安圖、靜心小語、專屬回饋，也有適合自用與結緣送禮的禪意禮盒。
第一次下單可選貨到付款，讓祝福更安心送到家。</RED>

#### 1.3.2 2.2 加入後歡迎訊息

<RED>歡迎來到微塵星海。</RED>

<RED>這裡每天都會為你準備一份小小的祝福：
一張平安圖、一句靜心小語，也有適合結緣送禮的禪意選品。</RED>

我們希望把「願你平安」這份心意，變成每天都能收下、分享，也能被記住的日常。

<RED>你可以先點下方選單：
① 收下今日平安
② 點亮心意／今日共鳴
③ 邀請好友
④ 今日優惠／查看優惠券
⑤ 看看商品與禮盒
⑥ 真人客服／回饋建議</RED>

<RED>若你第一次下單，想收到商品後再付款，也可以選擇貨到付款。
願每一次領取與分享，都成為一份平安的延續。</RED>

#### 1.3.3 2.3 新朋友加入後發券文案

<RED>歡迎來到微塵星海，已為你送上新友同行券 NT$50。

先收下今天的平安祝福包，也可以把字幕版平安圖或邀請連結轉傳給家人朋友。若之後想把祝福變成一份看得見、用得到的禮品，再慢慢看看三款商品與禮盒。

祝福先到，禮品可以慢慢挑。這張券 7 天內可用於商品與禮盒；想直接查可用券，可以點「今日優惠／查看優惠券」。</RED>

#### 1.3.4 2.4 無法理解訊息時的預設回覆

<RED>我有收到你的訊息。</RED>

<RED>你可以直接點下方選單：
・收下今日平安
・點亮心意／今日共鳴
・邀請好友
・今日優惠／查看優惠券
・看看商品與禮盒
・真人客服／回饋建議
若是想請客服協助下單、看禮盒、查優惠或處理訂單，也可以直接回覆「客服」，我們會協助你。</RED>

#### <RED>1.3.5 2.5 需要真人客服時</RED>

<RED>我幫你轉由真人客服協助。</RED>

<RED>如果是訂單、付款、配送或商品問題，也可以先補充：
・訂單編號
・下單手機末三碼
・想詢問的商品</RED>

<RED>這樣客服會更快協助你確認。</RED>

【內部規格｜官網條款與風險控管】官網條款的目的，是讓交易、活動、優惠、素材使用、社群管理與客服處理有清楚依據。建議明確保留：活動調整權、優惠券回滾與異常停用權、疑似洗券或詐欺的拒絕服務權、商品圖文誤植更正權、使用者違規內容移除權、個資與訂單查詢規則、退款退貨依政策處理、非醫療／非功效保證聲明、非公益捐款與非投資回報聲明。所有內容需合法、合理、可執行，避免寫成不公平、過度免責或讓消費者失去信任的條款。

【系統規格｜官方網站接口】官網是品牌專業性與完整資訊的主承接，不一定佔用六格主按鈕，但 LINE、社群、商品卡、客服話術與出貨小卡都要能導回。網址尚未定案時，先以 APP_PUBLIC_BASE_URL / WEBSITE_BASE_URL 做變數。官網至少要有：品牌理念頁、三款禮盒商品頁、優惠券與活動規則、配送付款、退款退貨、服務條款、隱私權政策、免責聲明、LINE 社群規範、客服聯絡與支持創作團隊說明。對外一律稱為「服務條款、活動規則、平台使用規範與必要說明」，避免使用會降低信任的戲謔或對立式稱呼。

【內部 SOP｜LINE 社群管理】社群管理要貼合商業目標：不是放任聊天，而是把高品質分享沉澱成信任素材。後台需記錄：社群加入來源、分享內容類型、常見疑慮、可引用心得、潛在商品需求、客服介入原因、疑似詐騙／個資外洩／洗券風險。管理員遇到無法分類內容，先放入「其他資訊」與「未分類待覆核」，不得憑感覺刪除重要客戶線索。可轉化內容可整理成社群貼文、官網 FAQ、客服話術與商品頁素材，但需避免揭露個資。

<RED>【對外規範｜LINE 社群】社群歡迎分享：今日祝福小語、微塵星海平安圖、個人修行與靜心故事、日常祝福、禮盒使用感受、節日祝福與善意回饋。社群禁止：詐騙訊息、投資／借貸／博弈／色情／政治攻擊、未經同意公開個資、私下收款或導購、冒名官方、醫療或神奇功效宣稱、宗教功德保證、惡意洗版、人身攻擊、仇恨歧視、違法內容、轉售或盜用官方素材。管理員可提醒、隱藏、刪除、禁言或移出社群；嚴重情況保留紀錄並交由客服或平台處理。</RED>

【流程規格｜社群導流】社群入口不一定放進 Rich Menu 六格主按鈕，可作為「收下今日平安」「點亮心意／今日共鳴」「邀請好友」完成後的延伸 CTA，也可放在歡迎訊息、官網 LINE 區塊、節日活動頁、出貨小卡與售後訊息中。建議 CTA：① 加入社群，分享今日祝福；② 把你的平安小語留在社群；③ 看看大家怎麼把祝福放進日常。社群內再導回 LINE 查券、看禮盒與找客服，維持祝福分享、信任累積與商品承接的主要目的。

【通路定位｜LINE 與社群】對外固定名稱：LINE OA 名稱為「微塵星海｜今日祝福」，LINE 社群名稱為「微塵星海｜分享今日祝福」。OA 負責一對一祝福領取、查券、邀請好友、看禮盒、客服與訂單承接；社群負責讓使用者分享今日小語、平安圖、修行故事、日常祝福與使用心得。兩者不可混淆：OA 是交易與客服主入口，社群是分享、互動、信任與回流入口。

1.3.6 2.6 LINE 社群與官方網站外部接口

### 1.4 3. Rich Menu 六格配置

<RED>建議 2 × 3 大圖選單。左上開始依「由左到右、由上到下」排列，六格固定為：① 收下今日平安；② 點亮心意／今日共鳴；③ 邀請好友；④ 今日優惠／查看優惠券；⑤ 看看商品與禮盒；⑥ 真人客服／回饋建議。若使用大尺寸 Rich Menu 圖，建議設計稿以 2500 × 1686 px 做底，分成三欄兩列；圖面可短寫，但後台 action 與本檔表格必須一致。此調整把原本「今天想送出祝福」與「看看大家點亮了什麼」合併為更有質感的互動中心，空出的高曝光位置改為「邀請好友」，讓收祝福、點亮心意、親友轉發、查券、看禮盒與客服成交形成合法、可追蹤、可長期經營的成長閉環。</RED>

| 位置 | 按鈕名稱 | 對外目的 | 技術 action |
| --- | --- | --- | --- |
| 上排左 | 收下今日平安 | 低門檻留存；每日打卡；發初見祝福券 | claim_daily_blessing |
| 上排中 | 點亮心意／今日共鳴 | 合併點亮祝福與今日共鳴；提高互動完成率並導向邀請好友 | blessing_hub |
| 上排右 | 邀請好友 | 親友分享、邀請加入、好友回流與外傳祝福券 | invite_friends |
| 下排左 | 今日優惠／查看優惠券 | 查券包、了解疊券、導商品 | view_coupon_wallet |
| 下排中 | 看看商品與禮盒 | 三商品承接、導下單或客服 | view_gift_boxes |
| 下排右 | 真人客服／回饋建議 | 真人客服入口、支持創作團隊、回報問題、提出建議 | support_us |

#### 1.4.1 3.1 Rich Menu postback payload 建議

action=claim_daily_blessing
action=blessing_hub
action=invite_friends
action=view_coupon_wallet
action=view_gift_boxes
action=support_us

合併後的子 action 建議：
action=start_send_blessing
action=toggle_blessing_phrase&phrase=A
action=complete_blessing_session
action=view_blessing_wall
action=reset_blessing_session