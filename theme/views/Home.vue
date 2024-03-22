<template>
  <div class="cover">
    <div class="cover-content">
      <p class="cover-title">
        C
        <img src="../assets/images/icon.png" alt="" />
        SY247
      </p>
      <p class="cover-dictum">痛苦在所难免，磨难可以选择。</p>
      <p class="cover-dictum-en">Suffering is inevitable, but tribulations can be chosen.</p>
      <div class="cover-links">
        <a class="cover-link" href="https://github.com/cosy247" target="_blank">&#xe673;github</a>
        <a class="cover-link" href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=al1aX1tTXlxdWSobG0QJBQc" target="_blank">
          &#xe600;邮箱
        </a>
        <a class="cover-link" href="https://github.com/cosy247" target="_blank">&#xe87e;codepen</a>
        <a class="cover-link" href="https://github.com/cosy247" target="_blank">&#xe603;bilibili</a>
      </div>
    </div>
  </div>
  <div class="list">
    <a :href="item.path" class="list-item" v-for="item in pageList">
      <p class="list-item-title">{{ item.meta.title }}</p>
      <div class="list-item-infos">
        <p class="list-item-info" v-show="item.meta.date">
          &#xe6ad;
          {{ new Date(item.meta.date).toLocaleDateString() }}
        </p>
      </div>
    </a>
    <div class="list-over">🐲 时间线到头了 🦄</div>
  </div>
</template>

<script>
  import themeConfig from '../../theme.config';
  import { pageDatas } from '@temp/blogMate';

  export default {
    name: 'Home',
    components: {},
    props: [],
    data: () => ({
      pageList: [],
      remainPageList: [],
      pageSize: 10,
      isAddingPageList: false,
    }),
    computed: {
    },
    watch: {},
    methods: {},
    created() {
      this.remainPageList = pageDatas.blog.sort((b1, b2) => new Date(b2.date) - new Date(b1.date));
      this.pageList = this.remainPageList.splice(0, this.pageSize);
    },
    mounted() {
      this.$emit('addScrollCallback', ({ target: { clientHeight, scrollTop, scrollHeight } }) => {
        if (this.isAddingPageList || this.remainPageList.length === 0) return;
        if (scrollHeight - clientHeight - scrollTop < 200) {
          console.log(123);
          this.isAddingPageList = true;
          this.pageList.push(...this.remainPageList.splice(0, this.pageSize))
          this.$nextTick(() => {
            this.isAddingPageList = false;
          })
        }
      })
    },
    destroy() { },
  };
</script>

<style>
  .cover {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .cover-content {
    box-sizing: border-box;
    padding-bottom: 10vh;
  }

  .cover-title {
    font-size: 10vmin;
    font-weight: 900;
    width: 100%;
    background: linear-gradient(to right, red, blue);
    background-clip: text;
    color: transparent;
    display: flex;
    align-items: center;
  }

  .cover-title img {
    height: 1em;
  }

  .cover-dictum {
    font-size: var(--size2);
    margin-top: 30px;
  }

  .cover-dictum-en {
    font-size: var(--size1);
    margin-top: 20px;
  }

  .cover-links {
    display: flex;
    align-items: center;
    margin-top: 40px;
    color: #5d67e8;
    font-size: var(--size1);
  }

  .cover-link {
    margin-right: 20px;
  }

  .cover-link::first-letter {
    margin-right: 5px;
  }

  .list {
    margin: auto;
    width: var(--content-width);
    max-width: var(--content-max-width);
  }

  .list-item {
    display: block;
    transition: 0.2s;
    opacity: 0.7;
    transition: opacity 0.2s;
  }

  .list-item:hover {
    opacity: 1;
  }

  .list-item+.list-item {
    margin-top: 50px;
  }

  .list-item-title {
    position: relative;
    color: #1b2832;
    font-size: var(--size5);
  }

  .list-item-title::after {
    content: '';
    width: 100%;
    height: 2px;
    position: absolute;
    left: 0;
    top: 100%;
    background: linear-gradient(to right, red, blue);
    opacity: 0;
    transition: 0.2s;
    margin-top: 5px;
  }

  .list-item:hover .list-item-title::after {
    opacity: 1;
  }

  .list-item-infos {
    margin-top: 15px;
    font-size: var(--size1);
    display: flex;
    align-items: center;
    justify-content: right;
  }

  .list-item-info {
    margin-right: 15px;
  }

  .list-over {
    margin: 100px auto 300px;
    text-align: center;
    height: 2px;
    line-height: 2px;
    font-size: var(--size1);
    color: #1b283288;
  }
</style>
