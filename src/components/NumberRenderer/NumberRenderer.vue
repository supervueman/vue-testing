<template>
  <div>
    <span class="even">{{ numbers }}</span>
    <span class="odd">{{ odds }}</span>
  </div>
</template>

<script>
export default {
  name: 'NumberRenderer',

  props: {
    even: {
      type: Boolean,
      required: true
    }
  },

  computed: {
    numbers () {
      const evens = []
      const odds = []

      for (let i = 1; i < 10; i++) {
        if (i % 2 === 0) {
          evens.push(i)
        } else {
          odds.push(i)
        }
      }

      return this.even === true ? evens.join(', ') : odds.join(', ')
    },

    odds () {
      const odds = []

      for (let i = 1; i < 10; i++) {
        if (i % 2 !== 0) {
          odds.push(i)
        }
      }

      return odds.join(', ')
    }
  }
}
</script>
