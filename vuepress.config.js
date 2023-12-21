import themeMaster from './theme';
import blogMateData from './theme/plugins/blogMate';
import { gitPlugin } from '@vuepress/plugin-git';
import { mediumZoomPlugin } from '@vuepress/plugin-medium-zoom';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links'


module.exports = {
    theme: 'master',
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':raw',
    plugins: [
        themeMaster(),
        gitPlugin(),
        blogMateData({
            initMateNames: ['title', 'description', 'lables'],
            countMateNames: ['lables'],
            isArrMateNames: ['lables'],
        }),
        mediumZoomPlugin({
            // 配置项
        }),
        shikiPlugin({}),
        tocPlugin({}),
        activeHeaderLinksPlugin({
          // 配置项
        }),
    ],
};
