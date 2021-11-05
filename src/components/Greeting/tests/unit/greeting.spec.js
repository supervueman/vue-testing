import { mount } from '@vue/test-utils'
import Greeting from '@/components/Greeting/Greeting.vue'

describe('Greeting.vue', () => {
  it('отрисовывает приветствие', () => {
    const wrapper = mount(Greeting)
    expect(wrapper.text()).toMatch('Vue и TDD')
  })
})
