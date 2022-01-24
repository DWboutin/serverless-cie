import React from 'react'
import { shallow } from 'enzyme'

import CheckPoint from '../../Display'

global.console = {
  error: jest.fn(),
}

describe('CheckPoint', () => {
  it('should match snapshot with the icon by default', () => {
    const wrapper = shallow(<CheckPoint>Test text here</CheckPoint>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with the conecto icon', () => {
    const wrapper = shallow(
      <CheckPoint iconType="conecto">Test text here</CheckPoint>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should render the text correctly', () => {
    const wrapper = shallow(
      <CheckPoint iconType="conecto">Test text here</CheckPoint>
    )

    expect(wrapper.find('.text').text()).toEqual('Test text here')
  })

  it('should console.error when not passing a good value to iconType prop', () => {
    shallow(<CheckPoint iconType="notGood">Test text here</CheckPoint>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a string to children', () => {
    shallow(
      <CheckPoint iconType="notGood">
        <span>123</span>
      </CheckPoint>
    )

    expect(global.console.error).toBeCalled()
  })
})
