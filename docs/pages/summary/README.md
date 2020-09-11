---
title: 前端基础知识查漏补缺
date: 2020-08-12
isTimeLine: true
categories:
  - FrontEnd
tags:
  - Summary
keys:
 - '2b8f30efa99aa9180399597cc4e9a88d'
---

## 1. JavaScript

### 1.1 对象类型判断
+ **typeof**
> 只能判断区分基本类型， number、string、boolean、undefined、object 和 function，但数组和对象无法判断（如下所示，都输出 `object` ）

```js
    console.log(typeof 1)               // number
    console.log(typeof 'abc')           // string
    console.log(typeof true)            // boolean
    console.log(typeof [])              // object  👈
    console.log(typeof {})              // object  👈
    console.log(typeof RegExp())        // object
    console.log(typeof null)            // object
    console.log(typeof undefined)       // undefined
    console.log(typeof function(){})    // function
```
+ **instanceof**
```js
let a = [],
    b = {};
    console.log(a instanceof Array)          // true
    console.log(a instanceof Object)         // true    👈  数组也是对象，所以为true
    console.log(b instanceof Object)         // true

    let str = new String(); 
    console.log(str instanceof String)       // true
```

+ **constructor**
```js
let o = {};
    o.constructor == Object       //true
let arr = [];
    arr.constructor == Array      //true
    arr.constructor == Object     //false
```
> **注意！**  constructor属性是可以被修改的，会导致检测出的结果不正确，所以此方法不建议

+ **Object.prototype.toString.call()**

::: danger
**最有效，推荐此方法**
:::

```js
    console.log(Object.prototype.toString.call(123))            //[object Number]
    console.log(Object.prototype.toString.call('abc'))          //[object String]
    console.log(Object.prototype.toString.call(undefined))      //[object Undefined]
    console.log(Object.prototype.toString.call(true))           //[object Boolean]
    console.log(Object.prototype.toString.call({}))             //[object Object]
    console.log(Object.prototype.toString.call([]))             //[object Array]
    console.log(Object.prototype.toString.call(function(){}))   //[object Function]
    console.log(Object.prototype.toString.call(null))           //[object Null]
``` 
   
### 1.2 数组判断方法
   
```js
let arr = []
1.  instanceof 
    arr  instanceof Array

2. __proto__
   arr.__proto__  === Array.prototype

3. constructor
    arr.constructor === Array

4. Object.prototype.toString
   Object.prototype.toString.call(arr) === '[object Array]'

5. Array.isArray
    Array.isArray(arr)
```

::: warning 
+ 方法1，2，3 主要是通过原型去判断的;   
+ 4是通过object类型的副属性class去判断的，其中函数的class是Function，结果是[object Function]， 普通的对象是Object，结果是[object Object];   
+ 5是es6新增的方法;
:::

## 2. CSS

### 2.1 import / link 区别
css样式表引入的方式有4种：

1. 行内式  
 `使用style属性 <p style=""></p>`

2. 内嵌式   
`使用style标签  <style></style>`

3. 外链式   
`使用link标签    <link rel="stylesheet" href="">`

4. 使用@import引入   
` @import url;  `

+ **link 和 @import 的区别**
> 1. link 属于 XHTML 标签，除了可加载CSS之外，还可以做很多事情，例如定义RSS、rel链接属性等； @import 是css提供的一种方式，只能加载CSS
> 2. 加载顺序： link 引入的样式会在页面加载时同时加载，而@import引入的样式只会在页面加载完之后再加载，会造成页面闪烁
> 3. 用JS控制Dom改变样式时，只能用link，@import则不支持（不是Dom，不可控制）
> 4. @import可以在css中再次引入其他样式表，比如创建一个主样式表，在主样式表中再引入其他的样式表，如下所示：这样有利于修改和扩展。但是这样做有一个缺点，会对网站服务器产生过多的HTTP请求，以前是一个文件，而现在确实两个或更多的文件了，服务器压力增大，浏览量大的网站还是谨慎使用。

```css
　　@import “sub1.css”; 
　　@import “sub2.css”; 
　　sub1.css 
　　———————- 
　　p {color:red;} 
　　sub2.css 
　　———————- 
　　.myclass {color:blue} 
```
+ **最优的@import书写方式**

```css
  @import 'style.css' //Windows IE4/ NS4, Mac OS X IE5, Macintosh IE4/IE5/NS4不识别 
  @import "style.css" //Windows IE4/ NS4, Macintosh IE4/NS4不识别 
  @import url(style.css) //Windows NS4, Macintosh NS4不识别 
  @import url('style.css') //Windows NS4, Mac OS X IE5, Macintosh IE4/IE5/NS4不识别 
  @import url("style.css") //Windows NS4, Macintosh NS4不识别 
```

由上分析知道，`@import url(style.css)` 和 `@import url（"style.css"）` 是最优的选择，兼容的浏览器最多。从字节优化的角度来看 `@import url(style.css)` 最值得推荐。


### 2.2 css reset   

> 不同浏览器的默认样式之间存在差别，例如 `ul` 默认带有缩进样式，IE 浏览器是用 `margin` 实现， 而 FirFox 浏览器是用 `padding` 实现，导致兼容问题、影响开发效率，所以用重新定义的标签样式覆盖浏览器默认样式。

常见CSS reset    
#### 2.1.1  Eric Meyer’s “Reset CSS” 2.0   

```css
/** 
* Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/) 
* http://cssreset.com 
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
    display: block;
}
body {
    line-height: 1;
}
ol, ul {
    list-style: none;
}
blockquote, q {
    quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
```   
#### 2.1.2 HTML5 Doctor CSS Reset   

```css
/* 
html5doctor.com Reset Stylesheet
v1.6.1
Last Updated: 2010-09-17
Author: Richard Clark - http://richclarkdesign.com 
Twitter: @rich_clark
*/

html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, sub, sup, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video {
    margin:0;
    padding:0;
    border:0;
    outline:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}

body {
    line-height:1;
}

article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
    display:block;
}

nav ul {
    list-style:none;
}

blockquote, q {
    quotes:none;
}

blockquote:before, blockquote:after,
q:before, q:after {
    content:'';
    content:none;
}

a {
    margin:0;
    padding:0;
    font-size:100%;
    vertical-align:baseline;
    background:transparent;
}



/* change colours to suit your needs */
ins {
    background-color:#ff9;
    color:#000;
    text-decoration:none;
}

/* change colours to suit your needs */
mark {
    background-color:#ff9;
    color:#000; 
    font-style:italic;
    font-weight:bold;
}

del {
    text-decoration: line-through;
}

abbr[title], dfn[title] {
    border-bottom:1px dotted;
    cursor:help;
}

table {
    border-collapse:collapse;
    border-spacing:0;
}

/* change border colour to suit your needs */
hr {
    display:block;
    height:1px;
    border:0;   
    border-top:1px solid #cccccc;
    margin:1em 0;
    padding:0;
}

input, select {
    vertical-align:middle;
}
```

#### 2.1.4 Yahoo! (YUI 3) Reset CSS

```css
/*
YUI 3.18.1 (build f7e7bcb)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/
html{color:#000;background:#FFF}
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td{margin:0;padding:0}
table{border-collapse:collapse;border-spacing:0}
fieldset,img{border:0}
address,caption,cite,code,dfn,em,strong,th,var{font-style:normal;font-weight:normal}
ol,ul{list-style:none}
caption,th{text-align:left}
h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
q:before,q:after{content:''}
abbr,acronym{border:0;font-variant:normal}
sup{vertical-align:text-top}
sub{vertical-align:text-bottom}
input,textarea,select{font-family:inherit;font-size:inherit;font-weight:inherit;*font-size:100%}
legend{color:#000}

#yui3-css-stamp.cssreset{display:none}
```

#### 2.1.5 Universal Selector ‘*’ Reset

```css
/* cssreset.com */
* {
margin: 0;
padding: 0;
}
```

#### 2.1.6 Normalize.css官网
内容较多，查看Github Repo   👉👉👉 [ Normalize git地址 ](https://github.com/necolas/normalize.css)

## 3. 前端安全

## 4. 性能 & SEO优化

### 4.1 SEO优化

+ 标签语义化
+ `meta` 标签 `keywords` 、`description`
+ SSR (server side render)
+ 适当增加子域名，提升主域名权重，增加子域名当子域名的权重高的时候，会给主站也带来好的权重。
+ 网址后缀和域名权重优化

### 4.2 性能优化   

1. 减少Http请求数
> + 设置http缓存 ： 首次加载时将常用资源缓存到浏览器本地
> + 资源合并压缩  ： 打包工具压缩 （webpack）
> + CSS Sprites ： 合并CSS图片减少请求次数 （雪碧图？）
> + 懒加载 ： 只加载可见区域的资源

2. js脚本置底加载
3. inline脚本异步执行
4. 动态加载js模块
5. 代码优化
> + 减少重排（重排必然导致重绘）

## 5. OSI模型 & TCP/IP模型

### 5.1 模型概念
> 1、OSI（Open System Interconnect），即开放式系统互联。 一般都叫OSI参考模型，是ISO（国际标准化组织）组织在1985年研究的网络互联模型。   

> 2、TCP/IP 协议栈是美国国防部高级研究计划局计算机网（ARPANET）和其后继因特网使用的参考模型。ARPANET是由美国国防部赞助的研究网络。最初，它只连接了美国境内的四所大学。随后的几年中，它通过租用的电话线连接了数百所大学和政府部门。最终ARPANET发展成为全球规模最大的互连网络-因特网。最初的ARPANET于1990年永久性地关闭。   

> 3、ISO制定的OSI参考模型的过于庞大、复杂招致了许多批评。与此对照，由技术人员自己开发的TCP/IP协议栈获得了更为广泛的应用。   

### 5.2 TCP & IP 所属层
+ TCP属于传输层，提供可靠的字节流服务。所谓的字节流，其实就类似于信息切割。比如你是一个卖自行车的，你要去送货。安装好的自行车，太过庞大，又不稳定，容易损伤。不如直接把自行车拆开来，每个零件上都贴上收货人的姓名。最后送到后按照把属于同一个人的自行车再组装起来，这个拆解、运输、拼装的过程其实就是TCP字节流的过程。   

+ IP 属于网络层。设计IP的目的是提高网络的可扩展性：一是解决互联网问题，实现大规模、异构网络的互联互通；二是分割顶层网络应用和底层网络技术之间的耦合关系，以利于两者的独立发展。根据端到端的设计原则，IP只为主机提供一种无连接、不可靠的、尽力而为的数据报传输服务。

### 5.3 两种模型各层对应协议
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ghxa8c06n8j30r5093glt.jpg)
