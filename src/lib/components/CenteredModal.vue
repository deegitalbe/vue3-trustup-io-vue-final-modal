<template>
  <VueFinalModal
    class="flex justify-center items-center"
    :content-class="`p-11 bg-white rounded-lg min-h-[37.5rem] min-w-[34.5rem] inline-block space-x-2`"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <slot />
  </VueFinalModal>
</template>

<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
</script>
