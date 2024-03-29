import { defineClientConfig } from '@vuepress/client';
import Index from './Index.vue';
import NotFound from './NotFound.vue';
import Pictrues from './mdComponents/Pictrues.vue';

export default defineClientConfig({
  layouts: {
    Layout: Index,
    NotFound,
  },
  enhance: ({ app }) => {
    app.component('pictrues', Pictrues);
  },
});
