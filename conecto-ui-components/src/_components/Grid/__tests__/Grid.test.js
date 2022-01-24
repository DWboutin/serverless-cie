import React from 'react'
import { shallow, mount } from 'enzyme'

import Grid, { Row, Col } from '../../Grid'

global.console = {
  log: console.log,
  error: jest.fn(),
}

describe('Grid', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<Grid>Test</Grid>)

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with Row and Col', () => {
    const wrapper = mount(
      <Grid>
        <Row>
          <Col>Test</Col>
        </Row>
      </Grid>
    )

    expect(wrapper).toMatchSnapshot()

    wrapper.unmount()
  })

  it('should have the good prefix class and default', () => {
    const wrapper = shallow(<Grid>Test</Grid>)

    expect(wrapper.instance().classesPrefix).toEqual('to-grid')
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
    expect(wrapper.hasClass('container')).toEqual(true)
  })

  it('should set good classes when fluid', () => {
    const wrapper = shallow(<Grid fluid>Test</Grid>)

    expect(wrapper.hasClass('container')).toEqual(false)
    expect(wrapper.hasClass('container-fluid')).toEqual(true)
  })

  it('should set good classes when fullHeight', () => {
    const wrapper = shallow(<Grid fullHeight>Test</Grid>)

    expect(wrapper.hasClass('container')).toEqual(true)
    expect(wrapper.hasClass('container-full-height')).toEqual(true)
  })

  it('should contain added classes', () => {
    const wrapper = shallow(<Grid className="testClass1 testClass2">Test</Grid>)

    expect(wrapper.hasClass('testClass1')).toEqual(true)
    expect(wrapper.hasClass('testClass2')).toEqual(true)
  })

  it('should contain added styles', () => {
    const wrapper = shallow(<Grid style={{ test: 123 }}>Test</Grid>)

    expect(wrapper.prop('style').test).toEqual(123)
  })

  it('should console.error when missing children', () => {
    shallow(<Grid />)

    expect(global.console.error).toBeCalled()
  })

  it('should console.error when not passing a boolean to "fluid" prop', () => {
    shallow(<Grid fluid="123">Test</Grid>)

    expect(global.console.error).toBeCalled()
  })
})
