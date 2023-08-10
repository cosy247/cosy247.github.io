<template>
    <div class="rootMenu">
        <div class="menu-outer" :class="!isPageTop && !isMenuPage ? 'open' : ''">
            <div class="menu-logo link-hover" :class="isMenuPage ? 'rese' : ''" @click="showMenu">
                <span class="menu-logo-left">&#xe883;</span>
                Menu
                <span class="menu-logo-right">&#xe601;</span>
            </div>
            <div class="menu-search">
                <input type="text" />
            </div>
            <div class="menu-link" :class="!isPageTop && !isMenuPage ? 'hidden' : ''">
                <p class="menu-link-item link-hover" v-for="item in links">
                    <span v-html="item.icon"></span>
                    {{ item.name }}
                </p>
                <p class="menu-link-hello">{{ linkHello }}</p>
            </div>
            <div class="menu-count" :class="!isPageTop && !isMenuPage ? 'hidden' : ''">
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
                <p class="menu-item link-hover" v-for="(item, index) in menuItems" :data-name="item.name">{{ item.name }}</p>
            </div>
            <div class="menu-author">
                <img class="menu-author-avatar" :src="author.avatar" alt="" />
                <section class="menu-author-about" v-html="author.about"></section>
            </div>
        </div>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
    import { reactive, ref, onMounted } from 'vue';
    import windowEvent from '../utils/windowEvent';

    const links = themeConfig.links || [];
    const linkHello = themeConfig.linkHello || '和我取得联系>>>';
    const isPageTop = ref(false);
    const isMenuPage = ref(false);
    const menuItems = themeConfig.menus;
    const author = themeConfig.author || {};

    function showMenu() {
        isMenuPage.value = !isMenuPage.value;
        if (isMenuPage.value) {
            window.document.documentElement.style.overflow = 'hidden';
        } else {
            window.document.documentElement.style.overflow = 'auto';
        }
    }

    onMounted(() => {
        const scrollTop = window.document.body.scrollTop || window.document.documentElement.scrollTop;
        isPageTop.value = scrollTop <= 10;
        windowEvent.add('scroll', () => {
            const scrollTop = window.document.body.scrollTop || window.document.documentElement.scrollTop;
            isPageTop.value = scrollTop <= 10;
        });
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
    .menu-outer.open {
        width: 110%;
        height: 110%;
    }
    .menu-logo {
        position: absolute;
        left: 10%;
        top: 10%;
        cursor: pointer;
        font-size: var(--size5);
        font-weight: 900;
        pointer-events: all;
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
    }
    .menu-search::after {
        content: '';
        position: absolute;
        right: -0.2rem;
        top: 50%;
        width: 3rem;
        height: 3rem;
        background: var(--color-red);
        transform: translate(0, -50%);
        border-radius: 50%;
        z-index: 1;
    }
    .menu-search input {
        position: relative;
        border: 1px solid #8888;
        border-radius: 20px;
        font-size: var(--size3);
        padding: 0 1rem;
        width: 20rem;
        height: 2rem;
        outline: none;
        pointer-events: all;
        z-index: 2;
    }
    .menu-link {
        position: absolute;
        left: 10%;
        bottom: 10%;
        transition: 0.3s;
    }
    .menu-link.hidden {
        opacity: 0;
        pointer-events: none;
    }
    .menu-link-item {
        font-size: var(--size2);
        cursor: pointer;
        pointer-events: all;
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
    .menu-count.hidden {
        opacity: 0;
        pointer-events: none;
    }
    .menu-count p {
        text-align: center;
        width: 1.6em;
        line-height: 1.2em;
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
        padding: 0 10%;
        box-sizing: border-box;
        background: #f7f7f7;
        z-index: 500;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        pointer-events: all;
        transition: 0.9s;
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
        background: #999;
        z-index: -1;
    }
    .menu-items {
        position: relative;
        pointer-events: all;
        font-size: var(--size8);
        width: 5em;
    }
    .menu-item {
        position: relative;
        line-height: 1.8em;
        cursor: pointer;
    }
    .menu-item::before {
        content: attr(data-name);
        position: fixed;
        left: 0%;
        top: 0%;
        width: 100%;
        height: 100%;
        line-height: 120vw;
        /* text-indent: 50%; */
        text-align: center;
        font-size: 15rem;
        opacity: 0;
        transition: 0.2s;
        writing-mode: vertical-lr;
        pointer-events: none;
        letter-spacing: 0.1em !important;
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
        width: 50rem;
        transition: 0.2s;
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
