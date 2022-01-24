import React from 'react'
import { Field } from 'formik'
import { Checkbox } from 'conecto-ui-components'

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
      <Checkbox
        id={id}
        name={name}
        {...field}
        autoComplete
        label={label}
        checked={checked}
        value={value}
        error={error}
      />
    )}
  />
)

export default CheckboxField
