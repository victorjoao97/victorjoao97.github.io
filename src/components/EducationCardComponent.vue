<script setup lang="ts">
import { Education } from '@/interfaces/types'

defineProps({
  education: {
    type: Education
  }
})
</script>
<template>
  <div class="card shadow border-0 rounded-4 mb-5">
    <div class="card-body p-5">
      <div class="row align-items-center gx-5">
        <div class="col text-center text-lg-start mb-4 mb-lg-0">
          <div class="bg-light p-4 rounded-4">
            <div class="text-secondary fw-bolder mb-2">
              {{ education?.startDate.getFullYear() }} -
              {{ education?.endDate?.getFullYear() ?? 'Present' }}
            </div>
            <div class="mb-2">
              <div class="small fw-bolder">{{ education?.name }}</div>
              <div class="small text-muted">{{ education?.location }}</div>
            </div>
            <div class="fst-italic">
              <div class="small text-muted">{{ education?.title }}</div>
            </div>
          </div>
        </div>
        <div class="col-lg-8">
          <div>
            {{ education?.description }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
