<template>
  <nav class="min-h-screen flex flex-col justify-center items-center w-80 bg-middle-black">
    <img src="@/assets/logo.svg" class="w-auto mx-auto mb-8" />
    <ul class="flex flex-col text-xl items-end w-full text-center">
      <li
        v-for="link in links"
        :key="link.to"
        :class="{ 'bg-light-white': link.to === selectedLink }"
        class="mt-5 p-1 w-64 rounded-l-full text-middle-gray"
        @click="selectLink(link.to)"
      >
        <router-link :to="link.to" exact class="flex items-center">
          <span class="w-44 drawer-overlay" for="menu">{{ link.text }}</span>
        </router-link>
      </li>
    </ul>

    <CustomButton text="Logout" @click="logout" class="w-2/4 mt-8" />
  </nav>
</template>
<script lang="ts" setup>
import { useRoute } from 'vue-router';
import CustomButton from '../atoms/CustomButton.vue'
import { ref } from 'vue'
import router from '@/router';

const route = useRoute()
const links = [
  { to: '/lagatrix/monitoring', text: 'Monitoring' },
  { to: '/lagatrix/storage', text: 'Storage' },
  { to: '/lagatrix/users', text: 'Users' },
  { to: '/lagatrix/groups', text: 'Groups' },
  { to: '/lagatrix/events', text: 'Events' }
]

const selectedLink = ref(
  links.find((link) => link.to === route.path)?.to ?? links[0].to
)

const selectLink = (link: string) => {
  selectedLink.value = link
}

const logout = () => {
  router.push('/login')
}
</script>
