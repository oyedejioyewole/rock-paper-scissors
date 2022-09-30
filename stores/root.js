import { defineStore } from "pinia";
import { useToggle } from "@vueuse/core";

export const useRootStore = defineStore("root", () => {
  const isBonus = ref(false);

  /**
   * Function to set the game mode between original and bonus versions
   * @param {Boolean} option
   */
  function setIsBonus(option) {
    isBonus.value = option;
  }

  return { isBonus, setIsBonus };
});
