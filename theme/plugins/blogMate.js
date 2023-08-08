export default ({ initMateNames = [], countMateNames = [], isArrMateNames = [] }) => ({
    name: 'plugins-blog-mate',
    async onPrepared(app) {
        const pageDatas = app.pages.map((page) => page.data);
        const countMateData = countMateNames.reduce((countMateData, mateName) => {
            countMateData[mateName] = {};
            return countMateData;
        }, {});
        const pageMateData = [];
        pageDatas.forEach(({ filePathRelative, key, path, frontmatter, git: { updatedTime, contributors } }) => {
            if (filePathRelative) {
                const commitNumber = contributors.reduce((commitNumber, { commits }) => commitNumber + commits, 0);
                const itemMateData = { $: { key, path, updatedTime, commitNumber } };
                initMateNames.forEach((mateName) => {
                    if (!frontmatter[mateName]) {
                        return;
                    }
                    itemMateData[mateName] = isArrMateNames.includes(mateName) ? frontmatter[mateName].split(/\s+/) : frontmatter[mateName];
                }, {});
                countMateNames.forEach((mateName) => {
                    if (!frontmatter[mateName]) {
                        return;
                    }
                    if (isArrMateNames.includes(mateName)) {
                        frontmatter[mateName].split(/\s+/).forEach((mateValue) => {
                            if (!countMateData[mateName][mateValue]) {
                                countMateData[mateName][mateValue] = 0;
                            }
                            countMateData[mateName][mateValue]++;
                        });
                    } else {
                        const mateValue = frontmatter[mateName];
                        if (!countMateData[mateName][mateValue]) {
                            countMateData[mateName][mateValue] = 0;
                        }
                        countMateData[mateName][mateValue]++;
                    }
                }, {});
                pageMateData.push(itemMateData);
            }
        });

        app.writeTemp('blogMate.json', JSON.stringify({ pageMateData, countMateData }));
    },
});
