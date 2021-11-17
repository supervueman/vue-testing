import { shallowMount } from '@vue/test-utils'
import Login from '@/views/Login.vue'

const factory = (data) => {
  return shallowMount(Login, {
    ...data
  })
}

describe('Logion page', () => {
  it('Render data property', () => {
    const wrapper = factory({
      data: {
        title: 'Login'
      }
    })

    expect(wrapper.find('.pagetitle').text()).toBe('Login')
  })
})
