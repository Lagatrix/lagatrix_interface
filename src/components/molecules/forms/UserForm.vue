<template>
  <form>
    <div class="flex flex-col items-center">
      <div class="flex flex-row flex-wrap justify-center">
        <CustomInput id="username" v-model="changeUser.name" label="Username" class="m-4 w-64" />
        <CustomInput id="home" v-model="changeUser.home" label="Home" class="m-4 w-64" />
      </div>
      <div class="flex flex-row flex-wrap justify-center">
        <CustomInput id="shell" v-model="changeUser.shell" label="Shell" class="m-4 w-64" />
        <CustomInput
          id="mainGroup"
          v-model="changeUser.main_group"
          label="Main group"
          class="m-4 w-64"
        />
      </div>
      <CustomInput
        id="password"
        type="password"
        v-model="changeUser.password"
        label="Password"
        class="m-4 w-64"
      />
      <form
        method="dialog"
        class="flex flex-row justify-evenly align-middle m-4 flex-wrap w-full mt-7"
      >
        <CustomButton
          @click="handleSubmit"
          type="submit"
          :text="newUser ? 'Create' : 'Update'"
          class="self-center w-1/3"
        />
        <CustomButton text="Close" type="submit" class="w-1/3" />
      </form>
    </div>
  </form>
</template>
<script lang="ts" setup>
import CustomInput from '@/components/atoms/CustomInput.vue'
import { User } from '../../../core/user/domain/entities/User'
import { computed, defineProps, withDefaults } from 'vue'
import CustomButton from '@/components/atoms/CustomButton.vue'

const emits = defineEmits(['addUser', 'updateUser'])

const props = withDefaults(defineProps<{
  user: User,
  newUser?: boolean
}>(), {
  newUser: false
})

const changeUser = computed(() => {
  return {...props.user}
})

const handleSubmit = () => {
  if (changeUser.value.main_group === '') {
    changeUser.value.main_group = undefined
  }

  if (props.newUser) {
    emits('addUser', changeUser.value)
  } else {
    if (changeUser.value.password === '') {
      changeUser.value.password = undefined
    }
    emits('updateUser', changeUser.value)
  }
}
</script>
