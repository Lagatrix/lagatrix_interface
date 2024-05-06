<template>
  <div class="min-h-screen flex flex-col bg-light-white overflow-y-hidden">
    <div v-if="isNotLoginPage" >
      <MenuFrame />
    </div>
    <RouterView class="p-4" />
  </div>
</template>

<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
import MenuFrame from '@/components/objects/MenuFrame.vue'
import { ref, watch } from 'vue';

const router = useRouter()
const isNotLoginPage = ref(false)

watch(router.currentRoute, (to) => {
  isNotLoginPage.value = to.path.includes("/lagatrix/")
})
</script>
