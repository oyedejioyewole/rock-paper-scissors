<script setup>
import { usePlayboardStore } from "~/stores/playboard";

const playboard = usePlayboardStore();

const calculate = (option) => playboard.calculate(option);
</script>

<template>
  <section
    class="
      bg-[url('/images/bg-pentagon.svg')]
      flex
      items-center
      justify-center
      h-screen
      bg-no-repeat
      bg-[center_55%]
      xl:bg-[center_60%]
      2xl:bg-center
    "
  >
    <!-- Options -->
    <div class="flex flex-col relative items-center gap-4">
      <!-- Scissors button -->
      <button
        class="
          w-24
          h-24
          mt-16
          2xl:mt-0
          from-scissors-outline-one
          to-scissors-outline-two
          shadow-[0_10px_0_0_#d2982d]
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
        @click="calculate('Scissors')"
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
      </button>

      <div class="flex flex-wrap w-[60%] gap-16 justify-between">
        <!-- Spock button -->
        <button
          class="
            w-24
            h-24
            from-spock-outline-one
            to-spock-outline-two
            bg-gradient-to-br
            shadow-[0_10px_0_0_#2dbad2]
            rounded-full
            relative
            -ml-14
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
          @click="calculate('Spock')"
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
        </button>

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
            -mr-14
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

        <!-- Lizard button -->
        <button
          class="
            w-24
            h-24
            from-lizard-outline-one
            to-lizard-outline-two
            bg-gradient-to-br
            shadow-[0_10px_0_0_#672dd2]
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
          @click="calculate('Lizard')"
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
        </button>

        <!-- Rock button -->
        <button
          class="
            w-24
            h-24
            from-rock-outline-one
            to-rock-outline-two
            bg-gradient-to-br
            shadow-[0_10px_0_0_#d22d4b]
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
    </div>
  </section>
</template>