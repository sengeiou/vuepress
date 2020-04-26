---
autoGroup-1: ti-ui组件
title: Radio
sidebarDepth: 2
---

##  Radio 组件参数

参数支持：

| 参数名称 | 参数描述          | 参数类型             | 默认值 |
| -------- | :---------------- | :------------------- | :----- |
| v-model  | 双向绑定          | 布尔类型             | false  |
| label    | 单选框和 value 值 | string，num，Boolean | ' '    |
| name     | name              |                      |        |

### 1.1 基本框架和样式

框架、基本样式以及选中样式：

```vue
<template>
  <label class="ti-radio is-checke">
    <span class="ti-radio_input">
      <span class="ti-radio_inner"></span>
      <input type="radio" class="ti-radio_original" />
    </span>
    <span class="ti-radio_label">我是label</span>
  </label>
</template>
<script>
export default {
  name: 'oneRadio',
  props: {}
  },
  watch: {},
  data () {
    return {}
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
.ti-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .ti-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ti-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .ti-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .ti-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.ti-radio.is-checked {
  .ti-radio_input {
    .ti-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ti-radio_label {
    color: #409eff;
  }
}
</style>
```

### 1.2 数据双向绑定

实现 radio 组件的数据双向绑定，除了要绑定数据本身外，还要控制 radio 组件的样式。

实现 radio 组件数据的绑定，需要父组件传递的 label 值和 value 值，其中 value 值使用 v-model 语法糖来绑定。

```html
<ti-radio v-model="gender" label="0">男</ti-radio>
<ti-radio v-model="gender" label="1">女</ti-radio>
```

子组件接收数据后，要对数据进行处理。

当 radio 组件被点击时，绑定的数据应该变为该组件的 label 值。我们将组件中的 input 标签的 value 绑定为传入的 label 值，并且声明一个计算属性 model 双向绑定到 input 组件上，model 我们需要通过 get 方法获取值；并且通过 set 方法将值回调给父组件。

同时，当我们在点击 radio 组件时，我们应该让被选中的组件添加选中样式，我们通过 label 和 value 的比较来判断，如果相同则显示选中样式。

```vue
<template>
  <label class="ti-radio" :class="{ 'is-checked': label == value }">
    <span class="ti-radio_input">
      <span class="ti-radio_inner"></span>
      <input
        type="radio"
        class="ti-radio_original"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="ti-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
//计算属性 computed: { 
  model: { 
    get () { 
      return this.value 
      }, 
      set (value) { 
      //触发父组件的input事件 
      this.$emit('input', value) } 
    }
  },
```

### 1.3 封装 radio-group

radio-group 组件是再 radio 组件上进行优化的，它的目的是在我们使用 radio 组件时，不必给每个组件都添加一个 v-model，而是通过绑定一个 v-model 来实现数据绑定。

使用 radio-group 组件包裹 radio 组件时，需要考虑到的一个问题就是 radio-group 组件于 radio 组件之间的通讯。我们在使用 radio-group 组件时将数据通过 v-model 进行了绑定，那么 raido 组件就不能直接拿到这个值，所以我们需要使用 provide/inject 进行祖孙组件之间得传值。

使用 provide/inject 非常简单，在 radio-group 中通过声明 provide 对象将组件自身进行传递，在 radio 中使用 inject 进行接收即可。

radio-group 组件架构：

```vue
<template>
  <div class="ti-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "oneRadioGroup",
  provide() {
    return {
      RadioGroup: this,
    };
  },
  props: {
    // 组件接收到了value值，我们需要触发这个组件的input事件
    // provide 与 inject  用来做祖孙之间得组件通讯
    value: null,
  },
};
</script>
```

在 radio 组件中，通过 inject 可以直接接收到参数，此时，原本通过 v-model 传递进来的 value 值，变成了 radio-group 组件传进来的 RadioGroup.value 值，所以在 computed 计算属性中，我们先写一个 radio 组件是否被 radio-group 组件进行判断的方法，并且使用在 model 中，如果被包裹了，则使用 RadioGroup.value 值，否则使用 value 值。

同时在 is-checked 类的判断上抛弃 label 于 value 的比较，转而通过 label 于 model（model 此时的值为 value 或 RadioGroup.value）比较，来进行样式的更改。

```vue
<template>
  <label class="ti-radio" :class="{ 'is-checked': label == model }">
    <span class="ti-radio_input">
      <span class="ti-radio_inner"></span>
      <input
        type="radio"
        class="ti-radio_original"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="ti-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "oneRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: "",
    },
    value: null,
    name: {
      type: String,
      defualt: "",
    },
  },
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup;
    },
  },
};
</script>
```

附 radio 组件代码：

```vue
<template>
  <label class="ti-radio" :class="{ 'is-checked': label == model }">
    <span class="ti-radio_input">
      <span class="ti-radio_inner"></span>
      <input
        type="radio"
        class="ti-radio_original"
        :value="label"
        v-model="model"
      />
    </span>
    <span class="ti-radio_label">
      <slot></slot>
      <!-- 如果没有传值，就把label作为文本显示 -->
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>
<script>
export default {
  name: "oneRadio",
  props: {
    label: {
      type: [String, Number, Boolean],
      defualt: "",
    },
    value: null,
    name: {
      type: String,
      defualt: "",
    },
  },
  inject: {
    RadioGroup: {
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.RadioGroup.value : this.value;
      },
      set(value) {
        // 触发父组件的input事件
        this.isGroup
          ? this.RadioGroup.$emit("input", value)
          : this.$emit("input", value);
      },
    },
    // 用于判断radio是否被radioGroup包裹
    isGroup() {
      return !!this.RadioGroup;
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style lang="scss" scoped>
.ti-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  .ti-radio_input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .ti-radio_inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
      &:after {
        width: 4px;
        height: 4px;
        border-radius: 100%;
        background-color: #fff;
        content: "";
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) scale(0);
        transition: transform 0.15s ease-in;
      }
    }
    .ti-radio_original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0px;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .ti-radio_label {
    font-size: 14px;
    padding-left: 10px;
  }
}
// 选中的样式
.ti-radio.is-checked {
  .ti-radio_input {
    .ti-radio_inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .ti-radio_label {
    color: #409eff;
  }
}
</style>
```
