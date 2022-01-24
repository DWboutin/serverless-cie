import React from 'react'
import { shallow, mount } from 'enzyme'

import Modal from '../../Modal'

const handleClose = jest.fn()

global.console = {
  error: jest.fn(),
}

describe('Modal', () => {
  it('should match snapshot when closed', () => {
    const wrapper = shallow(
      <Modal isOpen={false} handleClose={handleClose}>
        Test text here
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when open', () => {
    const wrapper = shallow(
      <Modal isOpen={true} handleClose={handleClose}>
        Test text here
      </Modal>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = mount(
      <Modal isOpen={true} handleClose={handleClose}>
        Test text here
      </Modal>
    )

    expect(wrapper.instance().classesPrefix).toEqual('to-modal')
    expect(wrapper.render().hasClass(wrapper.instance().classesPrefix)).toEqual(
      true
    )

    wrapper.unmount()
  })

  it('should call handleClose when click overlay', () => {
    const wrapper = shallow(
      <Modal isOpen={true} handleClose={handleClose}>
        Test text here
      </Modal>
    )

    wrapper
      .find('.to-modal-overlay')
      .last()
      .simulate('click')

    expect(handleClose).toBeCalled()
  })
})
