import React from 'react'
import { shallow, mount } from 'enzyme'

import { CTACard } from '../../Card'
import Button from '../../Button'
import { ContractorSimple } from '../../SVG'

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <CTACard
        button={<Button>My button here</Button>}
        image={<ContractorSimple />}
        withOverlap
      >
        Test content
      </CTACard>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
