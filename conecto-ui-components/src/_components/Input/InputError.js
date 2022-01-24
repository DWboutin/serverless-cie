import React from 'react'
import PropTypes from 'prop-types'

const InputError = ({ children }) => (
  <div className="to-input-error">{children}</div>
)

InputError.defaultProps = {}

InputError.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
}

export default InputError
