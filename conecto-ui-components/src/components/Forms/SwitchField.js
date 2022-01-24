import React from 'react'
import { Field } from 'formik'

import { Switch } from '../../_components/Input'

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
      <div className={`form-field ${error ? 'has-error' : ''}`}>
        <Switch
          id={id}
          {...field}
          label={label}
          disabled={disabled}
          checked={checked}
        />
      </div>
    )}
  />
)

export default SwitchField
