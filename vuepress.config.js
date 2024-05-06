import themeMaster from './theme';
import blogMateData from './theme/plugins/blogMate';
import { tocPlugin } from '@vuepress/plugin-toc';
import { activeHeaderLinksPlugin } from '@vuepress/plugin-active-header-links';
import { viteBundler } from '@vuepress/bundler-vite';
import { copyCodePlugin } from '@vuepress/plugin-copy-code';
import { shikiPlugin } from '@vuepress/plugin-shiki';
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance';
import { containerPlugin } from '@vuepress/plugin-container';
import { registerComponentsPlugin } from '@vuepress/plugin-register-components';
import fs from 'fs';

const componentsDir = './theme/mdComponents';

export default {
  // 运行设置
  theme: 'master',
  temp: './.temp',
  cache: './.cache',
  public: './docs',
  dest: './_CosyBlog',
  permalinkPattern: ':raw',
  // 网页信息设置
  title: 'cosy247博客',
  lang: 'zh-Hans-CN',
  description: 'cosy247的个人博客 master',
  head: [['link', { rel: 'icon', href: '/assets/logo.png' }]],
  // 插件设置
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
      offset: 100,
    }),
    copyCodePlugin({
      selector: '.mdContent div[class*="language-"] pre',
      locales: {
        '/': {
          copied: '😘',
        },
      },
    }),
    shikiPlugin({
      theme: 'one-dark-pro',
    }),
    mdEnhancePlugin({
      tabs: true,
      echarts: true,
    }),
    registerComponentsPlugin({
      componentsDir,
    }),
    ...fs.readdirSync(componentsDir).map((file) => {
      const [fileName] = file.split('.');
      return containerPlugin({
        type: fileName.toLowerCase(),
        before: (...info) => `<ClientOnly><${fileName} info="${info}">\n`,
        after: () => `</${fileName}></ClientOnly>\n`,
      });
    }),
  ],
};
