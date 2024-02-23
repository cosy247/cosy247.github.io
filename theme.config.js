export default {
  title: '三省🍂的博客',
  cover: ['/cover1.jpg', '/cover2.png', '/cover3.png', '/cover4.png'],
  menus: [
    { name: '首页', url: '/' },
    { name: '标签', url: '' },
    { name: '图册', url: '' },
    { name: '访客留言', url: '' },
    { name: '独立应用', url: '' },
    { name: '一点猜想', url: '' },
    { name: '友情链接', url: '' },
  ],
  author: {
    avatar: '/avatar.webp',
    about: '一个简单码农的个人博客。没有太多的兴趣爱好，无聊写个基于<a href="https://liubz.github.io/">vuepress2</a>的博客来记录并分享工作生活中的各种琐事，有问题欢迎探讨交流。',
  },
  footer: {
    content: [
      {
        title: '导航',
        links: [
          { name: '首页', url: '/' },
          { name: '标签', url: '' },
          { name: '图册', url: '' },
          { name: '访客留言', url: '' },
          { name: '独立应用', url: '' },
          { name: '一点猜想', url: '' },
          { name: '友情链接', url: '' },
        ],
      },
      {
        title: '技术支持',
        links: [
          { name: 'Vuepress2', url: 'https://v2.vuepress.vuejs.org/zh/' },
          { name: 'Vue3', url: 'https://cn.vuejs.org/' },
        ],
      },
    ],
    copyright: 'cosy247.top 三省',
  },
};
