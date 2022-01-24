"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tabs = _interopRequireWildcard(require("../../Tabs"));

const CustomComp = () => _react.default.createElement("div", {
  className: "customComp"
}, "Test");

describe('Tabs', () => {
  it('should match snapshot with titles at the top by default', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with titles at the bottom', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tabs.default, {
      titlePosition: "bottom"
    }, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match snapshot with a fixedItem', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tabs.default, {
      fixedItem: _react.default.createElement(CustomComp, null)
    }, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper).toMatchSnapshot();
  });
  it('should have the prefix class', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper.instance().classesPrefix).toEqual('to-tabs');
    expect(wrapper.hasClass(wrapper.instance().classesPrefix)).toEqual(true);
  });
  it('should contain added classes', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tabs.default, {
      className: "test-class-1 test-class-2"
    }, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper.hasClass('test-class-1')).toEqual(true);
    expect(wrapper.hasClass('test-class-2')).toEqual(true);
  });
  it('should change selected index and margin-left on title clicks', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    wrapper.find('.to-tabs-title').last().simulate('click');
    expect(wrapper.state('selectedIndex')).toEqual(2);
    expect(wrapper.find('.to-tabs-panels').prop('style').marginLeft).toEqual('-200%');
    wrapper.unmount();
  });
  it('should change selected index when passed as focusedIndex prop', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper.state('selectedIndex')).toEqual(0);
    wrapper.setProps({
      focusedIndex: 2
    });
    expect(wrapper.state('selectedIndex')).toEqual(2);
    wrapper.unmount();
  });
  it('should clickDisabled prop put click-disabled class on component', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.default, null, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1",
      clickDisabled: true
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper.find('.to-tabs-title').first().hasClass('click-disabled')).toEqual(true);
    wrapper.unmount();
  });
  it('should call the onChangeCallBack when changing state', () => {
    const onChangeCallBack = jest.fn();
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Tabs.default, {
      onChangeCallBack: onChangeCallBack
    }, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1",
      clickDisabled: true
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    wrapper.find('.to-tabs-title').last().simulate('click');
    expect(onChangeCallBack).toBeCalled();
    expect(onChangeCallBack).toBeCalledWith(2);
    wrapper.unmount();
  });
  it('should the fixedItem contains the selectedIndex', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Tabs.default, {
      fixedItem: _react.default.createElement(CustomComp, null)
    }, _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 1"
    }, "Test panel 1"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 2"
    }, "Test panel 2"), _react.default.createElement(_Tabs.TabPanel, {
      title: "Test title 3"
    }, "Test panel 3")));
    expect(wrapper.find('CustomComp').props().selectedIndex).toEqual(0);
  });
});