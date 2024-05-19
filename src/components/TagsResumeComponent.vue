<script setup lang="ts">
defineProps({
  skills: Array<string>,
  languages: Array<string>
})
</script>

<template>
  <section>
    <div class="card shadow border-0 rounded-4 mb-5">
      <div class="card-body p-5">
        <div class="mb-5">
          <div class="d-flex align-items-center mb-4">
            <div
              class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
            >
              <i class="bi bi-tools"></i>
            </div>
            <h3 class="fw-bolder mb-0">
              <span class="text-gradient d-inline">Skills Profissionais</span>
            </h3>
          </div>
          <div class="row row-cols-1 row-cols-md-3 mb-4">
            <div class="col mb-4" v-for="skill in skills" :key="skill">
              <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                {{ skill }}
              </div>
            </div>
          </div>
        </div>
        <div class="mb-0">
          <div class="d-flex align-items-center mb-4">
            <div
              class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 me-3"
            >
              <i class="bi bi-code-slash"></i>
            </div>
            <h3 class="fw-bolder mb-0"><span class="text-gradient d-inline">Linguagens</span></h3>
          </div>
          <div class="row row-cols-1 row-cols-md-3 mb-4">
            <div class="col mb-4" v-for="language in languages" :key="language">
              <div class="d-flex align-items-center bg-light rounded-4 p-3 h-100">
                {{ language }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
