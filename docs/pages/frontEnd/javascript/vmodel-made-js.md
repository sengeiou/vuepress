---
autoGroup-4: 其他
title: 原生JS实现双向数据绑定
date: 2020-05-15
isTimeLine: true
categories:
  - FrontEnd
tags:
  - JavaScript
  - Summary
---
 
## 1. 核心    

核心方法是 `Object.defineProperty(obj, 'newProperty', {define})`   

三个参数：
+ `obj`: 要定义属性的对象   
+ `newProperty`: 要定义或者修改的属性的名称   
+ `define`: 将被定义或者修改的属性的描述   
     
```html
    <input type="text" id="input"/>
    <p id="showText"></p>
```
   
```js
    let obj = {};
    Object.defineProperty(obj, "newProp", {
        get: function () {
            return obj;
        },
        set: function (newVal) {
            document.getElementById("input").value = newVal;
            document.getElementById("showText").innerHTML = newVal;
        }
    })
    document.addEventListener("keyup", e => {
        obj.newProp = e.target.value;
    })
```

## 2. 效果
![](https://tva1.sinaimg.cn/large/0081Kckwly1gjybswg9u2g30ds09oaak.gif)
