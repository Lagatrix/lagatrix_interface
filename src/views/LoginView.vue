<template>
  <div class="min-h-screen flex justify-center items-center flex-col">
    <div class="text-center mb-4">
      <img src="../assets/logo.svg" class="w-auto mx-auto" />
      <h1 class="text-xl font-bold text-low-black">Welcome to Lagatrix</h1>
    </div>
    <LoginForm />
  </div>
</template>
<script lang="ts" setup>
import LoginForm from '@/components/molecules/forms/LoginForm.vue'
</script>
