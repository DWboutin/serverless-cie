import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import PhoneShape from '../SVG/PhoneShape'

const PhoneDisplay = ({
  className,
  logo,
  button,
  children,
  bottomSvgComponent,
}) => {
  const classes = classNames({
    'to-phone-display': true,
    [`${className}`]: className,
  })

  return (
    <div className={classes}>
      <PhoneShape />
      <div className="phone-wrapper">
        <div className="wrapper">
          <div className="header">
            <div className="logo">{logo}</div>
            <div className="button">{button}</div>
          </div>
          <div className="content">
            <div className="text-content">{children}</div>
            <div className="bottom-svg">{bottomSvgComponent}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

PhoneDisplay.defaultProps = {}

PhoneDisplay.propTypes = {
  logo: PropTypes.element.isRequired,
  button: PropTypes.element.isRequired,
  children: PropTypes.any.isRequired,
  bottomSvgComponent: PropTypes.element.isRequired,
}

export default PhoneDisplay
