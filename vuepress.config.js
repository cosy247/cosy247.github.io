import blogMateData from './theme/plugins/blogMate';

module.exports = {
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':slug',
    plugins: [
        blogMateData({
            initMateNames: ['title', 'tags'],
            countMateNames: ['tags'],
            isArrMateNames: ['tags'],
        }),
    ],
};
