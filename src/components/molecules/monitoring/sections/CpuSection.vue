<template>
  <CustomFrame :title="model" header-color="bg-middle-black" class="max-w-2xl">
    <div
      class="flex flex-column flex-wrap justify-evenly w-full cursor-pointer"
      onclick="cpuModal.showModal()"
    >
      <CustomCircleProgress class="m-1" :progress="use" typeText="USE" />
      <CustomCircleProgress class="m-1" :progress="temperature" typeText="TEMP" type-value="ºC" />
    </div>
    <CustomDialog id="cpuModal" :title="model">
      <ComponentInformation :infoMap="infoMap" :image="image" />
    </CustomDialog>
  </CustomFrame>
</template>
<script lang="ts" async setup>
import CustomFrame from '@/components/atoms/CustomFrame.vue'
import CustomCircleProgress from '@/components/atoms/CustomCircleProgress.vue'
import { computed, ref } from 'vue'
import { Cpu } from '@/core/hardware/cpu/domain/entities/Cpu'
import { CpuPloc } from '@/plocs/hardware/CpuPloc'
import TuxIcon from '@/components/icons/os/TuxIcon.vue'
import IntelLogo from '@/components/icons/brands/IntelLogo.vue'
import AmdLogo from '@/components/icons/brands/AmdLogo.vue'
import ComponentInformation from '../ComponentInformation.vue'
import CustomDialog from '@/components/molecules/CustomModal.vue'

const props = defineProps<{
  ploc: CpuPloc
}>()

const temperature = ref(0)
const use = ref(0)
const processor: Cpu | Error = await props.ploc.getProcessor()

const cpuImages = new Map<string, any>([
  ['amd', AmdLogo],
  ['intel', IntelLogo],
  ['default', TuxIcon]
])

const model = ref('Unknown')
const vendor = ref('Unknown')
const cacheSize = ref('Unknown')
const siblings = ref(0)
const cores = ref(0)
const minMhzSpeed = ref(0)
const maxMhzSpeed = ref(0)

if (!(processor instanceof Error)) {
  model.value = processor.model
  vendor.value = processor.vendor
  cacheSize.value = processor.cache_size
  siblings.value = processor.siblings
  cores.value = processor.cores
  minMhzSpeed.value = processor.min_mhz_speed
  maxMhzSpeed.value = processor.max_mhz_speed
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
  ['Vendor', vendor.value],
  ['Cache Size', cacheSize.value],
  ['Siblings', siblings.value.toString()],
  ['Cores', cores.value.toString()],
  ['Min Mhz Speed', `${minMhzSpeed.value} Mhz`],
  ['Max Mhz Speed', `${maxMhzSpeed.value} Mhz`]
])

setInterval(async () => {
  let data = await props.ploc.getTemperature()

  temperature.value = Number.isInteger(data) ? (data as number) : 0
}, 4000)

setInterval(async () => {
  let data = await props.ploc.getUse()

  use.value = Number.isInteger(data) ? (data as number) : 0
}, 4000)
</script>
