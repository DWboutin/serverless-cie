import React from 'react'
import classNames from 'classnames'

import PropTypes from 'prop-types'

const TabPanel = ({ className, children, inactive }) => {
  const classes = classNames({
    ['to-tabs-panel']: true,
    [`${className}`]: className,
    inactive: inactive,
  })

  return <div className={classes}>{children}</div>
}

TabPanel.defaultProps = {
  clickDisabled: false,
}

TabPanel.propTypes = {
  clickDisabled: PropTypes.bool.isRequired,
}

export default TabPanel
