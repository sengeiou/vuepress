---
autoGroup-1: ti-ui组件
title:  Dialog
sidebarDepth: 2
---

##  Dialog 组件参数

参数支持：

| 参数名  | 参数描述                            | 参数类型 | 默认值 |
| ------- | :---------------------------------- | :------- | :----- |
| title   | 对话框标题                          | string   | 提示   |  |
| width   | 宽度                                | string   | 50%    |
| top     | 与顶部的距离                        | string   | 15vh   |
| visible | 是否显示 dialog（支持 sync 修饰符） | boolean  | false  |

事件支持：

| 事件名 | 事件描述       |
| ------ | :------------- |
| opened | 模态框显示事件 |
| closed | 模态框关闭事件 |

插槽说明：
|插槽名称| 插槽描述|
|-------|:----------|
|default| dialog 的内容|
|title| dialog 的标题|
|footer| dialog 的底部操作区|

### 1.1 dialog 组件的基本框架和样式

首先搭建起来 dialog 组件的框架，暂时不加入插槽，只构建出基本的框架和样式。

框架分为三个部分，头部（header）、内容（body）、底部（footer），基本框架如下：

```vue
<template>
  <div class="ti-dialog_wrapper">
    <div class="ti-dialog">
      <div class="ti-dialog_header">
        <span class="ti-dialog_title">提示</span>
        <button class="ti-dialog_headerbtn">
          <i class="ti-icon-close"></i>
        </button>
      </div>
      <div class="ti-dialog_body">
        <span>这是一段信息</span>
      </div>
      <div class="ti-dialog_footer">
        <ti-button>取消</ti-button>
        <ti-button type="primary">确定</ti-button>
      </div>
    </div>
  </div>
</template>
```

样式如下：

```css
<style lang="scss" scoped>
.ti-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .ti-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .ti-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ti-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .ti-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .ti-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
</style>
```

在 main.js 注册后，在 app.vue 中引用，形成以下效果：
![](https://blog.csdn.net/weixiaowei_2016/article/details/104702793)

### 1.2 自定义 title 内容

title 标题部分除了普通的标题内容外，也应该可以设置标题的样式，比如设置为 h1 红色的自定义标题内容，所以在这里我们就使用到了插槽，可以在使用时按照需求自定义标题内容和样式。

- 父子组件传值以及 props 验证不再赘述。

- 将标题 span 标签放到 slot 插槽下，这样便于控制 span 的内容和样式。

```vue
<template>
  <div class="ti-dialog_wrapper">
    <div class="ti-dialog">
      <div class="ti-dialog_header">
        <slot name="title">
          <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
          <span class="ti-dialog_title">
            {{ title }}
          </span>
        </slot>
        <button class="ti-dialog_headerbtn">
          <i class="ti-icon-close"></i>
        </button>
      </div>
      <div class="ti-dialog_body">
        <span>这是一段信息</span>
      </div>
      <div class="ti-dialog_footer">
        <ti-button>取消</ti-button>
        <ti-button type="primary">确定</ti-button>
      </div>
    </div>
  </div>
</template>
```

- 通过父子组件之间得传值以及 slot 指定组件自定义 title 内容和样式。

```vue
<ti-dialog title="温馨提示">
  <!-- 使用v-slot指定插槽进行编辑 -->
  <template v-slot:title>
     <h3 style="color:red">我是标题</h3>
  </template>
</ti-dialog>
```

![](https://blog.csdn.net/weixiaowei_2016/article/details/104702793)

### 1.3 自定义宽度和距离顶部的大小

- 实现在组件调用时控制 dialog 组件的宽度以及位置。

只需要在父组件中传递宽度和高度，并且在子组件中获取并且使用即可。

父组件传值：

```vue
<ti-dialog width="80%" top="200px"></ti-dialog>
```

子组件使用：

```vue
<template>
  <div class="ti-dialog_wrapper">
    <div class="ti-dialog" :style="{ width: width, marginTop: top }">
      ···
    </div>
  </div>
</template>
```

### 1.4 自定义 body 内容

body 内容可能是除 span 以外的其他内容，比如列表等，所以在这里使用插，并且在这里使用匿名插槽，使用匿名插槽的好处就是在使用时不需要使用 template 标签指定内容，直接在组件标签下编写内容即可。

- 在 body 中使用匿名组件

```html
<div class="ti-dialog_body">
  <slot></slot>
</div>
```

- 在父组件中，只需要在标签下直接编辑内容即可，不需要再使用 template 标签绑定插槽或者父子组件传值了

```vue
<ti-dialog>
  <ul>
     <li>1</li>
     <li>2</li>
    <li>3</li>
  </ul>
</ti-dialog>
```

显示效果:
![](https://blog.csdn.net/weixiaowei_2016/article/details/104702793)

### 1.5 自定义 footer 内容

footer 中使用 slot 插槽，在父组件中的定义底部内容。

设置 footer 插槽，如果没有指定 footer 插槽，则不显示

```html
<div class="ti-dialog_footer">
  <!-- 如果footer不传递内容，则不显示footer -->
  <slot name="footer" v-if="$slots.footer"></slot>
</div>
```

父组件中的定义 footer 插槽内容

```vue
<template v-slot:footer>
  <ti-button>取消</ti-button>
  <ti-button type="primary">确定</ti-button>
</template>
```

### 1.6 dialog 的显示与隐藏

dialog 组件的显示与隐藏，需要使用到 sync 语法糖。这里简单介绍以下什么是 sync 语法糖，sync 通俗来说，是父子组件传值过程中提供的一种模式，这种模式有两个功能：1.将父组件向子组件传值；2.子组件回调一个值给父组件。

例如，如下代码需要两部才能实现上述功能：1.向子组件传值；2.接收子组件回调的值

```js
//父组件传值
<demo :visible="visible" :money="money" @update:aa="fn1"></demo>
//子组件回调
  methods: {
    fn () {
     this.$emit('aa', 200)
    }
  }
```

使用 sync 语法糖后，父组件不需要单独声明一个方法，只需要在回调时声明一个 update 绑定的回调函数（这个绑定值是传值自身）这样在父组件中就不需要再次定义回调函数进行接收了。

```js
//父组件中的使用sync语法糖，传递和接收参数

  <demo :visible.sync="visible" :money.sync="money"></demo>
//子组件中使用update绑定参数的方法进行回调
  methods: {
    fn () {
      this.$emit('update:money', 200)
      this.$emit('update:visible', true)
    }
  }
```

根据上面对于 sync 语法糖的介绍，我们在 dialog 显示和隐藏中要进行两种处理

控制 dialog 的显示和隐藏，我们首先在子组件中使用 v-show 对于组建的显示与隐藏进行控制。

```html
<div class="ti-dialog_wrapper" v-show="visible" @click.self="handleClose">
  ···
</div>
```

- 父组件控制 dialog 的显示和隐藏
  父组件中的直接通过传递一个参数 visible，使用点击方法控制这个参数的布尔值即可。

```vue
<ti-dialog :visible.sync="visible">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
  <template v-slot:footer>
      <ti-button @click="switchDialog">取消</ti-button>
    <ti-button type="primary">确定</ti-button>
  </template>
</ti-dialog>
```

- 子组件控制 dialog 的显示和隐藏
  子组件控制 dialog 的显示和隐藏，不能直接修改父组件传递过来的值，需要使用回调触发父组件中的值进行修改，这里就使用到了上面介绍的 sync 语法糖。

首先在父组件中使用:visible.sync="visible"向子组件进行传值并且接收子组件回调。

```vue
<div class="row">
  <ti-dialog :visible.sync="visible">
    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ul>
    <template v-slot:footer>
      <ti-button @click="switchDialog">取消</ti-button>
      <ti-button type="primary">确定</ti-button>
    </template>
  </ti-dialog>
</div>
```

子组件通过自身定义的方法，控制 dialog 组件的显示与隐藏，然后将 visible 属性回调给父组件。

```vue
<template v-slot:footer>
  <ti-button>取消</ti-button>
  <ti-button type="primary">确定</ti-button>
</template>
```

回调方法：

```js
  method{
    handleClose () {
      this.$emit('update:visible', false)
    }
  }

```

### 1.7 dialog 的动画效果

使用 transition 包裹一个元素后，这个元素就会被自动添加类名，这部分 vuejs 文档都有介绍。

- 使用 transition 包裹整个 dialog 框架

```vue
<template>
  <transition name="dialog-fade">
    <div class="ti-dialog_wrapper" v-show="visible" @click.self="handleClose">
      ···
    </div>
  </transition>
</template>
```

- 使用 vue 动画进行处理
  这里先定义了 fade 动画，然后在 dialog 组件显示和隐藏的时候调用（反向调用）这个动画。

```css
.dialog-fade-enter-active {
  animation: fade 0.3s;
}
.dialog-fade-leave-active {
  animation: fade 0.3s reverse;
}
@keyframes fade {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
```

组件代码：
```vue
<template>
  <transition name="dialog-fade">
    <!-- @click.self避免冒泡，只有点击自己时才能触发   -->
    <div class="ti-dialog_wrapper" v-show="visible" @click.self="handleClose">
      <div class="ti-dialog" :style="{width:width,marginTop:top}">
        <div class="ti-dialog_header">
          <slot name="title">
            <!-- 将span放到slot内，这样不仅可以定义title文本，还可以定义样式等 -->
          <span class="ti-dialog_title">
            {{title}}
          </span>
          </slot>
          <button class="ti-dialog_headerbtn" @click="handleClose">
            <i class="ti-icon-close"></i>
          </button>
        </div>
        <div class="ti-dialog_body">
          <!-- 内容可能是除span以外的其他内容，比如列表等，所以在这里使用插槽，并且不规定插槽内具体的标签 -->
          <!-- 并且在这里使用匿名插槽，使用匿名插槽的好处就是不用指定名称，这样在不使用<template v-slot>指定插槽内容的时候，也可以自定义内容 -->
          <slot></slot>
        </div>
        <div class="ti-dialog_footer">
          <!-- 如果footer不传递内容，则不显示footer -->
          <slot name="footer" v-if="$slots.footer">
          </slot>
        </div>
      </div>
    </div>
  </transition>
</template>
 
<script>
 
export default {
  name: 'oneDialog',
  components: {
  },
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '50%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    footer: {
      type: Object
    },
    visible: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      show: false
    }
  },
  methods: {
    handleClose () {
      this.$emit('update:visible', false)
    }
  }
}
</script>
 
<style lang="scss" scoped>
.ti-dialog_wrapper{
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 2001;
  background-color: rgba(0,0,0,0.5);
  .ti-dialog{
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.3);
    box-sizing: border-box;
    width: 30%;
    &_header{
      padding: 20px 20px 10px;
      .ti-dialog_title{
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .ti-dialog_headerbtn{
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .ti-icon-close{
          color:909399
        }
      }
    }
    &_body{
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &_footer{
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      ::v-deep .ti-button:first-child{
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active{
  animation: fade .3s;
}
.dialog-fade-leave-active{
  animation: fade .3s reverse;
}
@keyframes fade{
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100%{
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
```
