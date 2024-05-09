<template>
  <table v-if="Array.isArray(objects)" class="text-center overflow-y-auto">
    <thead>
      <CustomHeader :headers="headers" />
    </thead>
    <tbody>
      <CustomRow
        class="even:bg-low-white"
        :object="object"
        v-for="(object, index) in objects"
        v-bind:key="index"
        @edit="emitEdit"
        @delete="emitDelete"
      />
    </tbody>
  </table>
  <div v-else>
    <span
      class="text-xs text-middle-black absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 overflow-auto"
      >Can't get items</span
    >
  </div>
</template>
<script setup lang="ts">
import CustomRow from '@/components/atoms/table/CustomRow.vue'
import CustomHeader from '@/components/atoms/table/CustomHeader.vue'

const emits = defineEmits(['edit', 'delete'])

defineProps<{
  objects: Object[] | Error
  headers: string[]
}>()

const emitEdit = (object: Object) => {
  emits('edit', object)
}

const emitDelete = (object: Object) => {
  emits('delete', object)
}
</script>
