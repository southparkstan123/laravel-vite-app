<template>
  <div class="container mx-auto">
    <h1 class="text-center">{{ title }}</h1>
  </div>
</template>
<script setup lang="ts">
import { ref, computed } from 'vue'
const items = ref<string[]>(['Laravel', 'Vite', 'Vue3', 'Tailwind', 'Typescript'])
const title = computed<string>(() => items.value.join('+'))
</script>
<style scoped lang="scss">
.container {
  h1 {
    color: green;
  }
}
</style>