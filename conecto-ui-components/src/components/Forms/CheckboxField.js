import React from 'react'
import { Field } from 'formik'

import { Checkbox } from '../../_components/Input'

const CheckboxField = ({
  type,
  name,
  id,
  label,
  placeholder,
  autoComplete = false,
  error,
  disabled = false,
  value,
  checked,
}) => (
  <Field
    name={name}
    type={type}
    render={({ field }) => (
      <div className={`form-field ${error ? 'has-error' : ''}`}>
        <Checkbox id={id} {...field} label={label} checked={checked} />
      </div>
    )}
  />
)

export default CheckboxField
