<script setup lang="ts">
const studentId = ref<number>(101000000)

const status = ref<'ok' | 'error'>('error')
const message = ref<string>('')
const url = ref<string>('')

const getPlaylist = async () => {
    const res = await $fetch<{status: 'ok' | 'error'; url: string, message: string}>('/api/getvideos', {
        query: {
            studentID: studentId.value,
        },
    })
    console.log(res)
    status.value = res.status
    message.value = res.message
    url.value = res.url
    return res
}
</script>
<template>
    <p>{{ message }}</p>
    <div v-if="status === 'error'" class="flex flex-col items-center justify-center min-h-screen">
        <div class="card bg-base-100 w-3xl shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Enter your student ID to access colloquium recordings</h2>
                <input type="number" min="100000000" max="999999999" class="input validator" required
                    placeholder="Enter your Student ID" v-model="studentId" id="studentId" />
                <p class="validator-hint">Enter your 9 digit student ID</p>
            </div>
            <div class="card-actions justify-end mr-4 mb-4">
                <button class="btn btn-primary" @click="getPlaylist">Continue</button>
            </div>
        </div>
    </div>
    <div v-else class="flex">
        <p>Paragraph: {{ url }}</p>
    </div>
</template>