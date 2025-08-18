<!-- App.vue -->
<script setup>
import { RouterLink, RouterView } from "vue-router";
import ThemeToggle from "@/components/ThemeToggle.vue";
</script>

<template>
  <div id="app">
    <nav class="flex items-center gap-5 p-5 color-background text-white">
      <ThemeToggle />
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>
