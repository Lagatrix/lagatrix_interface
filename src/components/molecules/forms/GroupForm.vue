<template>
  <form>
    <div class="flex flex-col items-center w-96">
      <CustomInput id="groupname" v-model="changeGroup.name" label="Groupname" class="m-4 w-96" />
      <CustomTagInput
        id="users"
        label="Users"
        :items="reactiveUserList"
        @addTag="addUserTag"
        @deleteTag="removeUserTag"
        class="m-4 w-96"
      />
      <form
        method="dialog"
        class="flex flex-row justify-evenly align-middle m-4 flex-wrap w-full mt-7"
      >
        <CustomButton
          @click="handleSubmit"
          type="submit"
          :text="newGroup ? 'Create' : 'Update'"
          class="self-center w-1/3"
        />
        <CustomButton text="Close" type="submit" class="w-1/3" />
      </form>
    </div>
  </form>
</template>
<script lang="ts" setup>
import CustomInput from '@/components/atoms/CustomInput.vue'
import CustomTagInput from '@/components/atoms/CustomTagInput.vue'
import { computed, defineProps, ref, watch, withDefaults } from 'vue'
import CustomButton from '@/components/atoms/CustomButton.vue'
import { Group } from '@/core/group/domain/entities/Group'

const emits = defineEmits(['addGroup', 'updateGroup'])

const props = withDefaults(
  defineProps<{
    group: Group
    newGroup?: boolean
  }>(),
  {
    newGroup: false
  }
)

const reactiveUserList = ref(props.group.users)

watch(() => {
  reactiveUserList.value = [...(props.group.users ?? [])];
}, () => {
});

const changeGroup = computed(() => {
  return { gid: props.group.gid, name: props.group.name, users: props.group.users } as Group
})

const handleSubmit = () => {

  if ((reactiveUserList.value ?? []).length < 1) {
    changeGroup.value.users = undefined
  } else {
    changeGroup.value.users = [...(reactiveUserList.value ?? [])];
  }

  if (props.newGroup) {
    emits('addGroup', changeGroup.value)
  } else {
    emits('updateGroup', changeGroup.value)
  }
}

const addUserTag = (user: string) => {
  reactiveUserList.value!.push(user)
}

const removeUserTag = (index: number) => {
  reactiveUserList.value!.splice(index, 1)
}
</script>
