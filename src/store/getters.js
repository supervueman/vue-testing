export default {
  poodles: (state) => {
    return state.dogs.filter(dog => dog.breed === 'пудель')
  },

  poodlesByAge: (state, getters) => (age) => {
    return getters.poodles.filter(dog => dog.age === age)
  }
}
