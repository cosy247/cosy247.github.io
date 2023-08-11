<template>
    <Menu />
    <div class="main">
        <Home />
    </div>
    <Progress/>
    <Footer />
</template>

<script setup>
    import './common/style.css';
    import Footer from './components/Footer.vue';
    import Menu from './components/Menu.vue';
    import Progress from './components/Progress.vue';
    import Home from './pages/Home.vue';
</script>

<style scoped>
    main {
        width: 100%;
        min-height: 100%;
        background: white;
    }
</style>
