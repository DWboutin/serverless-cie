import React from 'react'
import classNames from 'classnames'

import Conecto from './Logos/Conecto'
import To from './Logos/To'

import PropTypes from 'prop-types'

class Logo extends React.Component {
  constructor(props) {
    super(props)

    this.classesPrefix = 'to-logo'
  }

  logoDefinition(size) {
    switch (size) {
      case 'short':
        return To
      default:
        return Conecto
    }
  }

  render() {
    const { className, size, type, suffix } = this.props
    const classes = classNames({
      [this.classesPrefix]: true,
      [`to-logo-${type}`]: type && suffix,
      [`to-logo-${size}`]: size,
      'to-logo-with-suffix': suffix,
      [`${className}`]: className,
    })
    const logoToRender = this.logoDefinition(size)

    return (
      <div className={classes}>
        <span className="to-logo-wrapper">
          {React.createElement(logoToRender)}
        </span>
        {suffix && <div className="to-logo-suffix">{suffix}</div>}
      </div>
    )
  }
}

Logo.defaultProps = {
  size: null,
  type: 'contractor',
  suffix: null,
}

Logo.propTypes = {
  size: PropTypes.oneOf(['short']),
  type: PropTypes.oneOf(['contractor', 'roofing']),
  suffix: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  className: PropTypes.string,
}

export default Logo
