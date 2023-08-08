import blogMateData from './theme/plugins/blogMate';

module.exports = {
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':slug',
    head: [],
    // theme: '',
    plugins: [
        [blogMateData, {
            initMateNames: ['title', 'description', 'tags'],
            countMateNames: ['tags'],
            isArrMateNames: ['tags'],
        }],
        [false, '@vuepress/theme-default'],
        ['@vuepress/plugin-container', {
            disabled: false
        }],
    ],
};
