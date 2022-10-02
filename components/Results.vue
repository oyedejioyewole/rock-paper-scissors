<script setup>
import { useRootStore } from "~/stores/root";
import { usePlayboardStore } from "~/stores/playboard";
import { storeToRefs } from "pinia";

const { computerChoice, userChoice, result, showResults } = storeToRefs(
  usePlayboardStore()
);

const { isBonus } = storeToRefs(useRootStore());
const resultsLoading = useState("resultsLoading", () => true);

const selectChoice = () => {
  usePlayboardStore().selectChoice();
  resultsLoading.value = true;
  showResults.value = false;
  result.value = null;
};
</script>

<template>
  <section
    class="
      flex
      justify-center
      uppercase
      text-xl
      gap-4
      xl:gap-10
      text-white
      items-center
      flex-wrap
    "
  >
    <!-- Your choice -->
    <div class="flex flex-col w-[40%] xl:w-auto items-center">
      <h1 class="my-5">You Picked</h1>
      <div
        :class="`rounded-full -z-10 ${
          result === 'win' && !resultsLoading ? 'xl:shadow-triple-rounded' : ''
        }`"
      >
        <!-- Rock icon -->
        <div
          class="
            rounded-full
            order-3
            w-24
            h-24
            from-rock-outline-one
            to-rock-outline-two
            bg-gradient-to-br
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
          "
          v-if="userChoice === 'Rock'"
        >
          <NuxtImg
            src="/images/icon-rock.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Rock"
          />
        </div>

        <!-- Paper icon -->
        <div
          class="
            rounded-full
            order-3
            w-24
            h-24
            from-paper-outline-one
            to-paper-outline-two
            bg-gradient-to-br
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
          "
          v-else-if="userChoice === 'Paper'"
        >
          <NuxtImg
            src="/images/icon-paper.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Paper"
          />
        </div>

        <!-- Scissors icon -->
        <div
          class="
            rounded-full
            order-3
            w-24
            h-24
            from-scissors-outline-one
            to-scissors-outline-two
            bg-gradient-to-br
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
          "
          v-else-if="userChoice === 'Scissors'"
        >
          <NuxtImg
            src="/images/icon-scissors.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Scissors"
          />
        </div>

        <!-- Spock icon -->
        <div
          class="
            w-24
            h-24
            from-spock-outline-one
            to-spock-outline-two
            bg-gradient-to-br
            rounded-full
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
          "
          v-else-if="isBonus && userChoice === 'Spock'"
        >
          <NuxtImg
            src="/images/icon-spock.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Spock"
          />
        </div>

        <!-- Lizard icon -->
        <div
          class="
            w-24
            h-24
            from-lizard-outline-one
            to-lizard-outline-two
            bg-gradient-to-br
            rounded-full
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
          "
          v-else-if="isBonus && userChoice === 'Lizard'"
        >
          <NuxtImg
            src="/images/icon-lizard.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
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
        class="
          uppercase
          bg-white
          text-black
          w-full
          p-3
          rounded-2xl
          mt-5
          hover:text-[#e1677e]
          transition
        "
        @click="selectChoice()"
      >
        Play again
      </button>
    </div>

    <!-- The computer's choice -->
    <div
      class="
        flex flex-col
        items-center
        xl:order-last
        w-[40%]
        xl:w-auto
        justify-center
      "
    >
      <h1 class="my-5">The House Picked</h1>
      <div
        :class="`rounded-full -z-10 w-fit ${
          result === 'lose' ? 'xl:shadow-triple-rounded' : ''
        }`"
        v-if="!resultsLoading"
      >
        <!-- Scissors icon -->
        <div
          class="
            rounded-full
            order-3
            w-24
            h-24
            from-scissors-outline-one
            to-scissors-outline-two
            bg-gradient-to-br
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
            mx-auto
          "
          v-if="computerChoice === 'Scissors'"
        >
          <NuxtImg
            src="/images/icon-scissors.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Scissors"
          />
        </div>

        <!-- Paper icon -->
        <div
          class="
            rounded-full
            order-3
            w-24
            h-24
            from-paper-outline-one
            to-paper-outline-two
            bg-gradient-to-br
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
            mx-auto
          "
          v-if="computerChoice === 'Paper'"
        >
          <NuxtImg
            src="/images/icon-paper.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Paper"
          />
        </div>

        <!-- Rock icon -->
        <div
          class="
            rounded-full
            order-3
            w-24
            h-24
            from-rock-outline-one
            to-rock-outline-two
            bg-gradient-to-br
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
            mx-auto
          "
          v-if="computerChoice === 'Rock'"
        >
          <NuxtImg
            src="/images/icon-rock.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Rock"
          />
        </div>

        <!-- Spock icon -->
        <div
          class="
            w-24
            h-24
            from-spock-outline-one
            to-spock-outline-two
            bg-gradient-to-br
            rounded-full
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
            mx-auto
          "
          v-else-if="isBonus && computerChoice === 'Spock'"
        >
          <NuxtImg
            src="/images/icon-spock.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Spock"
          />
        </div>

        <!-- Lizard icon -->
        <div
          class="
            w-24
            h-24
            from-lizard-outline-one
            to-lizard-outline-two
            bg-gradient-to-br
            rounded-full
            relative
            before:bg-[#ddd]
            before:w-16
            before:h-16
            before:content-['']
            before:absolute
            before:left-1/2
            before:top-1/2
            before:-translate-x-1/2
            before:-translate-y-1/2
            before:rounded-full
            before:shadow-inner
            mx-auto
          "
          v-else-if="isBonus && computerChoice === 'Lizard'"
        >
          <NuxtImg
            src="/images/icon-lizard.svg"
            class="
              w-8
              absolute
              left-1/2
              top-1/2
              -translate-x-1/2 -translate-y-1/2
            "
            alt="Lizard"
          />
        </div>
      </div>
      <div v-else class="rounded-full w-24 h-24 bg-[#ddd] animate-pulse"></div>
    </div>
  </section>
</template>

<script>
import { promiseTimeout } from "@vueuse/core";

export default {
  async mounted() {
    const playboard = usePlayboardStore();
    const areResultsLoading = useState("resultsLoading");

    useTimeout(4800);
    await promiseTimeout(5000);

    if (playboard.result === "win") {
      playboard.score++;
    } else {
      playboard.score--;
    }

    areResultsLoading.value = false;
  },
};
</script>
