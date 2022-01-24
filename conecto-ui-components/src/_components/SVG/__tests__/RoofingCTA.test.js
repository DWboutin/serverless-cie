import React from 'react'
import { shallow } from 'enzyme'

import { RoofingCTA } from '../../SVG'

describe('RoofingCTA', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<RoofingCTA />)

    expect(wrapper).toMatchSnapshot()
  })
})
