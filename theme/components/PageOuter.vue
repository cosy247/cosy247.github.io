<template>
  <div class="PageOuter"></div>
  <!-- <OneSentence /> -->
  <Menu />
  <!-- <Side /> -->
  <Footer />
</template>

<script>
  import OneSentence from './OneSentence.vue';
  import Side from './Side.vue';
  import Footer from './Footer.vue';
  import Menu from './Menu.vue';

  export default {
    name: 'PageOuter',
    components: { OneSentence, Side, Footer, Menu },
    data: () => ({}),
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    destroy() {},
  };
</script>

<style>
  body {
    overflow-y: scroll;
    padding: calc(60px + var(--outer-width)) 0 0;
    box-sizing: border-box;
  }

  body::-webkit-scrollbar {
    width: var(--outer-width);
    background: #1a232c;
    padding: 0px 0;
    margin: 0px 0;
  }

  body::-webkit-scrollbar-thumb {
    margin: 0px 0;
    background: #8a78;
    width: var(--outer-width);
    border-radius: var(--outer-width);
  }
</style>

<style scoped>
  .PageOuter {
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 600;
    border: var(--outer-width) solid #1a232c;
    box-sizing: border-box;
    pointer-events: none;
  }

  .PageOuter::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: var(--outer-width) solid #1a232c;
    z-index: 600;
    pointer-events: none;
    border-radius: var(--outer-width);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  ::v-deep(.PageOuter *) {
    pointer-events: auto;
  }
</style>
