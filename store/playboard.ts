import { defineStore } from "pinia";

export default defineStore("playboard", () => {
  //==> Initial values
  const score = ref(0);
  const computerChoice = ref<ChoiceOptions>();
  const showResults = ref(false);
  const result = ref<Results | null>();
  const userChoice = ref<ChoiceOptions | null>();
  const isBonus = ref(false);

  /**
   * This determines if the user has won, lost or drawn
   *
   * @param option {ChoiceOptions}
   *
   * > Possible ways
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
   *
   */
  const calculate = () => {
    if (userChoice.value === computerChoice.value) {
      setResults("draw");
    } else if (
      (userChoice.value === "Rock" && computerChoice.value === "Paper") ||
      (userChoice.value === "Paper" && computerChoice.value === "Scissors") ||
      (userChoice.value === "Scissors" && computerChoice.value === "Rock") ||
      (isBonus.value &&
        userChoice.value === "Scissors" &&
        computerChoice.value === "Spock") ||
      (isBonus.value &&
        userChoice.value === "Spock" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        userChoice.value === "Rock" &&
        computerChoice.value === "Spock") ||
      (isBonus.value &&
        userChoice.value === "Paper" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        userChoice.value === "Lizard" &&
        computerChoice.value === "Rock") ||
      (isBonus.value &&
        userChoice.value === "Lizard" &&
        computerChoice.value === "Scissors") ||
      (isBonus.value &&
        userChoice.value === "Spock" &&
        computerChoice.value === "Paper")
    ) {
      setResults("lose");
    } else if (
      (userChoice.value === "Paper" && computerChoice.value === "Rock") ||
      (userChoice.value === "Scissors" && computerChoice.value === "Paper") ||
      (userChoice.value === "Rock" && computerChoice.value === "Scissors") ||
      (isBonus.value &&
        userChoice.value === "Spock" &&
        computerChoice.value === "Scissors") ||
      (isBonus.value &&
        userChoice.value === "Lizard" &&
        computerChoice.value === "Spock") ||
      (isBonus.value &&
        userChoice.value === "Spock" &&
        computerChoice.value === "Rock") ||
      (isBonus.value &&
        userChoice.value === "Lizard" &&
        computerChoice.value === "Paper") ||
      (isBonus.value &&
        userChoice.value === "Rock" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        userChoice.value === "Scissors" &&
        computerChoice.value === "Lizard") ||
      (isBonus.value &&
        userChoice.value === "Paper" &&
        computerChoice.value === "Spock")
    ) {
      setResults("win");
    }
    setShowResults(true);
  };

  /**
   * If isBonus is false, then:
   * Randomly pick between ['Rock', 'Paper', 'Scissors']
   *
   * else:
   * Randomly pick between ['Rock', 'Paper', 'Scissors', 'Lizard', 'Spock']
   */
  const opponentChoiceSelection = () => {
    const choices = isBonus.value
      ? ["Rock", "Paper", "Scissors", "Lizard", "Spock"]
      : ["Rock", "Paper", "Scissors"];
    computerChoice.value = choices[
      Math.floor(Math.random() * choices.length)
    ] as ChoiceOptions;
  };

  /**
   * Sets userChoice to the user's choice
   * @param option {ChoiceOptions}
   */
  const setUserSelection = (option: ChoiceOptions | null) =>
    (userChoice.value = option);

  /**
   * This saves the score
   * @param value {number}
   */
  const setScore = (value: number) => (score.value = value);

  /**
   * Increment or decrement the score
   * @param type {"-" | "+"}
   */
  const updateScore = (type: "+" | "-") => {
    if (type === "+") score.value++;
    else if (type === "-") score.value--;
  };

  /**
   * Set the game mode by setting isBonus to a boolean
   * @param isBonusGameMode {boolean}
   */
  const setGameMode = (isBonusGameMode: boolean) =>
    (isBonus.value = isBonusGameMode);

  /**
   * Set the visibility of the results by settings showResults to a boolean
   * @param _showResults {boolean}
   */
  const setShowResults = (_showResults: boolean) =>
    (showResults.value = _showResults);

  /**
   * Set the result
   * @param _result {Results | null}
   * @returns
   */
  const setResults = (_result: Results | null) => (result.value = _result);

  return {
    score,
    computerChoice,
    userChoice,
    opponentChoiceSelection,
    showResults,
    result,
    calculate,
    setScore,
    setGameMode,
    isBonus,
    setShowResults,
    setUserSelection,
    setResults,
    updateScore,
  };
});
