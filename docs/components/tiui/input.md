---
autoGroup-1: ti-ui组件
title: Input
sidebarDepth: 2
---

##  Input 组件参数

参数支持：
|参数名称 |参数描述 |参数类型 |默认值|
|---------------|:-------------------------|:-----------|-----|
|placeholder |占位符 |string |无|
|type |文本框类型（text/password） |string |text|
|disabled |禁用 |boolean |false|
|clearable |是否显示清空按钮 |boolean |false|
|show-password |是否显示密码切换按钮 |boolean |false|
|name |name 属性 |string | 无|

事件支持：
|事件名称|事件描述|
|------|--------|
|blur |失去焦点事件|
|change|内容改变事件|
|focus|获取焦点事件|

### 1.1 input 组件的基本框架和样式
disabled 属性为 true 时，输入框禁用，并且需要改变样式，之前在 button 组件封装的时候也用到了相同的方法，获取到值后动态设置组件样式。

input 组件的框架以及样式，获取到的数据以及数据处理：

```vue
<template>
  <div class="ti-input">
    <input
      class="ti-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="type"
      :name="name"
      :disabled="disabled"
    />
  </div>
</template>
<script>
export default {
  name: "oneInput",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.ti-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ti-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
</style>
```

父组件中传值也是与之前一样的：

```html
<ti-input
  placeholder="请输入密码"
  type="password"
  name="name"
  disabled="true"
></ti-input>
```

### 1.2 v-model 语法糖

当我们给一个 input 标签进行双向数据绑定时，我们需要使用 value 绑定数据，再使用 input 事件监听标签内数据的变动，如下：

```html
<input :value="username" @input="username=$event.target.value" />
```

在封装 input 组件时，这样显然是不合适的，所以这里我们需要使用到 v-model 语法糖。

显然，我们是不能给我们封装的 input 组件直接使用 v-model 绑定数据的，但是由于 v-model 的特性，他将 value 值绑定在了组件上，所以，我们组件内部通过接收 value 值的方式，就可以接收到传入的数据；并且 v-model 也实现了 input 事件，在组件内部绑定的 input 事件作为回调，把 value 值返回给父组件，这样就实现了 input 组件的双向绑定了。

父组件中的使用 v-model 绑定：

```html
<ti-input v-model="username"></ti-input>
```

组件内部绑定 value 值以及实现回调：

```html
//绑定value值和input事件
<input
  class="ti-input_inner"
  :class="{'is-disabled': disabled}"
  :placeholder="placeholder"
  :type="type"
  :name="name"
  :value="value"
  @input="handleInput"
  :disabled="disabled"
/>
```

```js
//绑定input事件进行回调
    handleInput (e) {
      this.$emit('input', e.target.value)
    }
```

### 1.3 内容清除和密码显示

当我们在组件中键入 clearable 属性时，我们希望组件可以有一个一键删除数据得功能。

当 input 组件的 type 属性是 password 时，我们希望在给与 show-password 属性时，可以有一个显示和隐藏密码的按钮。

实现这个两个功能，除了基本的父子组件传值外，还要添加 i 标签的 icon 字体图标，以及实现功能。

```html
<div class="ti-input" :class="{'ti-input_suffix':showSuffix}">
  <input
    class="ti-input_inner"
    :class="{'is-disabled': disabled}"
    :placeholder="placeholder"
    :type="type"
    :name="name"
    :value="value"
    @input="handleInput"
    :disabled="disabled"
  />
  <span class="ti-input_suffix">
    <i
      class="on-input_icon ti-icon-cancel"
      v-if="clearable && value"
      @click="clear"
    ></i>
    <i
      class="on-input_icon ti-icon-visible"
      v-if="showPassword && type=='password'"
      @click="handlePassword"
    ></i>
  </span>
</div>
```

样式：

```css
.ti-input_suffix {
  .ti-input_inner {
    padding-right: 30px;
  }
  .ti-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
```

- 实现 clearable 功能

首先获取父组件传递的 clearable 值，然后给 i 标签绑定一个点击事件，这个事件触发 input 事件回调，当点击叉号字体图标时，将父组件的 value 清空：

```js
    clear () {
      this.$emit('input', '')
    }
```

- 实现 showPassword 功能
  实现 showPassword 功能的思路很简单，就是改变 input 的 type 类型即可。但是，我们不能直接改变父组件传递过来的 type 值，但是我们可以使用判断 type 值的方式，实现 type 的改变。

首先设置一个布尔类型的变量，并且设置点击事件改变这个变量：

```js
 data () {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
methods: {
    handlePassword () {
      this.passwordVisible = !this.passwordVisible
    }
  }
```

然后需要在绑定 type 值时，进行两重判断。

第一步、判断 showPassword 是否为真；第二步、如果为真则通过 passwordVisible 去判断 type 为 text 还是 password，以此来控制隐藏和现实，否则 type 值就为传入的 type 值即可：

```js
:type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
```

附组件全部代码：

```vue
<template>
  <div class="ti-input" :class="{ 'ti-input_suffix': showSuffix }">
    <input
      class="ti-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :value="value"
      @input="handleInput"
      :disabled="disabled"
    />
    <span class="ti-input_suffix">
      <i
        class="on-input_icon ti-icon-cancel"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="on-input_icon ti-icon-visible"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: "oneInput",
  components: {},
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    name: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
      default: "",
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
  },
  watch: {},
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword;
    },
  },
  data() {
    return {
      // 显示是否显示密码框
      passwordVisible: false,
    };
  },
  methods: {
    handleInput(e) {
      this.$emit("input", e.target.value);
    },
    clear() {
      this.$emit("input", "");
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible;
    },
  },
};
</script>
<style lang="scss" scoped>
.ti-input {
  width: 100%;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .ti-input_inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border: 1px solid #dcdfe6;
    border-radius: 4px;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 045, 0.355, 1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    // input禁用样式
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
}
.ti-input_suffix {
  .ti-input_inner {
    padding-right: 30px;
  }
  .ti-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
```
