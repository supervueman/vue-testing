import { mount, config } from '@vue/test-utils'
import Bilingual from '@/components/Bilingual/Bilingual.vue'
import translations from '../../translations.js'

const locale = 'en'

config.mocks.$t = (msg) => translations[locale][msg]

describe('Bilingual.vue', () => {
  it('Успешно отрисовывается', () => {
    const wrapper = mount(Bilingual)

    console.log(wrapper.html())
  })
})
