<template>
  <div>
    <ClientOnly>
      <slot name="before" />
      <span ref="countUp"></span>
    </ClientOnly>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "CountUp",
  props: {
    startVal: {
      type: Number,
      default: 0
    },
    endVal: {
      type: Number,
      required: true
    },
    decimalPlaces: {
      type: Number,
      dafault: 0
    },
    duration: {
      type: Number,
      default: 2
    },
    delay: {
      type: Number,
      default: 10
    }
  },
  mounted() {
    this.init();
  },
  data() {
    return {
      counter: null
    };
  },
  methods: {
    init() {
      import("countup.js").then(module => {
        this.$nextTick(() => {
          this.counter = new module.CountUp(this.$refs.countUp, this.endVal, {
            startVal: this.startVal,
            duration: this.duration,
            decimalPlaces: this.decimalPlaces
          });
          setTimeout(() => {
            this.counter.start();
          }, this.delay);
        });
      });
    }
  },
  beforeDestory() {
    this.counter.reset();
    this.counter = null;
  }
};
</script>
