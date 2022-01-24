import React from 'react'
import { shallow } from 'enzyme'

import { PhoneShape } from '../../SVG'

describe('PhoneShape', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<PhoneShape />)

    expect(wrapper).toMatchSnapshot()
  })
})
