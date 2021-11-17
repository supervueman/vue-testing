<template>
  <div class="card">
    <div
      v-if="alertData.alertMessage"
      class="alert"
      :class="{'alert-success': alertData.alertType === 'success', 'alert-error': alertData.alertType === 'error'}"
    >
      {{ alertData.alertMessage }}
    </div>
    <form class="form" @submit.prevent="login">
      <input v-model="formData.email" placeholder="E-mail" name="email" id="email-input" class="input" />
      <input v-model="formData.password" placeholder="Password" name="password" type="password" id="password-input" class="input" />
      <button class="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',

  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    alertData: {
      alertMessage: '',
      alertType: ''
    }
  }),

  methods: {
    login () {
      if (this.validation()) {
        setTimeout(() => {
          this.$router.push('/about')
        }, 3000)
      }
    },
    validation () {
      if (!this.formData.email) {
        this.alertData.alertType = 'error'
        this.alertData.alertMessage = 'Email is not valid'

        return false
      }

      if (!this.formData.password) {
        this.alertData.alertType = 'error'
        this.alertData.alertMessage = 'Password is not valid'

        return false
      }

      this.alertData.alertType = 'success'
      this.alertData.alertMessage = 'Success'

      return true
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  padding: 20px;
}
.alert {
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
  color: #fff;
  background-color: #2c3e50;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 10px;
  transition: border-color 0.5s, background-color 0.5s;
  &-success {
    border-color: #42b983;
    background-color: #42b983;
  }
  &-error {
    border-color: rgb(238, 46, 46);
    background-color: rgb(238, 46, 46);
  }
}
.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.input {
  width: 300px;
  padding: 10px 20px;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  margin-bottom: 20px;
  transition: border-color 0.5s;
  outline: none;
  &:hover {
    border-color: #2c3e50;
  }
}
.button {
  width: 200px;
  height: 50px;
color: #2c3e50;
  background-color: #fff;
  border: 1px solid #2c3e50;
  border-radius: 3px;
  transition: color 0.5s, background-color 0.5s;
  outline: none;
  &:hover {
    color: #fff;
    background-color: #2c3e50;
    border-color: #2c3e50;
    cursor: pointer;
  }
}
</style>
