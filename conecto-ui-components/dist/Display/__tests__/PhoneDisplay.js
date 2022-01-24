"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Display = require("../../Display");

var _Logo = _interopRequireDefault(require("../../Logo"));

var _Button = _interopRequireDefault(require("../../Button"));

var _reactIntl = require("react-intl");

var _SVG = require("../../SVG");

global.console = {
  error: jest.fn()
};
describe('PhoneDisplay', () => {
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Display.PhoneDisplay, {
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "contractor"
        })
      }),
      button: _react.default.createElement(_Button.default, {
        type: "bordered"
      }, "question@contect.ca"),
      bottomSvgComponent: _react.default.createElement(_SVG.RoofingPhoneBg, null)
    }, "test"));
    expect(wrapper).toMatchSnapshot();
  });
  it('should console.error when not passing a logo', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Display.PhoneDisplay, {
      button: _react.default.createElement(_Button.default, {
        type: "bordered"
      }, "question@contect.ca"),
      bottomSvgComponent: _react.default.createElement(_SVG.RoofingPhoneBg, null)
    }, "test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a button', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Display.PhoneDisplay, {
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "contractor"
        })
      }),
      bottomSvgComponent: _react.default.createElement(_SVG.RoofingPhoneBg, null)
    }, "test"));
    expect(global.console.error).toBeCalled();
  });
  it('should console.error when not passing a bottomSvgComponent', () => {
    (0, _enzyme.shallow)(_react.default.createElement(_Display.PhoneDisplay, {
      logo: _react.default.createElement(_Logo.default, {
        type: "roofing",
        suffix: _react.default.createElement(_reactIntl.FormattedMessage, {
          id: "contractor"
        })
      }),
      button: _react.default.createElement(_Button.default, {
        type: "bordered"
      }, "question@contect.ca")
    }, "test"));
    expect(global.console.error).toBeCalled();
  });
});