<template>
  <div class="flex flex-col justify-center p-4">
    <CustomButton
      text="Add group"
      onclick="addModal.showModal()"
      type="submit"
      class="sm:w-48 w-full m-2"
    />
    <CustomTable
      :objects="groups"
      :headers="header"
      @edit="selectModifyGroup"
      @delete="selectDeleteGroup"
      class="w-full"
    />
    <CustomModal title="Add group" id="addModal" :close="false">
      <GroupForm :group="emptyGroup" :newGroup="true" @addGroup="addGroup" />
    </CustomModal>
    <CustomModal title="Modify group" id="modifyModal" :close="false">
      <GroupForm :group="selectedGroup!" @updateGroup="modifyGroup" />
    </CustomModal>
    <CustomModal title="Delete delete" id="deleteModal" :close="false">
      <DeleteForm @delete="deleteUser" :text="deleteText" />
    </CustomModal>
  </div>
</template>
<script lang="ts" async setup>
import CustomTable from '@/components/molecules/CustomTable.vue'
import CustomModal from '@/components/molecules/CustomModal.vue'
import CustomButton from '@/components/atoms/CustomButton.vue'
import DeleteForm from '@/components/atoms/DeleteForm.vue'
import GroupForm from '@/components/molecules/forms/GroupForm.vue'
import { ref } from 'vue'
import { GroupPloc } from '@/plocs/GroupPloc'
import { Group } from '@/core/group/domain/entities/Group'

const props = defineProps<{
  ploc: GroupPloc
}>()

const groups = ref(await props.ploc.getGroups())

const header = ['GID', 'Name', 'Users']

const deleteText = ref('')
const emptyGroup = { name: '', users: [] } as Group
let selectedGroup = ref(emptyGroup)

const addGroup = async (group: Group) => {
  const newGroup = await props.ploc.saveGroup(group)

  if (!(newGroup instanceof Error) && Array.isArray(groups.value)) {
    groups.value.unshift(newGroup)
  }
}

const modifyGroup = async (group: Group) => {
  const modifiedUser = await props.ploc.updateGroup(selectedGroup.value!.name, group)

  if (!(modifiedUser instanceof Error) && Array.isArray(groups.value)) {
    groups.value[groups.value.indexOf(selectedGroup.value)] = modifiedUser
  }
}

const deleteUser = async () => {
  if ((await props.ploc.deleteGroup(selectedGroup.value!.name)) && Array.isArray(groups.value)) {
    groups.value.splice(groups.value.indexOf(selectedGroup.value!), 1)
  }
}

const selectModifyGroup = (group: Group) => {
  selectedGroup.value = group
}

const selectDeleteGroup = (group: Group) => {
  selectedGroup.value = group
  deleteText.value = `Are you sure that delete the group ${selectedGroup.value.name}?`
}
</script>
