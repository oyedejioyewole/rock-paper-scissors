<script setup>
import { storeToRefs } from "pinia";
import usePlayboardStore from "~/store/playboard";

const { showResults, isBonus } = storeToRefs(usePlayboardStore());
const { setScore, setGameMode, setShowResults } = usePlayboardStore();

const toggleGameMode = () => {
  setScore(0);
  setGameMode(useToggle(isBonus)());
  if (showResults.value) {
    setShowResults(false);
  }
};
</script>

<template>
  <footer
    class="absolute bottom-3 md:bottom-20 xl:bottom-4 flex flex-col gap-4 xl:gap-0 xl:flex-row xl:justify-between items-center w-full text-center md:text-left"
  >
    <h1 class="text-md text-gray-400">
      Challenge by
      <NuxtLink
        href="https://www.frontendmentor.io?ref=challenge"
        target="_blank"
        class="transition hover:text-white underline underline-offset-4"
        >Frontend Mentor</NuxtLink
      ><span class="hidden md:inline-block">.&nbsp;</span>
      <span class="block md:inline"
        >Coded by
        <NuxtLink
          href="https://github.com/OyewoleOyedeji/rock-paper-scissors"
          target="_blank"
          class="transition hover:text-white underline underline-offset-4"
          >OyewoleOyedeji</NuxtLink
        ></span
      >
    </h1>
    <div class="order-first xl:order-last flex gap-4 mb-2 md:mb-0">
      <Rules />
      <button
        class="transition border-2 border-white text-white rounded-2xl hover:text-black hover:bg-white p-3 w-fit h-fit text-lg block xl:hidden"
        @click="toggleGameMode()"
      >
        Switch game mode
      </button>
    </div>
  </footer>
</template>
