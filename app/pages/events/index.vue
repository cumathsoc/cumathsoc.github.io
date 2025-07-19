<script setup lang="ts">
import EventPreview from '~/components/event-preview.vue';

const { data: events } = await useAsyncData("events", () => {
  return queryCollection('events').order('date', 'ASC').all()
})
</script>
<template>
  <h1 class="text-4xl mx-auto text-center my-12">Upcoming Events</h1>
  <div class="events-page mx-auto grid grid-cols-1 justify-items-center gap-4">
    <div v-for="event in events" :key="event.id" class="event-item">
      <EventPreview :event="event" />
    </div>
  </div>
</template>