<script setup lang="ts">
import { Project } from '@/interfaces/types'

defineProps({
  project: {
    type: Project
  }
})
</script>
<template>
  <div class="card overflow-hidden shadow rounded-4 border-0 mb-5">
    <div class="card-body p-0">
      <div class="d-flex align-items-center">
        <div class="p-5">
          <h2 class="fw-bolder">{{ project?.title }}</h2>
          <p>
            {{ project?.description }}
          </p>
        </div>
        <img
          class="img-fluid"
          :src="project?.imageUrl"
          :alt="'Image from project name ' + project?.title"
        />
      </div>
    </div>
  </div>
</template>
