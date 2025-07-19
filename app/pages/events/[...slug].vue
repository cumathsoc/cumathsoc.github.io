<script setup lang="ts">
const slug = useRoute().params.slug
const { data: event } = await useAsyncData(`event-${slug}`, async () => {
  if (slug === undefined) {
    return null
  }
  return queryCollection('events').path(`/events/${((typeof slug) === 'string') ? slug : slug.join("/")}`).first()
})

definePageMeta({
  layout: 'content',
})
</script>
<template>
    <ContentRenderer :value="event" />
</template>