<template>
  <div>
    <!-- <NuxtWelcome /> -->
    <h1 class="mt-4 text-3xl font-bold text-red-500 underline">
      {{ title }}
    </h1>
    <div class="wrap">
      <div class="chloe">12121</div>
    </div>
    <div class="bg-white py-24">
      <div class="flex flex-col items-center">
        <h1 class="bg-yellow-400 text-6xl font-semibold text-blue-600">2022 iThome</h1>
        <p class="mt-4 text-9xl font-bold text-gray-900">鐵人賽</p>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
const year: number = 2024
const title: string = `${year} iThome 鐵人賽`
</script>
<style scoped lang="scss">
.wrap {
  @apply cursor-pointer bg-gray-200;
  &:hover {
    @apply bg-gray-300;
  }
  .chloe {
    color: red;
  }
}
</style>
