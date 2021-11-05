import Emitter from '@/components/Emitter/Emitter.vue'
import { mount } from '@vue/test-utils'

describe('Emitter.vue', () => {
  it('Порождает событие с двумя аргументами', () => {
    const wrapper = mount(Emitter)

    wrapper.vm.emitEvent()

    expect(wrapper.emitted().myEvent[0]).toEqual(['name', 'password'])
  })
})
