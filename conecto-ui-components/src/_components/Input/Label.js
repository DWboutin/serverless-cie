import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ htmlFor, className, id, children }) => (
  <label htmlFor={htmlFor} className={className} id={id}>
    {children}
  </label>
)

Label.defaultProps = {}

Label.propTypes = {
  htmlFor: PropTypes.string,
  className: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
}

export default Label
