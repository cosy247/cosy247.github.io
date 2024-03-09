<template>
  <div class="button">😊😘🥰🤩😍😎</div>
  <div class="Side"></div>
</template>

<script>
  export default {
    name: 'Side',
    components: {},
    data: () => ({}),
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .Side {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: var(--outer-width);
  }
  .button {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: var(--outer-width);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: var(--outer-width);
    transform: scale(0.8);
    writing-mode: tb;
    letter-spacing: 0.5em;
    cursor: pointer;
    opacity: 0.5;
  }
</style>
