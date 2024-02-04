<!-- components/user/repositories.vue -->

<script setup>
// Refs

// Stores
const userDataStore = useUserDataStore();
const appStateStore = useAppStateStore();

// Methods

// Lifecycle Hook
onMounted(async () => {
  await userDataStore.loadRepositories();
});
</script>

<template>
  <div class="mt-4">
    <!-- Loading Repositories -->
    <div class="empty-container" v-if="appStateStore.loadingRepos"><Icon size="64px" class="m-auto" name="svg-spinners:90-ring-with-bg" /></div>
    <!-- No repositories -->
    <div class="empty-container" v-else-if="userDataStore.repositories.length === 0">No repositories available.</div>
    <div v-else class="min-h-[260px]">
      <!-- Repositories page -->
      <div v-for="(repo, index) in userDataStore.repositories" :key="repo.id">
        <!-- Repository row -->
        <div class="repo-row">
          <div class="repo-name">
            <strong>{{ repo.name }}</strong>
          </div>
          <!-- Repository details -->
          <div class="repo-details">
            <div :class="{ '-mr-2': repo.forks >= 10, '-mr-4': repo.forks >= 100 }">
              <Icon name="fluent:branch-fork-16-regular" size="28px" class="mx-2 p-[2px] md:p-0" alt="Fork Icon" /><span class="my-auto">{{ repo.forks }}</span>
            </div>
            <div :class="{ '-mr-2': repo.stars >= 10, '-mr-4': repo.stars >= 100 }">
              <Icon name="fluent:star-16-regular" size="28px" class="mx-2 p-[2px] md:p-0" alt="Star Icon" /><span class="my-auto">{{ repo.stars }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination Row -->
    <div v-show="userDataStore.repositories.length > 0" class="page-nav">
      <button
        :class="{ invisible: userDataStore.repoPage === 1 }"
        :disabled="appStateStore.bufferingRepos || appStateStore.loadingRepos"
        @click="userDataStore.loadPreviousPage()"
        class="prev-btn"
        aria-label="Previous Page">
        <Icon name="material-symbols:arrow-circle-left" size="48px" class="p-1 md:p-0" alt="Previous Icon" />
      </button>
      <div class="flex">
        <span v-if="appStateStore.loadingRepos" class="mx-auto"><Icon size="48px" class="p-1 md:p-0" name="svg-spinners:3-dots-fade" /></span>
        <span v-else class="mx-auto text-sm md:text-base"> Page {{ userDataStore.repoPage }} of {{ userDataStore.calculateTotalPages() }} </span>
      </div>
      <button
        :class="{ invisible: userDataStore.repoPage === userDataStore.calculateTotalPages() }"
        :disabled="appStateStore.bufferingRepos || appStateStore.loadingRepos"
        @click="userDataStore.loadNextPage()"
        class="next-btn"
        aria-label="Next Page">
        <Icon name="material-symbols:arrow-circle-right" size="48px" class="p-1 md:p-0" alt="Next Icon" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.empty-container {
  @apply flex p-4 min-h-[260px];
}

.repo-row {
  @apply flex flex-row p-3 justify-between mx-0 sm:mx-4 md:mx-6;
}

.repo-name {
  @apply ml-2 sm:ml-4 md:ml-10 text-sm md:text-base text-accent;
}

.repo-details {
  @apply flex flex-row mr-4 md:mr-10 gap-4 md:gap-10 text-sm md:text-base;
}

.repo-details > div {
  @apply flex flex-row text-accent;
}

.page-nav {
  @apply flex items-center justify-between max-w-[300px] md:max-w-[400px] min-h-[72px] p-4 mx-auto mt-2 mb-6;
}

.prev-btn,
.next-btn {
  @apply mx-2 active:scale-95 transition-transform duration-200;
}
</style>
