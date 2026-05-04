# CODEX MASTER WORK PLAN INDEX｜微塵星海｜2026-05-04

Codex must read this file first.

You are working in master/work. Do not switch branches. Do not fetch remote context branches.

Read this full plan before editing:

- \docs/codex-master-work-plan/20260504/CODEX_MASTER_WORK_SAFE_PATCH_FULL_PLAN_20260504.md\

If the full file is too large for your context window, read chunks in order:

- \docs/codex-master-work-plan/20260504/chunks/chunk_01_of_05.md\
- \docs/codex-master-work-plan/20260504/chunks/chunk_02_of_05.md\
- \docs/codex-master-work-plan/20260504/chunks/chunk_03_of_05.md\
- \docs/codex-master-work-plan/20260504/chunks/chunk_04_of_05.md\
- \docs/codex-master-work-plan/20260504/chunks/chunk_05_of_05.md\

Task summary:

Perform a conservative public website copy correction for 微塵星海.

This is NOT a rewrite.
This is NOT a redesign.
This is NOT a LINE / Supabase / LIFT / Webhook / AI implementation task.
This is NOT cleanup-by-deletion.

Preserve existing website design, shopping flow, product pages, product data, images, FAQ, Navbar, Footer, legal long-form pages, customer-service information, and all important existing content.

Patch outdated public-facing wording to align with the 2026-05-04 finalized brand spirit, LINE six-grid, product naming, coupon language, shipping/payment language, and compliance boundaries.

Do not repeat PR #29/#30/#31. Those were wrong because they deleted too much and turned the website into skeleton pages.

Latest fixed LINE six-grid:

1. 收下今日平安
2. 點亮心意／今日共鳴
3. 邀請好友
4. 今日優惠／查看優惠券
5. 看看商品與禮盒
6. 真人客服／回饋建議

Latest product names:

1. 禪意日常玻璃杯禮盒
2. 禪意香氛杯禮盒
3. 小型桌面型空氣清新機｜完整禮盒版

Hard requirements:

- Do not delete /shop or /shop/[id].
- Do not redirect /shop or /shop/[id] to empty pages.
- Do not delete AddToCartButton, PriceDisplay, ProductJsonLd, CartProvider, product images, product cards, FAQ, Navbar, Footer, legal long text, or customer-service blocks.
- Do not shrink data/brandContent.ts into a minimal product array.
- Do not delete old important educational / TCM / Chinese-medicine / legal / product / shipping / FAQ content. If risky, rewrite conservatively instead.
- Do not expose internal words on public pages: OA, 私域, 漏斗, database, AI, Webhook, Supabase, LIFT, LIFF, token, 演算法, conversion, 分群, 成交溫度, 風險標籤.
- Do not introduce forbidden claims: 醫療效果, 神奇效果, 保證改善健康, 保證除 PM2.5, 除甲醛, 除病毒, 治療過敏, 治療失眠, 開運改命, 宗教功德保證.
- Replace 場域 with 空間 in public copy.

Start by reading the full plan, then inspect the current website, then make minimal targeted patches.
