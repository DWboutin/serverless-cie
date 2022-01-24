import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

import Label from './Label'
import InputError from './InputError'

class TextArea extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      value: props.value || '',
      focus: false,
    }

    this.input = React.createRef()

    this.classesPrefix = 'to-textarea'

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleFieldChange = this.handleFieldChange.bind(this)
    this.handleFieldBlur = this.handleFieldBlur.bind(this)
    this.handleFieldFocus = this.handleFieldFocus.bind(this)
  }

  static getDerivedStateFromProps(nextProps) {
    if (nextProps && nextProps.value && nextProps.value.length > 0) {
      return {
        value: nextProps.value,
      }
    }
    return null
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

    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  handleFieldChange(e) {
    e.persist()
    const { onChange } = this.props

    this.setState({
      value: e.target.value,
    })

    if (onChange) {
      onChange(e)
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

  render() {
    const { id, name, label, error, type, className, active } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      active: this.state.value !== '' || active,
      focused: this.state.focus,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'active',
      'onChange',
      'onBlur',
      'label',
      'error',
    ])

    return (
      <div className={classes} id={`${this.classesPrefix}-${id}`}>
        <textarea
          type={type}
          name={name}
          id={id}
          className="to-textarea-field"
          {...componentProps}
          onChange={this.handleFieldChange}
          onFocus={this.handleFieldFocus}
          onBlur={this.handleFieldBlur}
          onKeyDown={this.handleKeyDown}
          value={this.state.value}
          ref={this.input}
          aria-label={label}
          aria-labelledby={`${this.classesPrefix}-${id}-label`}
        />
        {label && (
          <Label
            htmlFor={id}
            className="to-textarea-label"
            id={`${this.classesPrefix}-${id}-label`}
          >
            {label}
          </Label>
        )}
        {error && <InputError>{error}</InputError>}
      </div>
    )
  }
}

TextArea.defaultProps = {}

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.oneOf([
    'text',
    'email',
    'date',
    'email',
    'hidden',
    'password',
    'search',
    'tel',
    'url',
  ]),
  onChange: PropTypes.func,
  onBlur: PropTypes.func,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  autoComplete: PropTypes.string,
  autofocus: PropTypes.bool,
  readonly: PropTypes.bool,
}

export default TextArea
