# crawl gaps

## 403 / blocked
- https://wabay.tw/rewards/38301?locale=zh-TW -> 403 Forbidden（直接連出頁）
- https://wabay.tw/rewards/38029?locale=zh-TW -> 403 Forbidden（直接連出頁）
- https://wabay.tw/rewards/38585?locale=zh-TW -> 403 Forbidden（直接連出頁）
- https://wabay.tw/rewards/38584?locale=zh-TW -> 403 Forbidden（直接連出頁）

## 動態渲染但已補齊
- https://www.kampojanechen.org/（首頁導覽可見，商品細節有限）
- https://www.kampojanechen.org/v2/official/SalePageCategory/587622（分類文案可見）
- https://mokshah.org/support/book（主要價格可見，但含模板變數）

## 仍抓不到欄位
- 多數頁面未公開統編欄位；僅 donate.kampojanechen.org 明確顯示統編 42521621。
- 實際交易/訂單/付款成功量未公開，依規範不進入結帳流程。

## 模板變數頁面
- https://mokshah.org/support/book 出現 `{{ item.title }}` 等模板片段，表示部分內容靠前端資料綁定。

## 需人工瀏覽確認
- donate.kampojanechen.org 的「立即支持」外連到 wabay，因 403 無法於本次路徑取得對應回饋頁細節。
