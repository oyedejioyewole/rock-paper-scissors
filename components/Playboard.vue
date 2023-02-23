<script setup lang="ts">
import { storeToRefs } from "pinia";
import usePlayboardStore from "~/store/playboard";

const { showResults, isBonus } = storeToRefs(usePlayboardStore());
</script>

<template>
  <Original v-if="!showResults && !isBonus" />
  <Bonus v-else-if="!showResults && isBonus" />
  <Results v-else-if="showResults" />
</template>
