import { getDirname, path } from '@vuepress/utils';
import blogMateData from './plugins/blogMate';

export default {
    name: 'vuepress-theme-master',
    clientConfigFile: path.resolve(getDirname(import.meta.url), './client.js'),
    plugins: [
        blogMateData({
            initMateNames: ['title', 'description', 'tags'],
            countMateNames: ['tags'],
            isArrMateNames: ['tags'],
        }),
    ],
};
