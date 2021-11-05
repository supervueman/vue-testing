<template>
  <div class="hello">
    <h1 v-if="!error" class="message">{{ msg }}</h1>
    <h1 v-else class="warning">{{ noMessageText }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => ({
    noMessageText: 'No text'
  }),
  computed: {
    error () {
      return !this.msg
    }
  }
}
</script>
