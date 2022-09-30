<script setup>
import { usePlayboardStore } from "~/stores/playboard";
import { useRootStore } from "~/stores/root";
import { storeToRefs } from "pinia";

const { isBonus } = storeToRefs(useRootStore());
const { score, showResults } = storeToRefs(usePlayboardStore());

const toggleGameMode = () => {
  score.value = 0;
  useToggle(isBonus)();
  if (showResults.value) {
    showResults.value = false;
  }
};
</script>

<template>
  <footer
    class="
      absolute
      bottom-3
      xl:bottom-4
      flex flex-col
      gap-4
      xl:gap-0 xl:flex-row xl:justify-between
      items-center
      w-full
    "
  >
    <h1 class="text-md text-gray-400">
      Challenge by
      <NuxtLink
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="transition hover:text-white underline underline-offset-4"
        >Frontend Mentor</NuxtLink
      >. Coded by
      <NuxtLink
        href="https://github.com/OyewoleOyedeji"
        target="_blank"
        class="transition hover:text-white underline underline-offset-4"
        >OyewoleOyedeji</NuxtLink
      >
    </h1>
    <div class="order-first xl:order-last flex gap-4">
      <Rules />
      <button
        class="
          transition
          border-2 border-white
          text-white
          rounded-2xl
          hover:text-black hover:bg-white
          p-3
          w-fit
          h-fit
          text-lg
          block
          xl:hidden
        "
        @click="toggleGameMode()"
      >
        Switch game mode
      </button>
    </div>
  </footer>
</template>