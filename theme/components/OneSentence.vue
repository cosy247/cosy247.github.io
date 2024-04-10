<template>
  <div class="OneSentence">⌈ {{ oneText }} ⌋</div>
</template>

<script>
  export default {
    name: 'OneSentence',
    components: {},
    data: () => ({ oneText: '...' }),
    computed: {},
    watch: {},
    methods: {},
    created() {
      // const httpRequest = new XMLHttpRequest();
      // httpRequest.open('GET', 'https://tenapi.cn/v2/yiyan', true);
      // httpRequest.send();
      // httpRequest.onreadystatechange = () => {
      //   if (httpRequest.readyState == 4 && httpRequest.status == 200) {
      //     this.oneText = httpRequest.responseText;
      //   }
      // };
    },
    mounted() {},
    destroy() {},
  };
</script>

<style scoped>
  .OneSentence {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    color: #aab;
    text-align: center;
    font-size: var(--outer-width);
    line-height: var(--outer-width);
    transform: scale(0.7);
    letter-spacing: 0.1em;
    transition: 0.2s;
    background: black;
    z-index: 650;
  }
</style>
