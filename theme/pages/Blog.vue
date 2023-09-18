<template>
    <div class="blog-root">
        <img class="blog-cover" :src="cover" alt="" />
        <p class="blog-title">{{ pageData.frontmatter.title }}</p>
        <Content id="write" />
    </div>
</template>

<script setup>
    import '../common/rainbow.css';
    import { usePageData } from '@vuepress/client';
    import themeConfig from '../../theme.config';
    const pageData = usePageData().value;
    const cover = pageData.frontmatter.cover || themeConfig.cover[Date.now() % themeConfig.cover.length ];
	console.log(cover);
</script>

<style scoped>
    .blog-root {
        min-height: 100vh;
        margin: 15vh auto 0;
    }
	.blog-cover {
		display: block;
		width: 60%;
		height: 30vw;
		margin: auto;
		object-fit: cover;
	}
</style>
