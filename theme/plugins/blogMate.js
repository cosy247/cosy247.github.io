export default ({ initMateNames = [], countMateNames = [], isArrMateNames = [] }) => ({
    name: 'plugins-blog-mate',
    onPrepared(app) {
        const nowDate = Date.now();

        const countMateData = countMateNames.reduce((countMateData, mateName) => {
            countMateData[mateName] = {};
            return countMateData;
        }, {});

        const pageDatas = app.pages.reduce((pageDatas, page) => {
            const {
                filePathRelative,
                frontmatter: mate,
                data: { git = {} },
            } = page;
            const { createdTime = nowDate, updatedTime = nowDate, contributors = [] } = git;
            const createdTimeString = new Date(createdTime).toLocaleString();
            const updatedTimeString = new Date(updatedTime).toLocaleString();
            const commitAmount = contributors.reduce((commitNumber, { commits }) => commitNumber + commits, 0);
            const [type, fileName, moreFlag] = filePathRelative ? filePathRelative.split('/') : [];

            // 判断路径是否正确
            if (moreFlag || !fileName) return pageDatas;

            // 数组属性转化
            isArrMateNames.forEach((mateName) => {
                if (mate[mateName]) {
                    mate[mateName] = mate[mateName].split(' ');
                }
            });

            // 属性计数
            countMateNames.forEach((mateName) => {
                const mateValue = mate[mateName];
                if (mateValue) {
                    if (isArrMateNames.includes(mateName)) {
                        mateValue.forEach((value) => {
                            if (!countMateData[mateName][value]) {
                                countMateData[mateName][value] = 0;
                            }
                            countMateData[mateName][value]++;
                        });
                    } else {
                        if (!countMateData[mateName][mateValue]) {
                            countMateData[mateName][mateValue] = 0;
                        }
                        countMateData[mateName][mateValue]++;
                    }
                }
            });

            // 记录数据
            if (!pageDatas[type]) {
                pageDatas[type] = [];
            }
            pageDatas[type].push({
                fileName,
                mate,
                $: { createdTime: createdTimeString, updatedTime: updatedTimeString, commitAmount },
            });

            return pageDatas;
        }, {});

        app.writeTemp('blogMate.json', JSON.stringify({ pageDatas, countMateData }));
    },
});
