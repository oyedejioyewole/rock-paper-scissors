<script setup lang="ts">
import usePlayboardStore from "~/store/playboard";
import { useStorage } from "@vueuse/core";

useHead({
  bodyAttrs: {
    class:
      "flex flex-col bg-radial-gradient bg-no-repeat h-screen justify-center container mx-auto relative",
  },
});

const { setGameMode, setScore, $subscribe } = usePlayboardStore();

const savedScore = useStorage("score", 0);
setScore(savedScore.value);

const savedGameMode = useStorage("gameMode", "original");
setGameMode(savedGameMode.value === "bonus");

$subscribe((mutation, { score, isBonus }) => {
  savedScore.value = score;
  savedGameMode.value = isBonus ? "bonus" : "original";
});
</script>

<template>
  <Scoreboard />
  <Playboard />
  <Footer />
</template>
