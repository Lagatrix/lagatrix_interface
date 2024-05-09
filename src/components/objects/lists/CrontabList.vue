<template>
  <div class="flex flex-col justify-center p-4">
    <CustomButton
      text="Add cron job"
      onclick="addModal.showModal()"
      type="submit"
      class="sm:w-48 w-full m-2"
    />
    <CustomTable
      :objects="cronJobs"
      :headers="header"
      @edit="selectModifyCronJob"
      @delete="selectDeleteCronJob"
      class="w-full"
    />
    <CustomModal title="Add user" id="addModal" :close="false">
      <CrontabForm :cron="emptyCron" :newEvent="true" @addCronJob="addCronJob" />
    </CustomModal>
    <CustomModal title="Modify user" id="modifyModal" :close="false">
      <CrontabForm :cron="selectedCronJob!" @updateCronJob="updateCronJob" />
    </CustomModal>
    <CustomModal title="Delete user" id="deleteModal" :close="false">
      <DeleteForm @delete="deleteCronJob" :text="deleteText" />
    </CustomModal>
  </div>
</template>
<script lang="ts" async setup>
import { CrontabPloc } from '@/plocs/CrontabPloc'
import CustomTable from '@/components/molecules/CustomTable.vue'
import CustomModal from '@/components/molecules/CustomModal.vue'
import CrontabForm from '@/components/molecules/forms/CrontabForm.vue'
import CustomButton from '@/components/atoms/CustomButton.vue'
import DeleteForm from '@/components/atoms/DeleteForm.vue'
import { ref } from 'vue'
import { CronJob } from '@/core/crontab/domain/entities/CronJob'

const props = defineProps<{
  ploc: CrontabPloc
}>()

const cronJobs = ref(await props.ploc.getCronJobs())

const header = ['Minute', 'Hour', 'Day of month', 'Month', 'Day of week', 'Command']

const deleteText = ref('')
const emptyCron = {command: '', day_of_month: '*', day_of_week: '*', hour: '*', minute: '*', month: '*'} as CronJob
let selectedCronJob = ref(emptyCron)

const addCronJob = async (cronJob: CronJob) => {
  const newCronJob = await props.ploc.saveCronJob(cronJob)

  if (!(newCronJob instanceof Error) && Array.isArray(cronJobs.value)) {
    cronJobs.value.unshift(cronJob)
  }
  console.log(cronJobs.value)
}

const updateCronJob = async (cronJob: CronJob) => {
  const modifiedCronJob = await props.ploc.updateCronJob(selectedCronJob.value, cronJob)

  if (!(modifiedCronJob instanceof Error) && Array.isArray(cronJobs.value)) {
    cronJobs.value[cronJobs.value.indexOf(selectedCronJob.value)] = modifiedCronJob
  }
}

const deleteCronJob = async () => {
  if (await props.ploc.deleteCronJob(selectedCronJob.value) && Array.isArray(cronJobs.value)) {
    cronJobs.value.splice(cronJobs.value.indexOf(selectedCronJob.value!), 1)
  }
}

const selectModifyCronJob = (cronJob: CronJob) => {
  selectedCronJob.value = cronJob
}

const selectDeleteCronJob = (cronJob: CronJob) => {
  selectedCronJob.value = cronJob
  deleteText.value = `Are you sure that delete the cron job?`
}
</script>
