<template>
  <dialog :id="id" class="modal">
    <CustomFrame :title="title" header-color="bg-light-black" class="w-auto h-auto">
      <slot></slot>
      <div class="modal-action">
        <form method="dialog" class="flex flex-row justify-center w-full">
          <CustomButton class="w-28 m-1" text="Close" type="submit" />
        </form>
      </div>
    </CustomFrame>
  </dialog>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
import CustomFrame from '@/components/atoms/CustomFrame.vue'
import CustomButton from '@/components/atoms/CustomButton.vue'

withDefaults(
  defineProps<{
    title: string
    id: string
    actionText?: string | null
  }>(),
  {
    actionText: null
  }
)
</script>
