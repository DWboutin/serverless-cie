import React from 'react'
import { Field } from 'formik'
import { Input } from 'conecto-ui-components'

const TextField = ({
  type,
  name,
  id,
  label,
  placeholder,
  autoComplete = false,
  error,
  disabled,
}) => (
  <Field
    name={name}
    type={type}
    render={({ field }) => (
      <Input
        id={id}
        type={type}
        name={name}
        label={label}
        {...field}
        disabled={disabled}
        autoComplete={autoComplete || name}
        error={error}
      />
    )}
  />
)

export default TextField
