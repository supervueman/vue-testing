import { mount } from '@vue/test-utils'
import FormSubmitter from '@/components/FormSubmitter/FormSubmitter.vue'

let url = ''
let data = ''

const mockHttp = {
  get: (_url, _data) => {
    return new Promise((resolve, reject) => {
      url = _url
      data = _data
      resolve()
    })
  }
}

describe('FormSubmitter', () => {
  it('Показывает сообщение после отправки', async () => {
    const wrapper = mount(FormSubmitter, {
      mocks: {
        $http: mockHttp
      }
    })

    await wrapper.find('[data-username]').setValue('Алиса')
    await wrapper.find('form').trigger('submit.prevent')

    expect(wrapper.find('.message').text())
      .toBe('Спасибо за ваше сообщение, Алиса.')

    expect(url).toBe('/api/v1/register')
    expect(data).toEqual({ username: 'Алиса' })
  })
})
