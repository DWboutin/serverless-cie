import React from 'react'
import { shallow, mount } from 'enzyme'

import Icon from '../../Icon'
import Facebook from '../../Icon/Icons/Facebook'

global.console = {
  error: jest.fn(),
}

describe('Icon', () => {
  describe('SVG components', () => {
    it('Facebook SVG component should match snapshot', () => {
      const wrapper = shallow(<Facebook />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Default', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should contain the added classes', () => {
      const wrapper = shallow(<Icon className="test-class-1 test-class-2" />)

      expect(wrapper.hasClass('test-class-1')).toEqual(true)
      expect(wrapper.hasClass('test-class-2')).toEqual(true)
    })

    it('should render the short logo is default icon', () => {
      const wrapper = mount(<Icon />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('Facebook', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="facebook" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="facebook" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Facebook icon', () => {
      const wrapper = mount(<Icon type="facebook" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-facebook')).toEqual(true)

      wrapper.unmount()
    })
  })

  it('should console.error when passing a number to type prop', () => {
    shallow(<Icon type={123}>Test</Icon>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a good value to type prop', () => {
    shallow(<Icon type="test">Test</Icon>)

    expect(global.console.error).toBeCalled()
  })
})
