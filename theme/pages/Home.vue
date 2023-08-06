<template>
    <div class="cover">
        <img class="cover-back" src="https://i.loli.net/2021/02/07/HEhPAp6UQbLi7kZ.jpg" alt="" />
        <p class="cover-title">{{ themeConfig.title }}</p>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
    import {useSiteData, usePageData} from '@vuepress/client';
    const siteData = useSiteData();
    const pageData = usePageData();
</script>

<style>
    .cover {
		position: relative;
        width: 100%;
        height: 100vh;
    }
    .cover-back {
        width: 100%;
        height: 60%;
        margin: 15vh 0;
        object-fit: cover;
		z-index: 8;
    }
	.cover-title {
		position: absolute;
		left: 50%;
		top: 45%;
		transform: translate(-50%, -50%);
		z-index: 9;
		font-size: var(--size8);
		color: var(--color-white);
        font-weight: 900;
	}
</style>
