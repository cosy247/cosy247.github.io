export default ({ countMateNames = [], isArrMateNames = [] }) => ({
  name: 'plugins-blog-meta',
  onPrepared(app) {
    const countMateData = countMateNames.reduce((countMateData, metaName) => {
      countMateData[metaName] = {};
      return countMateData;
    }, {});

    const themeConfig = app.pages.find((page) => page.filePathRelative === 'README.md').frontmatter;

    const pageDatas = app.pages
      .reduce((pageDatas, page) => {
        const { htmlFilePathRelative: path, frontmatter } = page;

        if (!path || path === 'index.html' || path === '404.html' || path[0] === '@') return pageDatas;

        // 数组属性转化
        isArrMateNames.forEach((metaName) => {
          if (frontmatter[metaName]) {
            frontmatter[metaName] = frontmatter[metaName].split(' ');
          }
        });

        // 属性计数
        countMateNames.forEach((metaName) => {
          const metaValue = frontmatter[metaName];
          if (metaValue) {
            if (isArrMateNames.includes(metaName)) {
              metaValue.forEach((value) => {
                if (!countMateData[metaName][value]) {
                  countMateData[metaName][value] = 0;
                }
                countMateData[metaName][value]++;
              });
            } else {
              if (!countMateData[metaName][metaValue]) {
                countMateData[metaName][metaValue] = 0;
              }
              countMateData[metaName][metaValue]++;
            }
          }
        });

        // 记录数据
        pageDatas.push({ path, frontmatter });

        return pageDatas;
      }, [])
      .sort((b1, b2) => new Date(b2.frontmatter.date) - new Date(b1.frontmatter.date));

    app.writeTemp('app.json', JSON.stringify(app));
    app.writeTemp('blogMate.json', JSON.stringify({ pageDatas: pageDatas, countMateData, themeConfig }));
  },
});
