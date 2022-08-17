<script setup>
import NavItem from "./NavItem.vue";
const NAV_ITEMS = [
  {
    icon: "home",
    text: "Home",
    route: () => {},
  },
  {
    icon: "work",
    text: "Experience",
    route: () => {},
  },
  {
    icon: "note",
    text: "Note",
    route: () => {},
  },
];

const PROJECT_ITEMS = [
  {
    icon: "wellcome",
    text: "Wellcome",
    route: () => {},
  },
  {
    icon: "yui-pai",
    text: "悅排賽",
    route: () => {},
  },
  {
    icon: "ct",
    text: "Label System",
    route: () => {},
  },
  {
    icon: "dna",
    text: "GeneBox 後臺系統",
    route: () => {},
  },
];
</script>

<template>
  <div class="h-screen w-1/4 max-w-[250px] bg-dark-700 px-2.5 py-5">
    <div class="text-white px-[30px] py-5 text-xl">Wen You</div>
    <template v-for="({ icon, text, route }, key) in NAV_ITEMS" :key="key">
      <NavItem :icon="icon" :text="text" :route="route" />
    </template>

    <div class="px-[30px] mt-4 mb-2 text-xs text-primary-100 opacity-50">Projects</div>
    <template v-for="({ icon, text, route }, key) in PROJECT_ITEMS" :key="key">
      <NavItem :icon="icon" :text="text" :route="route" />
    </template>
  </div>
</template>
