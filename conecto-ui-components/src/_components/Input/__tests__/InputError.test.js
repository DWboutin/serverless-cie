import React from 'react'
import { shallow } from 'enzyme'

import { InputError } from '../../Input'

describe('InputError', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<InputError>Test Error</InputError>)

    expect(wrapper).toMatchSnapshot()
  })
})
