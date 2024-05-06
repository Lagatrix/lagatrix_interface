<template>
  <Suspense>
    <div class="flex flex-col justify-center w-full">
      <div class="flex lg:flex-row flex-col lg:justify-evenly items-center w-full p-4">
        <CpuSection class="w-full max-w-lg m-6" :ploc="cpuPloc" />
        <RamSection class="w-full max-w-lg m-6" :ploc="ramPloc" />
      </div>
      <div class="flex lg:flex-row flex-col lg:justify-evenly items-center w-full p-4">
        <GpuSection class="w-full max-w-lg m-6" :ploc="gpuPloc" />
        <OsSection class="w-full max-w-lg m-6" :ploc="hostPloc" />
      </div>
    </div>
    <template #fallback>
      <span
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-bars loading-lg bg-low-black"
      ></span>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import CpuSection from '@/components/objects/monitoring/CpuSection.vue'
import GpuSection from '@/components/objects/monitoring/GpuSection.vue'
import RamSection from '@/components/objects/monitoring/RamSection.vue'
import OsSection from '@/components/objects/monitoring/OsSection.vue'
import { CpuPloc } from '@/plocs/hardware/CpuPloc'
import { GpuPloc } from '@/plocs/hardware/GpuPloc'
import { RamPloc } from '@/plocs/hardware/RamPloc'
import { useToast } from 'vue-toastification'
import { HostPloc } from '@/plocs/HostPloc'

const toast = useToast()

const cpuPloc = new CpuPloc(toast)
const gpuPloc = new GpuPloc(toast)
const ramPloc = new RamPloc(toast)
const hostPloc = new HostPloc(toast)
</script>
