import React from 'react'
import { Field } from 'formik'
import { TextArea } from 'conecto-ui-components'

const TextAreaField = ({
  type,
  name,
  id,
  label,
  placeholder,
  autoComplete = false,
  error,
}) => (
  <Field
    name={name}
    type={type}
    render={({ field }) => (
      <TextArea
        id={id}
        type={type}
        name={name}
        label={label}
        {...field}
        autoComplete={autoComplete || name}
        error={error}
      />
    )}
  />
)

export default TextAreaField
