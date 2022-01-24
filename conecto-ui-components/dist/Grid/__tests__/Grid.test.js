"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Grid = _interopRequireWildcard(require("../../Grid"));

global.console = {
  log: console.log,
  error: jest.fn()
};
describe('Grid', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, null, "Test"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with Row and Col', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Grid.default, null, _react.default.createElement(_Grid.Row, null, _react.default.createElement(_Grid.Col, null, "Test"))));
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should have the good prefix class and default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, null, "Test"));
    expect(wrapper.instance().classesPrefix).toEqual('to-grid');
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    expect(wrapper.hasClass('container')).toEqual(true);
  });
  it('should set good classes when fluid', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, {
      fluid: true
    }, "Test"));
    expect(wrapper.hasClass('container')).toEqual(false);
    expect(wrapper.hasClass('container-fluid')).toEqual(true);
  });
  it('should set good classes when fullHeight', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, {
      fullHeight: true
    }, "Test"));
    expect(wrapper.hasClass('container')).toEqual(true);
    expect(wrapper.hasClass('container-full-height')).toEqual(true);
  });
  it('should contain added classes', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, {
      className: "testClass1 testClass2"
    }, "Test"));
    expect(wrapper.hasClass('testClass1')).toEqual(true);
    expect(wrapper.hasClass('testClass2')).toEqual(true);
  });
  it('should contain added styles', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, {
      style: {
        test: 123
      }
    }, "Test"));
    expect(wrapper.prop('style').test).toEqual(123);
  });
  it('should console.error when missing children', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, null));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a boolean to "fluid" prop', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Grid.default, {
      fluid: "123"
    }, "Test"));
    expect(global.console.error).toBeCalled();
  });
});