<template>
  <div class="Tip">😊 {{ info }} 😊</div>
</template>

<script>
  export default {
    name: 'Tip',
    props: ['info'],
    components: {},
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
  .Tip {
    position: relative;
  }
</style>
