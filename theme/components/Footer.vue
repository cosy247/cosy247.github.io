<template>
    <div class="gap" :style="{ height: gapHeight }"></div>
    <div class="root" ref="footer">
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
    import { ref, onMounted } from 'vue';
    const footer = ref(null);
    const gapHeight = ref(0);
    onMounted(() => {
        console.log(getComputedStyle(footer.value).height);
        gapHeight.value = getComputedStyle(footer.value).height;
    });
    // const gapHeight = getComputedStyle(footer.value).height;
    // console.log(getComputedStyle(footer.value).height);
</script>

<style scoped>
    .gap {
        height: 500px;
        background: transparent;
    }
    .root {
        position: fixed;
        bottom: 0;
        width: 100%;
        background: linear-gradient(30deg, #252525, #272025);
        color: #eee;
    }
    .content {
        margin: auto;
        width: var(--content-width);
        max-width: 1000px;
    }
    .title {
        padding-top: 10px;
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
        padding-bottom: 30px;
    }
</style>
