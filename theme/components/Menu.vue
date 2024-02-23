<template>
  <div class="Menu">
    <div class="content">
      <RouterLink to="/">
        <div class="logo">
          C
          <img src="../assets/images/icon.png" alt="" />
          SY247
        </div>
      </RouterLink>
      <div class="menus">
        <div class="menu">
          &#xe69d;
          <span>归档</span>
          <div class="menu-position">
            <div class="menu-mask"></div>
            <div class="menu-content">
              <div class="title">
                &#xe69d;
                <span>归档</span>
              </div>
              <div class="list"></div>
            </div>
          </div>
        </div>
        <div class="menu">
          &#xe617;
          <span>标签</span>
        </div>
        <div class="menu">
          &#xe67d;
          <span>图册</span>
        </div>
        <div class="menu">
          &#xe64f;
          <span>独立</span>
        </div>
        <div class="menu">
          &#xe66d;
          <span>友链</span>
        </div>
      </div>
      <div class="tools">
        <div class="tool search">&#xe618;</div>
        <div class="tool sun" v-if="isSun" @click="changeTheme">&#xe63e;</div>
        <div class="tool moon" v-else @click="changeTheme">&#xe6c2;</div>
        <div class="tool info">&#xe650;</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Menu',
    components: {},
    data: () => ({
      isSun: true,
    }),
    computed: {},
    watch: {},
    methods: {
      changeTheme() {
        this.isSun = !this.isSun;
        localStorage.setItem('isSun', this.isSun);
        // this.changeThemeClass();
      },
      changeThemeClass() {
        if (typeof window === 'undefined') return;
        if (this.isSun) {
          window.document.documentElement.classList.add('sun');
          window.document.documentElement.classList.remove('moon');
        } else {
          window.document.documentElement.classList.add('moon');
          window.document.documentElement.classList.remove('sun');
        }
      },
    },
    created() {
      // this.isSun = localStorage.getItem('theme') === 'true';
      this.changeThemeClass();
    },
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .Menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    color: var(--theme-color);
    background: var(--theme-background);
    z-index: 500;
    border-radius: 10px;
  }
  .content {
    width: var(--content-max-width);
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .menus {
    display: flex;
    transition: color 0.1s;
  }
  .menus:hover {
    color: #1a1a1a88;
  }
  .menu {
    padding: 20px;
    transition: color 0.1s;
  }
  .menu:hover {
    color: var(--theme-color);
  }
  .logo {
    font-family: cursive;
    cursor: pointer;
    font-size: 26px;
    background: linear-gradient(to right, red, blue);
    font-weight: 900;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }
  .logo img {
    height: 1.25em;
    vertical-align: bottom;
    margin: 0 -12px;
  }
  .menu {
    cursor: pointer;
    font-size: 15px;
    z-index: 9;
  }
  .menu::first-letter {
    font-size: 1.2em;
    vertical-align: baseline;
  }
  .menu span {
    font-weight: 900;
    margin-left: 5px;
  }
  .menu-position {
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    background: transparent;
    pointer-events: none;
    transition: 0.3s;
    z-index: 0;
    transition-delay: 0.2s;
  }
  .menu-position:hover,
  .menu:hover > .menu-position {
    top: 60px;
    pointer-events: all;
    background: var(--theme-background);
  }
  .menu-mask {
    position: absolute;
    display: none;
    top: 100%;
    width: 100%;
    height: 100vh;
    background: transparent;
    pointer-events: none;
    backdrop-filter: blur(3px);
    transition-delay: 0.2s;
  }
  .menu-position:hover .menu-mask,
  .menu:hover .menu-mask {
    background: #1112;
    display: block;
  }
  .menu-content {
    width: 500px;
    margin: 20px auto;
    opacity: 0;
    transition: opacity 0.2s;
    transition-delay: 0.2s;
  }
  .menu-position:hover .menu-content,
  .menu:hover .menu-content {
    opacity: 1;
  }
  .tools {
    display: flex;
    gap: 20px;
    font-size: 18px;
    align-items: center;
    user-select: none;
  }
  .tool {
    cursor: pointer;
  }
</style>
