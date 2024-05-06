<template>
    <div v-if="(diskList instanceof Error)">
        <span class="text-xs text-middle-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">Can't get disks</span>
    </div>
    <div v-else class="flex flex-col items-center p-4">
        <DiskSection v-for="disk in diskList" :key="disk.name" :disk="disk" class="w-full m-2 overflow-y-auto"  />
    </div>
</template>
<script lang="ts" async setup>
import { defineProps } from 'vue'
import { StoragePloc } from '@/plocs/StoragePloc'
import DiskSection from '@/components/molecules/storage/DiskSection.vue'

const props = defineProps<{
  ploc: StoragePloc
}>()

const diskList = await props.ploc.getDisks()
</script>