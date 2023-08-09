import { defineClientConfig } from '@vuepress/client';
import Index from './Index.vue';
import NotFound from './pages/NotFound.vue';

export default defineClientConfig({
    layouts: {
        Layout: Index,
        NotFound,
    },
});
