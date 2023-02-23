<script setup lang="ts">
import usePlayboardStore from "~/store/playboard";
import { storeToRefs } from "pinia";

const { showResults, isBonus } = storeToRefs(usePlayboardStore());
</script>

<template>
  <Original v-if="!showResults && !isBonus" />
  <Bonus v-else-if="!showResults && isBonus" />
  <Results v-else-if="showResults" />
</template>
