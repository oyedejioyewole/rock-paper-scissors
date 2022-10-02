import { defineStore } from "pinia";
import { useRootStore } from "./root";
import { storeToRefs } from "pinia";

export const usePlayboardStore = defineStore("playboard", () => {
  const { isBonus } = storeToRefs(useRootStore());

  // Initial values for the playboard
  const score = ref(0);
  const computerChoice = ref("");
  const showResults = ref(false);
  const result = ref(null);
  const userChoice = ref("");

  /**
   * This functions describes the logic needed to win, lose or draw
   * @param {String} option
   */

  /**
   * 1. Rock beats scissors
   * 2. Paper beats rock
   * 3. Scissors beats paper
   * 4. Rock beats spock
   * 5. Lizard beats spock
   * 6. Spock beats scissors
   * 7. Scissors beats lizzard
   * 8. Paper beats spock
   * 9. Spock beats rock
   * 10. Lizard beats paper
   */
  function calculate(option) {
    userChoice.value = option;
    if (option === computerChoice.value) {
      result.value = "draw";
    } else if (
      (option === "Rock" && computerChoice.value === "Paper") ||
      (option === "Paper" && computerChoice.value === "Scissors") ||
      (option === "Scissors" && computerChoice.value === "Rock") ||
      (isBonus.value &&
        option === "Scissors" &&
        computerChoice.value === "Spock") ||
      (isBonus.value &&
        option === "Spock" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        option === "Rock" &&
        computerChoice.value === "Spock") ||
      (isBonus.value &&
        option === "Paper" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        option === "Lizard" &&
        computerChoice.value === "Rock") ||
      (isBonus.value &&
        option === "Lizard" &&
        computerChoice.value === "Scissors") ||
      (isBonus.value && option === "Spock" && computerChoice.value === "Paper")
    ) {
      result.value = "lose";
    } else if (
      (option === "Paper" && computerChoice.value === "Rock") ||
      (option === "Scissors" && computerChoice.value === "Paper") ||
      (option === "Rock" && computerChoice.value === "Scissors") ||
      (isBonus.value &&
        option === "Spock" &&
        computerChoice.value === "Scissors") ||
      (isBonus.value &&
        option === "Lizard" &&
        computerChoice.value === "Spock") ||
      (isBonus.value &&
        option === "Spock" &&
        computerChoice.value === "Rock") ||
      (isBonus.value &&
        option === "Lizard" &&
        computerChoice.value === "Paper") ||
      (isBonus.value &&
        option === "Rock" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        option === "Scissors" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value && option === "Paper" && computerChoice.value === "Spock")
    ) {
      result.value = "win";
    }
    showResults.value = true;
  }

  /**
   * Randomly pick between ['Rock', 'Paper', 'Scissors'] if isBonus is false
   * Randomly pick between ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock'] if isBonus is true
   */
  function selectChoice() {
    if (isBonus.value) {
      const choices = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
      const item = choices[Math.floor(Math.random() * choices.length)];
      computerChoice.value = item;
      return;
    }
    if (!isBonus.value) {
      const choices = ["Rock", "Paper", "Scissors"];
      const item = choices[Math.floor(Math.random() * choices.length)];
      computerChoice.value = item;
    }
  }

  /**
   * Function to save attained score
   * @param {Number} value
   */
  function saveScore(value) {
    score.value = value;
  }

  // Everything to the components
  return {
    score,
    computerChoice,
    userChoice,
    selectChoice,
    showResults,
    result,
    calculate,
    saveScore,
  };
});
