import { defineClientConfig } from '@vuepress/client';
import Index from './Index.vue';

export default defineClientConfig({
  layouts: {
    Layout: Index,
    NotFound: Index,
  },
  // enhance: ({ app }) => {
    // app.component('pictrues', Pictrues);
  // },
});
