<template>
  <div
    class="h-screen w-screen flex items-center justify-center bg-gradient-to-br to-cyan-600 bg-yellow-300"
  >
    <Transition
      appear
      enter-from-class="opacity-0 scale-75"
      enter-active-class="transition-all transform duration-1000"
      enter-to-class="opacity-100 scale-100"
      leave-from-class="opacity-100 scale-100"
      leave-active-class="transition-all transform duration-1000"
      leave-to-class="opacity-0 scale-75"
    >
      <div
        class="text-center p-8 rounded-full bg-white w-[650px] h-[650px] shadow-lg"
      >
        <div>
          <div class="text-[300px]">🎉</div>
          <div class="text-2xl text-gray-600 font-thin">
            Let's build something amazing !
          </div>
          <div>
            <button class="bg-red" @click="open()">CLICK MEEEEEEEEE</button>
          </div>
          <ModalsContainer />
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import "./lib";
import { ModalsContainer } from "./lib";
import { CenteredModal } from "./lib";
import { useModal } from "./lib";
const { open } = useModal(CenteredModal, {
  string: "string",
});
</script>
