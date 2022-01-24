import React from 'react'
import { shallow, mount } from 'enzyme'

import Card from '../../Card'
import Icon from '../../Icon'

describe('Card', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Card>Test 1</Card>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with an icon', () => {
    const wrapper = shallow(
      <Card withIcon icon={<Icon type="colored-flag" />}>
        Test 1
      </Card>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(<Card>Test 1</Card>)

    expect(wrapper.hasClass('to-card')).toEqual(true)
  })
})
