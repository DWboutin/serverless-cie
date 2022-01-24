import React from 'react'
import { mount, shallow } from 'enzyme'

import { Row, Col } from '../../Grid'

global.console = {
  error: jest.fn(),
}

describe('Row', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Row>Test</Row>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with a Col', () => {
    const wrapper = mount(
      <Row>
        <Col>Test</Col>
      </Row>
    )

    expect(wrapper).toMatchSnapshot()

    wrapper.unmount()
  })

  it('should have the good prefix class and default', () => {
    const wrapper = shallow(<Row>Test</Row>)

    expect(wrapper.instance().classesPrefix).toEqual('row')
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
  })

  describe('Alignement', () => {
    describe('XS', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = shallow(<Row xs={{ alignement: 'start' }}>Test</Row>)

        expect(wrapper.hasClass('start-xs')).toEqual(true)
      })

      it('should render correct class on alignement "center"', () => {
        const wrapper = shallow(<Row xs={{ alignement: 'center' }}>Test</Row>)

        expect(wrapper.hasClass('center-xs')).toEqual(true)
      })

      it('should render correct class on alignement "end"', () => {
        const wrapper = shallow(<Row xs={{ alignement: 'end' }}>Test</Row>)

        expect(wrapper.hasClass('end-xs')).toEqual(true)
      })

      it('should render correct class on alignement "top"', () => {
        const wrapper = shallow(<Row xs={{ alignement: 'top' }}>Test</Row>)

        expect(wrapper.hasClass('top-xs')).toEqual(true)
      })

      it('should render correct class on alignement "middle"', () => {
        const wrapper = shallow(<Row xs={{ alignement: 'middle' }}>Test</Row>)

        expect(wrapper.hasClass('middle-xs')).toEqual(true)
      })

      it('should render correct class on alignement "bottom"', () => {
        const wrapper = shallow(<Row xs={{ alignement: 'bottom' }}>Test</Row>)

        expect(wrapper.hasClass('bottom-xs')).toEqual(true)
      })
    })

    describe('SM', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = shallow(<Row sm={{ alignement: 'start' }}>Test</Row>)

        expect(wrapper.hasClass('start-sm')).toEqual(true)
      })

      it('should render correct class on alignement "center"', () => {
        const wrapper = shallow(<Row sm={{ alignement: 'center' }}>Test</Row>)

        expect(wrapper.hasClass('center-sm')).toEqual(true)
      })

      it('should render correct class on alignement "end"', () => {
        const wrapper = shallow(<Row sm={{ alignement: 'end' }}>Test</Row>)

        expect(wrapper.hasClass('end-sm')).toEqual(true)
      })

      it('should render correct class on alignement "top"', () => {
        const wrapper = shallow(<Row sm={{ alignement: 'top' }}>Test</Row>)

        expect(wrapper.hasClass('top-sm')).toEqual(true)
      })

      it('should render correct class on alignement "middle"', () => {
        const wrapper = shallow(<Row sm={{ alignement: 'middle' }}>Test</Row>)

        expect(wrapper.hasClass('middle-sm')).toEqual(true)
      })

      it('should render correct class on alignement "bottom"', () => {
        const wrapper = shallow(<Row sm={{ alignement: 'bottom' }}>Test</Row>)

        expect(wrapper.hasClass('bottom-sm')).toEqual(true)
      })
    })

    describe('MD', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = shallow(<Row md={{ alignement: 'start' }}>Test</Row>)

        expect(wrapper.hasClass('start-md')).toEqual(true)
      })

      it('should render correct class on alignement "center"', () => {
        const wrapper = shallow(<Row md={{ alignement: 'center' }}>Test</Row>)

        expect(wrapper.hasClass('center-md')).toEqual(true)
      })

      it('should render correct class on alignement "end"', () => {
        const wrapper = shallow(<Row md={{ alignement: 'end' }}>Test</Row>)

        expect(wrapper.hasClass('end-md')).toEqual(true)
      })

      it('should render correct class on alignement "top"', () => {
        const wrapper = shallow(<Row md={{ alignement: 'top' }}>Test</Row>)

        expect(wrapper.hasClass('top-md')).toEqual(true)
      })

      it('should render correct class on alignement "middle"', () => {
        const wrapper = shallow(<Row md={{ alignement: 'middle' }}>Test</Row>)

        expect(wrapper.hasClass('middle-md')).toEqual(true)
      })

      it('should render correct class on alignement "bottom"', () => {
        const wrapper = shallow(<Row md={{ alignement: 'bottom' }}>Test</Row>)

        expect(wrapper.hasClass('bottom-md')).toEqual(true)
      })
    })

    describe('LG', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = shallow(<Row lg={{ alignement: 'start' }}>Test</Row>)

        expect(wrapper.hasClass('start-lg')).toEqual(true)
      })

      it('should render correct class on alignement "center"', () => {
        const wrapper = shallow(<Row lg={{ alignement: 'center' }}>Test</Row>)

        expect(wrapper.hasClass('center-lg')).toEqual(true)
      })

      it('should render correct class on alignement "end"', () => {
        const wrapper = shallow(<Row lg={{ alignement: 'end' }}>Test</Row>)

        expect(wrapper.hasClass('end-lg')).toEqual(true)
      })

      it('should render correct class on alignement "top"', () => {
        const wrapper = shallow(<Row lg={{ alignement: 'top' }}>Test</Row>)

        expect(wrapper.hasClass('top-lg')).toEqual(true)
      })

      it('should render correct class on alignement "middle"', () => {
        const wrapper = shallow(<Row lg={{ alignement: 'middle' }}>Test</Row>)

        expect(wrapper.hasClass('middle-lg')).toEqual(true)
      })

      it('should render correct class on alignement "bottom"', () => {
        const wrapper = shallow(<Row lg={{ alignement: 'bottom' }}>Test</Row>)

        expect(wrapper.hasClass('bottom-lg')).toEqual(true)
      })
    })

    describe('XL', () => {
      it('should render correct class on alignement "start"', () => {
        const wrapper = shallow(<Row xl={{ alignement: 'start' }}>Test</Row>)

        expect(wrapper.hasClass('start-xl')).toEqual(true)
      })

      it('should render correct class on alignement "center"', () => {
        const wrapper = shallow(<Row xl={{ alignement: 'center' }}>Test</Row>)

        expect(wrapper.hasClass('center-xl')).toEqual(true)
      })

      it('should render correct class on alignement "end"', () => {
        const wrapper = shallow(<Row xl={{ alignement: 'end' }}>Test</Row>)

        expect(wrapper.hasClass('end-xl')).toEqual(true)
      })

      it('should render correct class on alignement "top"', () => {
        const wrapper = shallow(<Row xl={{ alignement: 'top' }}>Test</Row>)

        expect(wrapper.hasClass('top-xl')).toEqual(true)
      })

      it('should render correct class on alignement "middle"', () => {
        const wrapper = shallow(<Row xl={{ alignement: 'middle' }}>Test</Row>)

        expect(wrapper.hasClass('middle-xl')).toEqual(true)
      })

      it('should render correct class on alignement "bottom"', () => {
        const wrapper = shallow(<Row xl={{ alignement: 'bottom' }}>Test</Row>)

        expect(wrapper.hasClass('bottom-xl')).toEqual(true)
      })
    })
  })
  describe('Distribution', () => {
    describe('XS', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = shallow(<Row xs={{ distribution: 'around' }}>Test</Row>)

        expect(wrapper.hasClass('around-xs')).toEqual(true)
      })

      it('should render correct class on distribution "between"', () => {
        const wrapper = shallow(
          <Row xs={{ distribution: 'between' }}>Test</Row>
        )

        expect(wrapper.hasClass('between-xs')).toEqual(true)
      })
    })

    describe('SM', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = shallow(<Row sm={{ distribution: 'around' }}>Test</Row>)

        expect(wrapper.hasClass('around-sm')).toEqual(true)
      })

      it('should render correct class on distribution "between"', () => {
        const wrapper = shallow(
          <Row sm={{ distribution: 'between' }}>Test</Row>
        )

        expect(wrapper.hasClass('between-sm')).toEqual(true)
      })
    })

    describe('MD', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = shallow(<Row md={{ distribution: 'around' }}>Test</Row>)

        expect(wrapper.hasClass('around-md')).toEqual(true)
      })

      it('should render correct class on distribution "between"', () => {
        const wrapper = shallow(
          <Row md={{ distribution: 'between' }}>Test</Row>
        )

        expect(wrapper.hasClass('between-md')).toEqual(true)
      })
    })

    describe('LG', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = shallow(<Row lg={{ distribution: 'around' }}>Test</Row>)

        expect(wrapper.hasClass('around-lg')).toEqual(true)
      })

      it('should render correct class on distribution "between"', () => {
        const wrapper = shallow(
          <Row lg={{ distribution: 'between' }}>Test</Row>
        )

        expect(wrapper.hasClass('between-lg')).toEqual(true)
      })
    })

    describe('XL', () => {
      it('should render correct class on distribution "around"', () => {
        const wrapper = shallow(<Row xl={{ distribution: 'around' }}>Test</Row>)

        expect(wrapper.hasClass('around-xl')).toEqual(true)
      })

      it('should render correct class on distribution "between"', () => {
        const wrapper = shallow(
          <Row xl={{ distribution: 'between' }}>Test</Row>
        )

        expect(wrapper.hasClass('between-xl')).toEqual(true)
      })
    })
  })

  it('should render correct class on reverse', () => {
    const wrapper = shallow(<Row reverse>Test</Row>)

    expect(wrapper.hasClass('reverse')).toEqual(true)
  })

  it('should contain added classes', () => {
    const wrapper = shallow(<Row className="testClass1 testClass2">Test</Row>)

    expect(wrapper.hasClass('testClass1')).toEqual(true)
    expect(wrapper.hasClass('testClass2')).toEqual(true)
  })

  it('should contain added styles', () => {
    const wrapper = shallow(<Row style={{ test: 123 }}>Test</Row>)

    expect(wrapper.prop('style').test).toEqual(123)
  })

  it('should console.error when missing children', () => {
    shallow(<Row />)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a boolean to "reverse" prop', () => {
    shallow(<Row reverse={123}>Test</Row>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a good value to alignement prop', () => {
    shallow(<Row xs={{ alignement: 1234 }}>Test</Row>)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a good value to distribution prop', () => {
    shallow(<Row xs={{ distribution: 1234 }}>Test</Row>)

    expect(global.console.error).toBeCalled()
  })
})
