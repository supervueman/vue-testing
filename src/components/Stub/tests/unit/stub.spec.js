import { mount } from '@vue/test-utils'
import ParentWithAPICallChild from '@/components/Stub/ParentWithAPICallChild.vue'
import ComponentWithAsyncCall from '@/components/Stub/ComponentWithAsyncCall.vue'

describe('ParentWithAPICallChild.vue', () => {
  it('отрисовывается с помощью mount и делает вызов API', () => {
    const wrapper = mount(ParentWithAPICallChild, {
      stubs: {
        ComponentWithAsyncCall: true
      }
    })

    // Or
    // const wrapper = shallowMount(ParentWithAPICallChild)

    expect(wrapper.findComponent(ComponentWithAsyncCall).exists()).toBe(true)
  })
})
