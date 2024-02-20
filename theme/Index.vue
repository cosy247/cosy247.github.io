<template>
  <div class="Index">
    <Menu />
    <div class="main">
      <Home v-if="pageType == 'home'" />
      <Blog v-else-if="pageType == 'blog'" />
    </div>
    <Footer title="title" />
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
  }
  .main {
    position: relative;
    width: 100%;
    min-height: 100%;
    background: var(--theme-background);
    z-index: 1;
  }
</style>
