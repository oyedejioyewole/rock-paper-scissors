<script setup>
import { useToggle } from "@vueuse/core";
import { usePlayboardStore } from "~/stores/playboard";
import { useRootStore } from "~/stores/root";
import { storeToRefs } from "pinia";

const { isBonus } = storeToRefs(useRootStore());
const { score, showResults } = storeToRefs(usePlayboardStore());

const toggleGameMode = () => {
  score.value = 0;
  useToggle(isBonus)();
  if (window.localStorage) {
    window.localStorage.setItem(
      "gameMode",
      isBonus.value ? "bonus" : "original"
    );
  }
  if (showResults.value) {
    showResults.value = false;
  }
};
</script>

<template>
  <section
    class="
      flex
      justify-between
      mt-5
      2xl:mt-10
      p-2
      px-5
      2xl:p-10
      border-2
      rounded-2xl
      border-scoreboard-outline
      w-full
      items-center
      absolute
      top-0
    "
  >
    <NuxtLink to="/"
      ><NuxtImg
        :src="!isBonus ? `/images/logo.svg` : `/images/logo-bonus.svg`"
        class="w-32 2xl:w-fit"
        :alt="
          !isBonus
            ? `Rock, paper, scissors`
            : `Rock, paper, scissors, lizzard and spock`
        "
        :title="
          !isBonus
            ? `Rock, paper, scissors`
            : `Rock, paper, scissors, lizzard and spock`
        "
    /></NuxtLink>
    <button
      class="
        transition
        border-2 border-white
        text-white
        rounded-2xl
        hover:text-black hover:bg-white
        p-3
        2xl:py-5
        w-[15%]
        h-fit
        text-lg
        hidden
        xl:block
      "
      @click="toggleGameMode()"
    >
      Switch game mode
    </button>
    <Score />
  </section>
</template>