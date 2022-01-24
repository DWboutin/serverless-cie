import React from 'react'
import { shallow, mount } from 'enzyme'

import { StatTwoNumbers } from '../../Stat'
import Icon from '../../Icon'

describe('StatTwoNumbers', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <StatTwoNumbers
        icon={<Icon type="notification" />}
        title="Taux d'accceptation"
        notice="+ 6.5% / mois précédent"
        number1={45}
        suffix1="%"
        disabled1
        notice1="Courriel"
        number2={66}
        suffix2="h"
        notice2="Téléphone"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <StatTwoNumbers
        icon={<Icon type="notification" />}
        title="Taux d'accceptation"
        notice="+ 6.5% / mois précédent"
        number1={45}
        suffix1="%"
        disabled1
        notice1="Courriel"
        number2={66}
        suffix2="h"
        notice2="Téléphone"
      />
    )

    expect(wrapper.hasClass('to-stat-two-numbers')).toEqual(true)
  })
})
