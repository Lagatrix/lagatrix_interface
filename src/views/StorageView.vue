<template>
  <div class="min-h-screen flex bg-light-white">
    <MenuFrame />
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import MenuFrame from '@/components/objects/MenuFrame.vue'
</script>
