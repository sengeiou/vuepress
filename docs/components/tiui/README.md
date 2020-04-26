---
title: ti-ui（基于Vue-cli3.0）
sidebarDepth: 2
---

<div class="custom-block tip">

基于 Vue-cli3.0 学习 Vue 组件封装，并打包发布到 NPM

</div>

## 主要内容

封装常见的功能组件（Button，Form 相关），封装完成后打包成 UI 组件库发布到 NPM 上。

## 目的

1. 掌握组件封装的语法和技巧
2. 学会造轮子，了解组件库实现原理
3. 搭建和积累个人组件库

## 思路及过程

### 一、使用 vue 脚手架初始化一个项目

1. `yarn add global @vue/cli`
2. `vue create 项目名` （或者使用 vue ui 命令打开 GUI 创建项目）
3. 配置选项安装略过

### 二、创建组件示例

1. 在 componet 下创建一个 button.vue 的文件，放置 button 组件代码，并且指定 name 为 TiButton。

```vue
<template>
  <button class="ti-button">
    按钮组件
  </button>
</template>

<script>
export default {
  name: "TiButton",
};
</script>

<style lang="scss"></style>
```

2. 在入口文件 main.js 引入并注册

```js
import Vue from "vue";
import App from "./App.vue";
// 第一步：导入button组件
import TiButton from "./components/button.vue";

Vue.config.productionTip = false;

// 第二步：注册组件,设置(组件名，组件)
Vue.component(TiButton.name, TiButton);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

3. 引用

```vue
<template>
  <div>
    <ti-button></ti-button>
  </div>
</template>
```

按钮效果：![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3unr3shuj302s0100si.jpg)

### 三、组件封装

各组件封装详见下文
