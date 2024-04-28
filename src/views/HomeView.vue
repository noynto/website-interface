<script setup lang="ts">
import LinksComponent from '../components/LinksComponent.vue'
import SentenceComponent from '../components/SentenceComponent.vue'
import LogoComponent from '../components/LogoComponent.vue'
</script>

<template>
  <main
    class="min-h-screen flex flex-col flex-nowrap justify-center items-center gap-8 p-6 bg-neutral-100 dark:bg-neutral-900">
    <LogoComponent />
    <SentenceComponent />
    <LinksComponent />
  </main>
</template>
