---
title: React Native & Android emulator Setting
description: React Native 與 Android 配置方式 , 並利用 Android emulator(模擬器)進行測試
categories:
 - React
 - Android
tags:
 - React
 - React Native
 - Android
---

####  &#10003;已安裝Node


## 安裝軟體

1. [Android Studio](https://developer.android.com/studio)
2. [Java JDK 8](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)
    **&#33; 需登入後安裝**

## 設定環境變數

### JAVA

環境變數 &#8594; 系統變數(下方)

變數名稱: JAVA_HOME

變數值: C:\Program Files\Java\jdk1.8.0_251

### Android

詳盡 Android 配置請參考 

&#x261E; React Native Setting up the development environment 中的 [React Native CLI Quickstart 篇](https://reactnative.dev/docs/environment-setup#docsNav)

**1. ANDROID_HOME**

環境變數 &#8594; 系統變數(下方)

變數名稱: ANDROID_HOME

變數值: C:\Users\USERNAME\AppData\Local\Android\Sdk

**2. Android platfotm tools**

環境變數 &#8594; 系統變數(下方) &#8594; 點擊Path

路徑: C:\Users\USERNAME\AppData\Local\Android\Sdk\platform-tools

**3. Android emulator**

環境變數 &#8594; 系統變數(下方) &#8594; 點擊Path

路徑: C:\Users\USERNAME\AppData\Local\Android\Sdk\emulator

## Android SDK

![reactandroid-1.jpg](/assets/images/post/reactandroid-1.jpg)

&#10003; Android 9.0 pie

&#10003; Android SDK Platform 28

&#10003; Intel x86 Atom_64 System Image 或 Google APIs Intel x86 Atom System Image


## 建立 Android 模擬器

&#10003; 使用API 28 (Pie)

![reactandroid-2.jpg](/assets/images/post/reactandroid-2.jpg)

![reactandroid-3.jpg](/assets/images/post/reactandroid-3.jpg)

## React Native 專案建立

1. 安裝 Expo CLI

    ``` npm install -g expo-cli```

2. 建立專案

    ``` npx react-native init PROJECTNAME```

3. 進入專案資料夾, 執行模擬器測試

    ``` 
    cd PROJECTNAME
    npx react-native run-android
    ```

成功的話會自動開啟模擬器並顯示專案

<img src="/assets/images/post/reactandroid-4.jpg" width="200">



### References



<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/2020/07/08/2020-07-08-react-android/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
