<script setup lang="ts">
const props = defineProps<{
    event: {
        id: string;
        date: string;
        title: string;
        description: string;
        path: string;
    };
}>();
</script>
<template>
    <div class="card bg-base-100 shadow-sm min-w-3xl">
        <div class="card-body">
            <div class="flex">
                <h2 class="card-title">{{ props.event.title }}</h2>
                <div class="grow"></div>
                <span class="text-base-content">{{ props.event.date }}</span>
            </div>
            <p>{{ props.event.description }}</p>
            <div class="card-actions justify-end">
                <a :href="props.event.path" class="btn btn-primary">More Information</a>
            </div>
        </div>
    </div>

</template>