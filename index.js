import blogMateData from "./plugins/blogMate.js";
import { tocPlugin } from "@vuepress/plugin-toc";
import { activeHeaderLinksPlugin } from "@vuepress/plugin-active-header-links";
import { viteBundler } from "@vuepress/bundler-vite";
import { copyCodePlugin } from "@vuepress/plugin-copy-code";
import { shikiPlugin } from "@vuepress/plugin-shiki";
import { mdEnhancePlugin } from "vuepress-plugin-md-enhance";
import { containerPlugin } from "@vuepress/plugin-container";
import { getDirname, path } from "@vuepress/utils";

export default (option = {}) => {
  const initOption = {
    name: "vuepress-theme-cosy",
    clientConfigFile: path.resolve(getDirname(import.meta.url), "./client.js"),
    bundler: viteBundler({
      viteOptions: {},
      vuePluginOptions: {},
    }),
    plugins: [
      blogMateData({
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
    ...option,
  };

  // componentsPath 属性，目录下注册 md 文档中主键
  if (option.componentsPath) {
    const { registerComponentsPlugin } = require("@vuepress/plugin-register-components");
    const fs = require("fs");

    initOption.plugins.push(
      registerComponentsPlugin({
        componentsDir: option.componentsPath,
      })
    );
    initOption.plugins.push(
      ...fs.readdirSync(option.componentsPath).map((file) => {
        const [fileName] = file.split(".");
        return containerPlugin({
          type: fileName.toLowerCase(),
          before: (...info) => `<ClientOnly><${fileName} info="${info}">\n`,
          after: () => `</${fileName}></ClientOnly>\n`,
        });
      })
    );
  }

  return initOption;
};
