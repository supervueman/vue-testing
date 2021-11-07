import Vuex from 'vuex'
import { mount, createLocalVue } from '@vue/test-utils'
import ComponentWithVuex from '@/components/ComponentWithGetters/ComponentWithGetters.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    username: 'Алиса'
  }
})

describe('ComponentWithVuex', () => {
  it('отрисовывает имя пользователя из настоящего Vuex хранилища', () => {
    const wrapper = mount(ComponentWithVuex, {
      store,
      localVue
    })

    expect(wrapper.find('.username').text()).toBe('Алиса')
  })

  it('отрисовывает имя пользователя, используя замоканное хранилище', () => {
    const wrapper = mount(ComponentWithVuex, {
      mocks: {
        $store: {
          state: { username: 'Алиса' }
        }
      }
    })

    expect(wrapper.find('.username').text()).toBe('Алиса')
  })
})
