<script setup>
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
const savedScore = localStorage.getItem("score");
const savedGameMode = localStorage.getItem("gameMode");

// Use saved game mode if not undefined
if (savedGameMode) {
  console.log("Value present");
  if (savedGameMode === "bonus") {
    _root.setIsBonus(true);
  } else if (savedGameMode === "original") {
    _root.setIsBonus(false);
  }
} else {
  localStorage.setItem("gameMode", "original");
}

// Use saved score if not undefined
if (savedScore) {
  console.log("Value present");
  playboard.saveScore(savedScore);
} else {
  localStorage.setItem("score", 0);
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
