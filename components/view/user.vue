<!-- components/view/user.vue -->

<script setup>
// Stores
const appStateStore = useAppStateStore()
</script>

<template>
  <div class="user-container">
    <!-- Top bar -->
    <div class="container-bar">
      <button class="home-btn" aria-label="Home Button" @click="appStateStore.Home">
        <Icon name="uil:github" size="48px" />
      </button>
    </div>
    <!-- User content -->
    <div class="user-content">
      <UserProfile />
      <!-- List of repositories -->
      <UserRepositories />
    </div>
    <SearchBar class="mx-auto" />
  </div>
</template>

<style scoped>
.user-container {
  @apply flex flex-col text-accent w-full md:shadow-xl md:m-auto min-h-screen;
}

.container-bar {
  @apply flex justify-between items-center p-3 pr-4 mb-4;
}
.user-content {
  @apply lg:w-3/5 lg:mx-auto;
}
</style>
