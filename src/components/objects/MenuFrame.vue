<template>
  <div class="h-20 bg-middle-black w-screen">
    <label
      id="tham"
      for="menu"
      class="tham tham-e-squeeze tham-w-12 drawer-button absolute z-10 top-5 left-3"
      :class="{ 'tham-active': toggleActive }"
      @click="toggleTham"
    >
      <div class="tham-box">
        <div class="tham-inner bg-light-gray" />
      </div>
    </label>

    <div class="drawer">
      <input id="menu" :value="toggleActive" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side">
        <label for="menu" aria-label="close sidebar" class="drawer-overlay"></label>
        <MenuNavigator />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import MenuNavigator from '@/components/molecules/MenuNavigator.vue'
import { ref } from 'vue'

const toggleActive = ref(false)

const toggleTham = () => {
  toggleActive.value = !toggleActive.value
}
</script>
