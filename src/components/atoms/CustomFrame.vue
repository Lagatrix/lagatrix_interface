<template>
  <div class="w-auto h-auto bg-low-white rounded-3xl">
    <div :class="headerColor" class="p-3 rounded-tl-3xl rounded-tr-3xl">
      <h1 class="text-light-gray text-xl text-center">{{ title }}</h1>
    </div>
    <div :class="{ backgroundColor: headerColor }" class="p-4 flex flex-col">
      <slot />
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  headerColor: string
}>()
</script>
