import { shallowMount } from '@vue/test-utils'
import TopPage from '@/components/TopPage.vue'

describe('TopPage.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(TopPage, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
