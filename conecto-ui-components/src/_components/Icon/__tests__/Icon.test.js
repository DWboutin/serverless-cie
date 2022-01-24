import React from 'react'
import { shallow, mount } from 'enzyme'

import Icon from '../../Icon'
import Facebook from '../../Icon/Icons/Facebook'
import Menu from '../../Icon/Icons/Menu'

global.console = {
  error: jest.fn(),
}

describe('Icon', () => {
  describe('SVG components', () => {
    it('Facebook SVG component should match snapshot', () => {
      const wrapper = shallow(<Facebook />)

      expect(wrapper).toMatchSnapshot()
    })

    it('Menu icon component should match snapshot', () => {
      const wrapper = shallow(<Menu />)

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

  describe('type="alert"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="alert" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="alert" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Alert icon', () => {
      const wrapper = mount(<Icon type="alert" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-alert')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="arrow-down"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="arrow-down" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="arrow-down" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Arrow Down icon', () => {
      const wrapper = mount(<Icon type="arrow-down" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-arrow-down')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="bookmark"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="bookmark" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="bookmark" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Bookmark icon', () => {
      const wrapper = mount(<Icon type="bookmark" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-bookmark')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="check"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="check" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="check" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Check icon', () => {
      const wrapper = mount(<Icon type="check" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-check')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="close"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="close" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="close" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Close icon', () => {
      const wrapper = mount(<Icon type="close" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-close')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="cog"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cog" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cog" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Cog icon', () => {
      const wrapper = mount(<Icon type="cog" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cog')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="concurrents"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="concurrents" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="concurrents" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Concurrents icon', () => {
      const wrapper = mount(<Icon type="concurrents" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-concurrents')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="email"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="email" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="email" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Email icon', () => {
      const wrapper = mount(<Icon type="email" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-email')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="facebook"', () => {
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

  describe('type="flag"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="flag" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="flag" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Flag icon', () => {
      const wrapper = mount(<Icon type="flag" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-flag')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="colored-flag"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="colored-flag" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="colored-flag" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Colored Flag icon', () => {
      const wrapper = mount(<Icon type="colored-flag" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-colored-flag')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="marker"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="marker" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="marker" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Flag icon', () => {
      const wrapper = mount(<Icon type="marker" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-marker')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="menu"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="menu" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="menu" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Menu icon', () => {
      const wrapper = mount(<Icon type="menu" />)

      expect(wrapper.find('div').length).toEqual(1)
      expect(wrapper.find('div').hasClass('to-icon-menu')).toEqual(true)
      expect(wrapper.find('span').length).toEqual(2)

      wrapper.unmount()
    })
  })

  describe('type="notification"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="notification" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="notification" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Notification icon', () => {
      const wrapper = mount(<Icon type="notification" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-notification')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="phone"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="phone" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="phone" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Phone icon', () => {
      const wrapper = mount(<Icon type="phone" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-phone')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="search"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="search" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="search" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Search icon', () => {
      const wrapper = mount(<Icon type="search" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-search')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="sms"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="sms" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="sms" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the SMS icon', () => {
      const wrapper = mount(<Icon type="sms" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-sms')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="thumb-up"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="thumb-up" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="thumb-up" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Thumb Up icon', () => {
      const wrapper = mount(<Icon type="thumb-up" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-thumb-up')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="user"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="user" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="user" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the User icon', () => {
      const wrapper = mount(<Icon type="user" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-user')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="cc-amex"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-amex" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-amex" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-Amex icon', () => {
      const wrapper = mount(<Icon type="cc-amex" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-amex')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="cc-default"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-default" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-default" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-Default icon', () => {
      const wrapper = mount(<Icon type="cc-default" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-default')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="cc-dinersclub"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-dinersclub" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-dinersclub" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-DinersClub icon', () => {
      const wrapper = mount(<Icon type="cc-dinersclub" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-dinersclub')).toEqual(
        true
      )

      wrapper.unmount()
    })
  })

  describe('type="cc-discover"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-discover" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-discover" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-Discover icon', () => {
      const wrapper = mount(<Icon type="cc-discover" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-discover')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="cc-jcb"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-jcb" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-jcb" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-JCB icon', () => {
      const wrapper = mount(<Icon type="cc-jcb" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-jcb')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="cc-mastercard"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-mastercard" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-mastercard" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-Mastercard icon', () => {
      const wrapper = mount(<Icon type="cc-mastercard" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-mastercard')).toEqual(
        true
      )

      wrapper.unmount()
    })
  })

  describe('type="cc-visa"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="cc-visa" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="cc-visa" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the CC-Visa icon', () => {
      const wrapper = mount(<Icon type="cc-visa" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-icon-cc-visa')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('type="conecto"', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon type="conecto" />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon type="conecto" />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Conecto icon', () => {
      const wrapper = mount(<Icon type="conecto" />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true)

      wrapper.unmount()
    })
  })

  describe('no type', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Icon />)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Icon />)

      expect(wrapper.instance().classesPrefix).toEqual('to-icon')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render the Conecto icon by default', () => {
      const wrapper = mount(<Icon />)

      expect(wrapper.find('svg').length).toEqual(1)
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true)

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
