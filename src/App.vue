<template>
  <!--<Suspense>
    <TestPloc />
      <template #fallback><p>Loading</p></template>
    </Suspense>-->
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>
