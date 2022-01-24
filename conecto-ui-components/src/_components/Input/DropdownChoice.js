import React from 'react'
import PropTypes from 'prop-types'
import omit from 'omit.js'
import classNames from 'classnames'

import Icon from '../Icon'
import Label from './Label'
import InputError from './InputError'

const DropdownChoice = ({ value, className, selected, children, onClick }) => {
  const classes = classNames({
    'to-dropdown-choice': true,
    selected: selected,
    [`${className}`]: className,
  })

  return (
    <span className={classes} data-value={value} onClick={onClick}>
      {children}
    </span>
  )
}

DropdownChoice.defaultProps = {}

DropdownChoice.propTypes = {
  children: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  selected: PropTypes.bool,
}

export default DropdownChoice
