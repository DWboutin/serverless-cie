import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

const TabTitle = ({
  className,
  active,
  title,
  onClick,
  clickDisabled,
  index,
}) => {
  const classes = classNames({
    ['to-tabs-title']: true,
    [`${className}`]: className,
    'click-disabled': clickDisabled,
    active: active,
  })
  const compProp = {}

  if (!clickDisabled) {
    compProp.onClick = onClick
  }

  return (
    <li className={classes} data-index={index} {...compProp}>
      <span>{title}</span>
    </li>
  )
}

TabTitle.defaultProps = {
  clickDisabled: false,
}

TabTitle.propTypes = {
  className: PropTypes.string,
  active: PropTypes.bool,
  clickDisabled: PropTypes.bool,
  index: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default TabTitle
