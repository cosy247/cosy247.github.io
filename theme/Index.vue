<template>
    <div></div>
    <Menu />
    <div class="main">
        <Home v-if="pageType == 'home'" />
        <Blog v-else-if="pageType == 'blog'"/>
    </div>
    <Footer />
</template>

<script setup>
    import './common/style.css';
    import Footer from './components/Footer.vue';
    import Menu from './components/Menu.vue';
    import Home from './pages/Home.vue';
    import Blog from './pages/Blog.vue';
    import { usePageData } from '@vuepress/client';
    import stroe from './store'

    const { path } = usePageData().value;
    const pageType = path == '/' ? 'home' : path.split('/')[1];
    
    stroe.pageType = pageType;
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
