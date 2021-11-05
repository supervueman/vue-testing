import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

const factory = (values = {}, props = {}) => {
  return shallowMount(HelloWorld, {
    propsData: {
      ...props
    },
    data () {
      return {
        ...values
      }
    }
  })
}

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Hello world'
    const wrapper = factory({}, { msg })

    expect(wrapper.find('.message').text()).toMatch(msg)
  })

  it('renders props.msg when no passed', () => {
    const wrapper = factory()

    expect(wrapper.find('.warning').text()).toEqual('No text')
  })
})
