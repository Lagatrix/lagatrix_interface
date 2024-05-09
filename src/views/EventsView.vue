<template>
  <MenuFrame />
  <Suspense>
    <CrontabList :ploc="crontabPloc" />
    <template #fallback>
      <span
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-bars loading-lg bg-low-black"
      ></span>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import MenuFrame from '@/components/objects/MenuFrame.vue'
import { useToast } from 'vue-toastification'
import { CrontabPloc } from '@/plocs/CrontabPloc'
import CrontabList from '@/components/objects/lists/CrontabList.vue'

const toast = useToast()

const crontabPloc = new CrontabPloc(toast)

</script>
