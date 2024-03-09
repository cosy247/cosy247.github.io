<template>
  <div class="Index">
    <OneSentence />
    <Menu />
    <Side />
    <div class="sroll-content">
      <Home v-if="pageType == 'home'" />
      <Blog v-else-if="pageType == 'blog-item'" />
      <Picture v-else-if="pageType == 'picture'" />
      <div v-else class="notFound">
        <span class="notFound-icon">&#xe6af;</span>
        <span class="notFound-text">404</span>
      </div>
    </div>
    <Footer title="title" />
  </div>
</template>

<script>
  import './styles/common.css';
  import Footer from './components/Footer.vue';
  import Menu from './components/Menu.vue';
  import OneSentence from './components/OneSentence.vue';
  import Side from './components/Side.vue';
  import Home from './views/Home.vue';
  import Blog from './views/Blog.vue';
  import Picture from './views/Picture.vue';

  export default {
    name: 'Index',
    components: { Menu, Home, Blog, Footer, OneSentence, Side, Picture },
    props: ['is404'],
    data: () => ({}),
    computed: {
      pageType() {
        const { path } = this.$route;
        if (path == '/') {
          return 'home';
        } else if (path.startsWith('/blog/')) {
          return 'blog-item';
        } else if (path === '/picture') {
          return 'picture';
        } else {
          return '404';
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
    border: var(--outer-width) solid #1a232c;
    box-sizing: border-box;
  }
  .Index::before {
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
  .sroll-content {
    height: 100%;
    width: calc(100vw - var(--outer-width));
    overflow-y: scroll;
    padding: 60px 0 160px;
    box-sizing: border-box;
  }
  .sroll-content::-webkit-scrollbar {
    width: var(--outer-width);
    background: #1a232c;
  }
  .sroll-content::-webkit-scrollbar-thumb {
    background: #8a78;
    width: var(--outer-width);
    margin: 2px;
    border-radius: var(--outer-width);
  }
  .router {
    position: relative;
    width: 100%;
    min-height: 100%;
    background: var(--theme-background);
    z-index: 1;
    padding-bottom: 100px;
  }
  .notFound {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .notFound-icon {
    font-size: 40vmin;
  }
  .notFound-text {
    font-size: 10vmin;
  }
</style>
·
