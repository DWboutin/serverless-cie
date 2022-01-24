import React from 'react'
import { mount, shallow } from 'enzyme'

import { Col, Row } from '../../Grid'
import Grid from './Grid.test'

global.console = {
  log: console.log,
  error: jest.fn(),
}

describe('Col', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Col>Test</Col>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match mounted snapshot', () => {
    const wrapper = mount(<Col>Test</Col>)

    expect(wrapper).toMatchSnapshot()

    wrapper.unmount()
  })

  it('should have the good default class "col-xs"', () => {
    const wrapper = shallow(<Col>Test</Col>)

    expect(wrapper.hasClass('col-xs')).toEqual(true)
  })

  it('should have the good class with fullHeight prop', () => {
    const wrapper = shallow(<Col fullHeight>Test</Col>)

    expect(wrapper.hasClass('full-height')).toEqual(true)
  })

  describe('Span', () => {
    describe('XS', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col xs={{ span: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-xs-3')).toEqual(true)
      })

      it('should console.error on bad span value', () => {
        shallow(<Col xs={{ span: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col sm={{ span: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-sm-3')).toEqual(true)
      })

      it('should console.error on bad span value', () => {
        shallow(<Col sm={{ span: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col md={{ span: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-md-3')).toEqual(true)
      })

      it('should console.error on bad span value', () => {
        shallow(<Col md={{ span: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col lg={{ span: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-lg-3')).toEqual(true)
      })

      it('should console.error on bad span value', () => {
        shallow(<Col lg={{ span: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col xl={{ span: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-xl-3')).toEqual(true)
      })

      it('should console.error on bad span value', () => {
        shallow(<Col xl={{ span: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Offset', () => {
    describe('XS', () => {
      it('should render correct class on offset value', () => {
        const wrapper = shallow(<Col xs={{ offset: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-xs-offset-3')).toEqual(true)
      })

      it('should console.error on bad offset value', () => {
        shallow(<Col xs={{ offset: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col sm={{ offset: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-sm-offset-3')).toEqual(true)
      })

      it('should console.error on bad offset value', () => {
        shallow(<Col sm={{ offset: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col md={{ offset: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-md-offset-3')).toEqual(true)
      })

      it('should console.error on bad offset value', () => {
        shallow(<Col md={{ offset: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col lg={{ offset: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-lg-offset-3')).toEqual(true)
      })

      it('should console.error on bad offset value', () => {
        shallow(<Col lg={{ offset: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on span value', () => {
        const wrapper = shallow(<Col xl={{ offset: 3 }}>Test</Col>)

        expect(wrapper.hasClass('col-xl-offset-3')).toEqual(true)
      })

      it('should console.error on bad offset value', () => {
        shallow(<Col xl={{ offset: [] }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('First', () => {
    describe('XS', () => {
      it('should render correct class on offset value', () => {
        const wrapper = shallow(<Col xs={{ first: true }}>Test</Col>)

        expect(wrapper.hasClass('first-xs')).toEqual(true)
      })

      it('should console.error on bad first value', () => {
        shallow(<Col xs={{ first: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on offset value', () => {
        const wrapper = shallow(<Col sm={{ first: true }}>Test</Col>)

        expect(wrapper.hasClass('first-sm')).toEqual(true)
      })

      it('should console.error on bad first value', () => {
        shallow(<Col sm={{ first: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on offset value', () => {
        const wrapper = shallow(<Col md={{ first: true }}>Test</Col>)

        expect(wrapper.hasClass('first-md')).toEqual(true)
      })

      it('should console.error on bad first value', () => {
        shallow(<Col md={{ first: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on offset value', () => {
        const wrapper = shallow(<Col lg={{ first: true }}>Test</Col>)

        expect(wrapper.hasClass('first-lg')).toEqual(true)
      })

      it('should console.error on bad first value', () => {
        shallow(<Col lg={{ first: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on offset value', () => {
        const wrapper = shallow(<Col xl={{ first: true }}>Test</Col>)

        expect(wrapper.hasClass('first-xl')).toEqual(true)
      })

      it('should console.error on bad first value', () => {
        shallow(<Col xl={{ first: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Last', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ last: true }}>Test</Col>)

        expect(wrapper.hasClass('last-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ last: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ last: true }}>Test</Col>)

        expect(wrapper.hasClass('last-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ last: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ last: true }}>Test</Col>)

        expect(wrapper.hasClass('last-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ last: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ last: true }}>Test</Col>)

        expect(wrapper.hasClass('last-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ last: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ last: true }}>Test</Col>)

        expect(wrapper.hasClass('last-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ last: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Start', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ start: true }}>Test</Col>)

        expect(wrapper.hasClass('start-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ start: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ start: true }}>Test</Col>)

        expect(wrapper.hasClass('start-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ start: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ start: true }}>Test</Col>)

        expect(wrapper.hasClass('start-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ start: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ start: true }}>Test</Col>)

        expect(wrapper.hasClass('start-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ start: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ start: true }}>Test</Col>)

        expect(wrapper.hasClass('start-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ start: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Center', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ center: true }}>Test</Col>)

        expect(wrapper.hasClass('center-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ center: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ center: true }}>Test</Col>)

        expect(wrapper.hasClass('center-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ center: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ center: true }}>Test</Col>)

        expect(wrapper.hasClass('center-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ center: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ center: true }}>Test</Col>)

        expect(wrapper.hasClass('center-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ center: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ center: true }}>Test</Col>)

        expect(wrapper.hasClass('center-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ center: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('End', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ end: true }}>Test</Col>)

        expect(wrapper.hasClass('end-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ end: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ end: true }}>Test</Col>)

        expect(wrapper.hasClass('end-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ end: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ end: true }}>Test</Col>)

        expect(wrapper.hasClass('end-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ end: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ end: true }}>Test</Col>)

        expect(wrapper.hasClass('end-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ end: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ end: true }}>Test</Col>)

        expect(wrapper.hasClass('end-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ end: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Top', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ top: true }}>Test</Col>)

        expect(wrapper.hasClass('top-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ top: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ top: true }}>Test</Col>)

        expect(wrapper.hasClass('top-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ top: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ top: true }}>Test</Col>)

        expect(wrapper.hasClass('top-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ top: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ top: true }}>Test</Col>)

        expect(wrapper.hasClass('top-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ top: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ top: true }}>Test</Col>)

        expect(wrapper.hasClass('top-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ top: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Middle', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ middle: true }}>Test</Col>)

        expect(wrapper.hasClass('middle-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ middle: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ middle: true }}>Test</Col>)

        expect(wrapper.hasClass('middle-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ middle: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ middle: true }}>Test</Col>)

        expect(wrapper.hasClass('middle-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ middle: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ middle: true }}>Test</Col>)

        expect(wrapper.hasClass('middle-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ middle: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ middle: true }}>Test</Col>)

        expect(wrapper.hasClass('middle-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ middle: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Bottom', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ bottom: true }}>Test</Col>)

        expect(wrapper.hasClass('bottom-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ bottom: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ bottom: true }}>Test</Col>)

        expect(wrapper.hasClass('bottom-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ bottom: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ bottom: true }}>Test</Col>)

        expect(wrapper.hasClass('bottom-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ bottom: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ bottom: true }}>Test</Col>)

        expect(wrapper.hasClass('bottom-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ bottom: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ bottom: true }}>Test</Col>)

        expect(wrapper.hasClass('bottom-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ bottom: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Around', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ around: true }}>Test</Col>)

        expect(wrapper.hasClass('around-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ around: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ around: true }}>Test</Col>)

        expect(wrapper.hasClass('around-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ around: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ around: true }}>Test</Col>)

        expect(wrapper.hasClass('around-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ around: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ around: true }}>Test</Col>)

        expect(wrapper.hasClass('around-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ around: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ around: true }}>Test</Col>)

        expect(wrapper.hasClass('around-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ around: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Between', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ between: true }}>Test</Col>)

        expect(wrapper.hasClass('between-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ between: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ between: true }}>Test</Col>)

        expect(wrapper.hasClass('between-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ between: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ between: true }}>Test</Col>)

        expect(wrapper.hasClass('between-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ between: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ between: true }}>Test</Col>)

        expect(wrapper.hasClass('between-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ between: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ between: true }}>Test</Col>)

        expect(wrapper.hasClass('between-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ between: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })
  describe('Hidden', () => {
    describe('XS', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xs={{ hidden: true }}>Test</Col>)

        expect(wrapper.hasClass('hidden-xs')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xs={{ hidden: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('SM', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col sm={{ hidden: true }}>Test</Col>)

        expect(wrapper.hasClass('hidden-sm')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col sm={{ hidden: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('MD', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col md={{ hidden: true }}>Test</Col>)

        expect(wrapper.hasClass('hidden-md')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col md={{ hidden: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('LG', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col lg={{ hidden: true }}>Test</Col>)

        expect(wrapper.hasClass('hidden-lg')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col lg={{ hidden: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })

    describe('XL', () => {
      it('should render correct class on last value', () => {
        const wrapper = shallow(<Col xl={{ hidden: true }}>Test</Col>)

        expect(wrapper.hasClass('hidden-xl')).toEqual(true)
      })

      it('should console.error on bad last value', () => {
        shallow(<Col xl={{ hidden: 123 }}>Test</Col>)

        expect(global.console.error).toBeCalled()
      })
    })
  })

  it('should contain added classes', () => {
    const wrapper = shallow(<Col className="testClass1 testClass2">Test</Col>)

    expect(wrapper.hasClass('testClass1')).toEqual(true)
    expect(wrapper.hasClass('testClass2')).toEqual(true)
  })

  it('should contain added styles', () => {
    const wrapper = shallow(<Col style={{ test: 123 }}>Test</Col>)

    expect(wrapper.prop('style').test).toEqual(123)
  })

  it('should console.error when missing children', () => {
    shallow(<Col />)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a boolean to fullHeight prop', () => {
    shallow(<Col fullHeight={123} />)

    expect(global.console.error).toBeCalled()
  })
})
