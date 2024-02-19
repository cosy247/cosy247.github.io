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
        <div class="menu archive">
          &#xe69d;
          <span>归档</span>
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
        <div class="menu-outer">
          <div class="menu-content">
            <div class="archive">
              <div class="title">
                 &#xe69d;
                <span>归档</span>
              </div>
              <div class="list"></div>
            </div>
          </div>
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
        this.changeThemeClass();
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
    padding: 15px 0;
    backdrop-filter: blur(5px);
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
    gap: 40px;
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
  }
  .menu::first-letter {
    font-size: 1.2em;
    vertical-align: baseline;
  }
  .menu span {
    font-weight: 900;
    margin-left: 5px;
  }
  .menu-outer {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    z-index: -1;
    background: var(--theme-background);
  }
  .menu-content {
    width: 500px;
    margin: auto;
  }
  .menu-content .archive {
    line-height: 0;
    padding: 0;
    overflow: hidden;
    transition: 0.2s;
  }
  .menu.archive:hover ~ .menu-outer .archive {
    line-height: 1em;
    padding: 20px 0;
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
