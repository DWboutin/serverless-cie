import React from 'react'
import { Field } from 'formik'

import Input from '../../_components/Input'

const TextField = ({
  type,
  name,
  id,
  label,
  placeholder,
  autoComplete = false,
  error,
  disabled = false,
}) => (
  <Field
    name={name}
    type={type}
    render={({ field }) => (
      <div className={`form-field ${error ? 'has-error' : ''}`}>
        <Input
          id={id}
          type={type}
          label={label}
          {...field}
          placeholder={placeholder}
          autoComplete={autoComplete || name}
          disabled={disabled}
        />
      </div>
    )}
  />
)

export default TextField
