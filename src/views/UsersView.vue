<template>
  <Suspense>
    <UserList :ploc="userPloc" />
    <template #fallback>
      <span
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 loading loading-bars loading-lg bg-low-black"
      ></span>
    </template>
  </Suspense>
</template>
<script lang="ts" setup>
import UserList from '@/components/objects/lists/UserList.vue'
import { UserPloc } from '@/plocs/UserPloc'
import { useToast } from 'vue-toastification'

const toast = useToast()

const userPloc = new UserPloc(toast)
</script>
