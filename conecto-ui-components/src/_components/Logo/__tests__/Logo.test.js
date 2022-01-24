import React from 'react'
import { shallow, mount } from 'enzyme'

import Logo from '../../Logo'
import Conecto from '../Logos/Conecto'
import To from '../Logos/To'

describe('Logo', () => {
  describe('SVG components', () => {
    it('Conecto component should match snapshot', () => {
      const wrapper = shallow(<Conecto />)

      expect(wrapper).toMatchSnapshot()
    })

    it('Short Conecto component should match snapshot', () => {
      const wrapper = shallow(<To />)

      expect(wrapper).toMatchSnapshot()
    })
  })

  describe('Default', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Logo />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Logo />)

      expect(wrapper.instance().classesPrefix).toEqual('to-logo')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should contain added classes', () => {
      const wrapper = shallow(<Logo className="test-class-1 test-class-2" />)

      expect(wrapper.hasClass('test-class-1')).toEqual(true)
      expect(wrapper.hasClass('test-class-2')).toEqual(true)
    })

    it('should render the SVG component of Conecto', () => {
      const wrapper = mount(<Logo />)

      expect(wrapper.find(Conecto).length).toEqual(1)
    })
  })

  describe('Short', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Logo size="short" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix classes', () => {
      const wrapper = shallow(<Logo size="short" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-logo')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
      expect(wrapper.hasClass('to-logo-short')).toEqual(true)
    })

    it('should render the SVG component of the short version of Conecto', () => {
      const wrapper = mount(<Logo size="short" />)

      expect(wrapper.find(To).length).toEqual(1)

      wrapper.unmount()
    })
  })

  describe('With Suffix', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Logo suffix="Contractor" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix classes', () => {
      const wrapper = shallow(<Logo suffix="Contractor" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-logo')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
      expect(wrapper.hasClass('to-logo-contractor')).toEqual(true)
      expect(wrapper.hasClass('to-logo-with-suffix')).toEqual(true)
    })

    it('should render correctly the text suffix', () => {
      const wrapper = mount(<Logo suffix="Contractor" />)

      expect(wrapper.text()).toEqual('Contractor')

      wrapper.unmount()
    })

    it('should render correctly a tag suffix', () => {
      const wrapper = mount(<Logo suffix={<strong>ABcdEF123</strong>} />)

      expect(wrapper.find('strong').length).toEqual(1)
      expect(wrapper.text()).toEqual('ABcdEF123')

      wrapper.unmount()
    })
  })

  describe('With Type', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Logo type="roofing" suffix="Roofing" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix classes', () => {
      const wrapper = shallow(<Logo type="roofing" suffix="Roofing" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-logo')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
      expect(wrapper.hasClass('to-logo-roofing')).toEqual(true)
      expect(wrapper.hasClass('to-logo-with-suffix')).toEqual(true)
    })

    it('should render correctly the text suffix', () => {
      const wrapper = mount(<Logo type="roofing" suffix="Roofing" />)

      expect(wrapper.text()).toEqual('Roofing')

      wrapper.unmount()
    })
  })
})
