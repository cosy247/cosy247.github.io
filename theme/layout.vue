<template>
  <PageOuter />
  <Home v-if="pageType == 'home'" @addScrollCallback="addScrollCallback" />
  <Blog v-else-if="pageType == 'blog-item'" @addScrollCallback="addScrollCallback" />
  <UserInfo v-else-if="pageType == 'userinfo'" @addScrollCallback="addScrollCallback" />
</template>

<script>
  import './styles/common.css';
  import Home from './views/Home.vue';
  import Blog from './views/Blog.vue';
  import PageOuter from './components/PageOuter.vue';

  export default {
    name: 'Index',
    components: { Home, Blog, PageOuter },
    props: [],
    data: () => ({
      scrollCallbacks: [],
    }),
    computed: {
      pageType() {
        const { path, query } = this.$route;
        if (path == '/') {
          return typeof query.userinfo === 'undefined' ? 'home' : 'userinfo';
        } else {
          return 'blog-item';
        }
      },
    },
    watch: {},
    methods: {
      addScrollCallback(callback) {
        this.scrollCallbacks.push(callback);
      },
      handelScroll() {
        this.scrollCallbacks.forEach((callback) => callback(event));
      },
    },
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

  .router {
    position: relative;
    width: 100%;
    min-height: 100%;
    background: var(--theme-background);
    z-index: 1;
    padding-bottom: 100px;
  }

  .notFound {
    height: 100%;
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
