---
autoGroup-1: Vue
title: Vue重要知识点
date: 2020-08-03
sticky: 2
categories:
- Framework
tags:
- Vue
---

## 1. v-for key值的作用
在列表渲染中快速且准确地找到与 `newVnode` 相对应的 `oldVnode` ，提升 `diff` 效率


## 2. v-if & v-show
+ 相同点   
> 都是动态控制 DOM 元素的显示和隐藏

+ 区别
> 1. v-if 是动态向 DOM 树内添加或删除 DOM 元素； v-show 是通过设置 DOM 元素的 diplay 属性来控制显隐
> 2. v-if 只有在初始条件为 true 时才会编译； v-show 则不受初始条件限制，都会编译
> 3. v-if 有更高的切换消耗； v-show 有更高的初始渲染消耗
> 4. v-if 适合条件不太变化的场景； v-show 适合频繁切换的场景

## 3. slot 插槽
+ 插槽的本质是一个返回Vnode的函数
+ 普通插槽和作用域插槽没有区别，因为普通插槽是作用域插槽的子集
   
:link: [知乎](https://www.zhihu.com/question/37548226/answer/609289491)


## 4. keep-alive
`<keep-alive>` 是 Vue 内置的一个组件，可以使被包含的组件保留状态，或避免重新渲染。

## 5. 如何获取dom
`ref="domName"` 用法：`this.$refs.domName`

## 6. vue命令
+ 循环， `v-for`
+ 只绑定一次，`v-once`
+ 绑定数据，`v-bind:字段名` 缩写 `:`
+ 动作监听 ，`v-on:动作` 缩写 `@`
+ 双向数据绑定，`v-model="绑定"` 缩写`:model`   

一般数据相关缩写 `:` 动作相关 缩写 `@`

## 7. v-model 的本质
v-model用于表单数据的双向绑定，是一个语法糖，包含了两个操作：   
+ `v-bind` 绑定一个 `value` 属性
+ `v-on` 指令给当前元素绑定 `input` 事件


## 8. vue.cli & vue工程目录
+ assets文件夹是放静态资源
+ components是放组件
+ router是定义路由相关的配置
+ app.vue是一个应用主组件
+ main.js是入口文件

vue-cli目录   
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gjo5cbbf6qj30rs0ms3zp.jpg)

vue工程目录   
![](https://tva1.sinaimg.cn/large/007S8ZIlly1gjo5cbz94rj30rs0l241c.jpg)

## 9. 自定义指令
除了内置指令之外， Vue 也允许注册自定义指令。
下例是注册一个全局指令 `v-focus`, 该指令的功能是在页面加载时，元素获得焦点：

```html
<div id="app">
    <p>页面载入时，input 元素自动获取焦点：</p>
    <input v-focus>
</div>
<script>
    // 注册一个全局自定义指令 `v-focus`
    Vue.directive('focus', {
    // 当被绑定的元素插入到 DOM 中时……
    inserted: function (el) {
        // 聚焦元素
        el.focus()
        }
    })
    // 创建根实例
    new Vue({
        el: '#app'
        })
</script>
```
也可以在实例使用 `directives` 选项来注册局部指令，这样该指令只能在这个实例中使用：   
```html
<div id="app">
  <p>页面载入时，input 元素自动获取焦点：</p>
  <input v-focus>
</div>
 
<script>
// 创建根实例
new Vue({
  el: '#app',
  directives: {
    // 注册一个局部的自定义指令 v-focus
    focus: {
      // 指令的定义
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    }
  }
})
</script>
```
