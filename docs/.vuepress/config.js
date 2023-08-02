import { defineUserConfig } from 'vuepress';

export default defineUserConfig({
    lang: 'zh-CN',
    title: '你好， VuePres2s ！',
    description: '这是我的第一个 VuePress 站点',
    themeConfig: {
        search: true,
        searchMaxSuggestions: 10,
    },
    themeConfig: {
        search: false,
        searchMaxSuggestions: 10,
    },
    themeConfig: {
        algolia: {
            apiKey: '<API_KEY>',
            indexName: '<INDEX_NAME>',
        },
    },
});
