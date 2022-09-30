<script setup>
import { useRootStore } from "~/stores/root";
import { usePlayboardStore } from "~/stores/playboard";
import { storeToRefs } from "pinia";

const { isBonus } = storeToRefs(useRootStore());
const { showResults } = storeToRefs(usePlayboardStore());
</script>

<template>
  <Original v-if="!showResults && !isBonus" />
  <Bonus v-else-if="!showResults && isBonus" />
  <Results v-else-if="showResults" />
</template>