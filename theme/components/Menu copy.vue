<template>
    <div class="rootMenu" :class="isExpand ? 'open' : ''">
        <div class="menu-outer">
            <div class="menu-logo" @click="switchMenu">
                <span class="menu-logo-left">&#xe883;</span>
                Menu
                <span class="menu-logo-right">&#xe601;</span>
            </div>
            <div class="menu-search">
                <input type="text" />
            </div>
            <div class="menu-link">
                <p class="menu-link-item" v-for="item in links">
                    <span v-html="item.icon"></span>
                    {{ item.name }}
                </p>
                <p class="menu-link-hello">{{ linkHello }}</p>
            </div>
            <div class="menu-count">
                <p>20</p>
                <p>23</p>
                <p class="menu-count-line">--</p>
                <p>08</p>
                <p class="menu-count-line">--</p>
                <p>04</p>
                <div class="menu-count-visits">
                    <span>/</span>
                    访问量:{{ 43123 }}
                </div>
            </div>
        </div>
        <div class="menu-main" :class="isMenuPage ? 'show' : ''">
            <div class="menu-items">
                <a :href="item.url" class="menu-item" v-for="(item, index) in menuItems" :data-name="item.name">{{ item.name }}</a>
            </div>
            <div class="menu-author">
                <MdView :pageKey="readmeKey" />
            </div>
        </div>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
    import { computed, ref, onMounted, onBeforeUnmount } from 'vue';
    import windowEvent from '../utils/windowEvent';
    import store from '../store';
    import { readmeKey } from '@temp/blogMate';
    import MdView from './MdView.vue';

    const links = themeConfig.links || [];
    const linkHello = themeConfig.linkHello || '和我取得联系>>>';
    const menuItems = themeConfig.menus;
    const author = themeConfig.author;

    /** 是否在页面顶部 */
    const isPageTop = ref(false);
    /** 是否在菜单页面 */
    const isMenuPage = ref(false);
    /** 是否展开外部显示的内容 */
    const isExpand = ref(true);

    function switchMenu() {
        isMenuPage.value = !isMenuPage.value;
        isExpand.value = !(isPageTop.value || isMenuPage.value);
        window.document.documentElement.style.overflow = isMenuPage.value ? 'hidden' : 'auto';
    }

    function checkPageTop() {
        const scrollTop = window.document.body.scrollTop || window.document.documentElement.scrollTop;
        isPageTop.value = scrollTop <= 50;
        isExpand.value = !(isPageTop.value || isMenuPage.value);
    }

    onMounted(() => {
        checkPageTop();
        windowEvent.add('scroll', checkPageTop);
    });

    onBeforeUnmount(() => {
        windowEvent.remove('scroll', checkPageTop);
    });
</script>

<style>
    .rootMenu {
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        z-index: 555;
        pointer-events: none;
        user-select: none;
    }
    .menu-outer {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: 0.3s;
        z-index: 555;
    }
    .open > .menu-outer {
        width: 110%;
        height: 110%;
    }
    .menu-logo {
        position: absolute;
        left: 10%;
        top: 10%;
        cursor: pointer;
        font-size: var(--size4);
        font-weight: 900;
        pointer-events: all;
        height: 24px;
    }
    .menu-logo-left {
        display: inline-block;
        width: 0;
        transform: scale(0);
        transition: 0.2s;
    }
    .menu-logo:hover .menu-logo-left {
        transform: scale(1);
        width: 1em;
    }
    .menu-logo-right {
        display: inline-block;
        width: 1em;
        transform: scale(1);
        transition: 0.2s;
    }
    .menu-logo:hover .menu-logo-right {
        transform: scale(0);
        width: 0;
    }
    .rese .menu-logo-left {
        width: 1em;
        transform: scale(1);
    }
    .rese.menu-logo:hover .menu-logo-left {
        transform: scale(0);
        width: 0em;
    }
    .rese .menu-logo-right {
        width: 0em;
        transform: scale(0);
    }
    .rese.menu-logo:hover .menu-logo-right {
        transform: scale(1);
        width: 1em;
    }
    .menu-logo span {
        color: var(--color-red);
    }
    .menu-search {
        position: absolute;
        right: 10%;
        top: 10%;
        height: 24px;
        display: flex;
        align-items: center;
    }
    .menu-search::after {
        content: '';
        position: absolute;
        right: -0.2rem;
        top: 50%;
        width: 3em;
        height: 3em;
        background: var(--color-red);
        transform: translate(0, -50%);
        border-radius: 20% 20px;
        z-index: 1;
    }
    .menu-search input {
        position: relative;
        border: 1px solid #8888;
        border-radius: 20px;
        font-size: var(--size2);
        padding: 0 1em;
        width: 10em;
        height: 1.2em;
        outline: none;
        pointer-events: all;
        z-index: 2;
    }
    .menu-link {
        position: absolute;
        left: 10%;
        bottom: 10%;
        transition: 0.3s;
        pointer-events: auto;
    }
    .open > .menu-outer > .menu-link {
        opacity: 0;
        pointer-events: none;
    }
    .menu-link-item {
        font-size: var(--size1);
        cursor: pointer;
        margin-bottom: 0.3em;
    }
    .menu-link-item::after {
        content: '~';
        color: var(--color-red);
    }
    .menu-link-item span {
        margin-right: 0.2em;
    }
    .menu-link-hello {
        font-size: var(--size3);
    }
    .menu-count {
        position: absolute;
        right: 10%;
        bottom: 10%;
        transition: 0.3s;
    }
    .open > .menu-outer > .menu-count {
        opacity: 0;
    }
    .menu-count.hidden {
        opacity: 0;
        pointer-events: none;
    }
    .menu-count p {
        text-align: center;
        width: 1.6em;
        line-height: 0.9em;
        margin-left: auto;
        font-size: var(--size2);
    }
    .menu-count-visits {
        font-size: var(--size3);
    }
    .menu-count-line {
        color: var(--color-red);
        font-weight: 900;
        line-height: 1em;
    }
    .menu-count span {
        color: var(--color-red);
    }
    .menu-main {
        position: absolute;
        width: 100%;
        height: 100%;
        left: -160%;
        top: 0%;
        padding: 0 25%;
        box-sizing: border-box;
        z-index: 500;
        display: flex;
        align-items: center;
        justify-content: space-between;
        pointer-events: all;
        transition: 0.9s;
        backdrop-filter: blur(5px) grayscale(0.5);
    }
    .menu-main.show {
        left: 0%;
    }
    .menu-main::before {
        content: '';
        position: absolute;
        top: 0;
        left: 100%;
        width: 60%;
        height: 100%;
        background: linear-gradient(rgb(133, 119, 170), rgb(153, 238, 153), rgb(238, 208, 153));
        z-index: -1;
    }
    .menu-items {
        position: relative;
        pointer-events: all;
        font-size: var(--size6);
        width: fit-content;
    }
    .menu-item {
        position: relative;
        line-height: 1.8em;
        display: block;
        cursor: pointer;
    }
    .menu-item::before {
        content: attr(data-name);
        position: fixed;
        right: 40%;
        top: 0;
        width: 0;
        height: 100%;
        text-align: center;
        line-height: 0;
        font-size: 18vh;
        opacity: 0;
        transition: 0.2s;
        writing-mode: vertical-lr;
        pointer-events: none;
        letter-spacing: 0.1em !important;
        text-shadow: 1px 2px 2px white;
    }
    .menu-item:hover:before {
        opacity: 1;
    }
    .menu-item::after {
        content: '';
        position: absolute;
        left: -0.5em;
        top: 0.9em;
        width: 0.2em;
        height: 0em;
        background: var(--color-red);
        transition: 0.2s;
    }
    .menu-item:hover:after {    
        height: 1.2em;
        top: 0.3em;
    }
    .menu-author {
        width: 50%;
        transition: 0.2s;
        font-size: var(--size4);
        padding: 0.5em;
        background: #8888;
    }
    .menu-items:hover + .menu-author {
        opacity: 0;
    }
    .menu-author-avatar {
        width: 50rem;
        height: 27rem;
        object-fit: cover;
    }
    .menu-author-about {
        margin-top: 1em;
        text-indent: 2em;
        line-height: 1.6em;
        font-size: var(--size3);
        white-space: pre-wrap;
    }
</style>
