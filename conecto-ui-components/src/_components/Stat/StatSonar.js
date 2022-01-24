import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CountUp from 'react-countup'

import { CardStat } from '../Card'
import Icon from '../Icon'

const StatSonar = ({ className, icon, title, number, suffix }) => {
  const classes = classNames({
    'to-stat-sonar': true,
    [`${className}`]: className,
  })

  return (
    <CardStat className={classes} icon={icon} title={title}>
      <div className="sonar">
        <div className="inner-sonar">
          <div className="number">
            <span>
              <CountUp end={number} duration="2" />
              {suffix}
            </span>
          </div>
        </div>
        <div className="icon-sonar">
          <div className="icon-sonar-wrap">
            <span>
              <Icon type="marker" />
            </span>
          </div>
        </div>
      </div>
    </CardStat>
  )
}

StatSonar.defaultProps = {}

StatSonar.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  suffix: PropTypes.string,
}

export default StatSonar
