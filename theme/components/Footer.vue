<template>
  <div class="button">cosy247</div>
  <div class="Footer">
    <div class="content">
      <!-- <p class="title">{{ themeConfig.title }}</p>
      <div class="main">
        <div class="main-col" v-for="content in themeConfig.footer.content">
          <p class="main-col-title">{{ content.title }}</p>
          <div class="main-col-line"></div>
          <a :href="item.url" v-for="item in content.links" class="main-col-item">{{ item.name }}</a>
        </div>
      </div>
      <p class="copyright">© {{ themeConfig.footer.copyright }}</p> -->
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
  .button {
    position: fixed;
    bottom: 0;
    left: 50%;
    background: #125fd388;
    border-radius: 10px;
    transform: translateX(-50%) scale(0.7);
    z-index: 650;
    font-size: var(--outer-width);
    line-height: var(--outer-width);
    padding: 0px 10px;
    color: rgba(214, 214, 214, 0.833);
    cursor: pointer;
    transform-origin: center center;
  }
  .button:hover + .Footer {
    transform: translateY(0);
  }
  .Footer {
    position: fixed;
    bottom: 0;
    height: 100px;
    width: 100%;
    background: linear-gradient(30deg, #252525, #272025);
    color: #eee;
    transform: translateY(100%);
    transition: 0.3s;
    z-index: 620;
  }
  .Footer:hover {
    transform: translateY(0);
  }
  .content {
    margin: auto;
    width: var(--content-width);
    max-width: 1000px;
  }
  .title {
    padding-top: 10px;
    font-size: var(--size7);
  }
  .main {
    margin-top: 20px;
    font-size: var(--size2);
    display: flex;
    width: 100%;
  }
  .main-col {
    flex: 1;
  }
  .main-col-title {
    color: #888;
    padding-bottom: 5px;
  }
  .main-col-line {
    height: 1px;
    background: var(--color-red);
    opacity: 0.7;
  }
  .main-col-item {
    display: block;
    width: fit-content;
    color: #ccc;
    margin-top: 5px;
  }
  .copyright {
    margin-top: 10px;
    text-align: right;
    color: #aaa;
    font-size: var(--size2);
    padding-bottom: 30px;
  }
</style>
