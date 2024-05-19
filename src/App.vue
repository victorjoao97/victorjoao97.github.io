<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavbarComponent from './components/pages/NavbarComponent.vue'
import FooterComponent from './components/pages/FooterComponent.vue'
</script>

<template>
  <header>
    <NavbarComponent />
  </header>

  <RouterView />

  <FooterComponent />
</template>

<style scoped></style>
