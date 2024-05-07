<template>
  <div class="h-full w-full ">
    <label :for="id" class="text-xs text-low-gray">{{label}}</label>
    <div
      class="h-full w-full flex flex-row flex-wrap peer pt-3 pb-3 border-b-4 border-middle-gray hover:border-low-gray bg-transparent font-sans text-sm font-normal text-low-black outline outline-0 transition-all"
    >
      <span
        v-for="(tag, index) in items"
        :key="index"
        class="bg-transparent rounded-full px-3 py-1 m-1 flex items-center border border-low-gray text-low-black font-semibold text-xs leading-none cursor-default transition-all hover:border-light-black"
      >
        {{ tag }}
        <button @click="removeTag(index)" type="button" class="ml-2 text-gray-600 hover:text-gray-800">×</button>
      </span>
      <input
        v-model="newTag"
        @keyup.enter="addTag"
        type="text"
        class="bg-transparent font-sans text-sm font-normal text-low-black outline outline-0 transition-all"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  id: string
  label: string
  items: Array<string> | undefined
}>()

const newTag = ref('')

const emit = defineEmits(['addTag', 'deleteTag'])

const addTag = () => {
  if (newTag.value.trim() !== '') {
    emit('addTag', newTag.value)
    newTag.value = ''
  }
}

const removeTag = (index: number) => {
  emit('deleteTag', index)
}
</script>
