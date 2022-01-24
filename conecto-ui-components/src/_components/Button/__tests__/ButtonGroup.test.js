import React from 'react'
import { shallow } from 'enzyme'

import Button, { ButtonGroup } from '../../Button'

global.console = {
  error: jest.fn(),
}

describe('ButtonGroup', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ButtonGroup>
        <Button>Test1</Button>
        <Button>Test2</Button>
      </ButtonGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <ButtonGroup>
        <Button>Test1</Button>
        <Button>Test2</Button>
      </ButtonGroup>
    )

    expect(wrapper.instance().classesPrefix).toEqual('to-btn-group')
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
  })

  it('should console.error when not passing children', () => {
    shallow(<ButtonGroup />)

    expect(global.console.error).toBeCalled()
  })
})
