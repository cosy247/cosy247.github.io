<template>
    <Menu />
    <div class="main">
        <Home v-if="pageType == 'home'" />
        <Blog v-else-if="pageType == 'blog'" />
    </div>
    <Footer title="title" />
</template>

<script setup>
    import './styles/common.css';
    import Footer from './components/Footer.vue';
    import Menu from './components/Menu.vue';
    import Home from './views/Home.vue';
    import Blog from './views/Blog.vue';
    import { usePageData } from '@vuepress/client';

    /** 页面类型 */
    const pageType = (() => {
        const { path } = usePageData().value;
        if (path == '/') {
            return 'home';
        } else if (path.startsWith('/blog/')) {
            return 'blog';
        }
    })();
</script>

<style scoped>
    .main {
        position: relative;
        width: 100%;
        min-height: 100%;
        background: white;
        z-index: 1;
    }
</style>
