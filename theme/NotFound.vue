<template>
    <Menu />
    <div class="main">
        <div class="notFound">
            <span class="icon">&#xe6af;</span>
            <span class="text">404</span>
        </div>
    </div>
    <Footer title="title" />
</template>

<script setup>
    import './common/common.css';
    import Footer from './components/Footer.vue';
    import Menu from './components/Menu.vue';
</script>

<style scoped>
    .main {
        position: relative;
        width: 100vw;
        height: 100vh;
        min-height: 100vh;
        background: white;
        z-index: 1;
    }
    .notFound {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .icon {
        font-size: 45vmin;
    }
    .text {
        font-size: 10vmin;
    }
</style>
