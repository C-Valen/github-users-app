<!-- app.vue -->

<script setup>
const appStateStore = useAppStateStore()
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen justify-center">
    <UiThemeBtn class="absolute top-0 self-end m-3" />
    <ViewSearch v-if="appStateStore.currentView === 'search'" />
    <ViewUser v-else-if="appStateStore.currentView === 'userData'" />
  </div>
</template>
