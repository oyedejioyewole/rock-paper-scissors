<script setup lang="ts">
import { promiseTimeout } from "@vueuse/core";
import { storeToRefs } from "pinia";
import usePlayboardStore from "~/store/playboard";

const { computerChoice, userChoice, result, isBonus } = storeToRefs(
  usePlayboardStore()
);
const playboard = usePlayboardStore();

const resultsLoading = ref(true);

const selectChoice = () => {
  playboard.setShowResults(false);
  playboard.opponentChoiceSelection();
  playboard.setUserSelection(null);
  playboard.setResults(null);
  resultsLoading.value = true;
};

onMounted(async () => {
  await promiseTimeout(3000);

  switch (result.value) {
    case "win":
      playboard.updateScore("+");
      break;
    case "lose":
      playboard.updateScore("-");
  }

  resultsLoading.value = false;
});
</script>

<template>
  <section
    class="flex justify-center uppercase text-xl gap-4 xl:gap-10 text-white items-center flex-wrap"
  >
    <!-- Your choice -->
    <div class="flex flex-col w-[40%] xl:w-auto items-center">
      <h1 class="my-5">You Picked</h1>
      <div
        :class="`rounded-full ${
          result === 'win' && !resultsLoading
            ? 'shadow-triple-rounded-trimmed xl:shadow-triple-rounded -z-20'
            : '-z-10'
        }`"
      >
        <!-- Rock icon -->
        <div
          class="rounded-full order-3 w-24 h-24 from-rock-outline-one to-rock-outline-two bg-gradient-to-br relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner"
          v-if="userChoice === 'Rock'"
        >
          <NuxtImg
            src="/images/icon-rock.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Rock"
          />
        </div>

        <!-- Paper icon -->
        <div
          class="rounded-full order-3 w-24 h-24 from-paper-outline-one to-paper-outline-two bg-gradient-to-br relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner"
          v-else-if="userChoice === 'Paper'"
        >
          <NuxtImg
            src="/images/icon-paper.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Paper"
          />
        </div>

        <!-- Scissors icon -->
        <div
          class="rounded-full order-3 w-24 h-24 from-scissors-outline-one to-scissors-outline-two bg-gradient-to-br relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner"
          v-else-if="userChoice === 'Scissors'"
        >
          <NuxtImg
            src="/images/icon-scissors.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Scissors"
          />
        </div>

        <!-- Spock icon -->
        <div
          class="w-24 h-24 from-spock-outline-one to-spock-outline-two bg-gradient-to-br rounded-full relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner"
          v-else-if="isBonus && userChoice === 'Spock'"
        >
          <NuxtImg
            src="/images/icon-spock.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Spock"
          />
        </div>

        <!-- Lizard icon -->
        <div
          class="w-24 h-24 from-lizard-outline-one to-lizard-outline-two bg-gradient-to-br rounded-full relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner"
          v-else-if="isBonus && userChoice === 'Lizard'"
        >
          <NuxtImg
            src="/images/icon-lizard.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Lizard"
          />
        </div>
      </div>
    </div>

    <!-- The result -->
    <div v-if="!resultsLoading" class="order-last xl:order-none">
      <h1 class="text-6xl">
        {{
          result === "win"
            ? "You won"
            : result === "lose"
            ? "You lost"
            : result === "draw"
            ? "You drew"
            : ""
        }}
      </h1>
      <button
        class="uppercase bg-white text-black w-full p-3 rounded-2xl mt-5 hover:text-[#e1677e] transition"
        @click="selectChoice()"
      >
        Play again
      </button>
    </div>

    <!-- The computer's choice -->
    <div
      class="flex flex-col items-center xl:order-last w-[40%] xl:w-auto justify-center"
    >
      <h1 class="my-5 text-center">The House Picked</h1>
      <div
        :class="`rounded-full -z-20 w-fit ${
          result === 'lose'
            ? 'shadow-triple-rounded-trimmed xl:shadow-triple-rounded'
            : ''
        }`"
        v-if="!resultsLoading"
      >
        <!-- Scissors icon -->
        <div
          class="rounded-full order-3 w-24 h-24 from-scissors-outline-one to-scissors-outline-two bg-gradient-to-br relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner mx-auto"
          v-if="computerChoice === 'Scissors'"
        >
          <NuxtImg
            src="/images/icon-scissors.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Scissors"
          />
        </div>

        <!-- Paper icon -->
        <div
          class="rounded-full order-3 w-24 h-24 from-paper-outline-one to-paper-outline-two bg-gradient-to-br relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner mx-auto"
          v-if="computerChoice === 'Paper'"
        >
          <NuxtImg
            src="/images/icon-paper.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Paper"
          />
        </div>

        <!-- Rock icon -->
        <div
          class="rounded-full order-3 w-24 h-24 from-rock-outline-one to-rock-outline-two bg-gradient-to-br relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner mx-auto"
          v-if="computerChoice === 'Rock'"
        >
          <NuxtImg
            src="/images/icon-rock.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Rock"
          />
        </div>

        <!-- Spock icon -->
        <div
          class="w-24 h-24 from-spock-outline-one to-spock-outline-two bg-gradient-to-br rounded-full relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner mx-auto"
          v-else-if="isBonus && computerChoice === 'Spock'"
        >
          <NuxtImg
            src="/images/icon-spock.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Spock"
          />
        </div>

        <!-- Lizard icon -->
        <div
          class="w-24 h-24 from-lizard-outline-one to-lizard-outline-two bg-gradient-to-br rounded-full relative before:bg-[#ddd] before:w-16 before:h-16 before:content-[''] before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:shadow-inner mx-auto"
          v-else-if="isBonus && computerChoice === 'Lizard'"
        >
          <NuxtImg
            src="/images/icon-lizard.svg"
            class="w-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Lizard"
          />
        </div>
      </div>
      <div
        v-else
        class="rounded-full w-24 h-24 bg-[hsl(214_47%_23%)] animate-pulse"
      ></div>
    </div>
  </section>
</template>
