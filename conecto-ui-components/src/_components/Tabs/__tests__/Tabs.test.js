import React from 'react'
import { shallow, mount } from 'enzyme'

import Tabs, { TabPanel } from '../../Tabs'

const CustomComp = () => <div className="customComp">Test</div>

describe('Tabs', () => {
  it('should match snapshot with titles at the top by default', () => {
    const wrapper = shallow(
      <Tabs>
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with titles at the bottom', () => {
    const wrapper = shallow(
      <Tabs titlePosition="bottom">
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with a fixedItem', () => {
    const wrapper = shallow(
      <Tabs fixedItem={<CustomComp />}>
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <Tabs>
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper.instance().classesPrefix).toEqual('to-tabs')
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
  })

  it('should contain added classes', () => {
    const wrapper = shallow(
      <Tabs className="test-class-1 test-class-2">
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper.hasClass('test-class-1')).toEqual(true)
    expect(wrapper.hasClass('test-class-2')).toEqual(true)
  })

  it('should change selected index and margin-left on title clicks', () => {
    const wrapper = mount(
      <Tabs>
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    wrapper
      .find('.to-tabs-title')
      .last()
      .simulate('click')

    expect(wrapper.state('selectedIndex')).toEqual(2)
    expect(wrapper.find('.to-tabs-panels').prop('style').marginLeft).toEqual(
      '-200%'
    )

    wrapper.unmount()
  })

  it('should change selected index when passed as focusedIndex prop', () => {
    const wrapper = mount(
      <Tabs>
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper.state('selectedIndex')).toEqual(0)

    wrapper.setProps({
      focusedIndex: 2,
    })

    expect(wrapper.state('selectedIndex')).toEqual(2)

    wrapper.unmount()
  })

  it('should clickDisabled prop put click-disabled class on component', () => {
    const wrapper = mount(
      <Tabs>
        <TabPanel title="Test title 1" clickDisabled>
          Test panel 1
        </TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(
      wrapper
        .find('.to-tabs-title')
        .first()
        .hasClass('click-disabled')
    ).toEqual(true)

    wrapper.unmount()
  })

  it('should call the onChangeCallBack when changing state', () => {
    const onChangeCallBack = jest.fn()
    const wrapper = mount(
      <Tabs onChangeCallBack={onChangeCallBack}>
        <TabPanel title="Test title 1" clickDisabled>
          Test panel 1
        </TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    wrapper
      .find('.to-tabs-title')
      .last()
      .simulate('click')

    expect(onChangeCallBack).toBeCalled()
    expect(onChangeCallBack).toBeCalledWith(2)

    wrapper.unmount()
  })

  it('should the fixedItem contains the selectedIndex', () => {
    const wrapper = shallow(
      <Tabs fixedItem={<CustomComp />}>
        <TabPanel title="Test title 1">Test panel 1</TabPanel>
        <TabPanel title="Test title 2">Test panel 2</TabPanel>
        <TabPanel title="Test title 3">Test panel 3</TabPanel>
      </Tabs>
    )

    expect(wrapper.find('CustomComp').props().selectedIndex).toEqual(0)
  })
})
