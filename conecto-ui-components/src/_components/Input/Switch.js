import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

import InputError from './InputError'

class Switch extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value || props.checked || false,
      focus: props.focused || false,
    }

    this.switch = React.createRef()

    this.classesPrefix = 'to-switch'

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

  componentDidUpdate(prevProps) {
    if (prevProps.value !== this.props.value) {
      this.setState({
        value: '',
      })
    }
  }

  handleKeyDown(e) {
    if (e.keyCode === 13) {
      this.setState(
        {
          value: !this.state.value,
        },
        () => {
          this.switch.current.dispatchEvent(
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
    const { id, name, label, error, className, disabled } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      checked: this.state.value,
      focused: this.state.focus,
      disabled: disabled,
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
        <div className="to-switch-wrap">
          <div className="to-switch-btn">
            <input
              type="checkbox"
              name={name}
              id={id}
              className="to-input-switch"
              {...componentProps}
              onChange={this.handleFieldChange}
              onKeyDown={this.handleKeyDown}
              onBlur={this.handleFieldBlur}
              onFocus={this.handleFieldFocus}
              checked={this.state.value}
              ref={this.switch}
              aria-label={label}
            />
          </div>
          {label && <div className="to-switch-label">{label}</div>}
        </div>
        {error && <InputError>{error}</InputError>}
      </label>
    )
  }
}

Switch.defaultProps = {}

Switch.propTypes = {
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

export default Switch
