import React from 'react'
import { Field } from 'formik'
import { Switch } from 'conecto-ui-components'

const SwitchField = ({
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
      <Switch
        id={id}
        {...field}
        label={label}
        disabled={disabled}
        checked={checked}
        error={error}
      />
    )}
  />
)

export default SwitchField
