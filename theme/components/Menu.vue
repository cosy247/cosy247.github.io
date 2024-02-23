<template>
  <div class="Menu">
    <div class="content">
      <img class="icon" src="../assets/images/icon.png" alt="" />
      Cosy247
      <div class="menuList"></div>
      <div class="tools">
        ☀️
        <Switch v-model="mode" />
        🌒
      </div>
    </div>
  </div>
</template>

<script>
  import Switch from './Switch.vue';

  export default {
    name: 'Menu',
    components: { Switch },
    data: () => ({
      mode: true,
      menuList: [
        { name: '首页', url: '/' },
        { name: '标签', url: '' },
        { name: '图册', url: '' },
        { name: '访客留言', url: '' },
        { name: '独立应用', url: '' },
        { name: '一点猜想', url: '' },
        { name: '友情链接', url: '' },
      ],
    }),
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .Menu {
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    box-shadow: 0 0 10px #8888;
    z-index: 2;
    backdrop-filter: blur(10px);
    background: #fff8;
  }
  .content {
    margin: auto;
    width: var(--content-max-width);
    display: flex;
    align-items: center;
    font-size: 20px;
    padding: 10px;
    font-weight: 900;
  }
  .icon {
    height: 2em;
    margin-right: 10px;
  }
  .flex {
    flex: 1;
  }
  .modeSwitch {
    display: flex;
    align-items: center;
    color: white;
  }
</style>
