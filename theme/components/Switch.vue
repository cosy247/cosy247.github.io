<template>
  <div class="Switch" :class="{ active: value }" @click="switchValue">
    <div class="dot"></div>
  </div>
</template>

<script>
  export default {
    name: 'Switch',
    components: {},
    props: ['value'],
    data: () => ({}),
    computed: {},
    watch: {},
    methods: {
      switchValue() {
        this.$emit('input', !this.value);
      },
    },
    created() {},
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .Switch {
    position: relative;
    width: 1.8em;
    background: #f4f5f7;
    padding: 0.1em;
    border-radius: 2em;
  }
  .Switch.active {
    text-indent: 2em;
  }
  .dot {
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    background: white;
    border: #9a8 3px solid;
  }
</style>
