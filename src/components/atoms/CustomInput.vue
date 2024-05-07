<template>
  <div>
    <label :for="id" class="text-xs text-low-gray">
      {{ label }}
    </label>
    <input
      :id="id"
      :type="type"
      :value="modelValue"
      @input="updateInput"
      class="peer h-full w-full border-b-4 border-middle-gray bg-transparent font-sans text-sm font-normal text-low-black outline outline-0 transition-all focus:border-low-gray"
    />
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  id: string
  label: string
  type?: string
  modelValue: string
}>(), {
  type: 'text'
})
const emit = defineEmits(['update:modelValue'])

const updateInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>
