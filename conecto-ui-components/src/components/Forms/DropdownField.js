import React from 'react'
import { Field } from 'formik'

import { DropdownList } from '../../_components/Input'

const DropdownField = ({
  type,
  name,
  id,
  label,
  placeholder,
  autoComplete = false,
  error,
  children,
}) => (
  <Field
    name={name}
    type={type}
    render={({ field }) => (
      <div className={`form-field ${error ? 'has-error' : ''}`}>
        <DropdownList id={id} {...field} label={label}>
          {children}
        </DropdownList>
      </div>
    )}
  />
)

export default DropdownField
