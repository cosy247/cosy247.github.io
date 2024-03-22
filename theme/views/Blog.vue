<template>
  <div class="blog-root">
    <div class="blog-infos" :class="{ hidden: hiddenSide }">
      <div v-for="item in tags" class="blog-info">
        <span class="blog-info-text">{{ item.name }}</span>
        <span class="blog-info-icon">&#xe617;</span>
      </div>
      <div class="blog-info-br"></div>
      <div class="blog-info">
        <span class="blog-info-text">{{ date }}</span>
        <span class="blog-info-icon">&#xe6ad;</span>
      </div>
      <div class="blog-info" @click="gotoComment">
        <span class="blog-info-text">评论</span>
        <span class="blog-info-icon">&#xe6b3;</span>
      </div>
      <div class="blog-info" @click="gotoTop">
        <span class="blog-info-text">顶部</span>
        <span class="blog-info-icon">&#xe62b;</span>
      </div>
    </div>
    <div class="blog-main">
      <MdView class="blog-mdView" />
      <CommentService ref="comment" />
    </div>
    <Toc class="blog-toc" :class="{ hidden: hiddenSide }" />
  </div>
</template>

<script>
  import { usePageData } from '@vuepress/client';
  import MdView from '../components/MdView.vue';

  export default {
    name: 'Menu',
    components: { MdView },
    data: () => ({
      date: '',
      hiddenSide: false,
      tags: [],
      srollRef: null,
    }),
    computed: {},
    watch: {},
    methods: {
      gotoComment() {
        this.srollRef.scrollTop = this.$refs.comment.offsetTop;
      },
      gotoTop() {
        this.srollRef.scrollTop = 0;
      },
    },
    created() {
      const pageData = usePageData().value;
      this.tags = (pageData.frontmatter.tags || '').split(' ').map((item) => ({ name: item }));
      this.date = pageData.frontmatter.date;
    },
    mounted() {
    },
    destroy() {},
  };
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
    height: 100%;
    justify-content: center;
    align-items: flex-end;
    transition: 0.5s;
  }
  .blog-infos.hidden {
    opacity: 0;
    pointer-events: none;
  }
  .blog-infos:hover .blog-info-text {
    opacity: 0.3;
  }
  .blog-info {
    padding: 10px 0;
    cursor: pointer;
  }
  .blog-info-br {
    font-size: var(--size2);
    height: 1px;
    width: 2em;
    background: var(--color-red);
    opacity: 0.2;
    transition: 0.5s;
  }
  .blog-infos:hover .blog-info-br {
    width: 100%;
    opacity: 1;
  }
  .blog-info-text {
    font-size: var(--size1);
    margin-right: 10px;
    opacity: 0;
    transition: 0.5s;
  }
  .blog-info:hover > .blog-info-text {
    opacity: 1;
  }
  .blog-info-icon {
    display: inline-block;
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
    color: #999;
  }
  .blog-info:hover .blog-info-icon {
    color: #333;
  }
  .blog-tags {
    margin-top: 20px;
    flex-wrap: wrap;
  }
  .blog-tag {
    font-size: var(--size1);
    padding: 0.1em 0.7em;
    border-radius: 0.5em;
    border: 2px solid #333;
    margin-right: 0.5em;
    cursor: pointer;
  }
  .blog-main {
  }
  ::v-deep(.blog-mdView div > h1:first-child) {
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
    transition: 0.5s;
  }
  .blog-toc.hidden {
    opacity: 0;
    pointer-events: none;
  }
  ::v-deep(.blog-toc:hover .vuepress-toc-item > a) {
    color: inherit;
  }
  ::v-deep(.blog-toc .vuepress-toc-item > a) {
    opacity: 0.2;
    transition: 0.5s;
    color: transparent;
  }
  ::v-deep(.blog-toc .vuepress-toc-item > a:hover) {
    opacity: 1;
    color: inherit;
  }
  ::v-deep(.blog-toc .vuepress-toc-item > a.active) {
    opacity: 1;
    color: inherit;
  }
  ::v-deep(.blog-toc .vuepress-toc-item > a::before) {
    content: '';
    width: 1em;
    height: 0.3em;
    background: #c1c2c4;
    display: inline-block;
    vertical-align: middle;
    margin-right: 0.5em;
    border-radius: 1em;
  }
  ::v-deep(.blog-toc .vuepress-toc-item > a.active::before) {
    background: var(--color-red);
  }
  ::v-deep(.blog-toc .vuepress-toc-list > .vuepress-toc-item > .vuepress-toc-list .vuepress-toc-item > a::before) {
    width: 1.5em;
  }
</style>
