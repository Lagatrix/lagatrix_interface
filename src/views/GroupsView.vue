<template>
  <MenuFrame />
  <Suspense>
    <GroupList :ploc="groupPloc" />
    <template #fallback>
      <span
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-bars loading-lg bg-low-black"
      ></span>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import GroupList from '@/components/objects/lists/GroupList.vue'
import { GroupPloc } from '@/plocs/GroupPloc'
import { useToast } from 'vue-toastification'
import MenuFrame from '@/components/objects/MenuFrame.vue'

const toast = useToast()

const groupPloc = new GroupPloc(toast)
</script>
