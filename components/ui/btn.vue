<!-- components/ui/btn.vue -->

<template>
  <button type="button" class="btn">
    <slot />
  </button>
</template>

<style scoped>
.btn {
  @apply py-2 px-4 bg-accent text-base-100 shadow-lg outline-none transition-all duration-200;
}
</style>
