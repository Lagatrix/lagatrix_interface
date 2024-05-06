<template>
  <div>
    <p class="text-low-gray text-2xl mb-6">{{ text }}</p>
    <form method="dialog" class="flex flex-row justify-evenly align-middle m-1 flex-wrap w-full">
      <CustomButton type="submit" text="Yes" @click="emits('delete')" class="self-center w-1/3" />
      <CustomButton text="Close" type="submit" class="w-1/3" />
    </form>
  </div>
</template>
<script setup lang="ts">
import CustomButton from '@/components/atoms/CustomButton.vue'
import { defineProps, defineEmits } from 'vue'

defineProps<{
  text: string
}>()

const emits = defineEmits(['delete'])
</script>
