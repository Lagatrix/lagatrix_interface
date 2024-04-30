<template>
  <div class="flex flex-row w-auto">
    <div class="bg-middle-black p-2 w-2/9">
      <div v-for="field in infoMap" :key="field[0]" class="flex flex-row justify-normal">
        <span class="text-low-gray mr-2">{{ field[0] }}:</span>
        <span class="text-middle-gray">{{ field[1] }}</span>
      </div>
    </div>
    <div class="flex flex-row w-full">
      <PartitionSection v-for="partition in props.disk.partitions" :key="partition.name" :partition="partition" :disk-size="disk.size_in_bytes" />
      <FreeSection :disk-size="props.disk.size_in_bytes" :free-size="freeSize" />
    </div>
  </div>
</template>
<script lang="ts"  setup>
import { defineProps } from 'vue'
import type { Disk } from '@/core/storage/domain/entities/Disk'
import { SizeTransformator } from '@/utils/size/SizeTransformator';
import PartitionSection from '@/components/atoms/storage/PartitionSection.vue'
import FreeSection from '@/components/atoms/storage/FreeSection.vue';

const props = defineProps<{
  disk: Disk
}>()

const freeSize = props.disk.size_in_bytes - props.disk.partitions.reduce((acc, partition) => acc + partition.size_in_bytes, 0)

const infoMap = new Map<string, string>([
  ['Name', props.disk.name],
  ['Model', props.disk.model],
  ['Size', SizeTransformator.sizeWithStorageUnit(props.disk.size_in_bytes)],
])
</script>
