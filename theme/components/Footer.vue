<template>
    <div class="root">
        <p class="title"></p>
        <div class="links">
            <a class="link-item" :href="item.url" v-for="item in links" v-html="item.icon"></a>
        </div>
        <hr class="line">
        <div class="content">
            <div class="content-support">
                <p class="content-support-title">技术支持</p>
                <a :href="item.url" v-for="item in support" class="content-support-item">{{item.name}}</a>
            </div>
            <div class="menus">
                <p class="content-support-title">导航</p>
                <a class="menu-item" :href="item.url" v-for="item in links" v-html="item.icon"></a>
            </div>
        </div>
        <p class="copyright">© {{copyright}}</p>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';

    const links = themeConfig.links || [];
    const support = themeConfig.footer?.support || [];
    const copyright = themeConfig.footer?.copyright || '';
</script>

<style scoped>
    .root {
        width: 100%;
        height: 100%;
    }
</style>
