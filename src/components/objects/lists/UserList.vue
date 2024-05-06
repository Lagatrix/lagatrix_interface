<template>
  <div class="flex flex-col justify-center p-4">
    <CustomButton
      text="Add user"
      onclick="addModal.showModal()"
      type="submit"
      class="sm:w-48 w-full m-2"
    />
    <CustomTable
      :objects="users"
      :headers="header"
      @edit="selectModifyUser"
      @delete="selectDeleteUser"
      class="w-full"
    />
    <CustomModal title="Add user" id="addModal" :close="false">
      <UserForm :user="emptyUser" :newUser="true" @addUser="addUser" />
    </CustomModal>
    <CustomModal title="Modify user" id="modifyModal" :close="false">
      <UserForm :user="selectedUser!" @updateUser="modifyUser" />
    </CustomModal>
    <CustomModal title="Delete user" id="deleteModal" :close="false">
      <DeleteForm @delete="deleteUser" :text="deleteText" />
    </CustomModal>
  </div>
</template>
<script lang="ts" async setup>
import { UserPloc } from '@/plocs/UserPloc'
import CustomTable from '@/components/molecules/CustomTable.vue'
import { User } from '@/core/user/domain/entities/User'
import CustomModal from '@/components/molecules/CustomModal.vue'
import UserForm from '@/components/molecules/forms/UserForm.vue'
import CustomButton from '@/components/atoms/CustomButton.vue'
import DeleteForm from '@/components/atoms/DeleteForm.vue'
import { ref } from 'vue'

const props = defineProps<{
  ploc: UserPloc
}>()

const users = ref(await props.ploc.getUsers())

const header = ['UID', 'Username', 'Shell', 'Home', 'Main group']

const deleteText = ref('')
const emptyUser = {name: '', home: '', shell: '', password: ''} as User
let selectedUser = ref(emptyUser)

const addUser = async (user: User) => {
  const newUser = await props.ploc.saveUser(user)

  if (!(newUser instanceof Error) && Array.isArray(users.value)) {
    users.value.unshift(newUser)
  }
}

const modifyUser = async (user: User) => {
  const modifiedUser = await props.ploc.updateUser(selectedUser.value!.name, user)

  if (!(modifiedUser instanceof Error) && Array.isArray(users.value)) {
    users.value[users.value.indexOf(selectedUser.value)] = modifiedUser
  }
}

const deleteUser = async () => {
  if (await props.ploc.deleteUser(selectedUser.value!.name) && Array.isArray(users.value)) {
    users.value.splice(users.value.indexOf(selectedUser.value!), 1)
  }
}

const selectModifyUser = (user: User) => {
  selectedUser.value = user
}

const selectDeleteUser = (user: User) => {
  selectedUser.value = user
  deleteText.value = `Are you sure that delete ${selectedUser.value.name}?`
}
</script>
