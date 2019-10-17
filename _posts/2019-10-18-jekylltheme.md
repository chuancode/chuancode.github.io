---
title: Github Pages 使用 Jekyll 網頁模版
description: 使用 Jekyll Themes 網頁模版搭建 Github Pages (Mac OS)
categories:
 - Jekyll
 - GitPages
tags:
---

## 在 <a herf="http://jekyllthemes.org/">Jekyll Themes</a> 選擇喜歡的模板

以 <a herf="http://jekyllthemes.org/themes/Minimal-Resume/">Minimal Resume</a> 為例

## 終端機指令

### 檢查是否安裝 Ruby

```
ruby --version
```

### 下載 Ruby

```
brew install ruby
```

### 下載 Bundler

```
gem install bundler
```

### 下載模板

```
git clone https://github.com/murraco/jekyll-theme-minimal-resume.git
cd jekyll-theme-minimal-resume
```

### 下載 Jekyll 與附屬檔案

```
bundle install
```

### 在本地執行網頁

基本指令，網站將開在 127.0.0.1:4000

```
bundle exec jekyll serve
```

開在指定IP

```
bundle exec jekyll serve --port 8080
```

## 部落格資料夾用途

```
|-- _config.yml
|-- _posts/
|-- _site/
|-- 404.html
|-- about.md
|-- Gemfile
|-- Gemfile.lock
|_  index.md
```

_config.yml &nbsp; &#10140; &nbsp; 基本網頁配置 <br>
_posts &nbsp; &#10140; &nbsp; 網頁文章 <br>
_site &nbsp; &#10140; &nbsp; <br>
404.html &nbsp; &#10140; &nbsp; 錯誤頁面 <br>
about.md &nbsp; &#10140; &nbsp; 關於頁面 <br>
index.md &nbsp; &#10140; &nbsp; 主頁面 <br>
Gemfile &nbsp; &#10140; &nbsp; Ruby 代碼集合 <br>
Gemfile.lock &nbsp; &#10140; &nbsp; 所有安裝的的版本資訊

<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/jekyll/gitpages/2019/10/17/jekylltheme/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
