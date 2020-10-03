---
autoGroup-4: 其他
title: "防抖和节流"
sidebarDepth: 2
date: 2020-07-14
categories:
- FrontEnd
tags:
- JavaScript
---

```html
   <div id="main" draggable="true">
      <input type="text" id="input1">
   </div>
```
### 1. 防抖（debounce）
用定时器延时触发事件，以便减少网络请求，如下 input 输入 keyup 监听

```js
const input1 = document.getElementById('input1')
let timer = null
input1.addEventListener('keyup', function () {
    if (timer) {
        clearTimeout(timer)
    }
    timer = setTimeout(() => {
        console.log(input1.value)
        timer = null
    }, 500)
})
```   
+ 封装 debounce
```js
function debounce (fn, delay = 500) {
    let timer = null

    return function () {
        if (timer) {
            clearTimeout(timer)
        }
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay)
    }
}

const input1 = document.getElementById('input1')
input1.addEventListener('keyup', debounce(() => { 
    console.log(input1.value)
}, 500))
```
+ 优化  
```js
function debounce(fn, delay){
    let timer = null
    return function(){
        timer && clearTimeout(timer)
        timer = setTimeout(() => {
            fn.apply(this, arguments)
        }, delay || 500)
    }
}
```
### 2. 节流（throttle）
降低频繁触发操作的触发频率，如下获取拖拽元素的坐标
   
```js
const main = document.getElementById('main')
let timer = null
main.addEventListener('drag', (e) => {
    if (timer) {
        return
    }

    timer = setTimeout(() => {
        console.log(e.offsetX, e.offsetY)
        timer = null
    }, 500)
})
```

+ 封装 throttle
```js
function throttle (fn, delay = 500) {
    let timer = null
    return function () {
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(this, arguments)
                timer = null
            }, delay)
        }
    }
}

main.addEventListener('drag', throttle((e) => {
    console.log(e.offsetX, e.offsetY)
}, 500))
```
