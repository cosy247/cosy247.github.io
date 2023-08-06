import blogData from './theme/plugins/blogData';

module.exports = {
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    plugins: [blogData],
};
