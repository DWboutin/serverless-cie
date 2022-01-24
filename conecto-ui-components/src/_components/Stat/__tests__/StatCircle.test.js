import React from 'react'
import { shallow, mount } from 'enzyme'

import StatCircle from '../../Stat'
import Icon from '../../Icon'

describe('StatCircle', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <StatCircle
        icon={<Icon type="notification" />}
        title="Taux d'accceptation"
        notice="+ 6.5% / mois précédent"
        number={66}
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <StatCircle
        icon={<Icon type="notification" />}
        title="Taux d'accceptation"
        notice="+ 6.5% / mois précédent"
        number={66}
      />
    )

    expect(wrapper.hasClass('to-stat-circle')).toEqual(true)
  })
})
