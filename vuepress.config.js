import themeMaster from './theme';
import blogMateData from './theme/plugins/blogMate';
import { gitPlugin } from '@vuepress/plugin-git'

module.exports = {
    theme: 'master',
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':slug',
    plugins: [
        themeMaster(),
        gitPlugin(),
        blogMateData({
            initMateNames: ['title', 'description', 'tags'],
            countMateNames: ['tags'],
            isArrMateNames: ['tags'],
        }),
    ],
};
