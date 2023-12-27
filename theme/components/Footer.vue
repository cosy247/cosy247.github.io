<template>
    <div class="gap"></div>
    <div class="root root-show">
        <div class="content">
            <p class="title">{{ themeConfig.title }}</p>
            <div class="main">
                <div class="main-col" v-for="content in themeConfig.footer.content">
                    <p class="main-col-title">{{ content.title }}</p>
                    <div class="main-col-line"></div>
                    <a :href="item.url" v-for="item in content.links" class="main-col-item">{{ item.name }}</a>
                </div>
            </div>
            <p class="copyright">© {{ themeConfig.footer.copyright }}</p>
        </div>
    </div>
    <div class="root root-hidden">
        <div class="content">
            <p class="title">{{ themeConfig.title }}</p>
            <div class="main">
                <div class="main-col" v-for="content in themeConfig.footer.content">
                    <p class="main-col-title">{{ content.title }}</p>
                    <div class="main-col-line"></div>
                    <a :href="item.url" v-for="item in content.links" class="main-col-item">{{ item.name }}</a>
                </div>
            </div>
            <p class="copyright">© {{ themeConfig.footer.copyright }}</p>
        </div>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
</script>

<style scoped>
    .gap {
        position: relative;
        height: 100px;
        background: white;
        z-index: 1;
    }
    .root {
        width: 100%;
        padding: 30px 0;
        background: linear-gradient(30deg, #252525, #272025);
        color: #eee;
    }
    .root-show {
        position: fixed;
        left: 0;
        bottom: 0;
    }
    .root-hidden {
        opacity: 0;
        pointer-events: none;
    }
    .content {
        margin: auto;
        width: var(--content-width);
        max-width: 1200px;
    }
    .title {
        font-size: var(--size7);
    }
    .main {
        margin-top: 20px;
        font-size: var(--size2);
        display: flex;
        width: 100%;
    }
    .main-col {
        flex: 1;
    }
    .main-col-title {
        color: #888;
        padding-bottom: 5px;
    }
    .main-col-line {
        height: 1px;
        background: var(--color-red);
        opacity: 0.7;
    }
    .main-col-item {
        display: block;
        width: fit-content;
        color: #ccc;
        margin-top: 5px;
    }
    .copyright {
        margin-top: 10px;
        text-align: right;
        color: #aaa;
        font-size: var(--size2);
    }
</style>
