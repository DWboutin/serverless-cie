import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

class Button extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-btn'
  }

  render() {
    const {
      className,
      disabled,
      htmlType,
      handleClick,
      comp,
      active,
    } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      active: active,
      'is-disabled': disabled,
      [`${this.classesPrefix}-${this.props.type}`]: this.props.type,
      [`${className}`]: className,
    })
    const componentProps = omit(this.props, [
      'comp',
      'handleClick',
      'htmlType',
      'active',
    ])

    return React.createElement(comp, {
      ...componentProps,
      type: comp === 'button' ? htmlType : '',
      onClick: handleClick,
      className: classes,
    })
  }
}

Button.defaultProps = {
  comp: 'button',
  htmlType: 'button',
  type: 'primary',
}

Button.propTypes = {
  comp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.symbol,
  ]),
  active: PropTypes.bool,
  htmlType: PropTypes.string,
  type: PropTypes.oneOf([
    'primary',
    'bordered',
    'ghost',
    'underlined',
    'menu',
    'switch',
    'filter',
    'account',
    'roofing',
  ]),
  className: PropTypes.string,
  disabled: PropTypes.bool,
  handleClick: PropTypes.func,
}

export default Button
