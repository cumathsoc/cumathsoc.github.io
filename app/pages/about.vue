<script setup lang="ts">
const { data: post } = await useAsyncData(`about`, () => {
  return queryCollection('misc').path(`/misc/about`).first()
})

definePageMeta({
  layout: 'content',
})
</script>
<template>
  <div class="p-2">
    <ContentRenderer :value="post" />
  </div>
</template>