<template>
    <div class="cover">
        <img class="cover-back" src="https://i.loli.net/2021/02/07/HEhPAp6UQbLi7kZ.jpg" alt="" />
        <p class="cover-title">{{ themeConfig.title }}</p>
    </div>
    <div class="list">
        <div class="list-item" v-for="item in pageList">
            <p class="list-item-title">{{ item.title }}</p>
            <p class="list-item-description">{{ item.description }}</p>
            <div class="list-item-info">
                <p class="list-item-info-update" v-show="item.$.updatedTime">
                    <span>&#xe6ad;更新时间：</span>
                    {{ new Date(item.$.updatedTime).toLocaleString() }}
                </p>
                <p class="list-item-info-count">
                    <span>&#xe689;更新次数：</span>
                    {{ item.$.commitNumber }}
                </p>
                <p class="list-item-info-see">
                    <span>&#xe636;</span>
                    {{ item.$.commitNumber }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import themeConfig from '../../theme.config';
    import { pageMateData, countMateData } from '@temp/blogMate';

    const pageList = pageMateData.slice(0, 10);
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
    .list {
        margin: auto;
        width: 95%;
        max-width: 800px;
    }
    .list-item {
        padding: 1rem 3rem;
        border-radius: 5px;
        box-shadow: 0 0 5px #8888;
    }
    .list-item:nth-child(n +2) {
        margin-top: 20px;
    }
    .list-item-title {
        font-size: var(--size8);
    }
    .list-item-description {
        font-size: var(--size5);
    }
</style>
