<script setup>
import { usePlayboardStore } from "~/stores/playboard";
import { storeToRefs } from "pinia";

const { score } = storeToRefs(usePlayboardStore());
</script>

<template>
  <div
    class="
      flex flex-col
      p-5
      2xl:p-10
      bg-white
      items-center
      w-fit
      h-fit
      2xl:w-[15%]
      rounded-2xl
      text-xl
    "
  >
    <h2 class="uppercase text-score">Score</h2>
    <h3 class="text-3xl 2xl:text-6xl text-dark">{{ score }}</h3>
  </div>
</template>