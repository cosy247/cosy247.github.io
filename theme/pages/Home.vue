<template>
    <div class="cover">
        <img class="cover-back" src="https://images.alphacoders.com/131/1311951.jpg" alt="" />
        <p class="cover-title">{{ themeConfig.title }}</p>
    </div>
    <div class="list">
        <div class="list-item" v-for="item in pageList">
            <p class="list-item-title">{{ item.title }}</p>
            <p class="list-item-description">{{ item.description }}</p>
            <div class="list-item-info">
                <p class="list-item-info-update" v-show="item.$.updatedTime"><span>&#xe6ad;更新时间：</span>{{ new Date(item.$.updatedTime).toLocaleString() }}</p>
                <p class="list-item-info-count"><span>&#xe689;更新次数：</span>{{ item.$.commitNumber }}</p>
                <p class="list-item-info-see"><span>&#xe636;</span>{{ item.$.commitNumber }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
    import { pageDatas, countMateData } from '@temp/blogMate';

    const pageList = pageDatas.blog.slice(0, 10);
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
        filter: saturate(25%);
        transition: 0.2s;
    }
    .cover-back:hover {
        filter: none;
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
        pointer-events: none;
    }
    .list {
        margin: auto;
        width: 95%;
        max-width: 800px;
    }
    .list-item:nth-child(n +2) {
        margin-top: 50px;
        padding-top: 30px;
        border-top: solid 1px #8883;
    }
    .list-item-title {
        color: #1b2832;
        font-size: var(--size8);
    }
    .list-item-description {
        color: #415462;
        margin-top: 20px;
        font-size: var(--size5);
    }
    .list-item-info {
        margin-top: 20px;
        display: flex;
    }
    .list-item-info-update {

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
