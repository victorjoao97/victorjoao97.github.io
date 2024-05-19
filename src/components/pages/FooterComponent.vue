<script setup lang="ts">
const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="bg-white py-4 mt-auto">
    <div class="container px-5">
      <div class="row align-items-center justify-content-between flex-column flex-sm-row">
        <div class="col-auto">
          <div class="small m-0">
            Copyright &copy; João Consultoria de Software & DevOps {{ currentYear }}
          </div>
        </div>
        <div class="col-auto">
          <a class="small" href="#!">Privacy</a>
          <span class="mx-1">&middot;</span>
          <a class="small" href="#!">Terms</a>
          <span class="mx-1">&middot;</span>
          <RouterLink to="/contact" custom v-slot="{ href, navigate }">
            <a class="small" :href="href" @click="navigate">Contato</a>
          </RouterLink>
        </div>
      </div>
    </div>
  </footer>
</template>
