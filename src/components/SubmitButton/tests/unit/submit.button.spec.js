import { mount } from '@vue/test-utils'
import SubmitButton from '@/components/SubmitButton/SubmitButton.vue'

const msg = 'Войти'
const factory = (propsData) => {
  return mount(SubmitButton, {
    propsData: {
      msg,
      ...propsData
    }
  })
}

describe('SubmitButton.vue', () => {
  it('Отображает сообщение для неавторизованного пользователя', () => {
    const wrapper = factory()

    expect(wrapper.find('span').text()).toBe('Не авторизован')
    expect(wrapper.find('button').text()).toBe('Войти')
  })

  it('Отображает сообщение для администратора', () => {
    const wrapper = factory({ isAdmin: true })

    expect(wrapper.find('span').text()).toBe('Привилегии администратора')
    expect(wrapper.find('button').text()).toBe('Войти')
  })
})
