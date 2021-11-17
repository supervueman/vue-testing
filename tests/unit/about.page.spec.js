import { shallowMount } from '@vue/test-utils'
import About from '@/views/About.vue'

const factory = (data) => {
  return shallowMount(About, {
    ...data
  })
}

describe('About page', () => {
  it('Render data property', () => {
    const wrapper = factory({
      data: {
        title: 'About'
      }
    })

    expect(wrapper.find('.pagetitle').text()).toBe('About')
  })
})
