import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import omit from 'omit.js'

const Card = ({ className, withIcon, type, icon, children, ...props }) => {
  const classes = classNames({
    'to-card': true,
    [`to-card-${type}`]: type,
    ['to-card-with-icon']: withIcon,
    [`${className}`]: className,
  })
  const componentProps = omit(props, [
    'className',
    'withIcon',
    'type',
    'icon',
    'children',
  ])

  return (
    <div className={classes} {...componentProps}>
      {withIcon && <div className="icon-wrapper">{icon}</div>}
      <div className="to-card-wrap">{children}</div>
    </div>
  )
}

Card.defaultProps = {
  withIcon: false,
  type: 'bordered',
}

Card.propTypes = {
  type: PropTypes.oneOf(['bordered', 'shadowed']).isRequired,
  withIcon: PropTypes.bool.isRequired,
  children: PropTypes.any.isRequired,
  icon: PropTypes.element,
}

export default Card
