import { defineClientConfig } from '@vuepress/client';
import Index from '../../theme/Index.vue';
import NotFound from '../../theme/pages/NotFound.vue';

export default defineClientConfig({
    layouts: {
        Layout: Index,
        NotFound,
    },
});
