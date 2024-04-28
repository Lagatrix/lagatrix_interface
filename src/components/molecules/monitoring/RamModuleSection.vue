<template>
  <div class="bg-light-gray">
    <div class="flex justify-center bg-middle-black">
      <span>{{ ramModule.locator }}</span>
    </div>
    <div class="flex flex-row m-1">
      <div class="m-4">
        <span class="text-2xl text-middle-black">{{ ramModule.bank_locator }}</span>
      </div>
      <div>
        <div v-for="field in infoMap" :key="field[0]" class="flex flex-row justify-normal">
          <span class="text-low-gray mr-2">{{ field[0] }}:</span>
          <span class="text-middle-black">{{ field[1] }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps } from 'vue'
import { RamModule } from '../../../core/hardware/ram/domain/entities/RamModule'

const props = defineProps<{
  ramModule: RamModule
}>()

const infoMap = new Map<string, string>([
  [
    'Description',
    `${props.ramModule.memory_type} ${props.ramModule.part_number} ${props.ramModule.manufacturer}`
  ],
  ['Speed', `${props.ramModule.configured_memory_speed}`],
  ['Capacity', `${props.ramModule.size}`]
])
</script>
