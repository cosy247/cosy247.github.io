import themeConfig from '@/theme.config';
import getType from '../utils';

export default {
    title: themeConfig.title || '木兮兮🎶的博客',
    links: (getType(themeConfig.links) == 'Array' ? themeConfig.links : []).map(({ name, icon, url }) => ({
        name,
        icon,
        url,
    })),
    cover: {
        index: themeConfig.cover?.index || 'https://images.alphacoders.com/131/1311951.jpg',
    },
    menus: (getType(themeConfig.links) == 'Array' ? themeConfig.links : []).map(({ name, url }) => ({
        name,
        url,
    })),
    author: {
        avatar: themeConfig.author?.avatar || 'imgs/avatar.webp',
        about: themeConfig.author?.about || '一个简单码农的个人博客。没有太多的兴趣爱好，无聊写个基于<a href="https://liubz.github.io/">vuepress2</a>的主题博客来记录并分享工作生活中的各种琐事，有问题欢迎探讨交流。',
    },
};
