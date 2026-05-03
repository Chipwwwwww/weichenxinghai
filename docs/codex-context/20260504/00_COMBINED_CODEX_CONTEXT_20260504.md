# Codex Context Package | Microdust Galaxy | 2026-05-04

This package is converted from the latest finalized DOCX files because Codex Cloud may not read DOCX/ZIP uploads directly.

Highest priority order:
1. `01_LINE_RICH_MENU_SPEC_20260504.md`
2. `02_SOCIAL_CHANNEL_MASTER_COPY_20260504.md`

Hard rules:
- Do not revert to old LINE six-grid names.
- Do not use old product names as official public names.
- Do not expose internal engineering/operation words on the public website.
- Website copy update comes before LINE/Supabase/LIFT implementation.

---



---

# SOURCE FILE 1

# Microdust Galaxy LINE Rich Menu Copy, Scripts, and Technical Wiring Spec 2026-05-04

> Converted from: `微塵星海_LINE六格文案話術與技術接線_前台紅字人工終檢版_已檢查無場域_20260504.docx`
> Encoding: UTF-8 Markdown. Filenames are ASCII for Codex/GitHub compatibility.

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

| <RED>項目</RED> | <RED>定案口徑</RED> |
| --- | --- |
| <RED>品牌一句話</RED> | <RED>把祝福，變成每天都能傳遞的日常。</RED> |
| <RED>LINE 對外稱呼</RED> | <RED>加入 LINE 領今日祝福。不要對客人說 OA、私域、漏斗。</RED> |
| <RED>互動核心</RED> | <RED>收下祝福、點亮心意、看見今日共鳴、邀請好友、領取結緣回饋、看商品與禮盒、找真人客服、支持創作團隊（私人自願支持）。</RED> |
| <RED>銷售語氣</RED> | <RED>像家人提醒、像結緣送禮、像傳承祝福；不要像恐嚇式銷售或直銷。</RED> |
| <RED>商品承接</RED> | <RED>三款對外都要使用完整禮盒名稱：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。</RED> |
| <RED>禁語底線</RED> | <RED>不可宣稱醫療效果、神奇效果、保證改善健康、保證除 PM2.5 / 除甲醛 / 除病毒、開運改命。</RED> |

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

| <RED>內部詞</RED> | <RED>對外替代說法</RED> |
| --- | --- |
| <RED>OA</RED> | <RED>LINE</RED> |
| <RED>私域</RED> | <RED>每日祝福 / LINE 祝福</RED> |
| <RED>漏斗</RED> | <RED>祝福流程 / 禮盒說明</RED> |
| <RED>database</RED> | <RED>我們這邊紀錄 / 客服協助確認</RED> |
| <RED>AI 判斷</RED> | <RED>我們先幫你整理 / 客服幫你確認</RED> |
| <RED>演算法加權</RED> | <RED>你點亮的祝福，會更容易被延續</RED> |
| <RED>自動化發券</RED> | <RED>已為你送上結緣回饋</RED> |

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

| <RED>位置</RED> | <RED>按鈕名稱</RED> | <RED>對外目的</RED> | <RED>技術 action</RED> |
| --- | --- | --- | --- |
| <RED>上排左</RED> | <RED>收下今日平安</RED> | <RED>低門檻留存；每日打卡；發初見祝福券</RED> | <RED>claim_daily_blessing</RED> |
| <RED>上排中</RED> | <RED>點亮心意／今日共鳴</RED> | <RED>合併點亮祝福與今日共鳴；提高互動完成率並導向邀請好友</RED> | <RED>blessing_hub</RED> |
| <RED>上排右</RED> | <RED>邀請好友</RED> | <RED>親友分享、邀請加入、好友回流與外傳祝福券</RED> | <RED>invite_friends</RED> |
| <RED>下排左</RED> | <RED>今日優惠／查看優惠券</RED> | <RED>查券包、了解疊券、導商品</RED> | <RED>view_coupon_wallet</RED> |
| <RED>下排中</RED> | <RED>看看商品與禮盒</RED> | <RED>三商品承接、導下單或客服</RED> | <RED>view_gift_boxes</RED> |
| <RED>下排右</RED> | <RED>真人客服／回饋建議</RED> | <RED>真人客服入口、支持創作團隊、回報問題、提出建議</RED> | <RED>support_us</RED> |

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

邀請好友子 action 建議：
action=invite_friends
action=copy_invite_text
action=share_invite_card
action=view_invite_rewards

Payload 盡量短，後端再用 action 對應資料庫流程。避免在 postback 裡塞太多中文或完整狀態。

#### 1.4.2 3.2 2 × 3 Rich Menu 座標建議

若採 2500 × 1686 px：

| Area | x | y | width | height | action |
| --- | --- | --- | --- | --- | --- |
| 1 | 0 | 0 | 833 | 843 | claim_daily_blessing |
| 2 | 833 | 0 | 834 | 843 | blessing_hub |
| 3 | 1667 | 0 | 833 | 843 | invite_friends |
| 4 | 0 | 843 | 833 | 843 | view_coupon_wallet |
| 5 | 833 | 843 | 834 | 843 | view_gift_boxes |
| 6 | 1667 | 843 | 833 | 843 | support_us |

### 1.5 4. 六格按鈕完整文案與接線

### <RED>1.6 4.1 收下今日平安</RED>

定位：每日最簡單的入口。使用者不需要選、不需要打字，只要點一下，就收到「今日平安祝福包」。祝福包建議包含：同一張圖源的三張版本（一張無字原圖、兩張不同字幕版平安圖）、一則靜心小語、圖片使用聲明、好友分享引導，以及客服／今日優惠／查看優惠券／其他活動入口。這格負責留存、打卡、第一次領取祝福券，也負責讓使用者覺得圖片可以安心轉發，形成「免費領取 → 安心分享 → 祝福擴散 → 回到 LINE」的長期閉環。

⑤ 圖片使用聲明：微塵星海授予使用者完整個人使用權，可收藏、下載、設定桌布、轉傳家人朋友、分享到個人社群或用於非商業結緣祝福；但不授權販售、改作成商品轉賣、冒名微塵星海官方、移除品牌後宣稱自有官方素材，或用於違法、仇恨、詐騙與不當內容。

【對外話術｜圖片使用權】這份今日平安圖與祝福小語，微塵星海授予你完整個人使用權：你可以收藏、下載、設成桌布、轉傳給家人朋友，也可以分享到自己的社群作祝福與結緣使用。只要不是販售、冒充微塵星海官方、惡意改作、移除品牌後宣稱自有官方素材，或用於違法不當內容，都可以安心使用。願這份平安不只停在你這裡，也能流向你想祝福的人。

| 項目 | 設定 |
| --- | --- |
| 觸發 | Rich Menu postback：action=claim_daily_blessing |
| 首發券 | 若 user.has_claimed_first_blessing = false，發初見祝福券 NT$50，有效期 7 天。 |
| 每日限制 | 每日每位使用者可領 1 次；重複點擊則回覆今天已收下，可再看商品與禮盒或送出祝福小語。 |
| 使用內容 | 從 daily_contents / blessing_images / blessing_phrases 抽當日平安圖與小語。每日輸出一組「今日平安祝福包」：同一張圖源包含原圖版、字幕版 A、字幕版 B，加上一則靜心小語、圖片使用聲明、好友分享與客服／優惠／活動入口。前期可直接用已做好的 1000 張圖、3000 則小語。 |
| 後台顯示 | LIFT 顯示：使用者今日已領取、領取時間、拿到哪張圖 / 哪句小語、是否發券。 |

#### 1.6.1 4.1.1 使用者第一次點擊回覆

<RED>這份今日平安圖與祝福小語，微塵星海授予你完整個人使用權。你可以收藏、下載、設成桌布，也可以安心轉傳給家人朋友作祝福與結緣分享；只要不是販售、冒名官方、惡意改作或用於違法不當用途，都可以自由使用。</RED>

#### 1.6.2 4.1.2 使用者每日正常點擊回覆

<RED>今天的平安祝福包已為你送達。

你可以把無字原圖留給自己收藏、設成手機桌布，或放在安靜的位置作日常提醒；字幕版 A 適合直接轉傳家族群，字幕版 B 適合傳給朋友、放在限時動態或社群祝福。

願這份安定，陪你走過今天。

如果你也想把一句小語點亮出去，可以點「點亮心意／今日共鳴」，送出自己的祝福。</RED>

#### 1.6.3 4.1.3 同日重複點擊回覆

你今天已經收下平安祝福包了。

祝福不用重複領，能被收藏、被轉傳、被想起就很好。你可以把無字原圖留給自己，把字幕版傳給家人朋友；若想再送出一句自己的祝福，可以點「點亮心意／今日共鳴」。若想讓朋友也加入收祝福，可以點「邀請好友」。

#### 1.6.4 4.1.4 後端處理流程

1. Webhook 收到 postback，先驗證 x-line-signature，再寫入 line_webhook_events raw payload。
2. 用 lineUserId upsert line_users，更新 last_seen_at。
3. 查 user_daily_claims 是否已有今天紀錄。若沒有，建立領取紀錄。
4. 依 daily_contents 取出今日圖源與靜心小語；同一圖源需對應三個輸出版本：original、subtitle_a、subtitle_b。
5. 若圖片尚未預先產生，背景 job 可產生字幕版；MVP 則建議營運端先批次生成並寫入 blessing_images。
6. 若是第一次領取祝福，呼叫 coupon service 發初見祝福券，寫入 user_coupons。
7. 用 LINE Reply API 回覆文字 + 三張圖片 + 靜心小語 + 圖片使用聲明；同時寫入 messages 表，direction=outbound。
8. 若使用者點分享、商品、優惠或客服，寫入 rich_menu_clicks / conversations，讓 LIFT 可追蹤後續轉化。

#### 1.6.5 4.1.5 LIFT 顯示欄位

・今日是否已領平安祝福包
・最後領取時間
・今日圖源 ID
・原圖版 / 字幕版 A / 字幕版 B 的 image_id 或 URL
・靜心小語 ID
・圖片使用聲明是否已送出
・是否已發初見祝福券
・今日是否重複點擊
・使用者目前券包
・是否點擊分享、商品、優惠或客服入口
・內部客戶標籤：高潛力送禮客、疑似高客單、長時間諮詢未下單、疑似同行試探、價格敏感、高壓／騷擾風險、長輩協助者、回購可能、售後風險、需要真人耐心承接
・市場分析欄位：主要商品興趣、導入來源、最常點擊入口、最常使用券種、邀請好友轉化、客服成交可能、未成交原因、常見疑慮
・AI API 可讀欄位：僅提供遮罩後的對話摘要、標籤與風險等級，用於草稿建議與市場分析；不得把標籤、分群、風險判斷回傳到前台或讓客人看見

【LIFT 規格｜內部標籤與市場分析】LIFT 不只是客服對話列表，也要成為後續市場分析與客群經營的資料底座。客服與 AI 草稿器可在後台加標籤，例如：疑似高消費能力、節慶送禮需求、長輩協助下單、只想聊天、價格敏感、疑似同行試探、高壓／騷擾風險、物流高風險、退款高風險、回購潛力等。這些標籤只能由後台人員與 AI API 在權限控管下讀取，絕對不可出現在 LINE 前台、客服回覆、顧客下載資料或公開畫面。標籤的目的不是羞辱客人，而是讓客服分流、話術更準、廣告與商品優化更有依據。

<RED>【LIFT 規格｜客群分流與精準承接欄位】LIFT 需要從「客服紀錄」升級成「客群經營底座」。建議新增並顯示以下內部欄位：① 來源渠道：短影音、官網、親友邀請、社群貼文、客服手動、自然搜尋；② 生命週期：新朋友、已領祝福、已點亮、已查券、已看禮盒、已詢問、未付款、已下單、已出貨、售後、回購候選；③ 需求情境：自用、送長輩、探訪、節慶、供桌旁、床頭、書桌、香氣陪伴、體面送禮；④ 商品傾向：玻璃杯禮盒、香氛杯禮盒、空氣清新機完整禮盒版、多品比較、高客單可能；⑤ 購買阻力：價格、信任疑慮、不會下單、貨到付款、功效疑慮、使用方法、物流、家人意見；⑥ 成交溫度：冷、暖、熱、急單、待客服追蹤、券即將到期；⑦ 邀請價值：高分享、高加入、高首購、疑似洗券；⑧ 風險標籤：退款、物流、功效、情緒、疑似競品、高壓互動風險；⑨ 下一步承接：發今日平安、引導邀請好友、查券、看禮盒、真人客服、提醒券到期、售後追蹤。這些欄位只供後台分流、廣告素材、客服優先順序與商品優化使用，不得對客揭露。</RED>

### <RED>1.7 4.2 點亮心意／今日共鳴</RED>

定位：「點亮心意／今日共鳴」只作為 Rich Menu 六格上的精簡名稱；使用者點進來後，仍維持兩個好理解的原始入口：「今天想送出祝福」與「看看大家點亮了什麼」，並加上「邀請好友一起收祝福」。這樣做可以讓圖面名稱有質感，但流程內不犧牲直覺性：想主動參與的人可以送出祝福小語，想先觀望的人可以看今日共鳴，想擴散的人可以直接邀請好友。

| 項目 | 設定 |
| --- | --- |
| 觸發 | Rich Menu postback：action=blessing_hub |
| 流程 | 選 1–3 句祝福小語 → 完成點亮 → 系統自動搭配今日圖源或後台指定圖源 → 回饋 → 可分享 / 可收下他人的平安。 |
| 首發券 | 若 user.has_lit_first_blessing = false，完成送出後發點亮心意券 NT$100，有效期 14 天。適用全商品，實際折抵仍依各商品折抵上限與可用券資格計算。 |
| MVP 作法 | 先用 quick reply / postback 做五句祝福小語與完成按鈕；不急著做自由輸入，也不讓使用者選圖。 |
| 第二階段 | 將使用者選擇的小語合成個人化祝福卡，圖片由系統使用今日圖源或後台指定圖源自動搭配，回傳圖片並提供 share link。 |

1.7.1 4.2.1 入口回覆：點亮心意／今日共鳴

<RED>點進「點亮心意／今日共鳴」後，你可以選擇今天想怎麼參與：

① 今天想送出祝福
② 看看大家點亮了什麼
③ 邀請好友一起收祝福

若選「今天想送出祝福」，請再選 1～3 句你今天想送出的祝福小語。</RED>

1.7.2 4.2.2 完成點亮後：立即看共鳴與導流

選好後，請點「完成點亮」。完成後系統會記錄你今天點亮的小語，並立即回覆：你點亮的祝福、今天大家共同點亮的前三句、邀請好友入口、今日優惠／查看優惠券入口，以及看看商品與禮盒入口。

#### 1.7.3 4.2.3 完成後回覆

<RED>你今天已點亮 3 句祝福小語。

今天被共同點亮的祝福是：
① 願家人平安順遂
② 願煩惱漸輕，心慢慢安定
③ 願你今日心安無礙

願你送出的心意，也陪你找回內心的節奏。第一次點亮心意，點亮心意券 NT$100 已送達。

接下來可以點「邀請好友」把今天的平安傳出去，也可以點「今日優惠／查看優惠券」看看目前可用回饋。</RED>

#### 1.7.4 4.2.4 未選滿或超過限制回覆

<RED>你可以選 1～3 句祝福。</RED>

<RED>如果已經選好了，請點「完成點亮」。
如果還想調整，也可以重新選擇。</RED>

<RED>最多可以選 3 句祝福。</RED>

<RED>祝福不用多，真心就很好。
請先取消其中一句，或直接點「完成點亮」。</RED>

#### 1.7.5 4.2.5 後端處理流程

1. Rich Menu 主入口維持 postback action=blessing_hub；對外六格顯示「點亮心意／今日共鳴」，但點入後回覆三個選項：今天想送出祝福、看看大家點亮了什麼、邀請好友一起收祝福。
2. 若使用者選「今天想送出祝福」，建立 blessing_sessions，狀態=select_phrases。
3. 使用者選擇 phrase 後，寫入或移除 blessing_session_items。
4. 若使用者點完成且已有 1–3 句，狀態改 completed。
5. completed 後寫入 blessing_votes，更新 daily_blessing_stats，並回覆今日前三句共鳴結果。
6. 若第一次點亮，發點亮心意券，並回覆「今日優惠／查看優惠券」與「邀請好友」CTA。
7. 第二階段可觸發 blessing_card_jobs，由系統以今日圖源或後台指定圖源自動合成祝福卡並寫入 generated_cards。
8. view_blessing_wall 只作為 blessing_hub 裡的子 action，不再佔用 Rich Menu 主格。

#### 1.7.6 4.2.6 LIFT 顯示欄位

・是否正在點亮流程中
・選擇的祝福小語
・系統搭配的每日圖源 / 祝福卡 ID
・是否完成
・是否發點亮心意券
・商品興趣是否被觸發

### <RED>1.8 4.3 邀請好友</RED>

<RED>定位：把原本空出的 Rich Menu 高曝光位置改為「邀請好友」，承接短期合法引流與長期關係成長。這格不是硬推銷，而是讓使用者把今日平安圖、祝福小語或邀請連結自然傳給家人朋友。邀請好友的目標是：讓新朋友加入 LINE、領取新友同行券、收下今日祝福，再進一步查券、看商品與進入客服。</RED>

| 項目 | 設定 |
| --- | --- |
| 觸發 | Rich Menu postback：action=invite_friends |
| 資料來源 | user_invite_codes、invite_share_logs、referral_events、coupon_definitions、user_coupons。 |
| 顯示內容 | 邀請文字、邀請好友圖片、可複製連結、邀請紀錄、外傳祝福券狀態與防濫用提醒。 |
| 隱私 | 不得暴露邀請者或被邀請者個資；邀請紀錄只在本人與後台權限內顯示。 |
| 導流 | 導回「收下今日平安」「點亮心意／今日共鳴」「今日優惠／查看優惠券」「看看商品與禮盒」與真人客服。 |

#### 1.8.1 4.3.1 回覆文案：邀請好友入口

<RED>把今天的平安，也送給你想祝福的人。

你可以傳送今日平安圖、祝福小語或邀請連結給家人朋友。對方加入 LINE 後，也能收下今日祝福與新友同行券。

這份邀請不用勉強，只是把一句「願你平安」交到對方手上；對方是否收下，都保持自在。</RED>

#### 1.8.2 4.3.2 可複製邀請文字

<RED>今天我在微塵星海收下一份平安祝福，想也送給你。

你可以加入 LINE，每天收一張平安圖、一句靜心小語，也可以慢慢看看適合自用或送禮的禪意禮盒。

加入後可領今日平安，也會收到新友同行券。願這份祝福，也陪你走過今天。</RED>

#### 1.8.3 4.3.3 後端處理流程

<RED>1. postback action=invite_friends 後，確認或建立 user_invite_codes。
2. 產生 invite_code、invite_url、invite_card_image_url，並寫入 invite_share_logs。
3. 回覆邀請文字、邀請好友圖片與可複製連結。
4. 被邀請者透過 invite_url 加入 LINE 時，寫入 referral_events，來源為 inviter_line_user_id。
5. 被邀請者 follow 後發新友同行券；若後續完成首購，可依 coupon_definitions 發外傳祝福券給邀請者。
6. 防濫用：同一 LINE user、同一裝置指紋、同一手機或短時間異常大量邀請，需要進入 review 狀態；不得用假帳號、誘導洗券或誤導性話術。
7. LIFT 顯示邀請連結、分享次數、加入人數、首購人數、外傳祝福券狀態與異常標記。</RED>

【後台分析｜邀請好友市場分析】邀請好友不只看分享數，也要看可營運的商業訊號：哪一種祝福圖最容易被轉傳、哪一段邀請文字帶來最多加入、哪些使用者最常帶來新朋友、哪些來源容易洗券、哪些新朋友加入後會查券或看禮盒。這些資料只進 LIFT 與後台分析，不對外顯示個人資料。

#### 1.8.4 4.3.4 邀請好友對外與內部原則

<RED>對外可以說：
・把今天的平安，也送給你想祝福的人。
・你的邀請會讓朋友領到今日平安與新友同行券。
・若朋友之後完成首購，你也有機會收到外傳祝福券。

內部可以追蹤：
・邀請連結點擊數
・好友加入數
・好友首購數
・外傳祝福券發放狀態
・異常邀請與洗券風險</RED>

### <RED>1.9 4.4 今日優惠／查看優惠券</RED>

<RED>【優惠券規則｜貼齊可疊券定案】今日優惠／查看優惠券不是廉價促銷入口，而是「結緣回饋查詢」。對外只需講清楚：優惠券可依系統規則疊加，總折抵不得超過各商品折抵上限；不可折現、不可找零；退款、取消或未付款失敗單依訂單狀態回滾。不要再用「每筆最多幾張券」作主要限制，避免規則複雜、客服難解釋，也避免折抵上限之外再多一層限制降低轉化。</RED>

【客服原則｜長期信任】客服不可直接口頭承諾最終折抵金額，必須以系統試算或下單頁顯示為準。對外語氣應是「我幫你看目前最適合怎麼用券」，不是「快用券不然會虧」。

定位：查券包與購買承接。優惠要講清楚，但不要廉價促銷化。重點是「結緣回饋」「可疊券」「商品折抵上限」。

<RED>【優惠券規則｜適用範圍總則】新友同行券、初見祝福券、點亮心意券、外傳祝福券對外統一說成「可用於全商品」。差異不再放在「哪些商品可用」上，而是交給商品折抵上限、有效期限、邀請資格與防濫用檢查處理。這樣客人理解成本最低，客服話術最簡單，也能讓三款禮盒都有機會被優惠承接；實際折抵仍以下單頁與系統試算為準。</RED>

| <RED>券名</RED> | <RED>觸發</RED> | <RED>面額</RED> | <RED>有效期</RED> | <RED>適用</RED> | <RED>備註</RED> |
| --- | --- | --- | --- | --- | --- |
| <RED>新友同行券</RED> | <RED>新朋友加入 LINE</RED> | <RED>NT$50</RED> | <RED>7 天</RED> | <RED>全商品</RED> | <RED>可疊，受商品折抵上限控管</RED> |
| <RED>初見祝福券</RED> | <RED>第一次領取祝福</RED> | <RED>NT$50</RED> | <RED>7 天</RED> | <RED>全商品</RED> | <RED>可疊，受商品折抵上限控管</RED> |
| <RED>點亮心意券</RED> | <RED>第一次點亮祝福</RED> | <RED>NT$100</RED> | <RED>14 天</RED> | <RED>全商品</RED> | <RED>可疊，受商品折抵上限控管</RED> |
| <RED>外傳祝福券</RED> | <RED>好友分享成功且被邀請人完成首購</RED> | <RED>NT$200</RED> | <RED>14 天</RED> | <RED>全商品</RED> | <RED>依商品折抵上限、邀請資格與防濫用檢查控管</RED> |

#### 1.9.1 4.4.1 優惠查詢回覆：有券

<RED>你目前可使用的結緣回饋如下：</RED>

<RED>・新友同行券 NT$50｜7 天內可用
・初見祝福券 NT$50｜7 天內可用
・點亮心意券 NT$100｜14 天內可用</RED>

<RED>優惠券可依系統規則疊加使用，總折抵會依商品折抵上限計算。
如果你想知道哪一款最適合使用，可以回覆「幫我看優惠」，客服會幫你整理。</RED>

#### 1.9.2 4.4.2 優惠查詢回覆：無券

<RED>你目前沒有可使用的優惠券。

你可以先點「收下今日平安」或「點亮心意／今日共鳴」，完成第一次互動後即可收到對應的結緣回饋。也可以點「邀請好友」把今日平安傳出去；被邀請好友加入後能領新友同行券，後續若完成首購，你也有機會收到外傳祝福券。

祝福先收下，商品與禮盒可以慢慢看；若想請客服幫你看哪一款最適合，也可以直接回覆「幫我看禮盒」。</RED>

#### 1.9.3 4.4.3 疊券規則對外簡短版

<RED>優惠券可依系統規則疊加使用，主要限制改由各商品折抵上限控管。
不同商品有不同折抵上限：
・禪意日常玻璃杯禮盒最高折 NT$100
・禪意香氛杯禮盒最高折 NT$200
・小型桌面型空氣清新機｜完整禮盒版最高折 NT$300
實際折抵會以下單頁顯示為準。</RED>

<RED>實際折抵會以下單頁顯示為準。</RED>

#### 1.9.4 4.4.4 商品折抵試算文案

<RED>如果你想買的是禪意日常玻璃杯禮盒，目前最高可折 NT$100。
如果你想買的是禪意香氛杯禮盒，目前最高可折 NT$200。
如果你想買的是小型桌面型空氣清新機｜完整禮盒版，目前最高可折 NT$300。</RED>

系統會依可用券與商品折抵上限計算，實際折抵以下單頁顯示為準。

#### 1.9.5 4.4.5 後端處理流程

postback action=view_coupon_wallet 後，查 user_coupons status=active 且 expires_at > now。

回覆使用者券包摘要；若券即將到期，優先提示。

商品導購時不可直接承諾最終折抵，需呼叫 coupon simulation API。

LIFT 顯示券包、可用商品、到期日、是否已保留於未付款訂單。

### <RED>1.10 4.5 看看商品與禮盒</RED>

定位：三商品主承接。這格要讓使用者不必先進官網，也能快速理解三款禪意禮盒的差異；若使用者需要完整材質、包裝、使用情境、配送付款、退款政策與條款說明，再導到官方網站。商品話術要貼齊品牌文案：講日常、結緣、體面、長久安心，不貶低使用者習慣，不使用降低品牌質感的比較語；所有對外說法都要像成熟品牌的完整禮盒說明，而不是廉價單品推銷。

| <RED>商品</RED> | <RED>價格口徑</RED> | <RED>LINE 一句話</RED> | <RED>導向</RED> |
| --- | --- | --- | --- |
| <RED>禪意日常玻璃杯禮盒</RED> | <RED>NT$888</RED> | <RED>每天入口的杯子，比很多禮物更貼近生活。玻璃材質不易老化、沒有塑化劑疑慮，搭配光影流動感、純圓形軟木杯墊與高級禮盒，把「願你每天喝水時，都多一點安心」變成拿得起、用得到、長久留在日常裡的祝福。</RED> | <RED>商品頁 / 客服 / 官網完整介紹</RED> |
| <RED>禪意香氛杯禮盒</RED> | <RED>NT$1,980</RED> | <RED>香氣是一個空間留給人的第一印象。封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與金色上蓋，呈現沉穩、克制、有秩序感的禪意識別；適合玄關、床頭、書桌與靜心位置，自用有質感，結緣也體面。</RED> | <RED>商品頁 / 客服 / 官網完整介紹</RED> |
| <RED>小型桌面型空氣清新機｜完整禮盒版</RED> | <RED>NT$3,980</RED> | <RED>家裡有拜拜、誦念、焚香習慣時，供桌旁、床邊、書桌邊常需要更舒服的日常整理。完整禮盒版一次備齊主機、行動電源、充電線、充電器、使用說明與禮盒封裝，安靜地送出一份更省心、更適合日常陪伴的祝福。</RED> | <RED>商品頁 / 客服 / 官網完整介紹</RED> |

#### 1.10.1 4.5.1 回覆文案：三款總覽

<RED>微塵星海目前有三款禪意禮盒，每一款都有自己的結緣特色：
① 禪意日常玻璃杯禮盒｜NT$888
每天入口的杯子，其實比很多禮物更貼近生活。家人常用杯子喝熱水、泡茶，玻璃材質不易老化，也沒有塑化劑疑慮，更能承接「長久安心」這份祝福。微塵星海禪意日常玻璃杯禮盒，以簡潔玻璃材質、光影流動感、純圓形軟木杯墊與高級禮盒封裝，整理成一組完整日常禮盒。不是只送一只杯子，而是送出一份「願你每天喝水時，都多一點安心」的心意。
② 禪意香氛杯禮盒｜NT$1,980
香氣不只是一種味道，也是一個空間留給人的第一印象。玄關、床頭、書桌、靜心位置，放一份沉穩不張揚的香氣，有時就能以香氛內斂的陪伴，讓空間多一份安定。微塵星海禪意香氛杯禮盒，採封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與高級禮盒封裝，金色上蓋下的黑色列陣形成沉穩、克制、有秩序感的品牌識別。自用有質感，結緣也很體面。
③ 小型桌面型空氣清新機｜完整禮盒版｜NT$3,980
家裡有拜拜、誦念、焚香習慣的人都知道：儀式讓人安定，但燒完香後，客廳、供桌周邊、床邊、書桌邊，常常會留下比較明顯的煙味與殘留味道。這些區域通常也是家人每天會停留的地方，若能搭配通風與桌邊空氣清新，日常氣氛會更舒服。微塵星海小型桌面型空氣清新機｜完整禮盒版，以主機、行動電源、充電線、充電器與禮盒封裝滿足日常啟用所需。不是張揚地送一台家電，而是安靜地送一份更舒服、更省心、更適合日常陪伴的祝福。
想結緣送禮、自用或送給家人朋友，都可以回覆「想看禮盒」，客服會用最簡單的方式協助你；想看完整材質、規格、配送付款與條款，也可以導到官網商品頁。</RED>

#### 1.10.2 4.5.2 商品選擇引導

<RED>如果你想送每天都會用到、能長期放進生活裡的禮物，可以先看「禪意日常玻璃杯禮盒」。
如果你想讓玄關、床頭、書桌或靜心位置多一份沉穩香氣與安定感，可以看「禪意香氛杯禮盒」。
如果家裡有拜拜、誦念、焚香習慣，想讓供桌旁、床邊或書桌邊多一份更舒服、更省心的日常整理，可以看「小型桌面型空氣清新機｜完整禮盒版」。</RED>

<RED>你也可以直接回覆：
・想看禪意日常玻璃杯禮盒
・想看禪意香氛杯禮盒
・想看小型桌面型空氣清新機｜完整禮盒版
・請客服幫我選</RED>

#### 1.10.3 4.5.3 禪意日常玻璃杯禮盒單品回覆

<RED>禪意日常玻璃杯禮盒｜NT$888</RED>

每天入口的杯子，其實比很多禮物更貼近生活。家人常用杯子喝熱水、泡茶，玻璃材質不易老化，也沒有塑化劑疑慮，更能承接「長久安心」這份祝福。禪意日常玻璃杯禮盒以簡潔玻璃材質、光影流動感、純圓形軟木杯墊與高級禮盒封裝，整理成一組完整日常禮盒。

<RED>它不只是送一只杯子，而是送出一份「願你每天喝水時，都多一點安心」的心意。</RED>

#### 1.10.4 4.5.4 香氛杯單品回覆

<RED>禪意香氛杯禮盒｜NT$1,980
香氣不只是一種味道，也是一個空間留給人的第一印象。玄關、床頭、書桌、靜心位置，放一份沉穩不張揚的香氣，有時就能以香氛內斂的陪伴，讓空間多一份安定。封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與高級禮盒封裝，讓金色上蓋下的黑色列陣形成沉穩、克制、有秩序感的品牌識別。自用有質感，結緣也很體面。</RED>

#### 1.10.5 4.5.5 小型桌面型空氣清新機｜完整禮盒版單品回覆

<RED>小型桌面型空氣清新機｜完整禮盒版｜NT$3,980</RED>

<RED>家裡有拜拜、誦念、焚香習慣的人都知道：儀式讓人安定，但燒完香後，客廳、供桌周邊、床邊、書桌邊，常常會留下比較明顯的煙味與殘留味道。這些區域通常也是家人每天會停留的地方，若能搭配通風與桌邊空氣清新，日常氣氛會更舒服。</RED>

<RED>完整禮盒版把主機、行動電源、充電線、充電器、使用說明與禮盒封裝一次整理好；適合供桌旁、床邊、書桌邊等常停留的小空間。拆封後即可依照說明完成啟用，也更適合作為一份送給家人長輩的體面祝福。</RED>

#### 1.10.6 4.5.6 後端處理流程

postback action=view_gift_boxes 後，回覆三商品文字 + carousel / imagemap（第二階段）。

商品頁連結帶 UTM 與 line_user_id token，用於追蹤從 LINE 到官網的轉化。

使用者回覆商品關鍵字時，建立 conversation intent=product_interest。

LIFT 顯示商品興趣標籤：glass / fragrance / purifier / unsure。

### <RED>1.11 4.6 真人客服／回饋建議</RED>

<RED>【支持創作團隊｜感謝與進度回報】本入口需要同時承接「真人客服」與「支持創作團隊」。支持入口可設計成自然人自願支持、獨立付款流程；對外不必堆疊過多法律警語，但必須維持幾個底線：不和商品結帳混在一起、不發券、不給會員權益、不抽獎、不給優先客服、不承諾免稅或宗教功德。可以寄送感謝訊息、感謝圖、感謝語與後續進度更新，這屬於禮貌性回覆與品牌關係維護，不應包裝成可兌換的商品或權益。

【支持創作團隊｜用途與內容延伸】支持創作團隊的對外說法不只寫「系統維護」，也要讓使用者看到團隊正在把祝福系統做大：每日平安圖、字幕版祝福圖、靜心小語資料庫、網站與 LINE 體驗開發、好友分享流程、個人化祝福卡、節日祝福活動、客製化送禮服務發想、客服話術整理、商品與禮盒測試、包裝優化、以及把「傳遞祝福」理念做得更廣、更好分享。

【支持創作團隊｜支持後關係維護】支持完成後可以自動送出一則感謝語與一張感謝圖；之後可用一般 LINE 訊息或公開進度貼文，讓支持者看到新增了哪些圖、小語、網頁功能、祝福卡、商品頁或客服流程。這種更新的目的是建立信任與黏著度，不要寫成「付了才有的特殊內容」或「用錢換權益」。</RED>

【支持創作團隊｜自願支持定位】對外統一稱為「支持創作團隊」或「私人自願支持」。頁面必須清楚寫：這是給微塵星海創作團隊成員的自願支持，非商品訂單、非公益捐款、非會員費、非投資、非宗教功德；付款後不提供商品、服務或任何對價權益。若實際收款人是公司、商號或品牌帳戶，則不得宣稱為自然人收受的私人贈與。不得對外承諾特定稅務結果；若涉及稅務、金流平台、銀行資金來源或申報問題，依實際法令與收款情況處理。

<RED>【支持創作團隊｜頁面建議文案】支持創作團隊：這是給微塵星海創作團隊成員的自願支持。這筆支持不會兌換商品、服務、會員權益、折扣券、抽獎資格、專屬客服、投資回報、公益捐款收據或宗教功德承諾。若你想購買禪意禮盒或商品，請點「看看商品與禮盒」下單；商品交易會依一般商業規則處理。這份支持會用於團隊持續製作平安圖、靜心小語、LINE 祝福流程、客服整理與內容系統維護。是否支持完全自由，不影響你領取每日祝福、詢問商品或使用客服。</RED>

<RED>定位：這一格對外承接真人客服、問題回報、建議回饋與支持創作團隊；對內需清楚區分商品訂單與自願支持。短期要讓有好感的人能立刻留下關係、提出需求或支持內容系統；長期要維持信任，不把支持入口設計成商品、折扣、會員、抽獎、優先客服或付費專屬內容。</RED>

| <RED>子選項</RED> | <RED>用途</RED> | <RED>接線</RED> |
| --- | --- | --- |
| <RED>支持創作團隊</RED> | <RED>對微塵星海有好感的人，可進入「支持創作團隊」頁面。此窗口只承接自願支持，不與商品訂單、優惠券、會員、抽獎或優先客服綁定；可寄送感謝訊息、感謝圖、感謝語與公開進度更新，讓支持者知道團隊如何把祝福內容、網站、LINE 分享流程與禮盒體驗做得更好。</RED> | <RED>支持創作團隊頁 / 獨立付款流程 / 感謝訊息 / 公開進度更新 / 客服說明</RED> |
| <RED>提出建議</RED> | <RED>收集祝福語、功能、商品、LINE 體驗建議。</RED> | <RED>建立 feedback ticket</RED> |
| <RED>回報問題</RED> | <RED>回報領圖、券、下單、付款、商品問題。</RED> | <RED>建立 support case，必要時人工接手</RED> |
| <RED>找真人客服</RED> | <RED>不會下單、想問商品、想查訂單。</RED> | <RED>LIFT 對話優先標記 human_requested</RED> |

#### 1.11.1 4.6.1 回覆文案

<RED>謝謝你願意和我們一起，把每日祝福與禪意禮盒服務做得更好。</RED>

微塵星海還在把每日祝福、禪意禮盒與客服體驗一步一步整理得更好。
你可以選擇：

<RED>① 支持創作團隊
② 找真人客服
③ 回報問題
④ 提出建議</RED>

<RED>你的每一個回覆，都會幫助這份祝福服務走得更穩、更貼近需要的人。</RED>

#### 1.11.2 4.6.2 提出建議收件文案

<RED>謝謝你的建議，我們已經收到了。</RED>

<RED>我們會把它整理給團隊參考，也會持續調整每日祝福、禮盒內容與客服流程。
願這份祝福服務，因為你的提醒變得更清楚、更好使用。</RED>

#### 1.11.3 4.6.3 回報問題收件文案

<RED>我們已經收到你的回報。</RED>

<RED>如果是訂單、付款、配送或商品問題，客服會協助你確認。
你也可以補充訂單編號或下單手機末三碼，方便我們更快查詢。</RED>

#### 1.11.4 4.6.4 支持創作團隊文案

<RED>謝謝你願意支持微塵星海創作團隊。

這份支持會幫助我們把「傳遞祝福」做得更完整：更多每日平安圖、更多字幕版祝福圖、更多靜心小語、網站與 LINE 體驗開發、好友分享流程、個人化祝福卡、節日祝福活動、客製化送禮服務發想、客服話術整理、商品與禮盒測試，以及更穩定的內容整理與服務維護。

支持後，我們可以回傳一則感謝語或感謝圖，也會持續透過 LINE 分享後續更新，讓你看見這份支持如何讓每日祝福與禮盒服務一步步變得更好。

若你想購買商品或禪意禮盒，請點「看看商品與禮盒」下單；支持創作團隊與商品訂單會分開處理。</RED>

#### 1.11.5 4.6.5 後端處理流程

postback action=support_us 後回覆四個子選項。

提出建議：建立 feedback_tickets，分類 feature / content / product / other。

回報問題：建立 support_cases，分類 coupon / order / payment / delivery / product / line。

<RED>找真人客服：conversation.human_requested=true，LIFT 置頂。</RED>

支持創作團隊：可建立獨立「支持創作團隊」付款頁，建議金額先設 NT$200 / NT$600 / NT$2,000 / NT$6,000 / 自訂金額。此頁不得與商品訂單合併結帳，不得自動發券、不得解鎖會員權益、不得綁抽獎或優先客服。頁面前段用溫和、清楚的品牌語氣說明支持用途；頁面底部保留必要的「自願支持創作團隊，與商品訂單分開處理」等簡短說明；完整風險判斷放在後台 SOP 與客服知識包。

支持完成後：可寄送感謝訊息、感謝圖或感謝語，並寫入 voluntary_support_payments 的 thank_you_status；後續可定期推送公開進度更新，例如新增平安圖數量、小語整理進度、網站功能、LINE 分享流程、祝福卡功能、客服整理、商品頁與禮盒體驗優化。進度更新是透明回報與關係維護，不設計成付費專屬內容、可兌換商品或特殊權益。

## <RED>2 5. 客服可直接複製的 LINE 話術庫</RED>

### <RED>2.1 5.1 第一次購買不安心 / 貨到付款</RED>

<RED>可以，第一次下單可以選貨到付款。
收到商品後再付款，第一次結緣也比較安心；也可以先看商品內容與配送說明，再決定要不要下單。</RED>

### <RED>2.2 5.2 不會網路下單</RED>

<RED>可以，我們可以一步一步協助你。
你只要告訴我們想看哪一款禮盒、要自用還是送人，我們會先幫你確認商品內容、付款方式與配送方式，不會讓你自己摸索。</RED>

### <RED>2.3 5.3 是不是佛教用品 / 送人會不會敏感</RED>

<RED>它不是傳統佛具，也不是要對方一定有宗教信仰才能用。
我們定位是有禪意、有祝福感的生活禮盒，像杯子、香氛、小空間使用的清新機，都是日常用品。比較像把一句「願你平安」變成對方真的會用到的東西。</RED>

### <RED>2.4 5.4 小型桌面型空氣清新機｜完整禮盒版真的有用嗎</RED>

<RED>小型桌面型空氣清新機｜完整禮盒版比較適合客廳、供桌周邊、床邊、書桌邊這類常停留的小空間，尤其是焚香後想讓桌邊空氣感受清爽一點的人。
建議搭配通風使用，日常氣氛會更舒服。
它定位是小空間日常使用的清爽陪伴，不是醫療級，也不保證清除特定污染物。</RED>

### <RED>2.5 5.5 禪意日常玻璃杯禮盒為什麼值得買</RED>

<RED>很多家庭每天喝熱水、泡茶，其實最常用的就是杯子。
禪意日常玻璃杯禮盒的重點不是只買一只杯子，而是把玻璃材質、純圓形軟木杯墊、高級禮盒與「願你日日平安」的心意整理成一份體面的日常禮。玻璃材質不易老化，也沒有塑化劑疑慮；送出去不會失禮，也能把「長久安心」這份祝福說得更具體。</RED>

### <RED>2.6 5.6 禪意香氛杯禮盒會不會太香</RED>

<RED>禪意香氛杯禮盒不是那種很濃、很衝的香氣路線，比較偏溫潤、內斂的陪伴。
適合放在床頭、玄關、書桌或靜心位置。實際感受會依空間大小與個人嗅覺不同而不同。</RED>

### <RED>2.7 5.7 優惠券怎麼用</RED>

<RED>優惠券可依系統規則疊加使用，主要限制改由各商品折抵上限控管。
不同商品有不同折抵上限：
・禪意日常玻璃杯禮盒最高折 NT$100
・禪意香氛杯禮盒最高折 NT$200
・小型桌面型空氣清新機｜完整禮盒版最高折 NT$300
實際折抵會以下單頁顯示為準。</RED>

### <RED>2.8 5.8 要退款 / 商品問題</RED>

<RED>我們先幫你確認商品與訂單狀況。
請先提供訂單編號，或下單手機末三碼，客服會協助查詢後續處理方式。
如果是商品瑕疵或配送問題，也可以補充照片，方便我們更快判斷。</RED>

### <RED>2.9 5.9 禮盒價值怎麼看 / 單品價格比較</RED>

<RED>我們理解你會想比較價格。
微塵星海主打的不是把單品拆開逐一比價，而是把「適合送出、收到能用、說得出心意」整理成完整禮盒。
禪意日常玻璃杯禮盒的價值在於日常使用、玻璃材質、純圓形軟木杯墊與體面包裝；禪意香氛杯禮盒的價值在於溫潤香氣、空間氛圍與送禮儀式感；小型桌面型空氣清新機｜完整禮盒版的價值在於主機、行動電源、充電線、充電器、使用說明與客服承接一次備齊。
如果是送禮、探訪、節慶結緣或給家人使用，完整禮盒會比單品更容易傳達心意，也比較不用讓收禮的人自己另外準備配件。</RED>

### <RED>2.10 5.10 貨到付款未取貨風險提醒</RED>

<RED>可以選貨到付款。
也提醒你，貨到付款是為了讓第一次下單更安心；若商品已寄出，還請記得留意收件通知，避免包裹來回配送。
如果臨時需要取消，也可以提前告訴我們，客服會協助確認。</RED>

## 3 6. 技術總架構：Supabase + Webhook + LIFT + Console + API

本段用工程語言整理。對外不出現這些字，但工程與 Codex 要照這個架構設計。

| 模組 | 角色 | 第一版範圍 |
| --- | --- | --- |
| LINE Official Account / LINE Developers Console | 設定 Rich Menu、Webhook URL、Channel Secret、Channel Access Token、Reply/Push API 權限。 | 建立 Messaging API channel，啟用 webhook，設定 Rich Menu。 |
| Webhook API | 接收 LINE follow/message/postback 事件，驗證簽章，寫入 Supabase，分派流程。 | 先處理 follow、message、postback、unfollow。 |
| Supabase | 單一資料源：使用者、訊息、每日祝福、點亮、券包、商品興趣、客服案例。 | 建立最小可用 schema + RLS / service role。 |
| LIFT 客服台 | 客服人員看對話、查使用者狀態、查券、查訂單、複製話術。 | 先做對話列表 + 使用者詳情 + 快捷話術。 |
| Console / Admin | 營運人員管理每日圖文、祝福語、優惠券、Rich Menu 狀態、錯誤 log。 | 可先合併在 LIFT 後台。 |
| AI API | 第二階段客服草稿器：讀知識包、對話、訂單摘要後產生建議回覆。 | 先不自動送出，只做草稿。 |
| 官網 / 商品頁 | 導購與結帳承接。LINE 連進來要帶追蹤參數。 | 商品頁、優惠券模擬、客服導流。 |
| LINE 社群｜微塵星海｜分享今日祝福 | 承接使用者分享小語、平安圖、修行故事、日常祝福與禮盒使用感受，形成信任、互動與回流。 | 建立社群規範、管理員 SOP、違規處理、導回 OA 查券／看禮盒／客服的流程。 |
| 官方網站 | 承接完整品牌資訊、商品頁、服務條款、隱私政策、退款配送、活動規則、社群規範與客服入口。 | 網址尚未定案時以 WEBSITE_BASE_URL / APP_PUBLIC_BASE_URL 設定；所有重要條款與完整資訊以官網為主。 |

### 3.1 6.1 Webhook 必做安全規則

收到 LINE webhook 後，必須先用 Channel Secret 驗證 x-line-signature。

驗證前不要改動 request body，不要先 JSON parse 後再拿來驗證。

Webhook endpoint 要快速回應 200，重工作丟背景 job，避免 LINE 重試或停送。

每個 webhook event 要做 idempotency，避免重複發券或重複建立祝福紀錄。

Channel Access Token、Channel Secret、Gemini/OpenAI API Key、Supabase Service Role Key 都只能放環境變數。

### 3.2 6.2 建議環境變數

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

<RED>-- 真人客服／回饋建議 / 客服
create table feedback_tickets (
id uuid primary key default gen_random_uuid(),
line_user_id text,
category text,
content text,
status text default ‘new’,
created_at timestamptz default now()
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

| <RED>使用者文字</RED> | <RED>intent</RED> | <RED>回覆 / 動作</RED> |
| --- | --- | --- |
| <RED>客服、真人、有人嗎</RED> | <RED>human_requested</RED> | <RED>標記人工，回覆客服承接文案。</RED> |
| <RED>想看禮盒、禮盒、商品</RED> | <RED>product_interest</RED> | <RED>回覆三款禮盒總覽。</RED> |
| <RED>玻璃杯</RED> | <RED>product_glass</RED> | <RED>回覆禪意日常玻璃杯禮盒單品話術。</RED> |
| <RED>香氛杯</RED> | <RED>product_fragrance</RED> | <RED>回覆禪意香氛杯禮盒單品話術。</RED> |
| <RED>空清機、空氣清新機、清淨機</RED> | <RED>product_purifier</RED> | <RED>回覆小型桌面型空氣清新機｜完整禮盒版話術。</RED> |
| <RED>優惠、券、折扣</RED> | <RED>coupon</RED> | <RED>查券包。</RED> |
| <RED>貨到付款、詐騙、先付款</RED> | <RED>cod_payment</RED> | <RED>回覆貨到付款安心話術。</RED> |
| <RED>退款、退貨、壞掉、瑕疵</RED> | <RED>support_high_risk</RED> | <RED>標記人工，要求訂單編號 / 手機末三碼 / 照片。</RED> |
| <RED>治過敏、除甲醛、除病毒、PM2.5</RED> | <RED>forbidden_claim_risk</RED> | <RED>標記人工或回覆合規版，不承諾效果。</RED> |
| <RED>支持創作團隊、支持你們、我想支持、贊助、隨喜、捐款、善捐</RED> | <RED>voluntary_support_interest</RED> | <RED>回覆支持創作團隊說明與獨立支持流程；可送感謝語與公開進度更新，但不發券、不給會員權益、不綁抽獎或優先客服。</RED> |
| <RED>邀請好友、分享給朋友、分享祝福、邀請家人、推薦朋友、我的邀請、外傳祝福券</RED> | <RED>invite_friend_interest</RED> | <RED>回覆邀請好友說明與獨立邀請流程；產生邀請文字、邀請連結與邀請卡圖，並提示好友加入與首購後的外傳祝福券規則。</RED> |
| <RED>社群、分享今日祝福、我要加入社群、社群規範、分享小語、修行故事</RED> | <RED>community_interest</RED> | <RED>回覆 LINE 社群說明、社群規範與加入入口；提醒不得詐騙、外洩個資、私下收款或發布違法／誤導內容，並導回 OA 領祝福、查券或看禮盒。</RED> |
| <RED>官網、官方網站、條款、隱私、退款、配送、服務條款</RED> | <RED>website_info</RED> | <RED>回覆官網入口與對應頁面：品牌理念、三款禮盒、優惠與活動規則、付款配送、退款退貨、服務條款、隱私權政策與社群規範。</RED> |

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

# SOURCE FILE 2

# Microdust Galaxy Social and Channel Master Copy 2026-05-04

> Converted from: `微塵星海_社群與通路文案總底稿_LINE六格貼齊定稿版_場域改空間_20260504.docx`
> Encoding: UTF-8 Markdown. Filenames are ASCII for Codex/GitHub compatibility.

微塵星海｜社群與通路文案總底稿

LINE 六格貼齊定稿版｜安心提醒 × 結緣送禮 × 傳承祝福 × LINE 成長閉環

更新日期：2026-05-04｜用途：官網、LINE、客服、社群貼文、商品頁、AI 客服知識包與上架前統一口徑

## 本版一句話定位

本版以「微塵星海｜LINE 六格文案話術與技術接線整合版｜2026-05-03 前台紅字人工終檢版」為最高優先定稿，將原「社群與通路文案總底稿」中與最新 LINE 六格、商品命名、優惠券口徑、客服入口、邀請好友與社群接口不一致的地方全部收斂。

本版不是把品牌改成更吵的促銷號，也不是把 LINE 做成複雜工程展示；核心是讓消費者只看到清楚、溫和、可信的祝福流程：收下今日平安、點亮心意、邀請好友、查看優惠、看看商品與禮盒、找真人客服。所有對外文案都要能長期使用，不損害品牌信任。

## 一、本版覆寫重點

LINE 六格改以最新版為準：① 收下今日平安；② 點亮心意／今日共鳴；③ 邀請好友；④ 今日優惠／查看優惠券；⑤ 看看商品與禮盒；⑥ 真人客服／回饋建議。不得再把「今天想送出祝福」與「看看大家點亮了什麼」拆成兩個 Rich Menu 主格。

商品對外命名全數改為完整禮盒名稱：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。不得把「玻璃杯」「香氛杯」「空清機」等簡稱當成正式對外商品名。

「協助我們」不再作為第六格主名稱；改為「真人客服／回饋建議」。支持創作團隊只作為子入口，且不得設計成商品、折扣、會員、抽獎、優先客服或付費專屬內容。

「今日優惠」統一改成「今日優惠／查看優惠券」；對外說成結緣回饋查詢，不要把品牌變成廉價折扣群。

優惠券對外簡化為可依系統規則疊加，主要限制由商品折抵上限控管：禪意日常玻璃杯禮盒最高折 NT$100、禪意香氛杯禮盒最高折 NT$200、小型桌面型空氣清新機｜完整禮盒版最高折 NT$300；實際折抵以下單頁或系統試算為準。

社群與官網接口補齊：LINE OA 對外名稱為「微塵星海｜今日祝福」；LINE 社群名稱為「微塵星海｜分享今日祝福」。OA 是交易與客服主入口，社群是分享、互動、信任與回流入口。

所有提醒式文案仍維持合規邊界：不說塑膠都有毒、不說燒香必然傷身、不說保證除 PM2.5／除甲醛／除病毒、不說醫療效果、開運改命或宗教功德保證。

本版以長久商業最大利益為準：短期可以有提醒感，但長期一定要建立「說話穩、商品穩、客服穩、祝福能被記住」的信任。

## 二、本次不一致點修正對照表

| 舊稿／容易殘留的說法 | 本版統一說法 | 修正理由 |
| --- | --- | --- |
| 今天想送出祝福／看看大家點亮了什麼各佔一格 | 點亮心意／今日共鳴作為第二格；內部再分成「今天想送出祝福」「看看大家點亮了什麼」 | 前台六格更簡潔，保留使用者直覺，同時空出第三格做邀請好友。 |
| 協助我們 | 真人客服／回饋建議 | 第六格優先承接真人客服、回報、建議與支持創作團隊；避免看起來像強迫募款。 |
| 今日優惠 | 今日優惠／查看優惠券 | 讓使用者一眼知道是查券包與回饋，不只是促銷。 |
| 看看禪意禮盒 | 看看商品與禮盒 | 與 LINE 最新工程 action view_gift_boxes 對齊，也能承接商品頁與客服下單。 |
| 禪意日常玻璃杯 | 禪意日常玻璃杯禮盒 | 對外完整名稱要凸顯禮盒價值：玻璃杯＋純圓形軟木杯墊＋高級禮盒。 |
| 禪意香氛杯 | 禪意香氛杯禮盒 | 對外完整名稱要凸顯封裝式香氛杯與高級禮盒，不像裸單品。 |
| 小型桌面型空氣清新機、空清機 | 小型桌面型空氣清新機｜完整禮盒版 | 空清機正式前台主版本是完整禮盒版，重點是一次備齊、送禮體面、客服承接。 |
| 用 OA、私域、漏斗、database、AI 判斷等內部詞 | 加入 LINE 領今日祝福、客服協助確認、祝福流程、禮盒說明 | 長輩與一般客人不需要理解內部系統語；前台只保留人話。 |
| 支持創作團隊連到商品或權益 | 私人自願支持，僅提供感謝語、感謝圖、進度更新與透明回報 | 避免被誤解為商品、捐款、投資、會員或可兌換權益。 |

## 三、長期商業最大利益原則：先結緣，再成交

微塵星海可以有日常提醒，但不適合走激烈恐嚇。品牌要賣的不是一次性爆品，而是長期信任、親友轉介紹、LINE 回購與結緣送禮口碑。對外文案要讓人覺得「你有替我想」，而不是「你在嚇我買」。

對外可以自然提到，結緣、傳遞祝福與把善意分享出去的靈感來自佛教；但語氣要像生活中的祝願，不要寫成只服務特定宗教族群的商品。微塵星海不是傳統佛具店，也不是神奇功效品牌；它是把每日祝福、靜心內容與禪意生活禮盒整理成可被領取、分享、使用與送出的生活品牌。

| 原則 | 可以這樣做 | 不要這樣做 |
| --- | --- | --- |
| 提醒感 | 提醒「每天喝熱水的杯子要注意材質」、「焚香後客廳與供桌周邊容易留下煙味與殘留味道」 | 寫成「塑膠都有毒」、「燒香一定傷身」、「不買就危險」 |
| 信任感 | 主動說明商品定位、適合誰、不適合誰，讓送禮者與收禮者都覺得誠懇 | 把商品包裝成神奇保健、神效淨化、保證改善健康 |
| 結緣感 | 說「自用、探訪、節慶或結緣都體面」，讓祝福自然進入日常 | 一直壓迫下單、過度限時、讓人覺得像詐騙或直銷 |
| 客服感 | 用像真人對話的短句，回答長輩會問的問題 | 用 OA、私域、漏斗、列陣、演算法等內部術語直接對客人說 |

## 四、品牌母文案與總通路原則

品牌一句話：把祝福，變成每天都能傳遞的日常。

品牌定位：微塵星海，是一個以佛教祝福、靜心陪伴與禪意生活為核心的品牌。其中「結緣」與「傳遞祝福」的靈感，來自佛教裡把善意分享出去、讓祝願延續給他人的精神。我們把一份平安、一句心語、一件日常用品，整理成可以每天領取、分享、使用，也能送給家人朋友的結緣形式。

本版銷售核心：真正會留下來的禮物，不一定是最貴或最誇張的東西，而是每天看得到、用得到，也能把「願你平安」這份心意慢慢傳下去的東西。

官網：放完整理念、商品說明、付款配送、退款退貨、服務條款、隱私權政策與必要免責說明，作為品牌母站。

LINE：對外只說「加入 LINE 領今日祝福」。不要一直講 OA、私域、系統、AI 或資料庫。

LINE 社群：固定名稱「微塵星海｜分享今日祝福」，負責分享今日小語、平安圖、日常祝福、修行故事與禮盒使用感受。

Facebook / YouTube：可以更有情緒張力，但承接文字要讓長輩一眼懂，並導回 LINE 或官網。

客服：語氣像「替對方想一層」，不是像「推銷員」。能說成結緣、心意、傳承祝福，就不要說成硬賣。

商品對外完整命名固定：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。

## 五、現行商品與價格總表

| 商品 | 價格 | 主打對象 | 一句話結緣理由 | 日常提醒 |
| --- | --- | --- | --- | --- |
| 禪意日常玻璃杯禮盒 | NT$888 | 每天喝水喝茶的家人、老師、朋友 | 送一只每天真的會用到的安心玻璃杯，把祝福放進日常。 | 每天入口的杯子，材質看得見、說得清楚，使用起來更安心。 |
| 禪意香氛杯禮盒 | NT$1,980 | 重視家中氣味、床頭、玄關、佛桌旁氛圍的人 | 以香氛內斂的陪伴，讓日常空間多一份沉穩與禪意；自用、探訪、節慶或結緣都體面。 | 家裡常停留的位置不用大改造，也可以用一份香氣陪伴，讓日常氛圍更安定。 |
| 小型桌面型空氣清新機｜完整禮盒版 | NT$3,980 | 有拜拜、焚香、供桌、閱讀區、小房間需求的家庭 | 主機、行動電源、充電線、充電器、使用說明與禮盒一次整理好，收禮者拆封後即可依說明完成啟用。 | 拜拜燒香後，供桌旁、床邊、書桌邊的小空間常會留下煙味與殘留味道。 |

## 六、安心提醒式行銷總規則

可以講「日常容易忽略的細節」，不要講「健康恐嚇」。提醒感的任務是讓客人覺得：這件事我以前忽略了，現在有人替我想到了；商品則承接成一份能送得出去、也能被記住的祝福。

| 商品 | 可用提醒句 | 不可用句 |
| --- | --- | --- |
| 禪意日常玻璃杯禮盒 | 每天喝熱水、泡茶的杯子，材質最好看得見、說得清楚。玻璃材質不易老化，也沒有塑化劑疑慮，長久使用更容易讓人安心。 | 塑膠杯都有毒；用塑膠杯一定會吃進塑化劑；玻璃杯能保健排毒。 |
| 小型桌面型空氣清新機｜完整禮盒版 | 家裡拜拜、焚香後，客廳、供桌周邊、床邊與書桌邊容易留下煙味與殘留味道；搭配通風與桌邊空氣清新，日常氣氛會更舒服。 | 燒香一定傷肺；這台可以保證清除 PM2.5／甲醛／病毒；有醫療級淨化效果。 |
| 禪意香氛杯禮盒 | 玄關、床頭、書桌旁若想多一份安定，可以透過香氛內斂的陪伴與沉穩外觀設計，讓日常空間更有安定感。 | 強力除臭、分解甲醛、改善過敏、治療失眠。 |

## 七、官網首頁完整文案

首頁 Hero 主標：把祝福，變成每天都能傳遞的日常。

首頁 Hero 副標：每天一張平安圖，一句靜心語，也可以是一份真正放進生活裡的禪意禮盒。微塵星海從佛教的結緣與傳遞祝福得到靈感，把祝福整理成看得見、用得到、拆開就能感受到心意的日常結緣。

首頁按鈕：加入 LINE 領今日祝福／看看商品與禮盒／第一次下單可貨到付款

首頁提醒帶：每天入口的杯子、拜拜焚香後的客廳與供桌周邊、床頭與玄關的香氣陪伴，都是日常裡容易被忽略、卻很常被使用的空間。我們把這些細節整理成更安心、更體面，也能自用、探訪、節慶與結緣的祝福選品。

首頁品牌簡介：很多人本來就有誦念、祈福、替家人祝願平安的習慣。微塵星海的靈感來自佛教裡「結緣」與「傳遞祝福」的精神：把心中的善意分享出去，讓一份祝願能被更多人收到、使用，也慢慢延續下去。你可以每天在 LINE 收下一張平安圖與一句靜心小語，也可以把一份有質感、說得出理由、打開就完整的禪意禮盒，送給自己或重要的人；讓祝福不是只停在一句話，而是真的被使用、被看見、被傳下去。

商品理念頁：我們挑選與設計的商品，回到更長久的日常：杯子每天入口，所以玻璃材質不易老化、沒有塑化劑疑慮這件事更好說明；家裡拜拜後，客廳與供桌周邊的日常氣場可以更清爽；床頭、玄關、書桌旁，也可以留下一點安靜的香氣陪伴。這些不是浮誇承諾，而是一份「我有想到你」的結緣心意。

## 八、商品分類文案

### 8.1 禪意日常玻璃杯禮盒

每天喝水、泡茶的杯子，其實比很多禮物更貼近生活。很多家庭長輩習慣用杯子裝熱水、熱茶；玻璃材質不易老化，也沒有塑化劑疑慮，比起材質說不清楚、用久了讓人擔心的杯具，更容易承接「長久安心」這份祝福。禪意日常玻璃杯禮盒以簡潔玻璃材質與光影流動感為靈感，讓每天入口的水與茶，多一份看得見的安心，也多一份能傳下去的祝福。

它不是只看一次的擺設，而是會被每天拿起來的日常器物。搭配高級禮盒與隨盒附上的純圓形軟木杯墊後，適合送父母、老師、親友，也適合留給自己；送出去時可以很自然地說：「這是願你每天喝水、泡茶都多一點安心的祝福。」杯墊不是額外湊數的贈品，而是禮盒打開時的一部分：讓杯子放在書桌、茶席或床邊時更完整，也讓收禮者感覺這份心意不是隨手拼湊，而是被好好準備。

### 8.2 禪意香氛杯禮盒

香氣不只是一種味道，也會影響一個空間給人的第一感受。禪意香氛杯禮盒採封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與高級禮盒承接體面心意；適合床頭、玄關、書桌與靜心位置。它不是要掩蓋什麼，而是以香氛內斂的陪伴、沉穩外觀與完整禮盒，把一份溫柔祝福留在每天會經過的地方。

它不走張揚濃烈的香氛路線，而是更偏沉穩、內斂、能慢慢陪伴生活的空間選品。搭配高級禮盒後，不只是「一個香氛杯」，而是一份拆開後能放進床頭、玄關或書桌旁的體面心意；不是只送香氣，而是送一份能留在日常空間裡的香氣陪伴。

### 8.3 小型桌面型空氣清新機｜完整禮盒版

家裡有拜拜、誦念、焚香習慣的人都知道，儀式很安定，也是一種家中傳承下來的祝福。但燒完香後，客廳、供桌周邊、床邊或書桌邊，常常會留下比較明顯的煙味與殘留味道。這些地方通常也是家人每天會停留的空間，若能搭配通風與桌邊空氣清新，日常氣氛會更舒服。

這款小型桌面型空氣清新機主打完整禮盒版，內容包含主機、行動電源、充電線、充電器、使用說明與禮盒封裝。它把小空間日常使用、完整配件、品牌說明與結緣送禮一次整理好；不是為了暗示收禮者不會使用，而是讓禮盒被打開時就能看見完整心意，也讓祝福能更順利進入日常。

三款禮盒共同語氣：不是把商品包得比較貴，而是讓收禮者打開時感覺「這份心意被好好準備」。這比單純強調功能更能建立長期信任，也更符合結緣與傳承祝福的品牌主體。

## 九、官網 FAQ（結緣送禮版）

Q：微塵星海是做什麼的？

A：微塵星海是一個把「平安祝福」放進日常生活的品牌。結緣、傳遞祝福與把善意分享出去的靈感來自佛教，我們把這份精神轉化成每天可以領取的平安圖、靜心小語，以及適合自用或結緣送禮的禪意生活禮盒。

Q：加入 LINE 有什麼？

A：加入 LINE 後，可以收下今日平安祝福包、點亮心意、查看今日共鳴、邀請好友、查詢結緣回饋，也可以看看商品與禮盒或找真人客服協助。對外只需要理解成：每天領一份祝福，也可以慢慢看看適合自用或送禮的禪意禮盒。

Q：我不太會網路下單，可以請客服幫忙嗎？

A：可以。您可以直接用 LINE 告訴我們想買哪一款、要寄到哪裡，我們會一步一步協助確認，不會讓您自己摸索。

Q：首次購買不安心，擔心是詐騙怎麼辦？

A：第一次下單可以選擇貨到付款，收到商品後再付款。也可以先透過 LINE 客服確認商品內容、配送方式與付款方式，再安心決定。

Q：這些商品是宗教用品嗎？

A：不是傳統佛具，也不要求收禮的人一定有宗教信仰。結緣與傳遞祝福的靈感來自佛教，但我們把它轉化成有禪意、有祝福感、適合日常使用與結緣送禮的生活選品。

Q：適合送禮嗎？

A：很適合，也很適合自用與日常結緣。三款商品都以禮盒型態承接：禪意日常玻璃杯禮盒有高級禮盒與隨盒純圓形軟木杯墊，禪意香氛杯禮盒以封裝式設計與高級禮盒呈現，小型桌面型空氣清新機｜完整禮盒版則把主機、配件與使用說明整理成一份完整心意。無論是節日、探望、喬遷、日常問候、團體結緣，或留給自己慢慢使用，都能把「願你平安、願你生活舒服一點」這份心意延續下去。

Q：如果收到後有問題怎麼辦？

A：可以直接聯絡微塵星海 LINE 客服，我們會協助確認商品狀況與後續處理方式。

## 十、LINE 完整文案與互動流程（以 2026-05-03 六格定稿為準）

對外稱呼原則：對使用者只說「加入 LINE 領今日祝福」。不要說 OA、私域、漏斗、會員經營、AI、資料庫、Webhook 或演算法，長輩不需要理解這些字。

### 10.1 LINE 首頁簡介

加入微塵星海 LINE，每天領一份祝福。

我們把佛教裡「結緣」與「傳遞祝福」的精神，整理成每日平安圖、靜心小語、專屬回饋，也有適合自用與結緣送禮的禪意禮盒。

第一次下單可選貨到付款，讓祝福更安心送到家。

### 10.2 加入後歡迎訊息

歡迎來到微塵星海。

這裡每天都會為你準備一份小小的祝福：一張平安圖、一句靜心小語，也有適合結緣送禮的禪意選品。

我們希望把「願你平安」這份心意，變成每天都能收下、分享，也能被記住的日常。

你可以先點下方選單：
① 收下今日平安
② 點亮心意／今日共鳴
③ 邀請好友
④ 今日優惠／查看優惠券
⑤ 看看商品與禮盒
⑥ 真人客服／回饋建議

若你第一次下單，想收到商品後再付款，也可以選擇貨到付款。願每一次領取與分享，都成為一份平安的延續。

### 10.3 六格固定配置與後台 action

| 位置 | 按鈕名稱 | 對外目的 | 後台 action |
| --- | --- | --- | --- |
| 上排左 | 收下今日平安 | 低門檻留存、每日祝福包、第一次領祝福券 | claim_daily_blessing |
| 上排中 | 點亮心意／今日共鳴 | 合併送出祝福與今日共鳴；使用者選 1–3 句祝福小語，也可查看大家點亮了什麼 | blessing_hub |
| 上排右 | 邀請好友 | 親友分享、邀請加入、外傳祝福券與合法成長閉環 | invite_friends |
| 下排左 | 今日優惠／查看優惠券 | 查券包、到期提醒、折抵試算與商品導流 | view_coupon_wallet |
| 下排中 | 看看商品與禮盒 | 三款禪意禮盒承接、導商品頁或客服協助下單 | view_gift_boxes |
| 下排右 | 真人客服／回饋建議 | 真人客服、回報問題、提出建議、支持創作團隊子入口 | support_us |

### 10.4 收下今日平安

定位：每日最簡單的入口。使用者不需要選、不需要打字，只要點一下，就收到今日平安祝福包。祝福包建議包含同一張圖源的三張版本：無字原圖、字幕版 A、字幕版 B，加上一則靜心小語、圖片使用聲明、好友分享引導，以及客服／今日優惠／查看優惠券／其他活動入口。

第一次點擊回覆：這份今日平安圖與祝福小語，微塵星海授予你完整個人使用權。你可以收藏、下載、設成桌布，也可以安心轉傳給家人朋友作祝福與結緣分享；只要不是販售、冒名官方、惡意改作或用於違法不當用途，都可以自由使用。

每日正常點擊回覆：今天的平安祝福包已為你送達。你可以把無字原圖留給自己收藏、設成手機桌布，或放在安靜的位置作日常提醒；字幕版 A 適合直接轉傳家族群，字幕版 B 適合傳給朋友、放在限時動態或社群祝福。願這份安定，陪你走過今天。如果你也想把一句小語點亮出去，可以點「點亮心意／今日共鳴」，送出自己的祝福。

同日重複點擊回覆：你今天已經收下平安祝福包了。祝福不用重複領，能被收藏、被轉傳、被想起就很好。你可以把無字原圖留給自己，把字幕版傳給家人朋友；若想再送出一句自己的祝福，可以點「點亮心意／今日共鳴」。若想讓朋友也加入收祝福，可以點「邀請好友」。

### 10.5 點亮心意／今日共鳴

定位：「點亮心意／今日共鳴」只作為 Rich Menu 六格上的精簡名稱；使用者點進來後，仍維持兩個好理解的原始入口：「今天想送出祝福」與「看看大家點亮了什麼」，並加上「邀請好友一起收祝福」。這樣做可以讓圖面名稱有質感，但流程內不犧牲直覺性。

入口回覆：點進「點亮心意／今日共鳴」後，你可以選擇今天想怎麼參與：① 今天想送出祝福；② 看看大家點亮了什麼；③ 邀請好友一起收祝福。若選「今天想送出祝福」，請再選 1～3 句你今天想送出的祝福小語。

完成後回覆：你今天已點亮 3 句祝福小語。今天被共同點亮的祝福是：① 願家人平安順遂；② 願煩惱漸輕，心慢慢安定；③ 願你今日心安無礙。願你送出的心意，也陪你找回內心的節奏。第一次點亮心意，點亮心意券 NT$100 已送達。接下來可以點「邀請好友」把今天的平安傳出去，也可以點「今日優惠／查看優惠券」看看目前可用回饋。

限制回覆：你可以選 1～3 句祝福。如果已經選好了，請點「完成點亮」。最多可以選 3 句祝福，祝福不用多，真心就很好。

### 10.6 邀請好友

定位：第三格「邀請好友」承接短期合法引流與長期關係成長。這格不是硬推銷，而是讓使用者把今日平安圖、祝福小語或邀請連結自然傳給家人朋友。

入口回覆：把今天的平安，也送給你想祝福的人。你可以傳送今日平安圖、祝福小語或邀請連結給家人朋友。對方加入 LINE 後，也能收下今日祝福與新友同行券。這份邀請不用勉強，只是把一句「願你平安」交到對方手上；對方是否收下，都保持自在。

可複製邀請文字：今天我在微塵星海收下一份平安祝福，想也送給你。你可以加入 LINE，每天收一張平安圖、一句靜心小語，也可以慢慢看看適合自用或送禮的禪意禮盒。加入後可領今日平安，也會收到新友同行券。願這份祝福，也陪你走過今天。

對外原則：可以說「若朋友之後完成首購，你也有機會收到外傳祝福券」；不得鼓勵假帳號、洗券、誤導邀請或承諾收益。

### 10.7 今日優惠／查看優惠券

定位：今日優惠／查看優惠券不是廉價促銷入口，而是「結緣回饋查詢」。對外只需講清楚：優惠券可依系統規則疊加，總折抵不得超過各商品折抵上限；不可折現、不可找零；退款、取消或未付款失敗單依訂單狀態回滾。客服不可直接口頭承諾最終折抵金額，必須以系統試算或下單頁顯示為準。

有券回覆：你目前可使用的結緣回饋如下：新友同行券 NT$50｜7 天內可用；初見祝福券 NT$50｜7 天內可用；點亮心意券 NT$100｜14 天內可用。優惠券可依系統規則疊加使用，總折抵會依商品折抵上限計算。如果你想知道哪一款最適合使用，可以回覆「幫我看優惠」，客服會幫你整理。

無券回覆：你目前沒有可使用的優惠券。你可以先點「收下今日平安」或「點亮心意／今日共鳴」，完成第一次互動後即可收到對應的結緣回饋。也可以點「邀請好友」把今日平安傳出去；被邀請好友加入後能領新友同行券，後續若完成首購，你也有機會收到外傳祝福券。

### 10.8 看看商品與禮盒

微塵星海目前有三款禪意禮盒，每一款都有自己的結緣特色：

① 禪意日常玻璃杯禮盒｜NT$888：每天入口的杯子，其實比很多禮物更貼近生活。家人常用杯子喝熱水、泡茶，玻璃材質不易老化，也沒有塑化劑疑慮，更能承接「長久安心」這份祝福。微塵星海禪意日常玻璃杯禮盒，以簡潔玻璃材質、光影流動感、純圓形軟木杯墊與高級禮盒封裝，整理成一組完整日常禮盒。不是只送一只杯子，而是送出一份「願你每天喝水時，都多一點安心」的心意。

② 禪意香氛杯禮盒｜NT$1,980：香氣不只是一種味道，也是一個空間留給人的第一印象。玄關、床頭、書桌、靜心位置，放一份沉穩不張揚的香氣，有時就能以香氛內斂的陪伴，讓空間多一份安定。微塵星海禪意香氛杯禮盒，採封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與高級禮盒封裝，金色上蓋下的黑色列陣形成沉穩、克制、有秩序感的品牌識別。自用有質感，結緣也很體面。

③ 小型桌面型空氣清新機｜完整禮盒版｜NT$3,980：家裡有拜拜、誦念、焚香習慣的人都知道：儀式讓人安定，但燒完香後，客廳、供桌周邊、床邊、書桌邊，常常會留下比較明顯的煙味與殘留味道。這些區域通常也是家人每天會停留的地方，若能搭配通風與桌邊空氣清新，日常氣氛會更舒服。微塵星海小型桌面型空氣清新機｜完整禮盒版，以主機、行動電源、充電線、充電器、使用說明與禮盒封裝滿足日常啟用所需。不是張揚地送一台家電，而是安靜地送一份更舒服、更省心、更適合日常陪伴的祝福。

收尾 CTA：想結緣送禮、自用或送給家人朋友，都可以回覆「想看禮盒」，客服會用最簡單的方式協助你；想看完整材質、規格、配送付款與條款，也可以導到官網商品頁。

### 10.9 真人客服／回饋建議

第六格主功能是真人客服、回報問題、提出建議與支持創作團隊子入口。對外語氣要像「我們願意聽見你」，不是強迫支持。

客服入口回覆：我幫你轉由真人客服協助。如果是訂單、付款、配送或商品問題，也可以先補充：訂單編號、下單手機末三碼、想詢問的商品。這樣客服會更快協助你確認。

回饋建議回覆：謝謝你願意把想法告訴我們。你可以直接回覆想建議的地方，例如 LINE 祝福、商品禮盒、配送付款、客服說明或社群內容；我們會整理後作為後續優化參考。

支持創作團隊底線：支持創作團隊只做私人自願支持與透明回報，可有感謝語、感謝圖、支持用途與進度更新；不得設計成商品、折扣、會員、抽獎、優先客服、付費專屬內容或任何可兌換權益。

## 十一、優惠券與結緣回饋口徑

今日優惠／查看優惠券的對外重點不是「便宜」，而是「結緣回饋」。客人不用理解複雜規則，只要知道目前有哪些券、多久到期、哪一款禮盒最高可折多少，最後以下單頁或客服試算為準。

| 券名 | 觸發 | 面額 | 有效期 | 對外口徑 |
| --- | --- | --- | --- | --- |
| 新友同行券 | 新朋友加入 LINE | NT$50 | 7 天 | 加入後已為你送上一份新朋友回饋，可用於商品與禮盒，實際折抵依商品上限與系統試算。 |
| 初見祝福券 | 第一次領取今日平安祝福包 | NT$50 | 7 天 | 你已收下第一份祝福，也同步收到初見祝福券。 |
| 點亮心意券 | 第一次完成點亮心意 | NT$100 | 14 天 | 你今日送出的心意已被點亮，點亮心意券已送達。 |
| 外傳祝福券 | 好友分享成功且被邀請人完成首購 | NT$200 | 14 天 | 你送出的祝福已被延續。好友完成首購後，外傳祝福券已送達。 |

疊券規則對外簡短版：優惠券可依系統規則疊加使用，主要限制由各商品折抵上限控管。禪意日常玻璃杯禮盒最高折 NT$100；禪意香氛杯禮盒最高折 NT$200；小型桌面型空氣清新機｜完整禮盒版最高折 NT$300。實際折抵會以下單頁顯示為準。

客服試算話術：我可以幫你看目前最適合怎麼用券，不會先口頭保證最後折多少；實際折抵會以下單頁或系統試算為準，這樣對你比較清楚也比較安心。

## 十二、客服私訊結緣話術（可直接複製）

客人：首次購買不安心，擔心是詐騙，可以貨到付款嗎？

客服：可以，第一次下單可以選貨到付款。收到商品後再付款，第一次結緣也比較安心；也可以先看商品內容與配送說明，再決定要不要下單。

客人：這個是佛教用品嗎？我怕送人太敏感。

客服：它不是傳統佛具，也不是要對方一定有宗教信仰才能用。我們定位是有禪意、有祝福感的生活禮盒，像杯子、香氛、小空間使用的清新機，都是日常用品。比較像把一句「願你平安」變成對方真的會用到的東西。

客人：禪意日常玻璃杯禮盒為什麼值得買？家裡已經有杯子了。

客服：很多家庭每天喝熱水、泡茶，其實最常用的就是杯子。玻璃材質不易老化，也沒有塑化劑疑慮；再加上隨盒附上的純圓形軟木杯墊與禮盒包裝，送出去不會失禮，也能把「長久安心」這份祝福說得更具體。

客人：小型桌面型空氣清新機｜完整禮盒版真的有用嗎？

客服：它比較適合客廳、供桌周邊、床邊、書桌邊這類常停留的空間，尤其焚香後想讓桌邊空氣感受清爽一點的人。建議搭配通風使用，日常氣氛會更舒服。

客人：這個送禮會不會很難用？

客服：小型桌面型空氣清新機｜完整禮盒版把主機、行動電源、充電線、充電器、使用說明都整理在同一份禮盒裡，拆封後即可照著說明完成啟用。這樣設計不是因為收禮者不會用，而是讓送禮的人能把祝福、配件、說明與售後一次交代清楚。如果收禮者還有問題，也可以直接問 LINE 客服。

客人：禪意香氛杯禮盒會不會太香？

客服：它不是那種很濃、很衝的香氣路線，比較偏香氣內斂的陪伴，適合放在床頭、玄關、書桌或靜心位置。

客人：我想支持你們，但不一定要買商品。

客服：謝謝你的心意。支持創作團隊是自願支持，不會兌換商品、折扣、會員或優先客服。我們會用感謝語、感謝圖與進度更新回報大家，讓你知道這份支持如何幫助我們把每日祝福和內容系統做得更好。

## 十三、Facebook / YouTube 商品貼文模板

### 13.1 禪意日常玻璃杯禮盒

每天入口的杯子，其實比很多禮物更貼近生活。家人常用杯子喝熱水、泡茶，玻璃材質不易老化，也沒有塑化劑疑慮，更能承接「長久安心」這份祝福。微塵星海禪意日常玻璃杯禮盒，以簡潔玻璃材質、光影流動感、純圓形軟木杯墊與高級禮盒封裝，整理成一組完整日常禮盒。不是只送一只杯子，而是送出一份「願你每天喝水時，都多一點安心」的心意。

CTA：想送一份每天都會被拿起來的祝福，可以到 LINE 回覆「想看禪意日常玻璃杯禮盒」。

### 13.2 禪意香氛杯禮盒

香氣不只是一種味道，也是一個空間留給人的第一印象。玄關、床頭、書桌、靜心位置，放一份沉穩不張揚的香氣，有時就能以香氛內斂的陪伴，讓空間多一份安定。微塵星海禪意香氛杯禮盒，採封裝式香氛膏、4.0mm 柱狀活性炭列陣設計與高級禮盒封裝，金色上蓋下的黑色列陣形成沉穩、克制、有秩序感的品牌識別。自用有質感，結緣也很體面。

CTA：想讓床頭、玄關或書桌多一份安靜香氣，可以到 LINE 回覆「想看禪意香氛杯禮盒」。

### 13.3 小型桌面型空氣清新機｜完整禮盒版

家裡有拜拜、誦念、焚香習慣的人都知道：儀式讓人安定，但燒完香後，客廳、供桌周邊、床邊、書桌邊，常常會留下比較明顯的煙味與殘留味道。這些區域通常也是家人每天會停留的地方，若能搭配通風與桌邊空氣清新，日常氣氛會更舒服。微塵星海小型桌面型空氣清新機｜完整禮盒版，把主機、行動電源、充電線、充電器、使用說明與禮盒封裝一次整理好。不是張揚地送一台家電，而是安靜地送一份更舒服、更省心、更適合日常陪伴的祝福。

CTA：想送給家人、長輩或放在供桌旁、床邊、書桌邊，可以到 LINE 回覆「想看空氣清新機完整禮盒版」。

## 十四、LINE 社群與官網接口文案

LINE OA 固定名稱：微塵星海｜今日祝福。功能是每日祝福領取、查券、邀請好友、看商品與禮盒、真人客服與訂單承接。

LINE 社群固定名稱：微塵星海｜分享今日祝福。功能是分享今日小語、平安圖、修行故事、日常祝福與禮盒使用感受。

社群入口 CTA：① 加入社群，分享今日祝福；② 把你的平安小語留在社群；③ 看看大家怎麼把祝福放進日常。

社群歡迎分享：今日祝福小語、微塵星海平安圖、個人修行與靜心故事、日常祝福、禮盒使用感受、節日祝福與善意回饋。

社群禁止：詐騙訊息、投資／借貸／博弈／色情／政治攻擊、未經同意公開個資、私下收款或導購、冒名官方、醫療或神奇功效宣稱、宗教功德保證、惡意洗版、人身攻擊、仇恨歧視、違法內容、轉售或盜用官方素材。管理員可提醒、隱藏、刪除、禁言或移出社群；嚴重情況保留紀錄並交由客服或平台處理。

官網接口原則：官網不一定佔用六格主按鈕，但 LINE、社群、商品卡、客服話術、出貨小卡都要能導回。官網至少需要品牌理念頁、三款禮盒商品頁、優惠券與活動規則、配送付款、退款退貨、服務條款、隱私權政策、免責聲明、LINE 社群規範、客服聯絡與支持創作團隊說明。

## 十五、三商品完整商品底稿

### 15.1 禪意日常玻璃杯禮盒

商品定位：低門檻引流款與日常祝福款。它不是普通水杯，而是把祝福、停留片刻與高頻使用整合進日常器物裡，適合自用，也適合作為送禮型禪意生活選品。

商品頁主標：每天入口的杯子，也可以是一份長久安心的祝福。

商品頁副標：禪意日常玻璃杯禮盒以簡潔玻璃材質、光影流動感、純圓形軟木杯墊與高級禮盒封裝，整理成一組每天都會用到的日常祝福。

玻璃材質不易老化，也沒有塑化劑疑慮，適合每天喝水、泡茶的日常使用。

隨盒純圓形軟木杯墊是禮盒完整感的一部分，不是廉價廣告贈品。

適合送父母、老師、親友、長輩，也適合留給自己。

可以自然說成：「願你每天喝水時，都多一點安心。」

不可宣稱保健、排毒、治療、能量轉換或任何醫療效果。

商品圖短句：每天入口，材質更安心。／一只每天會被拿起來的祝福。／玻璃杯＋軟木杯墊＋高級禮盒，心意更完整。／願你每天喝水時，都多一點安心。

### 15.2 禪意香氛杯禮盒

商品定位：日常香氛款與空間陪伴款。它不是強烈香氛，也不是功效型除臭品，而是用沉穩香氣與封裝式設計，讓玄關、床頭、書桌或靜心位置多一份安定。

商品頁主標：一份沉穩香氣，讓祝福留在每天經過的地方。

商品頁副標：禪意香氛杯禮盒採封裝式香氛膏、4.0mm 柱狀活性炭列陣設計、金色上蓋與高級禮盒封裝，呈現沉穩、克制、有秩序感的禪意識別。

適合床頭、玄關、書桌、靜心位置與小空間日常使用。

香氣路線偏內斂陪伴，不走濃烈、刺激、強力除臭的敘事。

4.0mm 柱狀活性炭列陣與金色上蓋是現行識別結構之一，但前台不需要過度工業化解釋。

自用有質感，結緣送禮也體面。

不可宣稱除甲醛、改善健康、助眠治療、強力除臭或空氣清淨功效。

商品圖短句：香氣不必張揚，也能安靜陪伴。／給床頭、玄關、書桌的一份沉穩祝福。／封裝式香氛杯禮盒，自用有質感，結緣也體面。／讓祝福不只是一句話，也是一個空間的安定感。

### 15.3 小型桌面型空氣清新機｜完整禮盒版

商品定位：中高客單完整禮盒版與長輩友善送禮款。前台主版本固定為完整禮盒版，不走裸機比價，也不把配件寫成廉價贈品；差異建立在版本整理、完整交付、禮盒封裝、使用體驗、品牌承接與客服售後。

商品頁主標：焚香後的小空間，也值得一份更舒服的日常照顧。

商品頁副標：小型桌面型空氣清新機｜完整禮盒版，把主機、行動電源、充電線、充電器、使用說明與高級禮盒封裝一次整理好；適合供桌旁、床邊、書桌邊、閱讀區與小房間日常使用。

完整禮盒版內容：主機＋行動電源＋充電線＋充電器＋使用說明＋高級禮盒封裝。

適合有拜拜、誦念、焚香習慣的家庭，尤其是供桌旁、床邊、書桌邊等小空間。

建議搭配通風使用，讓日常空氣感受更舒服。

不是自主研發機型、獨家硬體技術或市面唯一機種；前台不可這樣寫。

不可宣稱醫療級淨化、保證除 PM2.5、除甲醛、除病毒、改善健康或任何未經認證的除菌率。

商品圖短句：主機、配件與說明一次備齊。／不是只送一台機器，而是一份完整啟用的祝福。／供桌旁、床邊、書桌邊，多一份日常空氣感受的照顧。／焚香後的小空間，搭配通風與桌邊清新更舒服。

## 十六、三商品組合與結緣加購話術

三款商品不要彼此互相打架，而要形成不同價位與不同情境的結緣階梯。禪意日常玻璃杯禮盒負責低門檻、每天入口、長久安心；禪意香氛杯禮盒負責空間氛圍、香氣陪伴、體面禮盒；小型桌面型空氣清新機｜完整禮盒版負責焚香後小空間、完整配件、長輩友善與高客單送禮。

組合話術：如果是想送一份每天都會用到的心意，可以先選禪意日常玻璃杯禮盒；如果想讓對方的床頭、玄關或書桌多一份沉穩香氣，可以選禪意香氛杯禮盒；如果家裡有拜拜、誦念、焚香習慣，想要一份更完整、更省心的禮盒，可以選小型桌面型空氣清新機｜完整禮盒版。

加購語氣：不要說「差一點就升級」「不買會虧」。可以說「如果你想讓禮盒更完整，也可以一起看香氣陪伴或日常杯器；祝福不用一次買齊，適合自己的最重要。」

## 十七、上架頁面 CTA 與結緣下單按鈕

主 CTA：加入 LINE 領今日祝福

商品 CTA：看看商品與禮盒／請客服幫我選／第一次下單可貨到付款

玻璃杯 CTA：想看禪意日常玻璃杯禮盒

香氛杯 CTA：想看禪意香氛杯禮盒

空清機 CTA：想看小型桌面型空氣清新機｜完整禮盒版

優惠 CTA：今日優惠／查看優惠券

社群 CTA：加入社群，分享今日祝福

客服 CTA：真人客服／回饋建議

按鈕文案避免過度緊迫、恐嚇或折扣化。可以用「慢慢看」「客服幫你整理」「第一次下單可貨到付款」降低不安，尤其適合長輩與第一次購買者。

## 十八、付款、物流與安心配送話術

官網／下單頁短版：為了讓每一份禮盒更完整送達，目前以宅配到府為主，提供線上付款與貨到付款兩種方式。第一次下單若想更安心，也可以直接選擇貨到付款，收到商品後再付款即可。

FAQ：目前以宅配到府為主，提供線上付款與貨到付款兩種方式。一般情況下會配送到收件地址；若遇郵務規定的特殊情形，郵局會另行通知領件。

客服私訊：您好，目前我們以宅配到府為主，可選線上付款或貨到付款。若您第一次下單，想收到商品後再付款，也可以直接選擇貨到付款喔。

寄件名稱：您收到的禮盒與出貨資訊，皆會以微塵星海名義呈現。若有任何收件問題，也都可以直接找微塵星海 LINE 客服協助。

## 十九、文案禁區與替代說法

| 高風險說法 | 替代說法 |
| --- | --- |
| 塑膠都有毒、用塑膠杯一定會吃進塑化劑 | 每天入口的杯子，材質看得見、說得清楚，使用起來更安心。玻璃材質不易老化，也沒有塑化劑疑慮。 |
| 燒香一定傷身、燒香很危險 | 焚香後，客廳、供桌周邊、床邊或書桌邊容易留下煙味與殘留味道；搭配通風與桌邊空氣清新，日常氣氛會更舒服。 |
| 保證除 PM2.5／除甲醛／除病毒／醫療級淨化 | 適合小空間日常使用，讓常停留的位置多一份更舒服的空氣感受。 |
| 香氛杯強力除臭、改善失眠、治療過敏 | 偏沉穩、內斂的香氣陪伴，適合床頭、玄關、書桌與靜心位置。 |
| 開運改命、保證功德、宗教保證 | 結緣與傳遞祝福的靈感來自佛教，但商品定位是禪意生活選品與日常祝福。 |
| 支持創作可換折扣、會員、抽獎、優先客服 | 支持創作團隊是私人自願支持，可提供感謝語、感謝圖與進度更新，不兌換商品或服務。 |

## 二十、執行清單（本檔覆寫舊稿）

全站、LINE、客服、商品頁、社群貼文與 AI 知識包，主商品名一律使用完整名稱：禪意日常玻璃杯禮盒、禪意香氛杯禮盒、小型桌面型空氣清新機｜完整禮盒版。

LINE 六格一律改成：收下今日平安／點亮心意／今日共鳴／邀請好友／今日優惠／查看優惠券／看看商品與禮盒／真人客服／回饋建議。注意實際六格為六個按鈕，其中「點亮心意／今日共鳴」與「今日優惠／查看優惠券」各是一格。

不得再把「今天想送出祝福」與「看看大家點亮了什麼」拆成兩個 Rich Menu 主格；它們只能是「點亮心意／今日共鳴」底下的子入口。

「邀請好友」必須能承接邀請文字、邀請連結、邀請卡圖與邀請追蹤；對外語氣要自然，不得鼓勵洗券。

「真人客服／回饋建議」可包含支持創作團隊子入口，但不得與商品、折扣、會員、抽獎、優先客服或付費專屬內容綁定。

優惠文案不得只寫「今日優惠」，一律改為「今日優惠／查看優惠券」或「結緣回饋」。

所有折抵說法必須加上「實際折抵以下單頁或系統試算為準」。客服不可口頭保證最終金額。

社群對外名稱固定為「微塵星海｜分享今日祝福」；OA 對外名稱固定為「微塵星海｜今日祝福」。

若後續要做圖卡，優先使用本檔「商品圖短句」區塊，不要重新自由發揮。

正式公開前仍需依實際商品標示、金物流設定、平台規範與法務／稅務建議做最後確認。

## 二十一、內部合規依據與對外邊界（不必全部放上商品頁）

本段供內部與客服理解文案尺度，不是商品頁必放文字。

塑膠容器：主管機關提醒消費者應注意塑膠材質、標示與正確使用方式；熱食、高酸或高油脂食品應依材質限制正確使用。因此對外可說「材質看得見更安心」，不可說「塑膠都有毒」。

玻璃杯：可說玻璃不是塑膠材質，少一層對塑膠材質與塑膠老化的疑慮；不可說玻璃有保健、排毒、治療效果。

焚香與室內空氣：燃燒行為可能產生懸浮微粒與氣體副產物，室內焚香應注意通風。因此對外可說「焚香後客廳、供桌周邊或常停留位置容易有煙味與殘留味道，搭配通風與桌邊空氣清新，日常氣氛會更舒服」，不可說「燒香一定傷身」或「本商品保證清除污染物」。

香氛杯：可寫香氣陪伴、空間氛圍與材質元素；不可寫強力除臭、除甲醛、空氣清淨、助眠治療或健康功效。

LINE 與 AI：AI 草稿器只做後台建議，不自動送出；內部標籤、風險判斷、客群分流與市場分析不得出現在前台、客服複製話術、LINE 選單或商品頁。
