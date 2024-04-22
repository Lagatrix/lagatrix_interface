<template>
  <button
    class="btn bg-middle-gray rounded-badge text-low-black hover:bg-low-gray border-none disabled:bg-low-gray disabled:text-low-black disabled:cursor-not-allowed"
    :type="type"
    :disabled="disabled"
  >
    <span v-if="disabled && type === 'submit'">Loading...</span>
    <span v-else>{{ text }}</span>
  </button>
</template>

<script lang="ts" setup>
defineProps({
  text: {
    type: String,
    default: ''
  },
  type: {
    type: String as () => 'button' | 'submit' | 'reset' | undefined,
    default: 'button'
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>
