---
title: Google Tag Manager 抓取 Client Id
description: 利用 Tag Manager 追蹤 Google Analytics Client Id
categories:
 - Google Analytics
 - Google Tag Manager
tags:
 - GTM
---
## Client Id 是？

當進入有使用GA的網站時,GA會發送一組Cookie到瀏覽器中來追蹤訪客的行為,這組Cookie就是GA中的Client Id(CID)

## 如何利用 GTM 取得 Client Id

### 設置自定義維度

Google Analytics &#10140; 管理 &#10140; 自訂定義 &#10140; 自定維度 &#10140; 新增自定維度

![cid-1](/assets/images/post/cid-1.png)

### GTM設置新變數

&#9745; 變數類型；自訂JavaScript

<script src="https://gist.github.com/chuan520/ed0a4b7784969ec26626d6d0c632f62f.js"></script>

![cid-2](/assets/images/post/cid-2.png)

### 建立觸發條件

&#9745; 觸發條件類型： 網頁瀏覽 - 視窗已載入 ( Page View - Window Loaded )
&#9745; 這項觸發條件的啟動時機：部分的載入視窗事件

![cid-3](/assets/images/post/cid-3.png)

### 建立代碼 ( Tags )

![cid-4](/assets/images/post/cid-4.png)

## 在 Google Analytics 查看

再次要維度中選擇自定義維度的名稱

![cid-5](/assets/images/post/cid-5.png)

<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/google%20analytics/google%20tag%20manager/2019/10/08/gtm-track-clientId/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
