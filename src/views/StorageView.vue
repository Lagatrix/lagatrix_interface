<template>
  <MenuFrame />
  <Suspense>
    <DiskList :ploc="storagePloc" />
    <template #fallback>
      <span
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-bars loading-lg bg-low-black"
      ></span>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import { StoragePloc } from '@/plocs/StoragePloc'
import { useToast } from 'vue-toastification'
import DiskList from '@/components/objects/lists/DiskList.vue'
import MenuFrame from '@/components/objects/MenuFrame.vue'


const toast = useToast()

const storagePloc = new StoragePloc(toast)
</script>
