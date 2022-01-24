import React from 'react'
import { shallow, mount } from 'enzyme'

import { ModalButton } from '../../Modal'
import Button from '../../Button'

global.console = {
  log: console.log,
  error: jest.fn(),
}

describe('Modal', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <ModalButton button={<Button>Modal text</Button>}>
        Test text here
      </ModalButton>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <ModalButton button={<Button>Modal text</Button>}>
        Test text here
      </ModalButton>
    )

    expect(wrapper.instance().classesPrefix).toEqual('to-modal-button')
    expect(
      wrapper.find('Button').hasClass(wrapper.instance().classesPrefix)
    ).toEqual(true)

    wrapper.unmount()
  })

  it('should open modal on button click and set position', () => {
    const wrapper = mount(
      <ModalButton button={<Button>Modal text</Button>}>
        Test text here
      </ModalButton>
    )

    wrapper
      .find('Button')
      .last()
      .simulate('click')

    expect(wrapper.state('open')).toEqual(true)
    expect(wrapper.state('position').hasOwnProperty('top')).toEqual(true)
    expect(wrapper.state('position').hasOwnProperty('left')).toEqual(true)

    wrapper.unmount()
  })

  it('should close modal on close button click', () => {
    const wrapper = mount(
      <ModalButton button={<Button>Modal text</Button>}>
        Test text here
      </ModalButton>
    )

    wrapper
      .find('Button')
      .last()
      .simulate('click')

    expect(wrapper.state('open')).toEqual(true)
    expect(wrapper.state('position').hasOwnProperty('top')).toEqual(true)
    expect(wrapper.state('position').hasOwnProperty('left')).toEqual(true)

    wrapper
      .find('.to-modal-card__close-btn')
      .last()
      .simulate('click')

    expect(wrapper.state('open')).toEqual(false)

    wrapper.unmount()
  })
})
