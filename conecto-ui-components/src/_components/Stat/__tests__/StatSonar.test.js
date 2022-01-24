import React from 'react'
import { shallow, mount } from 'enzyme'

import { StatSonar } from '../../Stat'
import Icon from '../../Icon'

describe('StatTwoNumbers', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <StatSonar
        icon={<Icon type="notification" />}
        title="Taux d'accceptation"
        notice="+ 6.5% / mois précédent"
        number={60}
        suffix="h"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <StatSonar
        icon={<Icon type="notification" />}
        title="Taux d'accceptation"
        notice="+ 6.5% / mois précédent"
        number={60}
        suffix="h"
      />
    )

    expect(wrapper.hasClass('to-stat-sonar')).toEqual(true)
  })
})
