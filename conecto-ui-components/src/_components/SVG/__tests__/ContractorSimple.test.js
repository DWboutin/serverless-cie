import React from 'react'
import { shallow } from 'enzyme'

import { ContractorSimple } from '../../SVG'

describe('ContractorSimple', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<ContractorSimple />)

    expect(wrapper).toMatchSnapshot()
  })
})
