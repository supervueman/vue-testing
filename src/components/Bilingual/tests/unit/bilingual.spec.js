import { mount } from '@vue/test-utils'
import Bilingual from '@/components/Bilingual/Bilingual.vue'

describe('Bilingual.vue', () => {
  it('Успешно отрисовывается', () => {
    const wrapper = mount(Bilingual)

    console.log(wrapper.html())
  })
})
