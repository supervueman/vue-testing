import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

const factory = (data) => {
  return shallowMount(LoginForm, {
    ...data
  })
}

describe('Login form', () => {
  const $router = {
    push: jest.fn()
  }

  const login = jest.fn()

  it('Test email validation', async () => {
    const wrapper = factory({})

    await wrapper.find('input[name="password"]').setValue('password')
    await wrapper.find('.form').trigger('submit.prevent')

    expect(wrapper.find('.alert').text()).toBe('Email is not valid')
    expect(wrapper.find('.alert').classes()).toContain('alert-error')
  })

  it('Test password validation', async () => {
    const wrapper = factory({})

    await wrapper.find('input[name="email"]').setValue('supervueman@gmail.com')
    await wrapper.find('.form').trigger('submit.prevent')

    expect(wrapper.find('.alert').text()).toBe('Password is not valid')
    expect(wrapper.find('.alert').classes()).toContain('alert-error')
  })

  it('Test form', async () => {
    const wrapper = factory({
      mocks: {
        $router
      },
      methods: {
        login
      }
    })

    await wrapper.find('input[name="email"]').setValue('supervueman@gmail.com')
    await wrapper.find('input[name="password"]').setValue('password')
    await wrapper.find('.form').trigger('submit.prevent')

    expect(wrapper.find('button').attributes('disabled')).toBe('disabled')

    expect(wrapper.find('.alert').text()).toBe('Success')
    expect(wrapper.find('.alert').classes()).toContain('alert-success')

    expect(login).toHaveBeenCalled()
    expect($router.push).toHaveBeenCalledWith('/about')
  })
})
