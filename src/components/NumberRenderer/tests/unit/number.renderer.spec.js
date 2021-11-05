import { mount } from '@vue/test-utils'
import NumberRenderer from '@/components/NumberRenderer/NumberRenderer.vue'

describe('NumberRenderer', () => {
  it('выводит чётные числа', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
        even: true
      }
    })

    expect(wrapper.find('.even').text()).toBe('2, 4, 6, 8')
  })

  it('выводит чётные числа', () => {
    const wrapper = mount(NumberRenderer, {
      propsData: {
      }
    })

    expect(wrapper.find('.odd').text()).toBe('1, 3, 5, 7, 9')
  })

  it('выводит нечётные числа', () => {
    const localThis = { even: false }

    expect(NumberRenderer.computed.numbers.call(localThis)).toBe('1, 3, 5, 7, 9')
  })
})
