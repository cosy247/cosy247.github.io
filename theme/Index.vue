<template>
    <Menu />
    <div class="main">
        <Home v-if="pageType == 'home'" />
        <Blog v-else-if="pageType == 'blog'" />
    </div>
    <Footer />
</template>

<script setup>
    // 加载统一样式文件
    import './common/common.css';

    // 加载组件
    import Footer from './components/Footer.vue';
    import Menu from './components/Menu.vue';
    import Home from './pages/Home.vue';
    import Blog from './pages/Blog.vue';

    // 其他
    import { usePageData } from '@vuepress/client';
    import stroe from './store';

    /** 页面类型 */
    const pageType = (() => {
        const { path } = usePageData().value;
        if (path == '/') {
            stroe.pageType = 'home';
        } else if (path == 'blog') {
            stroe.pageType = 'blog';
        } else if (path.match(/blog\//)) {
            stroe.pageType = 'blog-item';
        } else if (path == 'label') {
            stroe.pageType = 'label';
        } else if (path.match(/label\//)) {
            stroe.pageType = 'label-item';
        }
        return stroe.pageType;
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
