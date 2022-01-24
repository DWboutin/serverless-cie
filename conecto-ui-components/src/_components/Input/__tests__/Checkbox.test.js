import React from 'react'
import { shallow, mount } from 'enzyme'

import { Checkbox } from '../../Input'

global.console = {
  error: jest.fn(),
}

const onChange = jest.fn()
const onBlur = jest.fn()

describe('Checkbox', () => {
  beforeEach(() => {
    onChange.mockClear()
    onBlur.mockClear()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with checked prop', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" checked />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )

    expect(wrapper.instance().classesPrefix).toEqual('to-checkbox')
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
  })

  it('should have the "checked" class when passed as prop', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" checked />
    )

    expect(wrapper.hasClass('checked')).toEqual(true)
  })

  it('should have the "checked" class when onChange is triggered', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )
    const event = { target: { name: 'keyUp', checked: true } }

    wrapper
      .find('input')
      .last()
      .simulate('change', event)

    expect(wrapper.hasClass('checked')).toEqual(true)
  })

  it('should have the "focused" class when passed as prop', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" focused />
    )

    expect(wrapper.hasClass('focused')).toEqual(true)
  })

  it('should have the "focused" class when onChange is triggered', () => {
    const wrapper = shallow(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )

    wrapper
      .find('input')
      .last()
      .simulate('focus')

    expect(wrapper.hasClass('focused')).toEqual(true)
  })

  it('should have the "checked" class when pressing "Enter"', async () => {
    const wrapper = mount(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )

    wrapper
      .find('input')
      .last()
      .simulate('focus')

    wrapper
      .find('input')
      .last()
      .simulate('keyDown', { keyCode: 13 })

    expect(wrapper.render().hasClass('checked')).toEqual(true)

    wrapper.unmount()
  })

  it('should not have the "checked" class when pressing another key than "Enter"', async () => {
    const wrapper = mount(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )

    wrapper
      .find('input')
      .last()
      .simulate('focus')

    wrapper
      .find('input')
      .last()
      .simulate('keyDown', { keyCode: 12 })

    expect(wrapper.render().hasClass('checked')).toEqual(false)

    wrapper.unmount()
  })

  it('should remove the "checked" class when the component have "checked" prop and pressed "Enter" for the first time', async () => {
    const wrapper = mount(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" checked />
    )

    expect(wrapper.render().hasClass('checked')).toEqual(true)

    wrapper
      .find('input')
      .last()
      .simulate('focus')

    wrapper
      .find('input')
      .last()
      .simulate('keyDown', { keyCode: 13 })

    expect(wrapper.render().hasClass('checked')).toEqual(false)

    wrapper.unmount()
  })

  it('should call the "onChange" prop when onChange event', async () => {
    const wrapper = mount(
      <Checkbox
        id="test-checkbox"
        name="test-checkbox"
        label="test"
        onChange={onChange}
      />
    )

    wrapper
      .find('input')
      .last()
      .simulate('change')

    expect(onChange).toBeCalled()

    wrapper.unmount()
  })

  it('should set state "focus" to false when onBlur', async () => {
    const wrapper = mount(
      <Checkbox id="test-checkbox" name="test-checkbox" label="test" />
    )

    wrapper
      .find('input')
      .last()
      .simulate('focus')

    expect(wrapper.render().hasClass('focused')).toEqual(true)

    wrapper
      .find('input')
      .last()
      .simulate('blur')

    expect(wrapper.render().hasClass('focused')).toEqual(false)

    wrapper.unmount()
  })

  it('should console.error when no label is set', () => {
    shallow(<Checkbox id="test-checkbox" name="test-checkbox" />)

    expect(global.console.error).toBeCalled()
  })

  it('should render a string label correctly', () => {
    const wrapper = mount(
      <Checkbox id="test-input" name="test-input" label="Test label" />
    )

    expect(wrapper.find('.to-checkbox-label').length).toEqual(1)
    expect(wrapper.find('.to-checkbox-label').text()).toEqual('Test label')

    wrapper.unmount()
  })

  it('should render a component label correctly', () => {
    const wrapper = shallow(
      <Checkbox id="test-input" name="test-input" label={<span>Test</span>} />
    )

    expect(wrapper.find('.to-checkbox-label').length).toEqual(1)
    expect(wrapper.find('.to-checkbox-label').find('span').length).toEqual(1)
    expect(
      wrapper
        .find('.to-checkbox-label')
        .find('span')
        .text()
    ).toEqual('Test')
    expect(wrapper.find('label').getElement().props.htmlFor).toEqual(
      'test-input'
    )
  })

  it('should not render an error by default', () => {
    const wrapper = shallow(
      <Checkbox id="test-input" name="test-input" label="Test" />
    )

    expect(wrapper.find('InputError').length).toEqual(0)
  })

  it('should render a string error correctly', () => {
    const wrapper = mount(
      <Checkbox
        id="test-input"
        name="test-input"
        label="Test"
        error="Test error"
      />
    )

    expect(wrapper.find('InputError').length).toEqual(1)
    expect(wrapper.find('InputError').text()).toEqual('Test error')

    wrapper.unmount()
  })

  it('should render a component error correctly', () => {
    const wrapper = shallow(
      <Checkbox
        id="test-input"
        name="test-input"
        label="Test"
        error={<span>Test</span>}
      />
    )

    expect(wrapper.find('InputError').length).toEqual(1)
    expect(wrapper.find('InputError').find('span').length).toEqual(1)
    expect(
      wrapper
        .find('InputError')
        .find('span')
        .text()
    ).toEqual('Test')
  })
})
