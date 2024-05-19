<script setup lang="ts">
import OthersContentComponent from '@/components/OthersContentComponent.vue'
import ProjectCardComponent from '@/components/ProjectCardComponent.vue'
import { Project } from '@/interfaces/types'
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const projects = ref<Project[]>([
  {
    title: 'Project Name 1',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!',
    imageUrl: 'https://dummyimage.com/300x400/343a40/6c757d'
  },
  {
    title: 'Project Name 2',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius at enim eum illum aperiam placeat esse? Mollitia omnis minima saepe recusandae libero, iste ad asperiores! Explicabo commodi quo itaque! Ipsam!',
    imageUrl: 'https://dummyimage.com/300x400/343a40/6c757d'
  }
])
</script>

<template>
  <OthersContentComponent header-title="Projetos">
    <div class="row gx-5 justify-content-center">
      <div class="col-lg-11 col-xl-9 col-xxl-8">
        <ProjectCardComponent v-for="project in projects" :key="project.title" :project="project" />
      </div>
    </div>
  </OthersContentComponent>
  <section class="py-5 bg-gradient-primary-to-secondary text-white">
    <div class="container px-5 my-5">
      <div class="text-center">
        <h2 class="display-4 fw-bolder mb-4">Vamos construir algo juntos</h2>
        <RouterLink to="/contact" custom v-slot="{ href, navigate }">
          <a
            class="btn btn-outline-light btn-lg px-5 py-3 fs-6 fw-bolder"
            :href="href"
            @click="navigate"
            >Entre em contato comigo</a
          >
        </RouterLink>
      </div>
    </div>
  </section>
</template>
