<template>
  <form
    class="bg-low-white shadow-md border-solid border border-middle-gray rounded-badge px-8 pt-6 pb-8 m-2 flex flex-col justify-between items-center h-500"
    @submit.prevent="handleSubmit"
  >
    <div class="flex">
      <CustomInput id="endpoint" v-model="endpoint" class="w-4/5 mr-4" label="URL API" />
      <CustomInput id="port" v-model="port" type="number" class="w-1/5" label="Port" />
    </div>
    <CustomInput id="username" class="w-full" v-model="username" label="Username" />
    <CustomInput id="password" class="w-full" type="password" v-model="password" label="Password" />
    <CustomButton
      :disabled="formActive"
      :isLoading="ploc.isSending()"
      class="w-48"
      text="Sign Up"
      type="submit"
    />
  </form>
</template>
<script lang="ts" setup>
import CustomInput from '@/components/atoms/CustomInput.vue'
import CustomButton from '@/components/atoms/CustomButton.vue'
import { computed, ref } from 'vue'
import { LoginPloc } from '@/plocs/LoginPloc'
import { useToast } from 'vue-toastification'
import { SessionLagatrix } from '@/core/shared/domain/entities/SessionLagatrix'

const ploc = new LoginPloc(
  useToast()
)

ploc.clearSession()

const endpoint = ref('')
const port = ref(8000)
const username = ref('')
const password = ref('')

const formActive = computed(() => {
  return (
    username.value == '' ||
    (port.value < 0 ||
    port.value > 65536) ||
    !new RegExp('^(http://|https://).+$', 'i').test(endpoint.value)
  )
})

async function handleSubmit() {
  const session = {
    apiUrl: endpoint.value,
    port: `${port.value}`,
    user: username.value,
    password: password.value
  } as SessionLagatrix

  const res = await ploc.makeLogin(session)

  if (typeof res === 'string') {
    ploc.saveSession(session)
    window.location.href = '/lagatrix'
  }
}
</script>
