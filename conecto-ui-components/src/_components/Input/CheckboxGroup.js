import React from 'react'
import PropTypes from 'prop-types'

import Label from './Label'
import InputError from './InputError'

const CheckboxGroup = ({ label, children, error }) => (
  <div className="to-checkbox-group">
    {label && <Label className="to-checkbox-group-label">{label}</Label>}
    {children}
    {error && <InputError>{error}</InputError>}
  </div>
)

CheckboxGroup.defaultProps = {}

CheckboxGroup.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
}

export default CheckboxGroup
