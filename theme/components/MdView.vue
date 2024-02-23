<template>
  <div class="mdView">
    <Content :page-key="pageKey" />
  </div>
</template>

<script setup>
  import '../styles/rainbow.css';
  const { pageKey } = defineProps(['pageKey']);
</script>
