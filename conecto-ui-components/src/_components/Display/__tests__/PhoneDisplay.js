import React from 'react'
import { shallow } from 'enzyme'

import { PhoneDisplay } from '../../Display'
import Logo from '../../Logo'
import Button from '../../Button'
import { FormattedMessage } from 'react-intl'
import { RoofingPhoneBg } from '../../SVG'

global.console = {
  error: jest.fn(),
}

describe('PhoneDisplay', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <PhoneDisplay
        logo={
          <Logo type="roofing" suffix={<FormattedMessage id="contractor" />} />
        }
        button={<Button type="bordered">question@contect.ca</Button>}
        bottomSvgComponent={<RoofingPhoneBg />}
      >
        test
      </PhoneDisplay>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should console.error when not passing a logo', () => {
    shallow(
      <PhoneDisplay
        button={<Button type="bordered">question@contect.ca</Button>}
        bottomSvgComponent={<RoofingPhoneBg />}
      >
        test
      </PhoneDisplay>
    )

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a button', () => {
    shallow(
      <PhoneDisplay
        logo={
          <Logo type="roofing" suffix={<FormattedMessage id="contractor" />} />
        }
        bottomSvgComponent={<RoofingPhoneBg />}
      >
        test
      </PhoneDisplay>
    )

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a bottomSvgComponent', () => {
    shallow(
      <PhoneDisplay
        logo={
          <Logo type="roofing" suffix={<FormattedMessage id="contractor" />} />
        }
        button={<Button type="bordered">question@contect.ca</Button>}
      >
        test
      </PhoneDisplay>
    )

    expect(global.console.error).toBeCalled()
  })
})
