import { defineStore } from "pinia";
import { useToggle } from "@vueuse/core";

export const useRootStore = defineStore("root", () => {
  const isBonus = ref(false);

  return { isBonus };
});
