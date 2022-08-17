<script setup>
import SvgIcon from "./SvgIcon.vue";
import { defineProps } from "vue";
const props = defineProps({
  icon: String,
  text: String,
  route: String,
  active: Boolean,
});
</script>

<template>
  <div
    class="px-[30px] py-1 flex items-center cursor-pointer duration-300 hover:bg-primary-300 hover:rounded"
    :class="{ 'bg-primary-300 rounded': active }"
  >
    <SvgIcon class="w-4 h-4" :name="icon" color="#C2D2FB"></SvgIcon>
    <span class="text-sm ml-2 text-primary-100">{{ text }}</span>
  </div>
</template>
