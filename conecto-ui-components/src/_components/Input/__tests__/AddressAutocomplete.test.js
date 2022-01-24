import React from 'react'
import { shallow, mount } from 'enzyme'

import { AddressAutocomplete } from '../../Input'

global.Element = {}
global.console = {
  error: jest.fn(),
}

const onPressEnter = jest.fn()
const onKeyDown = jest.fn()
const onChange = jest.fn()
const onBlur = jest.fn()

const setupGoogleMock = () => {
  /*** Mock Google Maps JavaScript API ***/
  const google = {
    maps: {
      places: {
        AutocompleteService: function() {},
        PlacesServiceStatus: {
          INVALID_REQUEST: 'INVALID_REQUEST',
          NOT_FOUND: 'NOT_FOUND',
          OK: 'OK',
          OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
          REQUEST_DENIED: 'REQUEST_DENIED',
          UNKNOWN_ERROR: 'UNKNOWN_ERROR',
          ZERO_RESULTS: 'ZERO_RESULTS',
        },
      },
      Geocoder: () => {},
      GeocoderStatus: {
        ERROR: 'ERROR',
        INVALID_REQUEST: 'INVALID_REQUEST',
        OK: 'OK',
        OVER_QUERY_LIMIT: 'OVER_QUERY_LIMIT',
        REQUEST_DENIED: 'REQUEST_DENIED',
        UNKNOWN_ERROR: 'UNKNOWN_ERROR',
        ZERO_RESULTS: 'ZERO_RESULTS',
      },
    },
  }
  global.window.google = google
}

describe('AddressAutocomplete', () => {
  beforeEach(() => {
    setupGoogleMock()
    global.console.error.mockClear()
    onPressEnter.mockClear()
    onKeyDown.mockClear()
    onChange.mockClear()
    onBlur.mockClear()
  })

  it('should match snapshot', () => {
    const wrapper = shallow(
      <AddressAutocomplete
        id="testField"
        name="testField"
        type="text"
        label="Address"
      />
    )

    expect(wrapper).toMatchSnapshot()
  })

  it('should match mounted snapshot', () => {
    const wrapper = mount(
      <AddressAutocomplete
        id="testField"
        name="testField"
        type="text"
        label="Address"
      />
    )

    expect(wrapper).toMatchSnapshot()

    wrapper.unmount()
  })

  it('should have the "focused" class when focus on input', () => {
    const wrapper = mount(
      <AddressAutocomplete
        id="testField"
        name="testField"
        type="text"
        label="Address"
      />
    )
    wrapper
      .find('input')
      .last()
      .simulate('focus')

    expect(wrapper.render().hasClass('focused')).toEqual(true)

    wrapper.unmount()
  })

  it('should handle Enter key press correctly', () => {
    const wrapper = mount(
      <AddressAutocomplete
        id="testField"
        name="testField"
        type="text"
        label="Address"
        onPressEnter={onPressEnter}
      />
    )
    wrapper
      .find('input')
      .last()
      .simulate('keyDown', { keyCode: 13 })

    expect(onPressEnter).toBeCalled()

    wrapper.unmount()
  })

  it('should handle Key Down correctly', () => {
    const wrapper = mount(
      <AddressAutocomplete
        id="testField"
        name="testField"
        type="text"
        label="Address"
        onKeyDown={onKeyDown}
      />
    )
    wrapper
      .find('input')
      .last()
      .simulate('keyDown', { keyCode: 1 })

    expect(onKeyDown).toBeCalled()

    wrapper.unmount()
  })
})
