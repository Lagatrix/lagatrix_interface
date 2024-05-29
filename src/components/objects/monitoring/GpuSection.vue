<template>
  <CustomFrame
    :title="!(processor instanceof Error) ? processor.model : 'Unknown GPU'"
    header-color="bg-middle-black"
    class="max-w-2xl"
  >
    <div
      class="flex flex-column flex-wrap justify-evenly w-full cursor-pointer"
      onclick="gpuModal.showModal()"
    >
      <CustomCircleProgress class="m-1" :progress="use" typeText="USE" />
      <CustomCircleProgress class="m-1" :progress="temperature" typeText="TEMP" type-value="ºC" />
    </div>
    <CustomDialog id="gpuModal" :title="model">
      <ComponentInformation :infoMap="infoMap" :image="image" />
    </CustomDialog>
  </CustomFrame>
</template>
<script lang="ts" async setup>
import CustomFrame from '@/components/atoms/CustomFrame.vue'
import CustomCircleProgress from '@/components/atoms/CustomCircleProgress.vue'
import { computed, ref } from 'vue'
import { GpuPloc } from '@/plocs/hardware/GpuPloc'
import { Gpu } from '@/core/hardware/gpu/domain/entities/Gpu'
import TuxIcon from '@/components/icons/os/TuxIcon.vue'
import IntelLogo from '@/components/icons/brands/IntelLogo.vue'
import AmdLogo from '@/components/icons/brands/AmdLogo.vue'
import NvidiaLogo from '@/components/icons/brands/NvidiaLogo.vue'
import ComponentInformation from '@/components/atoms/monitoring/ComponentInformation.vue'
import CustomDialog from '@/components/molecules/CustomModal.vue'

const props = defineProps<{
  ploc: GpuPloc
}>()

const temperature = ref(0)
const use = ref(0)
const processor: Gpu | Error = await props.ploc.getProcessor()

const cpuImages = new Map<string, any>([
  ['amd', AmdLogo],
  ['intel', IntelLogo],
  ['nvidia', NvidiaLogo],
  ['default', TuxIcon]
])

const model = ref('Unknown')
const brand = ref('Unknown')
const architecture = ref('Unknown')
const driverVersion = ref('Unknown')
const memory = ref('Unknown')

if (!(processor instanceof Error)) {
  model.value = processor.model
  brand.value = processor.brand
  architecture.value = processor.architecture
  driverVersion.value = processor.driver_version
  memory.value = processor.memory
}

const image = computed(() => {
  for (let [key, value] of cpuImages.entries()) {
    if (model.value.toLowerCase().includes(key)) {
      return value
    }
  }
  return cpuImages.get('default')
})

const infoMap = new Map<string, string>([
  ['Model', model.value],
  ['Brand', brand.value],
  ['Architecture', architecture.value],
  ['Driver Version', driverVersion.value],
  ['Memory', memory.value]
])

setInterval(async () => {
  let data = await props.ploc.getTemperature()

  temperature.value = Number.isInteger(data) ? (data as number) : 0
}, 4000)

setInterval(async () => {
  let data = await props.ploc.getUse()

  use.value = data instanceof Error ? 0 : data
}, 4000)
</script>
