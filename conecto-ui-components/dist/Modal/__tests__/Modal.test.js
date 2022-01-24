"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Modal = _interopRequireDefault(require("../../Modal"));

const handleClose = jest.fn();
global.console = {
  error: jest.fn()
};
describe('Modal', () => {
  it('should match snapshot when closed', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Modal.default, {
      isOpen: false,
      handleClose: handleClose
    }, "Test text here"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot when open', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Modal.default, {
      isOpen: true,
      handleClose: handleClose
    }, "Test text here"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Modal.default, {
      isOpen: true,
      handleClose: handleClose
    }, "Test text here"));
    expect(wrapper.instance().classesPrefix).toEqual('to-modal');
    expect(wrapper.render().hasClass(wrapper.instance().classesPrefix)).toEqual(true);
    wrapper.unmount();
  });
  it('should call handleClose when click overlay', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Modal.default, {
      isOpen: true,
      handleClose: handleClose
    }, "Test text here"));
    wrapper.find('.to-modal-overlay').last().simulate('click');
    expect(handleClose).toBeCalled();
  });
});