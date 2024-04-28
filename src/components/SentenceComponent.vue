<script setup lang="ts">
import { ref, type Ref } from 'vue'

const sentences: Ref<string[]> = ref([
    "Being inspired by your environment and learn from everywhere.",
    "Intelligence without ambition is like a bird without wings.",
    "A man without ambition is like a ship without a destination."
])

function getRandomSentence(): string {
    const random: number = Math.floor(Math.random() * sentences.value.length)
    return sentences.value[random]
}
</script>

<template>
    <h1 class="text-base font-bold text-center text-neutral-900 dark:text-neutral-100">
        {{ getRandomSentence() }}
    </h1>
</template>