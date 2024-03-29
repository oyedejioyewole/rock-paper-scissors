<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { storeToRefs } from "pinia";
import useRootStore from "~/store/playboard";

//==> Methods
const toggleModal = () => useToggle(isModalOpen)();

const isModalOpen = useState("isRuleModalOpen", () => false);
const { isBonus } = storeToRefs(useRootStore());
</script>

<template>
  <button
    type="button"
    @click="toggleModal()"
    class="rounded-md px-8 py-2 text-sm font-medium text-white hover:bg-scoreboard-outline hover:text-black transition focus-visible:ring-white border-2 border-scoreboard-outline uppercase"
  >
    Rules
  </button>
  <TransitionRoot appear :show="isModalOpen" as="template">
    <Dialog
      as="div"
      @close="toggleModal()"
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
              class="w-full md:max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all h-[95vh] max-h-min md:h-auto flex flex-col justify-center"
            >
              <DialogTitle
                as="h3"
                class="text-4xl font-medium leading-6 text-dark uppercase flex flex-col md:flex-row items-center justify-between"
              >
                Rules
                <span class="hidden md:block">
                  <NuxtImg
                    src="/images/icon-close.svg"
                    class="cursor-pointer transition hover:opacity-50 w-6 h-6"
                    @click="toggleModal()"
                    title="Close this modal"
                  />
                </span>
              </DialogTitle>
              <div class="my-4 gap-y-14 flex flex-col items-center">
                <NuxtImg
                  :src="
                    !isBonus
                      ? `/images/image-rules.svg`
                      : `/images/image-rules-bonus.svg`
                  "
                  class="mx-auto pt-10"
                  alt="The rules of the game"
                />
                <span class="block md:hidden">
                  <NuxtImg
                    src="/images/icon-close.svg"
                    alt="Close"
                    class="cursor-pointer transition hover:opacity-50 w-6 h-6"
                    @click="toggleModal()"
                  />
                </span>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
