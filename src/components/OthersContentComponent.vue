<script setup lang="ts">
defineProps({
  headerTitle: String
})
</script>

<template>
  <section class="bg-light">
    <div class="container p-5">
      <div class="text-center mb-5">
        <h1 class="display-5 fw-bolder mb-0">
          <span class="text-gradient d-inline">{{ headerTitle }}</span>
        </h1>
      </div>
      <slot></slot>
    </div>
  </section>
</template>
