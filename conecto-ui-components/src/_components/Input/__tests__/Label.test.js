import React from 'react'
import { shallow } from 'enzyme'

import { Label } from '../../Input'

describe('Label', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <Label htmlFor="test-input" className="to-input-label">
        Test Label
      </Label>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
