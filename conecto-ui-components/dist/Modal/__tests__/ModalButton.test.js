"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Modal = require("../../Modal");

var _Button = _interopRequireDefault(require("../../Button"));

global.console = {
  log: console.log,
  error: jest.fn()
};
describe('Modal', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Modal.ModalButton, {
      button: _react.default.createElement(_Button.default, null, "Modal text")
    }, "Test text here"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Modal.ModalButton, {
      button: _react.default.createElement(_Button.default, null, "Modal text")
    }, "Test text here"));
    expect(wrapper.instance().classesPrefix).toEqual('to-modal-button');
    expect(wrapper.find('Button').hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    wrapper.unmount();
  });
  it('should open modal on button click and set position', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Modal.ModalButton, {
      button: _react.default.createElement(_Button.default, null, "Modal text")
    }, "Test text here"));
    wrapper.find('Button').last().simulate('click');
    expect(wrapper.state('open')).toEqual(true);
    expect(wrapper.state('position').hasOwnProperty('top')).toEqual(true);
    expect(wrapper.state('position').hasOwnProperty('left')).toEqual(true);
    wrapper.unmount();
  });
  it('should close modal on close button click', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Modal.ModalButton, {
      button: _react.default.createElement(_Button.default, null, "Modal text")
    }, "Test text here"));
    wrapper.find('Button').last().simulate('click');
    expect(wrapper.state('open')).toEqual(true);
    expect(wrapper.state('position').hasOwnProperty('top')).toEqual(true);
    expect(wrapper.state('position').hasOwnProperty('left')).toEqual(true);
    wrapper.find('.to-modal-card__close-btn').last().simulate('click');
    expect(wrapper.state('open')).toEqual(false);
    wrapper.unmount();
  });
});