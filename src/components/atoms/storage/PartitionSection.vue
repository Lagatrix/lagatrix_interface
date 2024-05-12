<template>
  <div :style="{ width: divWidth }" class="bg-light-gray border border-middle-black p-2 overflow-auto text-sm">
      <div v-for="field in infoMap" :key="field[0]" class="flex flex-row justify-center align-middle">
        <span class="text-low-gray mr-2">{{ field[0] }}:</span>
        <span class="text-low-black">{{ field[1] }}</span>
      </div>
    </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { SizeTransformator } from '@/utils/size/SizeTransformator'
import { Partition } from '@/core/storage/domain/entities/Partition'

const props = defineProps<{
  partition: Partition,
  diskSize: number
}>()

const divWidth = new SizeTransformator(props.diskSize, props.partition.size_in_bytes).getSizeInPercentage()
const infoMap = new Map<string, string>([
  ['Name', props.partition.name],
  ['Type', props.partition.type_format],
  ['Mount', props.partition.mount_points.map((mount) => mount).join(', ')],
  ['Size', SizeTransformator.sizeWithStorageUnit(props.partition.size_in_bytes)]
])
</script>
