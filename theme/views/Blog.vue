<template>
    <div class="blog-root">
        <div class="blog-infos">
            <div class="blog-lables">
                <div class="blog-lable" v-for="item in labels">{{ item.name }}</div>
            </div>
            <div class="blog-info">
                <p class="blog-info-text">{{ updatedTime }}</p>
                <div class="blog-info-icon">&#xe6ad;</div>
            </div>
            <div class="blog-info">
                <p class="blog-info-text">{{ commitMount }}</p>
                <div class="blog-info-icon">&#xe689;</div>
            </div>
            <div class="blog-info">
                <p class="blog-info-text">{{ commitMount }}</p>
                <div class="blog-info-icon">&#xe636;</div>
            </div>
        </div>
        <div class="blog-main">
            <MdView class="blog-mdView" />
            <CommentService />
        </div>
        <Toc class="blog-toc" />
    </div>
</template>

<script setup>
    import { usePageData } from '@vuepress/client';
    import MdView from '../components/MdView.vue';
    import { reactive } from 'vue';

const pageData = usePageData().value;
    const labels = reactive((pageData.frontmatter.lables || '').split(' ').map((item) => ({ name: item })));
</script>

<style scoped>
    .blog-root {
        min-height: 100vh;
        margin: 15vh auto 0;
        width: 95%;
        max-width: 660px;
    }
    .blog-infos {
        position: fixed;
        top: 50%;
        right: calc(50% + 420px);
        overflow: auto;
        transform: translate(0, -50%);
        display: flex;
        flex-direction: column;
        gap: 20px;
        height: 100%;
        justify-content: center;
        align-items:flex-end;
    }
    .blog-info {
        text-align: center;
    }
    .blog-info-icon {
        margin: auto;
        font-size: var(--size2);
        height: 2em;
        width: 2em;
        line-height: 2em;
        text-align: center;
        background: #f1f3f3;
        border-radius: 50%;
        cursor: pointer;
        transition: 0.3s;
    }
    .blog-info-icon:hover {
        color: rgb(206, 165, 111);
    }
    .blog-info-text {
        margin-top: 10px;
        font-size: var(--size1);
    }
    .blog-lables {
        margin-top: 20px;
        flex-wrap: wrap;
    }
    .blog-lable {
        font-size: var(--size1);
        padding: 0.1em 0.7em;
        border-radius: 0.5em;
        border: 2px solid #899;
        margin-right: 0.5em;
        cursor: pointer;
    }
    .blog-main {
    }
    ::v-deep .blog-mdView div > h1:first-child {
        margin-top: 0;
        border: none;
        font-size: var(--size6);
    }
    .blog-toc {
        position: fixed;
        top: 50%;
        left: calc(50% + 420px);
        max-height: 80%;
        overflow: auto;
        transform: translate(0, -50%);
        font-size: var(--size1);
    }
    ::v-deep .blog-toc:hover .vuepress-toc-item > a {
        color: inherit;
    }
    ::v-deep .blog-toc .vuepress-toc-item > a {
        opacity: 0.4;
        transition: 0.5s;
        color: transparent;
    }
    ::v-deep .blog-toc .vuepress-toc-item > a:hover {
        opacity: 1;
        color: inherit;
    }
    ::v-deep .blog-toc .vuepress-toc-item > a.active {
        opacity: 1;
        color: inherit;
    }
    ::v-deep .blog-toc .vuepress-toc-item > a::before {
        content: '';
        width: 1em;
        height: 0.3em;
        background: #c2c3c4;
        display: inline-block;
        vertical-align: middle;
        margin-right: 0.5em;
        border-radius: 1em;
    }
    ::v-deep .blog-toc .vuepress-toc-list > .vuepress-toc-item > .vuepress-toc-list .vuepress-toc-item > a::before {
        width: 1.5em;
    }
</style>
