<template>
  <div class="flex lg:flex-row flex-col items-center">
    <component :is="image" class="w-36 h-36 m-3" />
    <div class="flex flex-col">
      <div v-for="field in infoMap" :key="field[0]" class="flex flex-row justify-normal">
        <span class="text-low-gray mr-2">{{ field[0] }}:</span>
        <span class="text-middle-black">{{ field[1] }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" async setup>
defineProps<{
  infoMap: Map<string, string>
  image: any
}>()
</script>
