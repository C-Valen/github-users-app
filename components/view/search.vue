<!-- components/view/search.vue -->

<template>
  <div class="search-view">
    <Icon name="uil:github" size="200px" alt="logo" />
    <SearchBar />
  </div>
</template>

<style scoped lang="css">
.search-view {
  @apply flex flex-col justify-center w-screen;
}

.search-view>* {
  @apply mx-auto;
}

.search-view>svg {
  @apply max-w-80 md:max-w-96 p-10 text-accent;
}
</style>
