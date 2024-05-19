<script setup lang="ts">
import { ref } from 'vue'
import { Field, ErrorMessage, useForm } from 'vee-validate'
import * as yup from 'yup'

type ContactFields = {
  name: string
  email: string
  phone: string
  message: string
}

const submitErrorMessage = ref<boolean | undefined>()

const { handleSubmit, handleReset } = useForm<ContactFields>({
  validationSchema: yup.object({
    name: yup.string().required().min(5),
    email: yup.string().email().required(),
    phone: yup.string().required().min(10),
    message: yup.string().required().min(10)
  })
})
const onSubmit = handleSubmit(async (values) => {
  try {
    const response = await fetch('victorjoao97.github.io/contact', {
      method: 'post',
      body: JSON.stringify(values)
    })
    if (response.status !== 200) throw new Error('Invalid request')
    submitErrorMessage.value = false
    handleReset()
  } catch (error) {
    submitErrorMessage.value = true
  }
})
</script>

<template>
  <section class="py-5">
    <div class="container px-5">
      <!-- Contact form-->
      <div class="rounded-4 py-5 px-4 px-md-5">
        <div class="text-center mb-5">
          <div
            class="feature bg-primary bg-gradient-primary-to-secondary text-white rounded-3 mb-3"
          >
            <i class="bi bi-envelope"></i>
          </div>
          <h1 class="fw-bolder">Entre em contato</h1>
          <p class="lead fw-normal text-muted mb-0">Vamos trabalhar juntos!</p>
        </div>
        <div class="row gx-5 justify-content-center">
          <div class="col-lg-8 col-xl-6">
            <div class="form">
              <!-- Name input-->
              <div class="form-floating mb-3">
                <Field
                  name="name"
                  class="form-control"
                  type="text"
                  placeholder="Digite seu nome..."
                />
                <label for="name">Nome completo</label>
                <ErrorMessage class="text-danger" name="name" />
              </div>
              <!-- Email address input-->
              <div class="form-floating mb-3">
                <Field
                  class="form-control"
                  name="email"
                  type="email"
                  placeholder="nome@exemplo.com"
                />
                <label for="email">E-mail</label>
                <ErrorMessage class="text-danger" name="email" />
              </div>
              <!-- Phone number input-->
              <div class="form-floating mb-3">
                <Field class="form-control" name="phone" type="tel" placeholder="(17) 49456-7890" />
                <label for="phone">Telefone</label>
                <ErrorMessage class="text-danger" name="phone" />
              </div>
              <!-- Message input-->
              <div class="form-floating mb-3">
                <Field
                  class="form-control"
                  name="message"
                  as="textarea"
                  placeholder="Digite sua mensagem aqui..."
                  style="height: 10rem; resize: none"
                />
                <label for="message">Mensagem</label>
                <ErrorMessage class="text-danger" name="message" />
              </div>
              <!-- Submit success message-->
              <div v-if="submitErrorMessage === false">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Formulário enviado com sucesso!</div>
                </div>
              </div>
              <!-- Submit error message-->
              <div v-if="submitErrorMessage">
                <div class="text-center text-danger mb-3">Erro ao enviar formulário!</div>
              </div>
              <!-- Submit Button-->
              <div class="d-grid">
                <button class="btn btn-primary btn-lg" type="button" @click="onSubmit">
                  Enviar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
