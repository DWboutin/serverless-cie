import React from 'react'
import { Field } from 'formik'
import { DropdownList } from 'conecto-ui-components'

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
      <DropdownList id={id} {...field} label={label} error={error}>
        {children}
      </DropdownList>
    )}
  />
)

export default DropdownField
