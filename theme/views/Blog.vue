<template>
    <div class="blog-root">
        <p class="blog-title">{{ pageData.title }}</p>
        <div class="blog-lables">
            <div class="blog-lable" v-for="item in labels">{{ item.name }}</div>
        </div>
        <div class="blog-infos">
            <p class="blog-info">
                <span>&#xe6ad;</span>
                更新时间:{{ updatedTime }}
            </p>
            <p class="blog-info">
                <span>&#xe689;</span>
                更新次数:{{ commitMount }}
            </p>
            <p class="blog-info">
                <span>&#xe636;</span>
                阅读量:{{ commitMount }}
                <!-- {{ item.$.commitNumber }} -->
            </p>
        </div>
        <MdView class="blog-mdView" />
        <Toc />
    </div>
</template>

<script setup>
    import { usePageData } from '@vuepress/client';
    import MdView from '../components/MdView.vue';
    import { reactive } from 'vue';

    const pageData = usePageData().value;
    const updatedTime = new Date(pageData.git.updatedTime || pageData.git.createdTime).toLocaleDateString();
    const commitMount = pageData.git.contributors.reduce((commitMount, item) => commitMount + item.commits, 0);
    const labels = reactive((pageData.frontmatter.lables || '').split(' ').map((item) => ({ name: item })));
</script>

<style scoped>
    .blog-root {
        min-height: 100vh;
        margin: 15vh auto 0;
        width: 95%;
        max-width: 800px;
    }
    .blog-title {
        font-size: var(--size6);
    }
    .blog-lables {
        margin-top: 20px;
        display: flex;
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
    .blog-infos {
        display: flex;
        margin-top: 10px;
    }
    .blog-info {
        font-size: var(--size1);
        margin-right: 1.5em;
    }
    .blog-mdView {
        margin-top: 50px;
    }
</style>
