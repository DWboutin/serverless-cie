import React from 'react'
import { shallow, mount } from 'enzyme'

import Card, { CardsSwiper } from '../../Card'
import Icon from '../../Icon'

describe('CardsSwiper', () => {
  it('should match snapshot with cards with icons', () => {
    const wrapper = shallow(
      <CardsSwiper id="swiper">
        <Card>Test 1</Card>
        <Card>Test 2</Card>
        <Card>Test 3</Card>
      </CardsSwiper>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot with cards with icons', () => {
    const wrapper = shallow(
      <CardsSwiper id="swiper" withIcons>
        <Card withIcon icon={<Icon type="colored-flag" />}>
          Test 1
        </Card>
        <Card withIcon icon={<Icon type="colored-flag" />}>
          Test 2
        </Card>
        <Card withIcon icon={<Icon type="colored-flag" />}>
          Test 3
        </Card>
      </CardsSwiper>
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should have the prefix class', () => {
    const wrapper = shallow(
      <CardsSwiper id="swiper">
        <Card>Test 1</Card>
        <Card>Test 2</Card>
        <Card>Test 3</Card>
      </CardsSwiper>
    )

    expect(wrapper.instance().classesPrefix).toEqual('to-cards-swiper')
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true)
  })

  it('should contain added classes', () => {
    const wrapper = shallow(
      <CardsSwiper id="swiper" className="test-class-1 test-class-2">
        <Card>Test 1</Card>
        <Card>Test 2</Card>
        <Card>Test 3</Card>
      </CardsSwiper>
    )

    expect(wrapper.hasClass('test-class-1')).toEqual(true)
    expect(wrapper.hasClass('test-class-2')).toEqual(true)
  })

  it('should destroy swiper on unmount', () => {
    const wrapper = mount(
      <CardsSwiper id="swiper" className="test-class-1 test-class-2">
        <Card>Test 1</Card>
        <Card>Test 2</Card>
        <Card>Test 3</Card>
      </CardsSwiper>
    )

    const destroyFn = jest.fn()

    wrapper.instance().swiper = {
      destroy: destroyFn,
    }

    expect(wrapper.instance().swiper).not.toEqual(null)

    wrapper.unmount()

    expect(destroyFn).toBeCalled()
  })

  it('should update swiper on componentDidUpdate', () => {
    const wrapper = mount(
      <CardsSwiper id="swiper" className="test-class-1 test-class-2">
        <Card>Test 1</Card>
        <Card>Test 2</Card>
        <Card>Test 3</Card>
      </CardsSwiper>
    )

    const destroyFn = jest.fn()
    const updateFn = jest.fn()

    wrapper.instance().swiper = {
      destroy: destroyFn,
      update: updateFn,
    }

    expect(wrapper.instance().swiper).not.toEqual(null)

    wrapper.setProps({ foo: 'foo' })

    expect(updateFn).toBeCalled()

    wrapper.unmount()
  })
})
