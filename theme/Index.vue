<template>
  <div class="Index">
    <div class="sroll-content">
      <Menu />
      <div class="router">
        <Home v-if="pageType == 'home'" />
        <Blog v-else-if="pageType == 'blog'" />
      </div>
      <Footer title="title" />
    </div>
  </div>
</template>

<script>
  import './styles/common.css';
  import Footer from './components/Footer.vue';
  import Menu from './components/Menu.vue';
  import Home from './views/Home.vue';
  import Blog from './views/Blog.vue';
  import { usePageData } from '@vuepress/client';

  export default {
    name: 'Index',
    components: { Menu, Home, Blog, Footer },
    data: () => ({}),
    computed: {
      pageType() {
        const { path } = usePageData().value;
        if (path == '/') {
          return 'home';
        } else if (path.startsWith('/blog/')) {
          return 'blog';
        }
      },
    },
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .Index {
    position: relative;
    height: 100vh;
    width: 100vw;
    border: 10px solid #1a232c;
    box-sizing: border-box;
    transform: translate(0);
  }
  .Index::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    outline: 10px solid #1a232c;
    z-index: 600;
    pointer-events: none;
    border-radius: 10px;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
  .sroll-content {
    height: 100%;
    width: calc(100% + 10px);
    overflow-y: scroll;
  }
  .sroll-content::-webkit-scrollbar {
    width: 10px;
    background: #1a232c;
  }
  .sroll-content::-webkit-scrollbar-thumb {
    background: #8a78;
    width: 10px;
    margin: 2px;
    border-radius: 10px;
  }
  .router {
    position: relative;
    width: 100%;
    min-height: 100%;
    background: var(--theme-background);
    z-index: 1;
  }
</style>
