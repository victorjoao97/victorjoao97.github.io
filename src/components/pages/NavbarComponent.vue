<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
    <div class="container px-5">
      <RouterLink to="/" custom v-slot="{ href, navigate }">
        <a class="navbar-brand" :href="href" @click="navigate"
          ><span class="fw-bolder text-primary">Consultoria de Software</span></a
        >
      </RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 small fw-bolder">
          <li class="nav-item">
            <RouterLink to="/" custom v-slot="{ isActive, href, navigate }">
              <a class="nav-link" :href="href" @click="navigate" :class="{ active: isActive }"
                >Home</a
              >
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/resume" custom v-slot="{ isActive, href, navigate }">
              <a class="nav-link" :href="href" @click="navigate" :class="{ active: isActive }"
                >Resumo</a
              >
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/projects" custom v-slot="{ isActive, href, navigate }">
              <a class="nav-link" :href="href" @click="navigate" :class="{ active: isActive }"
                >Projetos</a
              >
            </RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/contact" custom v-slot="{ isActive, href, navigate }">
              <a class="nav-link" :href="href" @click="navigate" :class="{ active: isActive }"
                >Contato</a
              >
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
