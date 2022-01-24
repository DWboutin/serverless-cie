import React from 'react'
import { shallow, mount } from 'enzyme'

import { CardStat } from '../../Card'
import Icon from '../../Icon'

describe('CardStat', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <CardStat icon={<Icon />} title="Test title card">
        Test 1
      </CardStat>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with shadow', () => {
    const wrapper = shallow(
      <CardStat icon={<Icon />} title="Test title card" type="shadowed">
        Test 1
      </CardStat>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <CardStat icon={<Icon />} title="Test title card">
        Test 1
      </CardStat>
    )

    expect(wrapper.hasClass('to-card-stat')).toEqual(true)
  })
})
