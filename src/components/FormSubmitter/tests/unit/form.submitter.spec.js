import { mount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter/FormSubmitter.vue'

describe('FormSubmitter', () => {
  it('Показывает сообщение после отправки', async () => {
    const wrapper = mount(FormSubmitter)

    await wrapper.find('[data-username]').setValue('Алиса')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.message').text())
      .toBe('Спасибо за ваше сообщение, Алиса.')
  })
})
