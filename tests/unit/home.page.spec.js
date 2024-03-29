import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'

const factory = (data) => {
  return shallowMount(Home, {
    ...data
  })
}

describe('Home page', () => {
  it('Render data property', () => {
    const wrapper = factory({
      data: {
        title: 'Home'
      }
    })

    expect(wrapper.find('.pagetitle').text()).toBe('Home')
  })
})
