---
title: Django 使用 MySQL 遇到的錯誤
description: Django + Mysql 各種問題解決方法 (Win10)
categories:
 - Django
tags:
 - Django
 - Mysql
 - Django with Mysql error
---

## ERROR 1!

錯誤訊息:

```
Authentication plugin 'caching_sha2_password' cannot be loaded: dlopen(/usr/local/mysql/lib/plugin/caching_sha2_password.so, 2): image not found
```

解決方式:
在 Mysql 環境中更改身份驗證方式
```
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '你的密碼';

```

## ERROR 2!

錯誤訊息:

```
django.db.utils.OperationalError: (1049, "Unknown database 'mydatabase'")
```

解決方式:
在 Django 同步資料庫時要先手動建立資料庫
在 Mysql 環境中建立資料庫並制定編碼
```
create database mydatabase character set utf8;

```

## ERROR 3!

錯誤訊息:
建立超級用戶(createsuperuser)時出錯

```
django.db.utils.ProgrammingError: (1146, “Table ‘auth_user’ doesn’t exist”)
```

解決方式:
進行遷移(migrate)來創建auth_user表

```
python manage.py makemigrations
python manage.py migrate

```

<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/2020/01/16/2020-01-16-django-sql/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
