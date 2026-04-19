# 公開網站結構化研究報告（遵守公開訪問範圍）

- 研究日期：2026-04-19 (UTC)
- 研究範圍：
  - https://www.kampojanechen.org/
  - https://donate.kampojanechen.org/
  - https://mokshah.org/
  - 專案相關公開頁（含 wabay 連出頁）
- 合規聲明：僅使用公開頁資訊；未登入；未繞過限制；未抓非公開資料。
- 技術限制：部分站點/子頁對抓取器返回 403/Timeout（含 wabay rewards 頁）；因此「全站 sitemap」為**可見公開頁的樣本型 sitemap**，非完整索引。

---

## 1) 可見公開頁 sitemap（樣本）

### A. donate.kampojanechen.org
1. https://donate.kampojanechen.org/  
   - 募資主頁，含方案、FAQ、收據說明、統編資訊、外連 CTA（wabay）

### B. mokshah.org
1. https://www.mokshah.org/news/detail/1020  
2. https://mokshah.org/fund/index  
3. https://www.mokshah.org/about  
4. https://www.mokshah.org/ultimateliberation  
5. https://www.mokshah.org/news  
6. https://mokshah.org/article/detail/1433  

### C. kampojanechen.org（商城/內容頁）
1. https://www.kampojanechen.org/SalePage/Index/11502351  
2. https://www.kampojanechen.org/SalePage/Index/10071205  
3. https://www.kampojanechen.org/SalePage/Index/9976435  
4. https://www.kampojanechen.org/SalePage/Index/11521786  
5. https://www.kampojanechen.org/SalePage/Index/8160798  
6. https://www.kampojanechen.org/SalePage/Index/11073753  
7. https://www.kampojanechen.org/SalePage/Index/8172485  
8. https://www.kampojanechen.org/SalePage/Index/11679846  
9. https://www.kampojanechen.org/SalePage/Index/11680242  
10. https://www.kampojanechen.org/SalePage/Index/11679835  
11. https://www.kampojanechen.org/SalePage/Index/8172475  
12. https://www.kampojanechen.org/SalePage/Index/11680180  
13. https://www.kampojanechen.org/v2/Official/BrandStory  
14. https://www.kampojanechen.org/shop/introduce/41047?t=1  
15. https://www.kampojanechen.org/Shop/Introduce/41047?t=2  
16. https://www.kampojanechen.org/shop/introduce/41047?t=3  

### D. 專案相關公開頁（wabay）
1. https://wabay.tw/rewards/38585?locale=zh-TW （由 donate 主頁 CTA 連出；抓取時 403）
2. https://wabay.tw/rewards/38584?locale=zh-TW （由 donate 主頁 CTA 連出；抓取時 403）

---

## 2) 商品頁 / 服務頁 / 募資頁 / FAQ / 關於頁盤點

- 商品頁：`/SalePage/Index/*` 類型（多筆）。
- 服務/公益募資頁：
  - https://donate.kampojanechen.org/
  - https://mokshah.org/fund/index
- FAQ：
  - donate 首頁內建「常見問題」區塊。
  - mokshah fund 頁有「常見問題 5」導覽標籤。
- 關於頁：
  - https://www.mokshah.org/about
  - https://www.kampojanechen.org/v2/Official/BrandStory（可見連結）
  - https://www.kampojanechen.org/shop/introduce/41047?t=1（商店簡介）

---

## 3) 逐頁結構化整理（重點頁）

> 說明：部分 kampojanechen 商品頁為前端模板渲染，文字可見但價格欄位在抓取輸出中為 template 變數，故以「未公開可讀」標示。

| URL | 頁面類型 | 標題 | 價格或方案金額 | CTA 按鈕文字 | 收據/統編/法人資訊 | 轉化機制（倒數/限額/定期/單筆） |
|---|---|---|---|---|---|---|
| https://donate.kampojanechen.org/ | 募資頁 | 台灣岡波聖地閉關中心建造計劃 | 單筆：$3,600；月付：$300/$600/$1,200/$2,880/$4,680；高額單筆：NT$66,000/NT$168,000 | 立即支持 | 有：FAQ 提到收據次年四月前寄出；頁底顯示「解脫協會 統編：42521621」 | 有：每月定額、單筆支持、每月限額（6 位/3 位）、12 期機制 |
| https://mokshah.org/fund/index | 公益募資頁 | 植福互助送行計劃 | 每月：$220/$600/$1,200/$1,800/$3,800；單次：$220/$600/$1,200/$1,800/$3,800；頁首顯示當月累計與月目標 NT$600,000 | 贊助、贊助專案、免費領取送行聖物包、聯絡客服、免費法事 | 頁面未直接顯示統編/稅籍（可見組織名 MOKSHAH 解脫協會） | 有：長期募資、進度%、每月與單次雙軌、FAQ 標籤 |
| https://www.mokshah.org/news/detail/1020 | 內容導流頁 | 最新消息文章頁（含導流） | 無明確價格 | 公益集資（導向 fund/index） | 組織介紹可見（解脫協會） | 有導流到募資頁 |
| https://www.kampojanechen.org/SalePage/Index/11502351 | 商品頁（商城） | 〖施財寶閣寶藏館〗寶賢錢母：多有神驗 | 抓取輸出未顯示實際金額（模板變數） | 結帳、查看贈品、詳細說明 | 可見站點法人名「岡波事業社」（頁尾） | 有：商品分類、加價購、點數、會員/購物車流程 |
| https://www.kampojanechen.org/SalePage/Index/8160798 | 商品頁（商城） | 〖度母之家寶藏館〗好運輪鍊 | 價格未在可讀輸出中 | （同類型） | 頁尾可見「岡波事業社」 | 有：已賣出件數（snippet 可見 389） |
| https://www.kampojanechen.org/SalePage/Index/11073753 | 商品頁（商城） | 〖度母之家寶藏館〗不動護輪 | 價格未在可讀輸出中 | （同類型） | 頁尾可見「岡波事業社」 | 有：已賣出件數（snippet 可見 669） |
| https://www.kampojanechen.org/v2/Official/BrandStory | 關於頁 | 品牌故事 | 不適用 | 不適用 | 未直接擷取到全文（0 lines） | 內容導流（推定）；待人工瀏覽補齊 |

---

## 4) 價格帶彙整表

> 依目前可讀公開頁資訊（募資頁最完整；商城價格因模板渲染缺漏）。

| 區間 | 觀察價格帶 | 來源頁 |
|---|---:|---|
| 低價入口 | NT$220（單次/每月） | https://mokshah.org/fund/index |
| 中價主力 | NT$600、NT$1,200、NT$1,800、NT$3,800；donate 月付 NT$300~NT$4,680 | https://mokshah.org/fund/index、https://donate.kampojanechen.org/ |
| 高價方案 | NT$66,000、NT$168,000（單筆高額） | https://donate.kampojanechen.org/ |
| 定期定額方案 | donate 月付階梯（300/600/1200/2880/4680）；mokshah 月付階梯（220/600/1200/1800/3800） | https://donate.kampojanechen.org/、https://mokshah.org/fund/index |

---

## 5) 商業結構判讀（公開訊號）

### A. 協會募資 / 公益
- https://donate.kampojanechen.org/（宗教公益式募資，含收據與統編資訊）
- https://mokshah.org/fund/index（長期募資、月目標、單次/每月方案）

### B. 商城銷售
- https://www.kampojanechen.org/SalePage/Index/*（寶藏館商品頁）
- 站內可見購物車、結帳、點數、加價購、運送與會員機制（雖金額欄位抓取缺失）。

### C. 內容導流
- https://www.mokshah.org/news/detail/1020（內容頁導向 `fund/index`）
- kampojanechen 關於/品牌頁與商品頁 footer 導覽（品牌故事、商店簡介、FAQ）形成內容→商城/募資漏斗。

---

## 6) 變現訊號與「穩定收款能力」評估（僅公開證據）

### 可觀測變現訊號
1. 多層級價格梯（小額到高額）同時存在。  
2. 同時提供單筆與每月定額方案。  
3. 募資頁有進度、目標、人次、長期募資標記（至少在 mokshah fund）。  
4. 有明確 CTA（立即支持 / 贊助）。  
5. 商城站具交易流程元件（購物車、結帳、配送、會員）。

### 支持「有穩定收款能力」的公開證據
1. `mokshah.org/fund/index` 顯示每月目標與當月累計（例如 NT$137,568 / 目標 NT$600,000）及人次。  
2. `donate.kampojanechen.org` 具定期定額機制與 12 期續扣/取消流程說明。  
3. `donate` 頁明示收據寄送時點，且標示「解脫協會 統編：42521621」。

### 無法證明實際獲利的關鍵缺口
1. 未公開財報、實收淨額、手續費後入帳、退款率、續訂率、LTV。  
2. 商城多數商品頁在公開抓取輸出缺少可讀價格欄位（前端渲染）。  
3. wabay rewards 實頁 403，無法驗證最終結帳頁的公開細節。  
4. 無法由公開頁直接得知「營利/非營利」帳務如何分流與認列。

---

## 7) 方法與限制說明

- 僅使用公開索引與可訪問頁；未使用登入態。
- 嘗試訪問下列公開路徑時遭遇技術限制：
  - `robots.txt` / `sitemap.xml`（多站返回 403 tunnel）
  - `wabay.tw/rewards/*`（403）
  - 部分 kampojanechen 子頁（timeout 或 0-line 動態渲染）
- 因此本報告採「證據可見即記錄；不可見則明示缺口」原則。

