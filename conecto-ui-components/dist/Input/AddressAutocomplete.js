"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = exports.googleScriptCallbackInit = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _omit = _interopRequireDefault(require("omit.js"));

var _generate = _interopRequireDefault(require("nanoid/generate"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactPlacesAutocomplete = _interopRequireWildcard(require("react-places-autocomplete"));

var _Label = _interopRequireDefault(require("./Label"));

var _InputError = _interopRequireDefault(require("./InputError"));

var _closeDropdown = _interopRequireDefault(require("../_helpers/closeDropdown"));

const googleScriptCallbackInit = () => {
  if (typeof window !== 'undefined') {
    window.INIT_GOOGLE_AUTOCOMPLETE = () => {
      if (typeof window.INIT_GOOGLE_AUTOCOMPLETE_FNS !== 'undefined') {
        window.INIT_GOOGLE_AUTOCOMPLETE_FNS.forEach(fn => fn());
      }
    };
  }
};

exports.googleScriptCallbackInit = googleScriptCallbackInit;

class AddressAutocomplete extends _react.default.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isInitialized: false,
      value: props.value || '',
      focus: false
    };
    this.input = _react.default.createRef();
    this.autocomplete = _react.default.createRef();
    this.autocompleteUUID = (0, _generate.default)('1234567890abcdefghijklmnopqrstuvwxyz', 10);
    this.classesPrefix = 'to-address-autocomplete';
    this.handleSelect = this.handleSelect.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleFieldBlur = this.handleFieldBlur.bind(this);
    this.handleFieldFocus = this.handleFieldFocus.bind(this);
    this.setAdressGeoFromGeo = this.setAdressGeoFromGeo.bind(this);
    this.setAdressStateFromGeo = this.setAdressStateFromGeo.bind(this);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (this.props && this.props.value && this.props.value.length > 0 && prevProps && prevProps.value !== this.props.value) {
      this.setState({
        value: this.props.value
      });
    }

    if (this.state.value !== prevState.value) {
      const event = {
        persist: () => {},
        target: {
          type: 'change',
          id: this.props.id,
          name: this.props.name,
          value: this.state.value
        }
      };
      this.props.onChange(event);
    }

    return null;
  }

  componentDidMount() {
    const self = this;

    if (typeof window !== 'undefined') {
      if (!window.google) {
        if (typeof window.INIT_GOOGLE_AUTOCOMPLETE_FNS === 'undefined') {
          window.INIT_GOOGLE_AUTOCOMPLETE_FNS = [];
        }

        window.INIT_GOOGLE_AUTOCOMPLETE_FNS.push(function () {
          self.setState({
            isInitialized: true
          });
        });
      } else {
        self.setState({
          isInitialized: true
        });
      }
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value && this.props.value.length === 0) {
      this.setState({
        value: ''
      });
    }
  }

  handleKeyDown(e) {
    const {
      onPressEnter,
      onKeyDown
    } = this.props;

    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e);
    }

    if (typeof e.keyCode === 'undefined') {
      setTimeout(this.autocomplete.current.fetchPredictions, 50);
    }

    if (onKeyDown) {
      onKeyDown(e);
    }
  }

  handleSelect(address) {
    this.handleFieldChange(address);
    this.setState({
      value: address
    }, () => {
      (0, _reactPlacesAutocomplete.geocodeByAddress)(address).then(results => {
        this.setAdressStateFromGeo(results[0]);
        return (0, _reactPlacesAutocomplete.getLatLng)(results[0]);
      }).then(latLng => {
        this.setAdressGeoFromGeo(latLng);
      }).catch(error => console.error('Error', error));
    });
  }

  handleFieldChange(value) {
    const {
      onChange
    } = this.props;
    this.setState({
      value: value
    });

    if (onChange) {
      onChange(value);
    }
  }

  handleFieldBlur(e) {
    const {
      onBlur
    } = this.props;
    this.setState({
      value: e.target.value.length > 0 ? e.target.value : '',
      focus: false
    });

    if (onBlur) {
      onBlur(e);
    }
  }

  handleFieldFocus() {
    this.setState({
      focus: true
    });
  }

  setAdressStateFromGeo(result) {
    const {
      onAddressChange
    } = this.props;
    const addressObj = {};
    result.address_components.forEach(addressComponent => {
      if (addressComponent.types.indexOf('street_number') >= 0) {
        addressObj.number = addressComponent.long_name;
      } else if (addressComponent.types.indexOf('route') >= 0) {
        addressObj.address = addressComponent.long_name;
      } else if (addressComponent.types.indexOf('locality') >= 0) {
        addressObj.city = addressComponent.long_name;
      } else if (addressComponent.types.indexOf('administrative_area_level_1') >= 0) {
        addressObj.state = addressComponent.short_name;
      } else if (addressComponent.types.indexOf('country') >= 0) {
        addressObj.country = addressComponent.short_name;
      } else if (addressComponent.types.indexOf('postal_code') >= 0) {
        addressObj.postalCode = addressComponent.long_name;
      }
    });
    this.setState({
      correctAddress: addressObj,
      address: result.formatted_address
    });

    if (onAddressChange) {
      onAddressChange(addressObj);
    }
  }

  setAdressGeoFromGeo(latLng) {
    const {
      onLatLngChange
    } = this.props;
    this.setState({
      geo: latLng
    });

    if (onLatLngChange) {
      onLatLngChange(latLng);
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
      debounce
    } = this.props;
    const classes = (0, _classnames.default)({
      [this.classesPrefix]: true,
      active: this.state.value !== '' || active,
      focused: this.state.focus,
      [`${className}`]: className
    });
    const componentProps = (0, _omit.default)(this.props, ['active', 'label', 'error', 'onAddressChange', 'onLatLngChange']);
    return _react.default.createElement("div", {
      className: classes,
      id: `${this.classesPrefix}-${id}`
    }, this.state.isInitialized && _react.default.createElement(_reactPlacesAutocomplete.default, {
      value: this.state.value,
      onChange: this.handleFieldChange,
      onSelect: this.handleSelect,
      onBlur: this.handleFieldBlur,
      debounce: debounce,
      searchOptions: {
        componentRestrictions: {
          country: 'ca'
        }
      },
      shouldFetchSuggestions: this.state.value.length >= 8,
      ref: this.autocomplete
    }, ({
      getInputProps,
      suggestions,
      getSuggestionItemProps,
      loading
    }) => _react.default.createElement(_react.default.Fragment, null, _react.default.createElement("input", Object.assign({
      type: type,
      name: name,
      id: id,
      className: "to-input-field"
    }, componentProps, getInputProps(), {
      onFocus: this.handleFieldFocus,
      onKeyDown: this.handleKeyDown,
      autoComplete: `autocomplete_off_${this.autocompleteUUID}`,
      ref: this.input,
      "aria-label": label,
      "aria-labelledby": `${this.classesPrefix}-${id}-label`
    })), label && _react.default.createElement(_Label.default, {
      htmlFor: id,
      className: "to-input-label",
      id: `${this.classesPrefix}-${id}-label`
    }, label), _react.default.createElement("div", {
      className: `to-address-autocomplete-choices${suggestions.length > 0 ? ' active' : ''}`
    }, _react.default.createElement("ul", null, loading && _react.default.createElement("li", null, "Loading..."), suggestions.map(suggestion => {
      const className = suggestion.active ? 'selected' : '';
      return _react.default.createElement("li", getSuggestionItemProps(suggestion, {
        className
      }), suggestion.description);
    }))))), error && _react.default.createElement(_InputError.default, null, error));
  }

}

AddressAutocomplete.defaultProps = {
  type: 'text',
  debounce: 450
};
AddressAutocomplete.propTypes = {
  id: _propTypes.default.string.isRequired,
  name: _propTypes.default.string.isRequired,
  label: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  error: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.element]),
  type: _propTypes.default.oneOf(['text']),
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func,
  onAddressChange: _propTypes.default.func,
  onLatLngChange: _propTypes.default.func,
  disabled: _propTypes.default.bool,
  placeholder: _propTypes.default.string,
  autoComplete: _propTypes.default.string,
  autofocus: _propTypes.default.bool,
  readonly: _propTypes.default.bool,
  debounce: _propTypes.default.number
};
var _default = AddressAutocomplete;
exports.default = _default;