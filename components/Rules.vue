<script setup>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionRoot,
  TransitionChild,
} from "@headlessui/vue";
import { useToggle } from "@vueuse/core";
import { useRootStore } from "~/stores/root";
import { storeToRefs } from "pinia";

const { isBonus } = storeToRefs(useRootStore());
const isOpen = useState("isOpen", () => false);
const toggleModal = useToggle(isOpen);
</script>

<template>
  <button
    type="button"
    @click="toggleModal()"
    class="
      rounded-md
      px-8
      py-2
      text-sm
      font-medium
      text-white
      hover:bg-scoreboard-outline hover:text-black
      transition
      focus-visible:ring-white
      border-2 border-scoreboard-outline
      uppercase
    "
  >
    Rules
  </button>
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog
      as="div"
      @close="toggleModal(false)"
      class="relative z-10"
      title="Close this modal"
    >
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="
                w-full
                max-w-md
                transform
                overflow-hidden
                rounded-2xl
                bg-white
                p-6
                text-left
                align-middle
                shadow-xl
                transition-all
              "
            >
              <DialogTitle
                as="h3"
                class="
                  text-4xl
                  font-medium
                  leading-6
                  text-dark
                  uppercase
                  flex
                  items-center
                  justify-between
                "
              >
                Rules
                <i
                  class="
                    las
                    la-times
                    cursor-pointer
                    transition
                    hover:opacity-50
                  "
                  @click="toggleModal(false)"
                  title="Close this modal"
                ></i>
              </DialogTitle>
              <div class="my-4">
                <NuxtImg
                  :src="
                    !isBonus
                      ? `/images/image-rules.svg`
                      : `/images/image-rules-bonus.svg`
                  "
                  class="mx-auto pt-10"
                  alt="The rules of the game"
                />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>