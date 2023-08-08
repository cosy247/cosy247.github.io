import fs from 'fs';
import path from 'path';

function getAllFilePath(dir, pathArr = []) {
    fs.readdirSync(dir).forEach((file) => {
        const pathname = path.join(dir, file);
        if (fs.statSync(pathname).isDirectory()) {
            getAllFilePath(pathname, pathArr);
        } else {
            pathArr.push(pathname);
        }
    });
    return pathArr;
}

export default ({ initMates = [], countMates = [], isArrMates = [] }) => ({
    name: 'plugins-page-mate',
    async onPrepared(app) {
        const filePathArr = getAllFilePath(path.resolve('./docs'));
        const countMateObj = countMates.reduce((countMateObj, mateName) => {
            countMateObj[mateName] = {};
            return countMateObj;
        }, {});
        const blogMates = [];
        for (let index = 0; index < filePathArr.length; index++) {
            const filePath = filePathArr[index];
            const file = fs.readFileSync(filePath, 'utf8');
            const metaString = (file.match(/(?<=^(\s*?)---)[\d\D]*(?=---)/) || [''])[0];
            const pageMate = metaString
                .replace(/[\r]/g, '')
                .split('\n')
                .reduce((pageMate, kv) => {
                    let [key, value = ''] = kv.split(':');
                    key = key.trim();
                    value = value.trim();
                    if (key != '') {
                        if (isArrMates.includes(key)) {
                            pageMate[key] = value.replace(/\s+/g, ' ').split(' ');
                        } else {
                            pageMate[key] = value;
                        }
                    }
                    return pageMate;
                }, {});

            blogMates.push(
                initMates.reduce((pageInitMate, mateName) => {
                    pageInitMate[mateName] = pageMate[mateName];
                    return pageInitMate;
                }, {})
            );

            countMates.forEach((mateName) => {
                if (!pageMate[mateName]) {
                    return;
                }
                const value = pageMate[mateName];
                if (isArrMates.includes(mateName)) {
                    value.forEach((v) => {
                        if (countMateObj[mateName][v]) {
                            countMateObj[mateName][v]++;
                        } else {
                            countMateObj[mateName][v] = 1;
                        }
                    });
                } else {
                    if (countMateObj[mateName][value]) {
                        countMateObj[mateName][value]++;
                    } else {
                        countMateObj[mateName][value] = 1;
                    }
                }
            });
        }

        app.writeTemp('blogMate.json', JSON.stringify(blogMates));
        Object.entries(countMateObj).forEach(([mateName, mateCount]) => {
            app.writeTemp(`blogMate-${mateName}.json`, JSON.stringify(mateCount));
        });
    },
});
