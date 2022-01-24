import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import Icon, { IconTypePropTypes } from '../Icon'

const CheckPoint = ({ className, iconType, children }) => {
  const classes = classNames({
    'to-check-point': true,
    [`${className}`]: className,
  })

  return (
    <div className={classes}>
      <div className="circle">
        <div className="icon">
          <Icon type={iconType} />
        </div>
      </div>
      <span className="text">
        <span>{children}</span>
      </span>
    </div>
  )
}

CheckPoint.defaultProps = {
  iconType: 'check',
}

CheckPoint.propTypes = {
  iconType: IconTypePropTypes,
  className: PropTypes.string,
  children: PropTypes.string.isRequired,
}

export default CheckPoint
