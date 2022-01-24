"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Icon = _interopRequireDefault(require("../../Icon"));

var _Facebook = _interopRequireDefault(require("../../Icon/Icons/Facebook"));

global.console = {
  error: jest.fn()
};
describe('Icon', () => {
  describe('SVG components', () => {
    it('Facebook SVG component should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Facebook.default, null));
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('Default', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, null));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, null));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should contain the added classes', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        className: "test-class-1 test-class-2"
      }));
      expect(wrapper.hasClass('test-class-1')).toEqual(true);
      expect(wrapper.hasClass('test-class-2')).toEqual(true);
    });
    it('should render the short logo is default icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, null));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-logo-to')).toEqual(true);
      wrapper.unmount();
    });
  });
  describe('Facebook', () => {
    it('should match snapshot', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "facebook"
      }));
      expect(wrapper).toMatchSnapshot();
    });
    it('should have the prefix class', () => {
      const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
        type: "facebook"
      }));
      expect(wrapper.instance().classesPrefix).toEqual('to-icon');
      expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    });
    it('should render the Facebook icon', () => {
      const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Icon.default, {
        type: "facebook"
      }));
      expect(wrapper.find('svg').length).toEqual(1);
      expect(wrapper.find('svg').hasClass('to-icon-facebook')).toEqual(true);
      wrapper.unmount();
    });
  });
  it('should console.error when passing a number to type prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
      type: 123
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a good value to type prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Icon.default, {
      type: "test"
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
});