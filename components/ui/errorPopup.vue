<!-- components/ui/errorPopup.vue -->

<script setup>
const props = defineProps(["msg"]);
</script>

<template>
    <div class="error-msg">{{ props.msg }}</div>
</template>

<style scoped>
.error-msg {
  @apply text-center bg-red-200 text-red-600 text-sm py-3 px-5 rounded-b-lg -translate-y-1;
  @apply animate-[slideDown_0.5s_ease-in-out];
}

@keyframes slideDown {
  from {
    transform: translateY(0rem);
  }
  to {
    transform: translateY(-0.25rem);
  }
}
</style>
