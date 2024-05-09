<template>
  <form class="w-full">
    <div class="flex m-4 flex-col items-center">
    <CustomInput
      id="command"
      v-model="changeCronJob.command"
      label="Command"
      class="w-full"
    />
    </div>
    <div class="flex flex-col items-center">
      <div class="flex flex-row flex-wrap justify-center">
        <CustomInput id="minute" v-model="changeCronJob.minute" label="Minute" class="m-4 w-64" />
        <CustomInput id="hour" v-model="changeCronJob.hour" label="Hour" class="m-4 w-64" />
      </div>
      <div class="flex flex-row flex-wrap justify-center">
        <CustomInput
          id="dayOfWeek"
          v-model="changeCronJob.day_of_week"
          label="Day of week"
          class="m-4 w-64"
        />
        <CustomInput
          id="dayOfMonth"
          v-model="changeCronJob.day_of_month"
          label="Day of month"
          class="m-4 w-64"
        />
      </div>
      <CustomInput
        id="month"
        v-model="changeCronJob.month"
        label="Month"
        class="m-4 w-64"
      />
      <form
        method="dialog"
        class="flex flex-row justify-evenly align-middle m-4 flex-wrap w-full mt-7"
      >
        <CustomButton
          @click="handleSubmit"
          type="submit"
          :text="newEvent ? 'Create' : 'Update'"
          class="self-center w-1/3"
        />
        <CustomButton text="Close" type="submit" class="w-1/3" />
      </form>
    </div>
  </form>
</template>
<script lang="ts" setup>
import CustomInput from '@/components/atoms/CustomInput.vue'
import { computed, defineProps, withDefaults } from 'vue'
import CustomButton from '@/components/atoms/CustomButton.vue'
import { CronJob } from '@/core/crontab/domain/entities/CronJob'

const emits = defineEmits(['addCronJob', 'updateCronJob'])

const props = withDefaults(
  defineProps<{
    cron: CronJob
    newEvent?: boolean
  }>(),
  {
    newEvent: false
  }
)

const changeCronJob = computed(() => {
  return { ...props.cron }
})

const handleSubmit = () => {
  if (props.newEvent) {
    emits('addCronJob', changeCronJob.value)
  } else {
    emits('updateCronJob', changeCronJob.value)
  }
}
</script>
