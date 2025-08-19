<!-- App.vue -->

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import ThemeToggle from "@/components/ThemeToggle.vue";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";

import HomeContent from "@/app/navigation/Home.vue"; 

const pages = [
  { name: "Getting Started", content: HomeContent },
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
</script>

<template>
  <div id="app">
    <nav class="flex items-center p-2 color-background color-foreground">
      <div class="flex-1 flex justify-start gap-5 p-1"></div>
      <div class="flex justify-center items-center gap-5 p-1">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem v-for="page in pages" :key="page.name">
              <NavigationMenuTrigger v-if="page.content">
                {{ page.name }}
              </NavigationMenuTrigger>

              <NavigationMenuContent v-if="page.content">
                <component :is="page.content" />
              </NavigationMenuContent>

              <NavigationMenuLink v-if="page.path">
                <RouterLink :to="page.path" class="text-sm font-medium">
                  {{ page.name }}
                </RouterLink>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div class="flex-1 flex justify-end gap-5 p-1">
        <ThemeToggle />
      </div>
    </nav>
    <RouterView />
  </div>
</template>
