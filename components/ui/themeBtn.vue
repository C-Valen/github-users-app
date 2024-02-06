<template>
  <button class="color-mode-button" aria-label="Theme Button" @click="toggleTheme">
    <Icon v-if="colorMode.preference == 'light'" name="line-md:moon-filled-alt-to-sunny-filled-loop-transition" size="48px" />
    <Icon v-else-if="colorMode.preference == 'dark'" name="line-md:sunny-filled-loop-to-moon-alt-filled-loop-transition" size="48px" />
    <Icon v-else name="svg-spinners:90-ring" size="48px" />
  </button>
</template>

<script setup>
const colorMode = useColorMode()

const toggleTheme = () => {
  const newColorMode = colorMode.preference === 'light' ? 'dark' : 'light'
  colorMode.preference = newColorMode
}
</script>

<style scoped>
.color-mode-button {
  @apply h-[48px] w-[48px];
}

.color-mode-button > svg {
  @apply text-accent;
}
</style>
