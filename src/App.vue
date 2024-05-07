<template>
  <div class="min-h-screen flex flex-col bg-light-white overflow-y-hidden">
    <RouterView class="p-4" />
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
