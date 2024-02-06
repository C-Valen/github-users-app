<!-- components/searchBar.vue -->

<script setup>
import { useAppStateStore } from '~/stores/appState'

// Refs
const username = ref('')
const error = ref('')

// Stores
const appStateStore = useAppStateStore()
const userDataStore = useUserDataStore()

// Methods
const handleSearch = async () => {
  await searchUser(username, {
    onSearchComplete: () => {
      // Change the view after the search is complete
      if (appStateStore.currentView === 'userData') {
        userDataStore.repoPage = 1
        userDataStore.loadRepositories()
        error.value = ''
      } else {
        appStateStore.showUserView()
      }
    },
    // Or pop up an error
    onError: (e) => {
      error.value = e
    },
  })
}
</script>

<template>
  <div class="search-bar">
    <input v-model="username" placeholder="@UserName" :class="{ 'error-input': error }" @keyup.enter="handleSearch">
    <!-- Error pop up -->
    <UiErrorPopup v-if="error" :msg="error.message" class="error-block" />
    <div v-else class="min-h-[44px]" />
    <!-- Search button (hidden lg screens) -->
    <UiBtn class="search-btn" aria-label="Search Button" @click="handleSearch">
      Search
    </UiBtn>
  </div>
</template>

<style scoped>
.search-bar {
  @apply flex flex-col w-3/4 lg:w-2/4 relative;
}

input {
  @apply w-full py-3 px-5 text-neutral rounded-lg outline-none border-2 dark:border-slate-600 dark:focus:border-slate-400 focus:border-accent focus:shadow-lg dark:bg-slate-600 transition-all duration-200 z-10;
}

.error-input {
  @apply border-error focus:border-error !important;
}

.search-btn {
  @apply mb-16 mt-2;
}
</style>
