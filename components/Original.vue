<script setup>
import { usePlayboardStore } from "~/stores/playboard";

const playboard = usePlayboardStore();

playboard.$subscribe((mutation, state) => {
  if (window.localStorage) {
    window.localStorage.setItem("score", state.score);
  }
});

const calculate = (option) => playboard.calculate(option);
</script>

<template>
  <section
    class="
      bg-[url('/images/bg-triangle.svg')]
      flex
      items-center
      justify-center
      h-screen
      bg-no-repeat bg-center
    "
  >
    <!-- Options -->
    <div
      class="
        flex flex-wrap
        gap-36 gap-y-24
        mb-12
        w-[30%]
        justify-center
        relative
        mt-2
      "
    >
      <!-- Paper button -->
      <button
        class="
          w-24
          h-24
          from-paper-outline-one
          to-paper-outline-two
          bg-gradient-to-br
          shadow-[0_10px_0_0_#2d48d2]
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
        @click="calculate('Paper')"
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
      </button>

      <!-- Scissors button -->
      <button
        class="
          order-2
          rounded-full
          h-24
          from-scissors-outline-one
          to-scissors-outline-two
          bg-gradient-to-br
          shadow-[0_10px_0_0_#d2982d]
          relative
          w-24
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
          @click="calculate('Scissors')"
          alt="Scissors"
        />
      </button>

      <!-- Rock button -->
      <button
        class="
          rounded-full
          order-3
          w-24
          h-24
          from-rock-outline-one
          to-rock-outline-two
          bg-gradient-to-br
          shadow-[0_10px_0_0_#d22d4b]
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
        @click="calculate('Rock')"
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
      </button>
    </div>
  </section>
</template>