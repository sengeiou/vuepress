---
title: ti-ui（基于Vue-cli3.0）
sidebarDepth: 3
---

## 主要内容

封装常见的功能组件（Button，Form 相关），封装完成后打包成 UI 组件库发布到 NPM 上。

## 目的

1. 掌握组件封装的语法和技巧
2. 学会造轮子，了解组件库实现原理
3. 搭建和积累自己的组件库

==============================================================

## 一、使用 vue 脚手架初始化一个项目

1. `yarn add global @vue/cli`
2. `vue create 项目名` （或者使用 vue ui 命令打开 GUI 创建项目）
3. 配置选项安装谁能略过

## 二、创建组件示例

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

## 三、组件封装

### 3.1 Button 组件

参数支持：
|参数名 |参数描述| 参数类型| 默认值|
| --- |:---- | :---- | :---- |
|type |按钮类型（primary/success/warning/danger/info）| string| default|
|plain |是否是朴素按钮| boolean| false|
|round |是否是圆角按钮| boolean| false|
|circle |是否是圆形按钮| boolean| false|
|disabled |是否禁用按钮| boolean| false|
|icon |图标类名| string| 无|

事件支持：
|事件名| 事件描述|
|-----|-------|
|click| 点击事件|

使用 slot 来定义按钮上的文本内容：

```vue
<template>
  <button class="ti-button">
    <span><slot></slot></span>
  </button>
</template>
```

在使用时就可以直接输入文本，定义按钮文本内容了：

```vue
<template>
  <div>
    <ti-button>登录</ti-button>
    <ti-button>删除</ti-button>
    <ti-button>取消</ti-button>
  </div>
</template>
```

效果：![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3uycskjdj304z010mwy.jpg)

button 组件基础样式：

```css
<style lang="scss">
  .ti-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:hover{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
</style>
```

效果： ![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3yfww2hoj308801lt8i.jpg)

### 3.1.1 button 组件的 type 属性

让按钮支持 type 属性，使得按钮支持不同样式：

第一步:父组件组件传递 type 属性

```vue
<template>
  <div id="app">
    <div class="row">
      <ti-button>按钮</ti-button>
      <ti-button type="primary">primary按钮</ti-button>
      <ti-button type="success">success按钮</ti-button>
      <ti-button type="info">info按钮</ti-button>
      <ti-button type="danger">danger按钮</ti-button>
      <ti-button type="warning">warning按钮</ti-button>
    </div>
  </div>
</template>
```

第二步：子组件接收负组件传递的数据

```vue
export default { name: 'TiButton', //
此时对props进行校验，值接收string类型的type值 props: { type:{ type: String， //
设置默认值：如果不传值，那么使用default default: 'default' } }, created () {
console.log(this.type)//defalut primary success info danger warning } }
```

此时对 type 进行校验，如果传递了非 String 类型的值将会报错。

```
failed for prop "type". Expected String with value "123", got Number with value 123.
```

第三步:通过绑定类名的方法动态控制样式

```vue
<template>
  <button class="ti-button" :class="`ti-button-${type}`">
    <span><slot></slot></span>
  </button>
</template>
```

第四步：设置不同类型的样式

```css
.ti-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.ti-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.ti-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.ti-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.ti-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
```

效果：![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3ymxape5j30rh01ndfr.jpg)

### 3.1.2 button 组件的 plain 属性

和 type 类型相同，我们只要将样式先设置好，然后通过父组件传递过来的值进行判断，就可以设置 plain 属性了。

第一步:父组件组件传递 plain 值

```vue
<template>
  <div id="app">
    <div class="row">
    <ti-button plain>按钮</ti-button>
    <ti-button plain type="primary">primary按钮</ti-button>
    <ti-button plain type="success">success按钮</ti-button>
    <ti-button plain type="info">info按钮</ti-button>
    <ti-button plain type="danger">danger按钮</ti-button>
    <otiv>
  </div>
</template>
```

第二步：子组件接收负组件传递的数据，同样进行 props 校验，并且设置默认值为 false

```vue
props: { plain: { type: Boolean, default: false } }
```

第三步:通过绑定类名的方法动态控制样式，由于 plain 类型是布尔值，所以在类型中我们使用对象的形式来控制样式

```vue
<template>
  <button
    class="ti-button"
    :class="[
      `ti-button-${type}`,
      {
        'is-plain': plain,
      },
    ]"
  >
    <span><slot></slot></span>
  </button>
</template>
```

第四步：设置不同类型的样式，由于 plain 类型是以对象的形式在类中定义的，所以使用获取属性的方法定义样式

```css
// 朴素按钮样式
.ti-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.ti-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.ti-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.ti-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.ti-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.ti-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
```

效果： ![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3yq04637j30s601oa9z.jpg)

### 3.1.3 button 组件的 round 属性

设置 round 属性和之前的相似，只要在组件中定义好了样式，动态获取属性值即可。
获取属性值：

```vue
round: { type: Boolean, default: false }
```

round 样式：

```css
.ti-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
```

效果图：![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3yrlx2iqj30rr01lmx4.jpg)

### 3.1.4 button 组件的 circle 属性

circle 同上，样式为：

```css
.ti-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
```

### 3.1.5 button 组件中使用字体图标

在项目中使用字体图标，首先需要有字体图标，我们可以去阿里巴巴矢量图标库下载。

下载完成后，在 asset 目录下新建一个 fonts 目录，存放我们下载到的字体图标。
第一步：在 main.js 中引入字体图标
`import './assets/fonts/iconfont.css'`
第二步：将下载的字体图标 css 文件中的类名做修改，我将 icon 全部改为了 ti-icon，并且将初始的 iconfont 类改为了[class*='ti-icon']，当类名中有 ti-icon 时使用，如下

```css
[class*="ti-icon"] {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.ti-icon-bluetoothoff:before {
  content: "\e697";
}
```

第三步：父组件传递图标名，子组件接收并且放到图标中
父组件传值：

```vue
<div class="row">
      <ti-button icon="bluetoothon"></ti-button>
      <ti-button type="primary" icon="camera">照相机</ti-button>
      <ti-button type="success" icon="course"></ti-button>
      <ti-button type="info" icon="bluetooth_link"></ti-button>
      <ti-button type="danger" icon="addto"></ti-button>
      <ti-button type="warning" icon="audio"></ti-button>
    </div>
```

子组件接收：

```vue
icon: { type: String, default: '' }
```

使用接收到的字体图标。在没有传入 icon 时隐藏<i>标签，在 slot 插槽没有传入值时，不显示<span>标签

```vue
<template>
  <button
    class="ti-button"
    :class="[
      `ti-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
  >
    <i v-if="icon" :class="`ti-icon-${icon}`"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
```

第四步：设置 icon 配套样式，使图标和文字之间有一定间隔

```css
.ti-button [class*="ti-icon-"] + span {
  margin-left: 5px;
}
```

第五步：查看效果
![](https://tva1.sinaimg.cn/large/007S8ZIlly1ge3z17hxknj30jn01rmwz.jpg)

### 3.1.6 button 组件中的点击事件

我们在使用组件时，直接给组件定义事件是不会被触发的。需要在组件中定义一个点击事件，这个点击事件不进行其他操作，只触发父组件中的点击事件。

组件中的定义点击事件：

```vue
<template>
  <button
    class="ti-button"
    :class="[
      `ti-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
      },
    ]"
    @click="handleClick"
  >
    <i v-if="icon" :class="`ti-icon-${icon}`"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
```

定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调

```js
  methods: {
   handleClick (e) {
     this.$emit('click', e)
   }
 }
```

父组件在使用时定义自己的点击事件，其本质是子组件中的点击事件触发父组件中的点击事件。

```html
<div class="row">
  <ti-button @click="getInfo">按钮</ti-button>
</div>
```

```js
  methods: {
    getInfo () {
      console.log('获取信息！！')//获取信息！！
    }
  }
```

### 3.1.7button 组件中的 disabled 属性

和之前相似，只要父子组件传值并且动态获取这个值并且赋给 disabled 属性,并且设置一个 disabled 样式即可。

```html
<div class="row">
  <ti-button @click="getInfo" disabled>按钮</ti-button>
</div>
```

```vue
<template>
  <button
    class="ti-button"
    :class="[
      `ti-button-${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled,
      },
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`ti-icon-${icon}`"></i>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
```
```js
    disabled: {
      type: Boolean,
      default: false
    }
```
disabled样式：
```css
.ti-button.is-disabled{
   cursor: no-drop;
}
```
至此，按钮组件封装完成！
附组件代码：
```vue
<template>
  <button class="ti-button" :class="[`ti-button-${type}`,{
    'is-plain':plain,
    'is-round':round,
    'is-circle':circle,
    'is-disabled':disabled
  }]"
  @click="handleClick"
  :disabled="disabled"
  >
  <i v-if="icon" :class="`ti-icon-${icon}`"></i>
  <!-- 如果没传入文本插槽，则不显示span内容 -->
   <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>
 
<script>
 
export default {
  name: 'oneButton',
  // 此时对props进行校验，值接收string类型的type值
  props: {
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: 'defalut'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created () {
    // 显示所有插槽
    // console.log(this.$slots)
  },
  methods: {
    // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>
 
<style lang="scss" scoped>
  .ti-button{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #ffffff;
    border: 1px solid #dcdfe6;
    color: #606266;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: 0.1s;
    font-weight: 500;
    //禁止元素的文字被选中
    -moz-user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    padding: 12px 20px;
    font-size: 14px;
    border-radius: 4px;
    &:hover,
    &:focus{
      color: #409eff;
      border-color: #c6e2ff;
      background-color: #ecf5ff;
    }
  }
.ti-button-primary{
  color:#fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus{
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
    }
  }
  .ti-button-success{
  color:#fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus{
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
    }
  }
  .ti-button-info{
  color:#fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus{
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
    }
  }
  .ti-button-warning{
  color:#fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus{
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
    }
  }
  .ti-button-danger{
  color:#fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus{
    background: #f78989;
    background-color: #f78989;
    color: #fff;
    }
  }
// 朴素按钮样式
.ti-button.is-plain{
  &:hover,
  &:focus{
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.ti-button-primary.is-plain{
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus{
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.ti-button-success.is-plain{
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus{
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.ti-button-info.is-plain{
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus{
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.ti-button-warning.is-plain{
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus{
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.ti-button-danger.is-plain{
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus{
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.ti-button.is-round{
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.ti-button.is-circle{
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.ti-button [class*=ti-icon-]+span{
  margin-left: 5px;
}
// disabled属性
.ti-button.is-disabled{
   cursor: no-drop;
}
</style>
```