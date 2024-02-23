import themeMaster from './theme';
import blogMateData from './theme/plugins/blogMate';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';

module.exports = {
    theme: 'master',
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':raw',
    head: [['link', { rel: 'icon', href: '/imgs/logo.png' }]],
    plugins: [
        themeMaster(),
        blogMateData({
            initMateNames: ['title', 'description', 'lables'],
            countMateNames: ['lables'],
            isArrMateNames: ['lables'],
        }),
        tocPlugin({}),
        activeHeaderLinksPlugin({
            headerLinkSelector: 'a.vuepress-toc-link',
            delay: 0,
        }),
    ],
};
