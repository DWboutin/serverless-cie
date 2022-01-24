"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Card = _interopRequireWildcard(require("../../Card"));

var _Icon = _interopRequireDefault(require("../../Icon"));

describe('CardsSwiper', () => {
  it('should match snapshot with cards with icons', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardsSwiper, {
      id: "swiper"
    }, _react.default.createElement(_Card.default, null, "Test 1"), _react.default.createElement(_Card.default, null, "Test 2"), _react.default.createElement(_Card.default, null, "Test 3")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with cards with icons', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardsSwiper, {
      id: "swiper",
      withIcons: true
    }, _react.default.createElement(_Card.default, {
      withIcon: true,
      icon: _react.default.createElement(_Icon.default, {
        type: "colored-flag"
      })
    }, "Test 1"), _react.default.createElement(_Card.default, {
      withIcon: true,
      icon: _react.default.createElement(_Icon.default, {
        type: "colored-flag"
      })
    }, "Test 2"), _react.default.createElement(_Card.default, {
      withIcon: true,
      icon: _react.default.createElement(_Icon.default, {
        type: "colored-flag"
      })
    }, "Test 3")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardsSwiper, {
      id: "swiper"
    }, _react.default.createElement(_Card.default, null, "Test 1"), _react.default.createElement(_Card.default, null, "Test 2"), _react.default.createElement(_Card.default, null, "Test 3")));
    expect(wrapper.instance().classesPrefix).toEqual('to-cards-swiper');
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
  });
  it('should contain added classes', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Card.CardsSwiper, {
      id: "swiper",
      className: "test-class-1 test-class-2"
    }, _react.default.createElement(_Card.default, null, "Test 1"), _react.default.createElement(_Card.default, null, "Test 2"), _react.default.createElement(_Card.default, null, "Test 3")));
    expect(wrapper.hasClass('test-class-1')).toEqual(true);
    expect(wrapper.hasClass('test-class-2')).toEqual(true);
  });
  it('should destroy swiper on unmount', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Card.CardsSwiper, {
      id: "swiper",
      className: "test-class-1 test-class-2"
    }, _react.default.createElement(_Card.default, null, "Test 1"), _react.default.createElement(_Card.default, null, "Test 2"), _react.default.createElement(_Card.default, null, "Test 3")));
    const destroyFn = jest.fn();
    wrapper.instance().swiper = {
      destroy: destroyFn
    };
    expect(wrapper.instance().swiper).not.toEqual(null);
    wrapper.unmount();
    expect(destroyFn).toBeCalled();
  });
  it('should update swiper on componentDidUpdate', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Card.CardsSwiper, {
      id: "swiper",
      className: "test-class-1 test-class-2"
    }, _react.default.createElement(_Card.default, null, "Test 1"), _react.default.createElement(_Card.default, null, "Test 2"), _react.default.createElement(_Card.default, null, "Test 3")));
    const destroyFn = jest.fn();
    const updateFn = jest.fn();
    wrapper.instance().swiper = {
      destroy: destroyFn,
      update: updateFn
    };
    expect(wrapper.instance().swiper).not.toEqual(null);
    wrapper.setProps({
      foo: 'foo'
    });
    expect(updateFn).toBeCalled();
    wrapper.unmount();
  });
});