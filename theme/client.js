import { defineClientConfig } from '@vuepress/client';
import Layout from './Layout.vue';
import NotFound from './NotFound.vue';
import Pictrues from './mdComponents/Pictrues.vue';

export default defineClientConfig({
  layouts: {
    Layout,
    NotFound,
  },
  enhance: ({ app }) => {
    app.component('Pictrues', Pictrues);
  },
});
