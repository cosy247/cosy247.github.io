import themeMaster from './theme';

module.exports = {
    theme: 'master',
    dest: './dist',
    temp: './.temp',
    cache: './.cache',
    public: './assets',
    description: '',
    permalinkPattern: ':slug',
    plugins: [themeMaster],
};
