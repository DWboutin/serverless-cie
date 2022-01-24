import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

import InputError from './InputError'

class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value || props.checked || false,
      focus: props.focused || false,
    }

    this.checkbox = React.createRef()

    this.classesPrefix = 'to-checkbox'

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleFieldBlur = this.handleFieldBlur.bind(this)
    this.handleFieldFocus = this.handleFieldFocus.bind(this)
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps && nextProps.value) {
      return {
        value: nextProps.value,
      }
    }
    return null
  }

  handleKeyDown(e) {
    const { disabled } = this.props

    if (!disabled && e.keyCode === 13) {
      this.setState(
        {
          value: !this.state.value,
        },
        () => {
          this.checkbox.current.dispatchEvent(
            new MouseEvent('click', {
              view: window,
              bubbles: true,
              cancelable: false,
            })
          )
        }
      )
    }
  }

  handleFieldChange(e) {
    const { onChange } = this.props

    this.setState({
      value: e.target.checked,
    })

    if (onChange) {
      onChange(e)
    }
  }

  handleFieldBlur() {
    this.setState({
      focus: false,
    })
  }

  handleFieldFocus() {
    this.setState({
      focus: true,
    })
  }

  render() {
    const { id, disabled, name, label, error, className } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      'is-disabled': disabled,
      checked: this.state.value,
      focused: this.state.focus,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'active',
      'placeholder',
      'autoComplete',
      'onChange',
      'onBlur',
      'onKeyDown',
      'label',
      'error',
      'value',
      'focused',
      'checked',
    ])

    return (
      <label
        htmlFor={id}
        className={classes}
        id={`${this.classesPrefix}-${id}`}
      >
        <input
          type="checkbox"
          name={name}
          id={id}
          className="to-input-checkbox"
          {...componentProps}
          onChange={this.handleFieldChange}
          onKeyDown={this.handleKeyDown}
          onBlur={this.handleFieldBlur}
          onFocus={this.handleFieldFocus}
          disabled={disabled}
          checked={this.state.value}
          ref={this.checkbox}
          aria-label={label}
        />
        {label && <div className="to-checkbox-label">{label}</div>}
        {error && <InputError>{error}</InputError>}
      </label>
    )
  }
}

Checkbox.defaultProps = {}

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  value: PropTypes.bool,
  checked: PropTypes.bool,
  focused: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  autofocus: PropTypes.bool,
  readonly: PropTypes.bool,
}

export default Checkbox
