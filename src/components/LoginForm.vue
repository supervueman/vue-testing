<template>
  <div class="card">
    <transition name="fade">
      <div
        v-if="alertData.alertMessage"
        class="alert"
        :class="{'alert-success': alertData.alertType === 'success', 'alert-error': alertData.alertType === 'error'}"
      >
        {{ alertData.alertMessage }}
      </div>
    </transition>
    <form class="form" @submit.prevent="submit">
      <input v-model="formData.email" placeholder="E-mail" name="email" id="email-input" class="input" />
      <input v-model="formData.password" placeholder="Password" name="password" type="password" id="password-input" class="input" />
      <button :disabled="isLoading" class="button">Login</button>
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
    },
    isLoading: false
  }),

  methods: {
    async login () {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 3000)
      })
    },
    async submit () {
      if (!this.validation()) {
        setTimeout(() => {
          this.alertData.alertMessage = ''
        }, 1000)
        return
      }

      this.isLoading = true

      try {
        this.alertData.alertType = 'success'
        this.alertData.alertMessage = 'Success'
        await this.login()
        this.$router.push('/about')
      } catch (err) {
        console.error(err.message)
      } finally {
        this.isLoading = false
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

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
