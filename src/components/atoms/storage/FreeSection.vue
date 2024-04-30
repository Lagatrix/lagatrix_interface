<template>
  <div
    class="bg-low-gray text-middle-gray flex flex-col items-center justify-center text-2xl border border-middle-black p-2 overflow-auto w-auto"
  >
    <span class="mr-2">FREE</span>
    <span>{{ SizeTransformator.sizeWithStorageUnit(freeSize) }}</span>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { SizeTransformator } from '@/utils/size/SizeTransformator'

const props = defineProps<{
  diskSize: number
  freeSize: number
}>()
const divWidth = new SizeTransformator(props.diskSize, props.freeSize).getSizeInPercentage()
</script>
