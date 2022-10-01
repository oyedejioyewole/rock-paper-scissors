<script setup>
import { useStorage } from "@vueuse/core";
import { usePlayboardStore } from "./stores/playboard";
import { useRootStore } from "./stores/root";

useHead({
  bodyAttrs: {
    class:
      "flex flex-col bg-gradient-radial-at-t from-gradient-one to-gradient-two bg-no-repeat h-screen justify-center container mx-auto relative",
  },
});

// Store objects
const _root = useRootStore();
const playboard = usePlayboardStore();

// LocalStorage store
const savedScore = useStorage("score").value;
const savedGameMode = useStorage("gameMode").value;

// Use saved game mode if available
if (savedGameMode !== "undefined") {
  console.log("Debugging ...");
  if (savedGameMode === "bonus") {
    _root.setIsBonus(true);
  } else if (savedGameMode === "original") {
    _root.setIsBonus(false);
  }
}

// Use saved score if available
if (savedScore !== "undefined") {
  playboard.saveScore(savedScore);
}

// Select option on page load
playboard.selectChoice();
</script>

<template>
  <div>
    <Scoreboard />
    <Playboard />
    <Footer />
  </div>
</template>
