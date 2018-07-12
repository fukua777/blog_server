---
title: About　Fetch
tags: "<span style='color: #000; font-size: 20px;'>fetch</span>"
categories: 甫夸之谈———JS
date: 2018-06-26
---

> 关于

　　fetch是获取请求的一种方法，会返回Promise，相对ajax，属于较底层api。
> 特点

1. 默认不带coolie，可以设置，也可以设置其它请求头。
2. fetch返回promise，当遇到网络错误时会被reject，对很多4xx、5xx不会报错，判断成功与否需要在resolve时增加对response.ok属性的判断。
3. 对于xhr中的abort、progress，在fetch中有相应的控制器可处理（FetchController、AbortController），好像还没有正式成为规范。

<!-- more -->
> 语法

* <h1 id="req">request</h1>
```
    fetch( url[, options])
```
 * url，要获取资源的url
 * options，配置项对象，包含请求的设置
   * `method`：请求方法。默认GET。
   * `headers`：包含请求头设置的对象。
   * `body`：请求的body信息。
   * `mode`：请求的模式。如`cors`、`no-cors`或者`some-origin`。
   * `credentials`：请求的`credentials`。如`omit`、`some-origin`或者`include`，设置`include`时，在当前域请求时会带上cookie。
   * `cache`：请求的`cache`模式。如`default`、`no-store`、`reload`、`no-cache`、`force-cache`或者`only-if-cached`。
   * `redirect`：可用的`redirect`模式。如`follow`（自动重定向）、`error`（如果产生重定向会自动终止并抛出错误）或者`manual`（手动处理）
   * `referrer`：请求来源。如`no-referrer`、`client`或者一个URL。默认`client`。？
   * `referrerPolicy`：请求来源的策略。如`no-referrer`、`no-referrer-when-downgrade`、`origin`、`origin-when-cross-origin`、`unsafe-url`。？
   * `integrity`：请求子资源的完整值。？
* <h1 id="res">response</h1>
```
    fetch( url).then( function(res){
        return res.json();
    })
```
 * 在请求的resolve时会得到一个Response对象
   * `status`：状态码。
   * `ok`：表示请求是否成功的布尔值。
   * `res.blob()`、`res.arrayBuffer()`、`res.formData()`、`res.json()`、`res.text()`这几个方法是读取Response并将它设置为已读（即只可读一次），并返回一个相应格式的promise对象。
