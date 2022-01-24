import React from 'react'
import { shallow } from 'enzyme'

import { Checkbox, CheckboxGroup } from '../../Input'

global.console = {
  error: jest.fn(),
}

describe('CheckboxGroup', () => {
  beforeEach(() => {
    global.console.error.mockClear()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(
      <CheckboxGroup label="Checkbox group" error="Group error">
        <Checkbox id="testField" name="testField" label="Test field" checked />
        <Checkbox id="testField2" name="testField2" label="Test field 2" />
      </CheckboxGroup>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should console.error when no label is set', () => {
    shallow(
      <CheckboxGroup error="Group error">
        <Checkbox id="testField" name="testField" label="Test field" checked />
        <Checkbox id="testField2" name="testField2" label="Test field 2" />
      </CheckboxGroup>
    )

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when no children are set', () => {
    shallow(<CheckboxGroup label="Checkbox group" error="Group error" />)

    expect(global.console.error).toBeCalled()
  })
})
