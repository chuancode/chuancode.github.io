---
title: AWS RDS(MySQL) & MySQL Workbench
description: 使用 AWS RDS 開啟 MySQL 並連接 MySQL Workbench
categories:
 - AWS
tags:
 - AWS RDS
 - MySQL
 - MySQL Workbench
---

## 在 AWS RDS 中建立 MySQL

### 資料庫配置

![awsrds-1-1](/assets/images/post/awsrds-1.png)

&#9745; 命名資料庫 (DB instance identifier)
&#9745; 設定主用戶名稱 (Master username)
&#9745; 設定主用戶密碼 (Master password)

![awsrds-2](/assets/images/post/awsrds-2.png)

&#9745; 選擇免費模板 (Free tier) 時, Availability & durability 無法做更改

![awsrds-3](/assets/images/post/awsrds-3.png)

&#9745; 建立VPC
&#9745; 若是要讓外部連接 Public accesible 選 Yes

![awsrds-4](/assets/images/post/awsrds-4.png)

&#9745; 設定資料庫認證方式

![awsrds-5](/assets/images/post/awsrds-5.png)

&#9745; 設定初始資料庫名稱(不設定亦可,可之後更改)

![awsrds-6](/assets/images/post/awsrds-6.png)

## 連接 MySQL Workbench

### 連接設定

MySQL Workbench &#10140; Database &#10140; Connect to Database

&#9745; Hostname : RDS Endpoint
&#9745; Port

![awsrds-8](/assets/images/post/awsrds-8.png)


&#9745; Username : master username
&#9745; Password : master password (選案 "Store in Vault ..." 來輸入密碼)

![awsrds-7](/assets/images/post/awsrds-7.png)


### 錯誤解決方案

錯誤訊息:

```
 error "Cannot Connect to Database Server" error (10060).
```

解決方式:
1) 在 RDS 的 Security Group 建立相對應的輸入規則

![awsrds-9](/assets/images/post/awsrds-9.png)

2) 或者也有可能是網路的問題,可嘗試使用不同的網路


<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/aws/2020/04/14/aws-mysql-workbench/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
