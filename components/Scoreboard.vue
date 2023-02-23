<script setup lang="ts">
import usePlayboardStore from "~/store/playboard";
import { storeToRefs } from "pinia";

//==> Methods
const toggleGameMode = () => {
  setScore(0);
  setGameMode(useToggle(isBonus)());
  if (showResults.value) {
    setShowResults(false);
  }
};

const { showResults, isBonus } = storeToRefs(usePlayboardStore());
const { setGameMode, setShowResults, setScore } = usePlayboardStore();
</script>

<template>
  <section
    class="flex justify-between mt-5 2xl:mt-10 p-2 md:px-5 2xl:p-10 border-2 rounded-2xl border-scoreboard-outline xl:w-[90%] w-3/4 items-center absolute top-0 left-1/2 -translate-x-1/2"
  >
    <NuxtLink to="/"
      ><NuxtImg
        :src="!isBonus ? `/images/logo.svg` : `/images/logo-bonus.svg`"
        class="w-32 2xl:w-fit"
        :alt="
          !isBonus
            ? `Rock, paper, scissors`
            : `Rock, paper, scissors, lizard and spock`
        "
        :title="
          !isBonus
            ? `Rock, paper, scissors`
            : `Rock, paper, scissors, lizard and spock`
        "
    /></NuxtLink>
    <button
      class="transition border-2 border-white text-white rounded-2xl hover:text-black hover:bg-white p-3 2xl:py-5 w-[15%] h-fit text-lg hidden xl:block"
      @click="toggleGameMode()"
    >
      Switch game mode
    </button>
    <Score />
  </section>
</template>
