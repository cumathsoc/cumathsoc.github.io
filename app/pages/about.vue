<script setup lang="ts">
const { data: post } = await useAsyncData(`about`, () => {
  return queryCollection('misc').path(`/misc/about`).first()
})

definePageMeta({
  layout: 'content',
})
</script>
<template>
  <ContentRenderer :value="post" />
</template>