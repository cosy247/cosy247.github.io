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
          &#xe617;
          <span class="menu-title">标签</span>
          <div class="menu-position">
            <div class="menu-mask"></div>
            <div class="menu-content">
              <div class="menu-content-title">
                &#xe617;
                <span>标签</span>
                tag&nbsp;∈&nbsp;[1,&nbsp;N]&nbsp;·&nbsp;one;&nbsp;&nbsp;&nbsp;one&nbsp;∈&nbsp;[0,&nbsp;5]&nbsp;·&nbsp;tag
              </div>
              <div class="menu-content-list">
                <p class="menu-content-item" v-for="item,key in tags">{{key}}({{item}})</p>
              </div>
            </div>
          </div>
        </div>
        <div class="menu">
          &#xe69d;
          <span class="menu-title">归档</span>
          <div class="menu-position">
            <div class="menu-mask"></div>
            <div class="menu-content">
              <div class="menu-content-title">
                &#xe69d;
                <span>归档</span>
                archive&nbsp;∈&nbsp;[1,&nbsp;N]&nbsp;·&nbsp;one;&nbsp;&nbsp;&nbsp;one&nbsp;∈&nbsp;[0,&nbsp;1]&nbsp;·&nbsp;archive
              </div>
              <div class="list"></div>
            </div>
          </div>
        </div>
        <!-- <div class="menu">
          &#xe67d;
          <RouterLink to="/album">图册</RouterLink>
        </div> -->
        <div class="menu">
          &#xe64f;
          <span class="menu-title">独立</span>
        </div>
        <div class="menu">
          &#xe66d;
          <span class="menu-title">友链</span>
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
  import { countMateData } from '@temp/blogMate';

  export default {
    name: 'Menu',
    components: {},
    data: () => ({
      isSun: true,
      tags: countMateData.tags,
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
    mounted() { },
    destroy() { },
  };
</script>

<style scoped>
  .Menu {
    position: fixed;
    top: var(--outer-width);
    left: var(--outer-width);
    width: calc(100vw - 2 * var(--outer-width));
    color: var(--theme-color);
    background: var(--theme-background);
    z-index: 500;
    box-shadow: 0 0 10px #8882;
    transform: translateY(-1px);
    border-radius: var(--outer-width) var(--outer-width) 0 0;
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
    display: flex;
    align-items: center;
  }

  .logo img {
    height: 1em;
    vertical-align: bottom;
    margin: 0 0.1em;
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

  .menu-title {
    font-weight: 900;
    margin-left: 5px;
  }

  .menu-position {
    position: absolute;
    left: 0;
    top: 60px;
    width: 100%;
    background: transparent;
    pointer-events: none;
    z-index: 0;
  }

  .menu-position:hover,
  .menu:hover>.menu-position {
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
  }

  .menu-position:hover .menu-content,
  .menu:hover .menu-content {
    opacity: 1;
  }

  .menu-content-title span {
    font-weight: 900;
    margin-right: 20px;
  }

  .menu-content-list {
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-top: 30px;
    gap: 10px 30px;
    padding: 0 20px;
    color: #1a1a1a;
  }

  .menu-content-list:hover {
    color: #1a1a1a88;
  }

  .menu-content-item {
    transition: 0.2s;
  }

  .menu-content-item:hover {
    color: #1a1a1a;
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
