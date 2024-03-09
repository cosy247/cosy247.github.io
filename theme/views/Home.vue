<template>
    <div class="cover">
        <img class="cover-back" :src="cover" />
        <p class="cover-title">{{ themeConfig.title }}</p>
        
        <div class="logo">
          C
          <img src="../assets/images/icon.png" alt="" />
          SY247
        </div>
    </div>
    <div class="list">
        <a :href="item.path" class="list-item" v-for="item in pageList">
            <p class="list-item-title">{{ item.meta.title }}</p>
            <p class="list-item-description">{{ item.meta.description }}</p>
            <div class="list-item-info">
                <p class="list-item-info-update" v-show="item.date">
                    <span>&#xe6ad;更新时间：</span>
                    {{ new Date(item.date).toLocaleString() }}
                </p>
                <p class="list-item-info-see">
                    <span>&#xe636;</span>
                </p>
            </div>
        </a>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
    import { pageDatas } from '@temp/blogMate';

    const cover = themeConfig.cover[Date.now() % themeConfig.cover.length];
    const pageList = pageDatas.blog.sort((b1, b2) => new Date(b2.date) - new Date(b1.date));
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
        top: 45%;
        transform: translateY(-50%);
        z-index: 9;
        font-size: 8vmin;
        color: #efefef;
        font-weight: 900;
        width: 100%;
        text-align: center;
        pointer-events: none;
    }
    .list {
        margin: auto;
        width: var(--content-width);
        max-width: var(--content-max-width);
    }
    .list-item {
        display: block;
        padding: 1em 2em;
        border-radius: 10px;
        border: 1px solid #8888;
        transition: 0.2s;
    }
    .list-item:hover {
        background: #efefef;
    }
    .list-item:nth-child(n + 2) {
        margin-top: 30px;
    }
    .list-item-title {
        color: #1b2832;
        font-size: var(--size5);
    }
    .list-item-description {
        color: #415462;
        margin-top: 20px;
        font-size: var(--size2);
    }
    .list-item-info {
        margin-top: 20px;
        display: flex;
    }
    .list-item-info-count {
        margin-left: 15px;
    }
    .list-item-info-see {
        margin-left: 15px;
    }
    .list-item-info span {
        color: #888;
        margin-right: 5px;
    }
</style>
