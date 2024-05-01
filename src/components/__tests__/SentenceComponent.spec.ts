import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SentenceComponent from '../SentenceComponent.vue'

describe('SentenceComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(SentenceComponent)
    expect(wrapper.text()).toBeTypeOf("string")
  })
})
