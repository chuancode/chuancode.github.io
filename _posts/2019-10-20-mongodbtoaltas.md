---
title: MongoDB 本地資料庫移至 MongoDB Atlas
description: 將本地的 MongoDB 轉移至 雲端
categories:
 - MongoDB
tags:
- mondodb
- mongodb atlas
---

## 新增使用者

使用 admin 資料庫，新增 root 權限使用者

```
>use admin

>db.createUser(
      {
          user: "admin",
          pwd: "admin",
          roles: [ "root" ]
      }
  )
```

## 資料庫處理

選擇要匯出的資料庫

```
mongodump --host 127.0.0.1
  --port 27017
  -u <使用者名稱>
  --authenticationDatabase admin
  --db <匯出資料庫名稱>
  -o <匯出路徑>
```

成功後會出現以資料庫為名稱的資料夾，其中包含兩個檔案 .bson 與 .json

## 資料庫載入到 MongoDB Altas

### 在 MongoDB Altas 創建 Clusters

### 資料庫匯入 Clusters

Clusters &#10140; ... &#10140; Command Line Tools

![altas-1](/assets/images/post/altas-1.png)

複製 mongorestore 下的程式碼，更改為下 &#8595;

```
mongorestore
  --host <host>
  --ssl
  --username <USERNAME>
  --password <PASSWORD>
  --authenticationDatabase admin
  --db <資料庫名稱> C:\Users... <資料庫路徑>
```

## 結果

在 Sandbox 中點擊 Collections

在此頁面若是成功上傳資料庫則會顯示於此

![altas-2](/assets/images/post/altas-2.png)

<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/mongodb/2019/10/20/mongodbtoaltas/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
