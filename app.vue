<script setup>
import { usePlayboardStore } from "./stores/playboard";
import { useRootStore } from "./stores/root";

useHead({
  bodyAttrs: {
    class:
      "flex flex-col bg-gradient-radial-at-t from-gradient-one to-gradient-two bg-no-repeat h-screen justify-center container mx-auto relative",
  },
});

useRootStore();
usePlayboardStore().selectChoice();
</script>

<template>
  <div>
    <Scoreboard />
    <Playboard />
    <Footer />
  </div>
</template>
