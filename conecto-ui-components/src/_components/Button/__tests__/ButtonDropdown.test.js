import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link } from 'gatsby'

import Button, { ButtonDropdown } from '../../Button'
import Icon from '../../Icon'

global.console = {
  error: jest.fn(),
  log: console.log,
}

describe('ButtonDropdown', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ButtonDropdown
        links={[<Link to="/test">Test 1</Link>, <Link to="/test">Test 2</Link>]}
      >
        Test 1234
      </ButtonDropdown>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot without links', () => {
    const wrapper = shallow(
      <ButtonDropdown links={[]}>Test 1234</ButtonDropdown>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
