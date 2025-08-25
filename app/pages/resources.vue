<script setup lang="ts">
const { data: post } = await useAsyncData(`resources`, () => {
  return queryCollection('misc').path(`/misc/resources`).first()
})

definePageMeta({
  layout: 'content',
})
</script>
<template>
  <ContentRenderer :value="post" />
</template>
<style>
h2 a {
  text-decoration: none;
}
h3 a {
  text-decoration: none;
}
</style>