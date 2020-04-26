---
autoGroup-1: ti-ui组件
title: Form
sidebarDepth: 2
---

form组件
```vue
<template>
  <div class="ti-form">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'oneForm',
  provide () {
    return {
      Form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    }
  }
}
</script>
```

form-item组件
```vue
<template>
  <div class="ti-form-item">
    <label :style="labelStyle" class="ti-form-item_label">{{label}}</label>
    <div class="ti-form-item_content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'oneFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>
 
<style lang="scss" scoped>
  .ti-form-item{
    margin-bottom: 25px;
    .ti-form-item_label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .ti-form-item_content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>
```