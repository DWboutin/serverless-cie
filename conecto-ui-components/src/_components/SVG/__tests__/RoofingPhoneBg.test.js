import React from 'react'
import { shallow } from 'enzyme'

import { RoofingPhoneBg } from '../../SVG'

describe('RoofingPhoneBg', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<RoofingPhoneBg />)

    expect(wrapper).toMatchSnapshot()
  })
})
