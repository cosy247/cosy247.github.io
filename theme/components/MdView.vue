<template>
  <div class="mdView">
    <Content :page-key="pageKey" />
  </div>
</template>

<script>
  import '../styles/rainbow.css';

  export default {
    name: 'MdView',
    components: {},
    props: ['pageKey'],
    data: () => ({}),
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .MdView {
    position: relative;
  }
</style>
