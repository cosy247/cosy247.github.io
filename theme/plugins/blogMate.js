export default ({ initMateNames = [], countMateNames = [], isArrMateNames = [] }) => ({
    name: 'plugins-blog-meta',
    onPrepared(app) {
        const nowDate = Date.now();

        const countMateData = countMateNames.reduce((countMateData, metaName) => {
            countMateData[metaName] = {};
            return countMateData;
        }, {});

        const readmeKey = app.pages.find(page => page.filePathRelative == 'README.md').key;

        const pageDatas = app.pages.reduce((pageDatas, page) => {
            const {
                filePathRelative,
                frontmatter: meta,
                data: { git = {} },
            } = page;
            const { createdTime = nowDate, updatedTime = nowDate, contributors = [] } = git;
            const createdTimeString = new Date(createdTime).toLocaleString();
            const updatedTimeString = new Date(updatedTime).toLocaleString();
            const commitAmount = contributors.reduce((commitNumber, { commits }) => commitNumber + commits, 0);
            const [type, fileName, moreFlag] = filePathRelative ? filePathRelative.split('/') : [];
            page.type = type;

            // 判断路径是否正确
            if (moreFlag || !fileName) return pageDatas;

            // 数组属性转化
            isArrMateNames.forEach((metaName) => {
                if (meta[metaName]) {
                    meta[metaName] = meta[metaName].split(' ');
                }
            });

            // 属性计数
            countMateNames.forEach((metaName) => {
                const metaValue = meta[metaName];
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
            if (!pageDatas[type]) {
                pageDatas[type] = [];
            }
            pageDatas[type].push({
                path: `/${filePathRelative.slice(0, -3)}`,
                meta,
                $: { createdTime: createdTimeString, updatedTime: updatedTimeString, commitAmount },
            });

            return pageDatas;
        }, {});

        app.writeTemp('blogMate.json', JSON.stringify({ pageDatas, countMateData, readmeKey }));
        app.writeTemp('app.json', JSON.stringify(app));
    },
});
