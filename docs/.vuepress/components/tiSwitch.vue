<template>
  <div>
    <!-- switch开关按钮 -->
    <ti-switch
      name="username"
      v-model="active"
      active-color="#FF5252"
      inactive-color="#03A9F4"
    ></ti-switch>
  </div>
</template>

<script>
import TiSwitch from "../../../src/switch";
export default {
  name: "ti-Switch",
  components: {
    TiSwitch,
  },
  data() {
    return {
      active: false,
    }
  }
}
</script>

<style lang="scss">
.ti-switch {
  display: inline-flex;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  height: 20px;
  vertical-align: middle;

  .ti-switch-input {
    position: absolute;
    width: 0;
    height: 0;
    opacity: 0;
    margin: 0;
  }
  .ti-switch-core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .ti-switch-button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}

.ti-switch.is-checked {
  .ti-switch-core {
    border-color: #409eff;
    background-color: #409eff;
    .ti-switch-button {
      transform: translateX(20px);
    }
  }
}
</style>
