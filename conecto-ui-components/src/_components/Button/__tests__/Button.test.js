import React from 'react'
import { shallow, mount } from 'enzyme'
import { Link } from 'gatsby'

import Button from '../../Button'
import Icon from '../../Icon'

global.console = {
  error: jest.fn(),
}

describe('Button', () => {
  describe('Primary', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button>Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button>Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should contain added classes', () => {
      const wrapper = shallow(
        <Button className="test-class-1 test-class-2">Test</Button>
      )

      expect(wrapper.hasClass('test-class-1')).toEqual(true)
      expect(wrapper.hasClass('test-class-2')).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button>Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-primary'
      )
    })

    it('should match snapshot with an Icon', () => {
      const wrapper = shallow(
        <Button comp={Link}>
          <Icon />
          Test
        </Button>
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should render an Icon correctly', () => {
      const wrapper = mount(
        <Button comp={Link}>
          <Icon />
          Test
        </Button>
      )

      expect(wrapper.find(Icon).length).toEqual(1)

      wrapper.unmount()
    })
  })

  describe('Bordered', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button type="bordered">Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button type="bordered">Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button type="bordered">Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-bordered'
      )
    })
  })

  describe('Ghost', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button type="ghost">Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button type="ghost">Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button type="ghost">Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-ghost'
      )
    })
  })

  describe('Underlined', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button type="underlined">Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button type="underlined">Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button type="underlined">Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-underlined'
      )
    })
  })

  describe('Switch', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button type="switch">Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button type="switch">Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button type="switch">Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-switch'
      )
    })
  })

  describe('Filter', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button type="filter">Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button type="filter">Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button type="filter">Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-filter'
      )
    })
  })

  describe('Menu', () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button type="menu">Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should match snapshot with the menu icon', () => {
      const wrapper = shallow(
        <Button type="menu">
          test
          <Icon type="menu" />
        </Button>
      )

      expect(wrapper).toMatchSnapshot()
    })

    it('should have the prefix class', () => {
      const wrapper = shallow(<Button type="menu">Test</Button>)

      expect(wrapper.instance().classesPrefix).toEqual('to-btn')
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    })

    it('should render an Html button with good props', () => {
      const wrapper = shallow(<Button type="menu">Test</Button>)

      expect(wrapper.text()).toEqual('Test')
      expect(wrapper.find('button').length).toEqual(1)
      expect(wrapper.find('button').props().type).toEqual('button')
      expect(wrapper.find('button').props().className).toEqual(
        'to-btn to-btn-menu'
      )
    })
  })

  describe("With Gatsby's Link component", () => {
    it('should match snapshot', () => {
      const wrapper = shallow(<Button comp={Link}>Test</Button>)

      expect(wrapper).toMatchSnapshot()
    })

    it('should render a Link component correctly', () => {
      const wrapper = shallow(<Button comp={Link}>Test</Button>)

      expect(wrapper.find(Link).length).toEqual(1)
    })

    it('should render a Link tag with good props', () => {
      const wrapper = mount(<Button comp={Link}>Test</Button>)

      expect(wrapper.find('button').length).toEqual(0)
      expect(wrapper.find('a').length).toEqual(1)
      expect(wrapper.find('a').hasClass('to-btn to-btn-primary')).toEqual(true)

      wrapper.unmount()
    })
  })

  it('should console.error when not passing a string or a React component to comp prop', () => {
    shallow(<Button comp={123}>Test</Button>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a string to type prop', () => {
    shallow(<Button type={123}>Test</Button>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a string to htmlType prop', () => {
    shallow(<Button htmlType={123}>Test</Button>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a function to handleClick prop', () => {
    shallow(<Button handleClick={123}>Test</Button>)

    expect(global.console.error).toBeCalled()
  })
})
