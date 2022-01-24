import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const CardStat = ({ className, type, icon, title, children }) => {
  const classes = classNames({
    'to-card': true,
    [`to-card-${type}`]: type,
    'to-card-stat': true,
    [`${className}`]: className,
  })

  return (
    <div className={classes}>
      <div className="header">
        <span className="circle">{icon}</span>
        <span className="title">{title}</span>
      </div>
      <div className="to-card-wrap">{children}</div>
    </div>
  )
}

CardStat.defaultProps = {
  type: 'bordered',
}

CardStat.propTypes = {
  type: PropTypes.oneOf(['bordered', 'shadowed']).isRequired,
  children: PropTypes.any.isRequired,
  icon: PropTypes.element.isRequired,
}

export default CardStat
