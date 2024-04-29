<template>
  <CustomFrame :title="hostname" header-color="bg-middle-black" class="max-w-xs">
    <div class="flex flex-column justify-evenly w-full">
      <component :is="image" class="cursor-pointer" onclick="osModal.showModal()" />
    </div>
    <CustomDialog id="osModal" title="OS">
      <ComponentInformation title="OS" :infoMap="infoMap" :image="image" />
    </CustomDialog>
  </CustomFrame>
</template>

<script lang="ts" async setup>
import CustomFrame from '@/components/atoms/CustomFrame.vue'
import { HostPloc } from '@/plocs/HostPloc'
import { computed, ref } from 'vue'
import DebianIcon from '@/components/icons/os/DebianIcon.vue'
import TuxIcon from '@/components/icons/os/TuxIcon.vue'
import ComponentInformation from '@/components/atoms/monitoring/ComponentInformation.vue'
import CustomDialog from '@/components/molecules/CustomModal.vue'

const props = defineProps<{
  ploc: HostPloc
}>()

const os = await props.ploc.getHost()

const osImages = new Map<string, any>([
  ['debian', DebianIcon],
  ['default', TuxIcon]
])

const distributionCompleteName = ref('Unknown')
const distributionFamily = ref('Unknown')
const distributionName = ref('Unknown')
const distributionVersion = ref('Unknown')
const hostname = ref('Unknown')
const kernel = ref('Unknown')

if (!(os instanceof Error)) {
  distributionCompleteName.value = os.distribution_complete_name
  distributionFamily.value = os.distribution_family
  distributionName.value = os.distribution_name
  distributionVersion.value = os.distribution_version
  hostname.value = os.hostname
  kernel.value = os.kernel
}

const image = computed(() => {
  for (let [key, value] of osImages.entries()) {
    if (distributionCompleteName.value.toLowerCase().includes(key)) {
      return value
    }
  }
  return osImages.get('default')
})

const infoMap = new Map<string, string>([
  ['Distribution name', distributionCompleteName.value],
  ['Distribution family', distributionFamily.value],
  ['Distribution identificator', distributionName.value],
  ['Distribution version', distributionVersion.value],
  ['Hostname', hostname.value],
  ['Kernel', kernel.value]
])
</script>
