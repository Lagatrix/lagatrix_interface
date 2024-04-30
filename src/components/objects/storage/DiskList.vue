<template>
    <div v-if="(diskList instanceof Error)">
        <span class="text-xs text-middle-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto">Can't get disks</span>
    </div>
    <div v-else>
        <DiskSection v-for="disk in diskList" :key="disk.name" :disk="disk" class="m-4" />
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