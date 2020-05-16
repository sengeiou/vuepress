---
title: 'v-model原理'
date: 2019-12-16
categories:
  - Framework
tags:
  - Vue
---

:::tip
v-model 其实是一个语法糖，本质上是如下两个操作：

1. v-bind 绑定一个 value 属性  
2. v-on 指令给当前元素绑定 input 事件
:::

<!-- more -->

**示例**

```js
    <div id="app">
        <input type="text" v-bind:value = "message" v-on:input = "valueChange">
        <h2>{{message}}</h2>
    </div>
    <script>
        const app = new Vue({
            el: '#app',
            data: {
                message: 'Hello'
            },
            methods: {
                valueChange(event){
                    this.message = event.target.value;
                }
            }
        })
    </script>
```

```js
上述methods方法可以省略，利用event事件将input监听简写

    <div id="app">
        <input type="text" :value = "message" @input = "message = $event.target.value">
        <h2>{{message}}</h2>
    </div>
    <script>
        const app = new Vue({
            el: '#app',
            data: {
                message: 'Hello'
            }
        })
    </script>
```

```js
v-model是上述v-bind和v-on的语法糖，所以

<input type = "text" v-bind:value = "message" v-on:input = "message = $event.target.value">

等同于

<input type = "text" v-model = "message">
```
