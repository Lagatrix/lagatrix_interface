<template>
  <tr class="bg-middle-black text-low-white text-lg">
    <th class="p-3" v-for="header in props.headers" :key="header">{{ header }}</th>
    <th>Actions</th>
  </tr>
</template>
<script setup lang="ts">
const props = defineProps<{
  headers: string[]
}>()
</script>
