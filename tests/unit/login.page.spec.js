import { mount } from '@vue/test-utils'
import Login from '@/views/Login.vue'
import LoginForm from '@/components/LoginForm.vue'

const factory = (data) => {
  return mount(Login, {
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

  it('Render LoginForm component', () => {
    const wrapper = factory({
      data: {
        title: 'Login'
      }
    })

    expect(wrapper.findComponent(LoginForm).exists()).toBe(true)
  })
})
