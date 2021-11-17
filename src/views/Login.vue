<template>
  <div class="page">
    <h1 class="pagetitle">{{ title }}</h1>
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'

export default {
  name: 'LoginPage',

  components: {
    LoginForm
  },

  data: () => ({
    title: 'Login'
  })
}
</script>
