import { getDirname, path } from "@vuepress/utils";

export default () => ({
  name: "vuepress-theme-master",
  clientConfigFile: path.resolve(getDirname(import.meta.url), "./client.js"),
  plugins: [
    themeMaster(),
    blogMateData({
      initMateNames: ["title", "description", "tags"],
      countMateNames: ["tags", "archive"],
      isArrMateNames: ["tags"],
    }),
    tocPlugin({}),
    activeHeaderLinksPlugin({
      headerLinkSelector: "a.vuepress-toc-link",
      delay: 0,
      offset: 100,
    }),
    copyCodePlugin({
      selector: '.mdContent div[class*="language-"] pre',
      locales: {
        "/": {
          copied: "😘",
        },
      },
    }),
    shikiPlugin({
      theme: "one-dark-pro",
    }),
    mdEnhancePlugin({
      tabs: true,
      echarts: true,
    }),
  ],
});
