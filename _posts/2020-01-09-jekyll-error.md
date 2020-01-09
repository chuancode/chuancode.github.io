---
title: Jekyll serve 錯誤
description: Jekyll serve Error Invalid CP950 character
categories:
 - Jekyll
tags:
 - Jekyll
 - Jekyll error
---

## bundle exec jekyll serve ERROR!

錯誤訊息:

```
Conversion error: Jekyll::Converters::Scss encountered an error while converting 'assets/css/style.scss':
                  Invalid CP950 character "\xE2" on line 5
jekyll 3.7.4 | Error:  Invalid CP950 character "\xE2" on line 5
```

## Debug

在 assets/css 新增 style.scss, 內容為:

```
---
---

@charset "UTF-8";
```

<iframe data-v-b66e9a5a="" src="https://button.like.co/in/embed/a0976663511/button?referrer=https://chuancode.github.io/jekyll/2020/01/09/jekyll-error/" frameborder="0" scrolling = "no" class="lc-margin-top-64 lc-margin-bottom-32 lc-mobile"></iframe>
