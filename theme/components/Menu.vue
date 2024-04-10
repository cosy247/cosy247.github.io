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
                <span class="menu-content-title-main">标签</span>
                <span class="menu-content-title-describe">tag&nbsp;∈&nbsp;[1,&nbsp;N]&nbsp;·&nbsp;one;&nbsp;&nbsp;&nbsp;one&nbsp;∈&nbsp;[0,&nbsp;5]&nbsp;·&nbsp;tag</span>
              </div>
              <div class="menu-content-list">
                <a :href="`/?tag=${key}`" class="menu-content-item" v-for="item,key in tags">{{key}}({{item}})</a>
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
                <span class="menu-content-title-main">归档</span>
                <span class="menu-content-title-describe">archive&nbsp;∈&nbsp;[1,&nbsp;N]&nbsp;·&nbsp;one;&nbsp;&nbsp;&nbsp;one&nbsp;∈&nbsp;[0,&nbsp;1]&nbsp;·&nbsp;archive</span>
              </div>
              <div class="menu-content-list">
                <a :href="`/?archive=${key}`" class="menu-content-item" v-for="item,key in archive">{{key}}[{{item}}]</a>
              </div>
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
          <div class="menu-position">
            <div class="menu-mask"></div>
            <div class="menu-content">
              <div class="menu-content-title">
                &#xe64f;
                <span class="menu-content-title-main">独立</span>
                <span class="menu-content-title-describe">独立于本网站的应用、网页、服务、插件等。</span>
              </div>
              <div class="menu-alone-list">
                <a :href="item.url" class="menu-alone-item" v-for="item in alones">
                  <img v-if="item.icon" class="menu-alone-icon" :src="item.icon" :alt="item.name">
                  {{item.name}}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="menu">
          &#xe66d;
          <span class="menu-title">友链</span>
          <div class="menu-position">
            <div class="menu-mask"></div>
            <div class="menu-content">
              <div class="menu-content-title">
                &#xe66d;
                <span class="menu-content-title-main">友链</span>
                <span class="menu-content-title-describe">相逢何必曾相识，联系我创建关联。</span>
              </div>
              <div class="menu-alone-list">
                <a :href="item.url" class="menu-alone-item" v-for="item in blogFriends">
                  <img v-if="item.icon" class="menu-alone-icon" :src="item.icon" :alt="item.name">
                  {{item.name}}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tools">
        <div class="tool" @click="isShowSearch = true">&#xe618;</div>
        <div class="tool" v-if="isSun" @click="changeTheme">&#xe63e;</div>
        <div class="tool" v-else @click="changeTheme">&#xe6c2;</div>
        <a class="tool" href="/?userinfo">&#xe650;</a>
      </div>
    </div>
  </div>
  <div class="search-box" v-show="isShowSearch" @click.self="isShowSearch = false">
    <div class="search-main">
      <div class="search-input">
        <input class="search-input-text" type="text" @keydown.enter="search" v-model="searchText" placeholder="输入关键词进行搜索">
        <span class="search-button" @click="search">&#xe618;</span>
      </div>
      <div class="search-result" @click.self="isShowSearch = false">
        <div class="search-list">
          <p class="search-result-empty" v-if="searchList.length == 0">空空如也🍂</p>
          <a :href="item.path" class="search-result-item" v-for="item in searchList">
            <p class="search-result-item-title">{{ item.frontmatter.title }}</p>
            <div class="search-result-item-infos">
              <p class="search-result-item-info" v-show="item.frontmatter.date">
                &#xe6ad;
                {{ new Date(item.frontmatter.date).toLocaleDateString() }}
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { pageDatas, countMateData, themeConfig } from '@temp/blogMate';

  export default {
    name: 'Menu',
    components: {},
    data: () => ({
      isSun: true,
      tags: countMateData.tags,
      archive: countMateData.archive,
      alones: themeConfig.alones,
      blogFriends: themeConfig.blogFriends,
      isShowSearch: false,
      searchText: '',
      searchList: [],
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
      search() {
        const searchText = this.searchText.trim();
        if (searchText === '') return;
        this.searchList = pageDatas.filter(item => item.frontmatter.title?.match(new RegExp(searchText, 'i')));
      }
    },
    created() {
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
    width: 200px;
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
    width: 505px;
    margin: 20px auto;
    opacity: 0;
  }

  .menu-position:hover .menu-content,
  .menu:hover .menu-content {
    opacity: 1;
  }

  .menu-content-title-main {
    font-weight: 900;
    margin-right: 20px;
  }

  .menu-content-title-describe {
    opacity: 0.8;
  }

  .menu-content-list {
    display: flex;
    flex-wrap: wrap;
    white-space: nowrap;
    margin-top: 30px;
    padding: 0 20px;
    color: #1a1a1a;
    width: fit-content;
  }

  .menu-content-list:hover {
    color: #999;
  }

  .menu-content-item {
    padding: 0.5em 1em;
  }

  .menu-content-item:hover {
    color: #000;
  }

  .menu-alone-list {
    margin-top: 30px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  }

  .menu-alone-list:hover>.menu-alone-item {
    opacity: 0.5;
  }

  .menu-alone-item {
    display: inline-flex;
    align-items: center;
    font-size: var(--size2);
    transition: 0.2s;
    width: fit-content;
    margin: 10px 20px;
  }

  .menu-alone-item:hover {
    opacity: 1 !important;
  }

  .menu-alone-icon {
    height: 1.5em;
  }

  .menu-alone-describe {
    font-size: 12px;
    opacity: 0.5;
    font-size: var(--size1);
  }

  .tools {
    display: flex;
    width: 200px;
    gap: 20px;
    font-size: 18px;
    justify-content: flex-end;
    align-items: center;
    user-select: none;
  }

  .tool {
    cursor: pointer;
  }

  .search-box {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: #8888;
    backdrop-filter: blur(4px);
    z-index: 550;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .search-main {
    margin-bottom: 10vh;
    width: 750px;
  }

  .search-input {
    padding: 20px 30px;
    border-radius: 8px;
    background: white;
    box-shadow: 0 0 5px #7898;
    display: flex;
    align-items: center;
  }

  .search-input-text {
    border: none;
    outline: none;
    flex: 1;
    border-bottom: 1px solid #9a88;
    padding: 5px 10px;
    font-size: var(--size3);
    font-weight: 100;
    font-family: inherit;
  }

  .search-button {
    font-size: var(--size3);
    margin-left: 10px;
    cursor: pointer;
  }

  .search-result {
    margin-top: 3vh;
    height: 50vh;
  }

  .search-list {
    padding: 0 10px;
    border: 20px solid white;
    border-radius: 8px;
    background: white;
    box-shadow: 0 0 5px #7898;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    max-height: 100%;
    -ms-overflow-style: none;
  }

  .search-list::-webkit-scrollbar {
    display: none;
  }

  .search-result-empty {
    text-align: center;
    margin: 20px 0;
    font-size: var(--size3);
    opacity: 0.5;
    user-select: none;
  }

  .search-result-item {
    display: block;
    transition: 0.2s;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .search-result-item:hover {
    opacity: 1;
  }

  .search-result-item+.search-result-item {
    margin-top: 20px;
  }

  .search-result-item-title {
    position: relative;
    color: #1b2832;
    font-size: var(--size2);
  }

  .search-result-item-title::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    top: 100%;
    background: linear-gradient(to right, red, blue);
    opacity: 0;
    transition: 0.2s;
    margin-top: 5px;
  }

  .search-result-item:hover .search-result-item-title::after {
    opacity: 1;
  }

  .search-result-item-infos {
    margin-top: 10px;
    font-size: var(--size1);
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .search-result-item-info {
    margin-left: 15px;
  }

  .search-result-over {
    margin: 100px auto 300px;
    text-align: center;
    height: 2px;
    line-height: 2px;
    font-size: var(--size1);
    color: #1b283288;
  }
</style>
