import { shallowMount } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'

const factory = (data) => {
  return shallowMount(LoginForm, {
    ...data
  })
}

describe('Login form', () => {
  it('Test email validation', async () => {
    const wrapper = factory({})

    await wrapper.find('input[name="password"]').setValue('password')
    await wrapper.find('.form').trigger('submit.prevent')

    expect(wrapper.find('.alert').text()).toBe('Email is not valid')
  })
})
