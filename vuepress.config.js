import cosyTheme from  "vuepress-theme-cosy";

export default cosyTheme({
  // 运行设置
  theme: cosyTheme(),
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
});
