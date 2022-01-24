"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Input = require("../../Input");

global.Element = {};
global.console = {
  error: jest.fn()
};
const onPressEnter = jest.fn();
const onKeyDown = jest.fn();
const onChange = jest.fn();
const onBlur = jest.fn();

const setupGoogleMock = () => {
  /*** Mock Google Maps JavaScript API ***/
  const google = {
    maps: {
      places: {
        AutocompleteService: function () {},
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS'
        }
      },
      Geocoder: () => {},
      GeocoderStatus: {
        ERROR: 'ERROR',
        INVALID_REQUEST: 'INVALID_REQUEST',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS'
      }
    }
  };
  global.window.google = google;
};

describe('AddressAutocomplete', () => {
  beforeEach(() => {
    setupGoogleMock();
    global.console.error.mockClear();
    onPressEnter.mockClear();
    onKeyDown.mockClear();
    onChange.mockClear();
    onBlur.mockClear();
  });
  it('should match snapshot', () => {
    const wrapper = (0, _enzyme.shallow)(_react.default.createElement(_Input.AddressAutocomplete, {
      id: "testField",
      name: "testField",
      type: "text",
      label: "Address"
    }));
    expect(wrapper).toMatchSnapshot();
  });
  it('should match mounted snapshot', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.AddressAutocomplete, {
      id: "testField",
      name: "testField",
      type: "text",
      label: "Address"
    }));
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('should have the "focused" class when focus on input', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.AddressAutocomplete, {
      id: "testField",
      name: "testField",
      type: "text",
      label: "Address"
    }));
    wrapper.find('input').last().simulate('focus');
    expect(wrapper.render().hasClass('focused')).toEqual(true);
    wrapper.unmount();
  });
  it('should handle Enter key press correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.AddressAutocomplete, {
      id: "testField",
      name: "testField",
      type: "text",
      label: "Address",
      onPressEnter: onPressEnter
    }));
    wrapper.find('input').last().simulate('keyDown', {
      keyCode: 13
    });
    expect(onPressEnter).toBeCalled();
    wrapper.unmount();
  });
  it('should handle Key Down correctly', () => {
    const wrapper = (0, _enzyme.mount)(_react.default.createElement(_Input.AddressAutocomplete, {
      id: "testField",
      name: "testField",
      type: "text",
      label: "Address",
      onKeyDown: onKeyDown
    }));
    wrapper.find('input').last().simulate('keyDown', {
      keyCode: 1
    });
    expect(onKeyDown).toBeCalled();
    wrapper.unmount();
  });
});