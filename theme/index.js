import { getDirname, path } from '@vuepress/utils';

export default () => ({
    name: 'vuepress-theme-master',
    clientConfigFile: path.resolve(getDirname(import.meta.url), './client.js'),
});
