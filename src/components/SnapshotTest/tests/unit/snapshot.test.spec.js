import { mount } from '@vue/test-utils'
import SnapshotTest from '@/components/SnapshotTest/SnapshotTest.vue'

describe('SnapshotTest', () => {
  it('Тест снимками', () => {
    const wrapper = mount(SnapshotTest)

    expect(wrapper.element).toMatchSnapshot()
  })
})
