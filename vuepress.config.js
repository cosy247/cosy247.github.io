import themeMaster from './theme';
import blogMateData from './theme/plugins/blogMate';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { viteBundler } from '@vuepress/bundler-vite';

export default {
  theme: 'master',
  dest: './dist',
  temp: './.temp',
  cache: './.cache',
  public: './assets',
  description: 'cosy247的个人博客 master',
  permalinkPattern: ':raw',
  head: [['link', { rel: 'icon', href: '/imgs/logo.png' }]],
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  plugins: [
    themeMaster(),
    blogMateData({
      initMateNames: ['title', 'description', 'tags'],
      countMateNames: ['tags', 'archive'],
      isArrMateNames: ['tags'],
    }),
    tocPlugin({}),
    activeHeaderLinksPlugin({
      headerLinkSelector: 'a.vuepress-toc-link',
      delay: 0,
    }),
  ],
};
