<!-- components/user/content.vue -->

<script setup>
// Stores
const userDataStore = useUserDataStore()

// Methods
const formatLogin = (login) => `@${login}`
const formatFollowers = (followers) => `${followers} followers`
</script>

<template>
  <div class="profile-container">
    <div class="user-profile">
      <!-- Avatar image -->
      <div class="avatar">
        <NuxtImg :src="userDataStore.avatar_url || '/user.jpeg'" alt="User Avatar" />
      </div>
      <!-- Profile details -->
      <div class="profile-details">
        <div class="text-xl md:text-2xl">
          {{ formatLogin(userDataStore.login) }}
        </div>
        <div class="text-lg md:text-xl font-bold">
          {{ userDataStore.name }}
        </div>
        <div class="text-sm md:text-base">
          {{ formatFollowers(userDataStore.followers) }}
        </div>
      </div>
    </div>
    <!-- Profile bio -->
    <div class="text-base md:text-lg flex flex-row mt-2">
      <div>{{ userDataStore.bio }}</div>
    </div>
  </div>
</template>

<style scoped>
.profile-container {
  @apply flex flex-col min-w-full justify-center px-4 sm:px-10 md:px-20 py-4;
}

.user-profile {
  @apply flex min-w-full justify-start;
}

.avatar {
  @apply flex mr-4 min-w-fit;
}

.avatar > img {
  @apply h-24 w-24 rounded-sm;
}

.profile-details {
  @apply flex flex-col ml-4 gap-1;
}
</style>
