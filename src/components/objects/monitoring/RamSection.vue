<template>
  <CustomFrame title="RAM" header-color="bg-middle-black" class="max-w-xs">
    <div class="flex flex-column justify-evenly w-full">
      <CustomCircleProgress
        class="m-1 cursor-pointer"
        :progress="use.usePercentage"
        typeText="USE"
        :subText="use.useInStorageUnit"
        onclick="ramModal.showModal()"
      />
    </div>
    <CustomDialog id="ramModal" title="RAM">
      <div v-if="Array.isArray(ramModules) && ramModules.length > 0">
        <RamModuleSection
          v-for="ramModule in ramModules"
          :key="ramModule.locator"
          :ramModule="ramModule"
          class="m-2"
        />
      </div>
      <div v-else>
        <p class="text-middle-black">No RAM module found, check your privileges</p>
      </div>
    </CustomDialog>
  </CustomFrame>
</template>
<script lang="ts" async setup>
import CustomFrame from '@/components/atoms/CustomFrame.vue'
import CustomCircleProgress from '@/components/atoms/CustomCircleProgress.vue'
import { RamPloc } from '@/plocs/hardware/RamPloc'
import { ref } from 'vue'
import { RamModule } from '@/core/hardware/ram/domain/entities/RamModule'
import { SizeTransformator } from '@/utils/size/SizeTransformator'
import RamModuleSection from '@/components/atoms/monitoring/RamModuleSection.vue'
import CustomDialog from '@/components/molecules/CustomModal.vue'

const props = defineProps<{
  ploc: RamPloc
}>()

const use = ref({
  usePercentage: 0,
  useInStorageUnit: '0 B'
})
const ramModules: RamModule[] | Error = await props.ploc.getRam()
const size = await props.ploc.getUse()

const ramSizeTransformator: SizeTransformator = new SizeTransformator(
  !(size instanceof Error) ? size.size : 0
)

setInterval(async () => {
  const resoult = await props.ploc.getUse()
  const data = !(resoult instanceof Error) ? resoult.use : 0

  use.value.usePercentage = ramSizeTransformator.getUseInPercentage(data)
  use.value.useInStorageUnit = SizeTransformator.sizeWithStorageUnit(data)
}, 4000)
</script>
