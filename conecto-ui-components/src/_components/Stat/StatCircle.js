import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { useCountUp } from 'react-countup'

import { CardStat } from '../Card'

const StatCircle = ({ className, icon, title, notice, number }) => {
  const { countUp } = useCountUp({
    start: 0,
    end: number,
    delay: 0,
    duration: 2,
  })
  const classes = classNames({
    'to-stat-circle': true,
    [`${className}`]: className,
  })

  return (
    <CardStat className={classes} icon={icon} title={title}>
      <div
        className={`progress-circle p${countUp} ${countUp >= 50 && 'over50'}`}
      >
        <span>{countUp}%</span>
        <div className="left-half-clipper">
          <div className="first50-bar" />
          <div className="value-bar" />
        </div>
      </div>
      {notice && <div className="notice">{notice}</div>}
    </CardStat>
  )
}

StatCircle.defaultProps = {}

StatCircle.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  notice: PropTypes.string,
}

export default StatCircle
