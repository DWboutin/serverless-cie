import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'
import CountUp from 'react-countup'

import { CardStat } from '../Card'

const StatTwoNumbers = ({
  className,
  icon,
  title,
  number1,
  number2,
  notice1,
  notice2,
  suffix1,
  suffix2,
  disabled1,
  disabled2,
}) => {
  const classes = classNames({
    'to-stat-two-numbers': true,
    [`${className}`]: className,
  })

  return (
    <CardStat className={classes} icon={icon} title={title}>
      <div className={`number ${disabled1 && 'disabled'}`}>
        <div className="card">
          <span>
            <CountUp end={number1} duration="2" />
            {suffix1}
          </span>
        </div>
        <div className="notice">{notice1}</div>
      </div>
      <div className={`number ${disabled2 && 'disabled'}`}>
        <div className="card">
          <span>
            <CountUp end={number2} duration="2" />
            {suffix2}
          </span>
        </div>
        <div className="notice">{notice2}</div>
      </div>
    </CardStat>
  )
}

StatTwoNumbers.defaultProps = {
  disabled1: false,
  disabled2: false,
  suffix1: '',
  suffix2: '',
  notice1: '',
  notice2: '',
}

StatTwoNumbers.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  number1: PropTypes.number.isRequired,
  suffix1: PropTypes.string.isRequired,
  notice1: PropTypes.string.isRequired,
  disabled1: PropTypes.bool.isRequired,
  number2: PropTypes.number.isRequired,
  suffix2: PropTypes.string.isRequired,
  notice2: PropTypes.string.isRequired,
  disabled2: PropTypes.bool.isRequired,
}

export default StatTwoNumbers
