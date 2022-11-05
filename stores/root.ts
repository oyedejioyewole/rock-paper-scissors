import { defineStore } from "pinia";

export const useRootStore = defineStore("root", () => {
  const isBonus = ref(false);

  /**
   * Function to set the game mode between original and bonus versions
   * @param {Boolean} option
   */
  function setIsBonus(option: boolean) {
    isBonus.value = option;
  }

  return { isBonus, setIsBonus };
});
