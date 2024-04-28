<template>
  <div class="circle-progress">
    <svg :width="190" :height="190" viewBox="0 0 100 100">
      <circle
        class="circle-bg"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="10"
        stroke="#adb5bdff"
        fill="none"
      ></circle>
      <circle
        class="circle-progress"
        :cx="center"
        :cy="center"
        :r="radius"
        :stroke-width="10"
        stroke="#6c757dff"
        fill="none"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="dashOffset"
      ></circle>
      <text
        fill="#6c757dff"
        font-size="10"
        x="50%"
        y="30%"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {{ typeText }}
      </text>
      <text
        fill="#212529ff"
        font-size="28"
        x="50%"
        y="53%"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {{ progress }}{{ typeValue }}
      </text>
      <text
        fill="#6c757dff"
        font-size="10"
        x="50%"
        y="75%"
        dominant-baseline="middle"
        text-anchor="middle"
      >
        {{ subText }}
      </text>
    </svg>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
  defineProps<{
    progress: number
    typeText: string
    typeValue?: string
    subText?: string
  }>(),
  { typeValue: '%', subText: '' }
)

const radius = computed(() => 50 - 10 / 2)
const center = computed(() => 100 / 2)
const circumference = computed(() => 2 * Math.PI * radius.value)
const dashOffset = computed(() => circumference.value * (1 - props.progress / 100))
</script>
