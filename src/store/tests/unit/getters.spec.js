import getters from '../../getters.js'

const dogs = [
  { name: 'Лаки', breed: 'пудель', age: 1 },
  { name: 'Пёсик', breed: 'далматинец', age: 2 },
  { name: 'Блэки', breed: 'пудель', age: 4 }
]
const state = { dogs }

describe('poodles', () => {
  it('возвращает пуделей', () => {
    const actual = getters.poodles(state)

    expect(actual).toEqual([dogs[0], dogs[2]])
  })

  it('возвращет пуделей по возрасту', () => {
    const poodles = [dogs[0], dogs[2]]
    const actual = getters.poodlesByAge(state, { poodles })(1)

    expect(actual).toEqual([dogs[0]])
  })
})
