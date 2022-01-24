import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import nanoidGenerate from 'nanoid/generate'
import classNames from 'classnames'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'

import Label from './Label'
import InputError from './InputError'
import closeDropdown from '../_helpers/closeDropdown'

export const googleScriptCallbackInit = () => {
  if (typeof window !== 'undefined') {
    window.INIT_GOOGLE_AUTOCOMPLETE = () => {
      if (typeof window.INIT_GOOGLE_AUTOCOMPLETE_FNS !== 'undefined') {
        window.INIT_GOOGLE_AUTOCOMPLETE_FNS.forEach(fn => fn())
      }
    }
  }
}

class AddressAutocomplete extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      isInitialized: false,
      value: props.value || '',
      focus: false,
    }

    this.input = React.createRef()
    this.autocomplete = React.createRef()

    this.autocompleteUUID = nanoidGenerate(
      '1234567890abcdefghijklmnopqrstuvwxyz',
      10
    )

    this.classesPrefix = 'to-address-autocomplete'

    this.handleSelect = this.handleSelect.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleFieldBlur = this.handleFieldBlur.bind(this)
    this.handleFieldFocus = this.handleFieldFocus.bind(this)
    this.setAdressGeoFromGeo = this.setAdressGeoFromGeo.bind(this)
    this.setAdressStateFromGeo = this.setAdressStateFromGeo.bind(this)
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (
      this.props &&
      this.props.value &&
      this.props.value.length > 0 &&
      prevProps &&
      prevProps.value !== this.props.value
    ) {
      this.setState({
        value: this.props.value,
      })
    }

    if (this.state.value !== prevState.value) {
      const event = {
        persist: () => {},
        target: {
          type: 'change',
          id: this.props.id,
          name: this.props.name,
          value: this.state.value,
        },
      }

      this.props.onChange(event)
    }

    return null
  }

  componentDidMount() {
    const self = this

    if (typeof window !== 'undefined') {
      if (!window.google) {
        if (typeof window.INIT_GOOGLE_AUTOCOMPLETE_FNS === 'undefined') {
          window.INIT_GOOGLE_AUTOCOMPLETE_FNS = []
        }

        window.INIT_GOOGLE_AUTOCOMPLETE_FNS.push(function() {
          self.setState({
            isInitialized: true,
          })
        })
      } else {
        self.setState({
          isInitialized: true,
        })
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.value.length === 0) {
      this.setState({
        value: '',
      })
    }
  }

  handleKeyDown(e) {
    const { onPressEnter, onKeyDown } = this.props

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e)
    }

    if (typeof e.keyCode === 'undefined') {
      setTimeout(this.autocomplete.current.fetchPredictions, 50)
    }

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  handleSelect(address) {
    this.handleFieldChange(address)

    this.setState(
      {
        value: address,
      },
      () => {
        geocodeByAddress(address)
          .then(results => {
            this.setAdressStateFromGeo(results[0])

            return getLatLng(results[0])
          })
          .then(latLng => {
            this.setAdressGeoFromGeo(latLng)
          })
          .catch(error => console.error('Error', error))
      }
    )
  }

  handleFieldChange(value) {
    const { onChange } = this.props

    this.setState({
      value: value,
    })

    if (onChange) {
      onChange(value)
    }
  }

  handleFieldBlur(e) {
    const { onBlur } = this.props

    this.setState({
      value: e.target.value.length > 0 ? e.target.value : '',
      focus: false,
    })

    if (onBlur) {
      onBlur(e)
    }
  }

  handleFieldFocus() {
    this.setState({
      focus: true,
    })
  }

  setAdressStateFromGeo(result) {
    const { onAddressChange } = this.props
    const addressObj = {}

    result.address_components.forEach(addressComponent => {
      if (addressComponent.types.indexOf('street_number') >= 0) {
        addressObj.number = addressComponent.long_name
      } else if (addressComponent.types.indexOf('route') >= 0) {
        addressObj.address = addressComponent.long_name
      } else if (addressComponent.types.indexOf('locality') >= 0) {
        addressObj.city = addressComponent.long_name
      } else if (
        addressComponent.types.indexOf('administrative_area_level_1') >= 0
      ) {
        addressObj.state = addressComponent.short_name
      } else if (addressComponent.types.indexOf('country') >= 0) {
        addressObj.country = addressComponent.short_name
      } else if (addressComponent.types.indexOf('postal_code') >= 0) {
        addressObj.postalCode = addressComponent.long_name
      }
    })

    this.setState({
      correctAddress: addressObj,
      address: result.formatted_address,
    })

    if (onAddressChange) {
      onAddressChange(addressObj)
    }
  }

  setAdressGeoFromGeo(latLng) {
    const { onLatLngChange } = this.props

    this.setState({
      geo: latLng,
    })

    if (onLatLngChange) {
      onLatLngChange(latLng)
    }
  }

  render() {
    const {
      id,
      name,
      label,
      error,
      type,
      className,
      active,
      debounce,
    } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      active: this.state.value !== '' || active,
      focused: this.state.focus,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'active',
      'label',
      'error',
      'onAddressChange',
      'onLatLngChange',
    ])

    return (
      <div className={classes} id={`${this.classesPrefix}-${id}`}>
        {this.state.isInitialized && (
          <PlacesAutocomplete
            value={this.state.value}
            onChange={this.handleFieldChange}
            onSelect={this.handleSelect}
            onBlur={this.handleFieldBlur}
            debounce={debounce}
            searchOptions={{
              componentRestrictions: {
                country: 'ca',
              },
            }}
            shouldFetchSuggestions={this.state.value.length >= 8}
            ref={this.autocomplete}
          >
            {({
              getInputProps,
              suggestions,
              getSuggestionItemProps,
              loading,
            }) => (
              <>
                <input
                  type={type}
                  name={name}
                  id={id}
                  className="to-input-field"
                  {...componentProps}
                  {...getInputProps()}
                  onFocus={this.handleFieldFocus}
                  onKeyDown={this.handleKeyDown}
                  autoComplete={`autocomplete_off_${this.autocompleteUUID}`}
                  ref={this.input}
                  aria-label={label}
                  aria-labelledby={`${this.classesPrefix}-${id}-label`}
                />
                {label && (
                  <Label
                    htmlFor={id}
                    className="to-input-label"
                    id={`${this.classesPrefix}-${id}-label`}
                  >
                    {label}
                  </Label>
                )}
                <div
                  className={`to-address-autocomplete-choices${
                    suggestions.length > 0 ? ' active' : ''
                  }`}
                >
                  <ul>
                    {loading && <li>Loading...</li>}
                    {suggestions.map(suggestion => {
                      const className = suggestion.active ? 'selected' : ''
                      return (
                        <li
                          {...getSuggestionItemProps(suggestion, {
                            className,
                          })}
                        >
                          {suggestion.description}
                        </li>
                      )
                    })}
                  </ul>
                </div>
              </>
            )}
          </PlacesAutocomplete>
        )}
        {error && <InputError>{error}</InputError>}
      </div>
    )
  }
}

AddressAutocomplete.defaultProps = {
  type: 'text',
  debounce: 450,
}

AddressAutocomplete.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf(['text']),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  onAddressChange: PropTypes.func,
  onLatLngChange: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  autofocus: PropTypes.bool,
  readonly: PropTypes.bool,
  debounce: PropTypes.number,
}

export default AddressAutocomplete
