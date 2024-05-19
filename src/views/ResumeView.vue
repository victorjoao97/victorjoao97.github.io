<script setup lang="ts">
import ExperienceCardComponent from '@/components/ExperienceCardComponent.vue'
import EducationComponent from '@/components/EducationCardComponent.vue'
import TagsResumeComponent from '@/components/TagsResumeComponent.vue'
import OthersContentComponent from '@/components/OthersContentComponent.vue'
import { Education, Experience } from '@/interfaces/types'
import { ref } from 'vue'

const experiences = ref<Experience[]>([
  {
    startDate: new Date(2019),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.',
    title: 'Web Developer',
    location: 'Stark Industries Los Angeles, CA'
  },
  {
    startDate: new Date(2019),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.',
    title: 'Web Developer',
    location: 'Stark Industries Los Angeles, CA'
  },
  {
    startDate: new Date(2019),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.',
    title: 'Pintor',
    location: 'Fronteira'
  }
])
const educations = ref<Education[]>([
  {
    startDate: new Date(2015, 1, 1),
    endDate: new Date(2017, 1, 1),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.',
    title: "Master's Web Development",
    location: 'Fairfield, NY',
    name: 'Barnet College'
  },
  {
    startDate: new Date(2015, 1, 1),
    endDate: new Date(2017, 1, 1),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus laudantium, voluptatem quis repellendus eaque sit animi illo ipsam amet officiis corporis sed aliquam non voluptate corrupti excepturi maxime porro fuga.',
    title: "Master's Web Development",
    location: 'Fairfield, NY',
    name: 'Barnet College'
  }
])
const skills = ref([
  'SEO/SEM Marketing',
  'Statistical Analysis',
  'Web Development',
  'Network Security',
  'Adobe Software Suite',
  'User Interface Design'
])
const languages = ref(['HTML', 'CSS', 'JavaScript', 'Python', 'Ruby', 'Node.js'])
</script>

<template>
  <OthersContentComponent header-title="Currículo">
    <div class="row gx-5 justify-content-center">
      <div class="col-lg-11 col-xl-9 col-xxl-8">
        <section>
          <div class="d-flex align-items-center justify-content-between mb-4">
            <h2 class="text-primary fw-bolder mb-0">Experiência</h2>
            <a
              class="btn btn-primary px-4 py-3"
              href="https://github.com/victorjoao97/certificates/blob/50ee41220db3721a396cb39c061c9384ba53036d/public-curriculo-joao-victor-nascimento.pdf?raw=true"
            >
              <div class="d-inline-block bi bi-download me-2"></div>
              Baixar currículo
            </a>
          </div>
          <ExperienceCardComponent
            v-for="experience in experiences"
            :key="experience.id"
            :experience="experience"
          />
        </section>
        <section>
          <h2 class="text-secondary fw-bolder mb-4">Educação</h2>
          <EducationComponent
            v-for="education in educations"
            :key="education.id"
            :education="education"
          />
        </section>
        <div class="pb-5"></div>
        <TagsResumeComponent :skills="skills" :languages="languages" />
      </div>
    </div>
  </OthersContentComponent>
</template>
