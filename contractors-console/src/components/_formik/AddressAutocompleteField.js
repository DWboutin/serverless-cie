import React from 'react'
import { Field } from 'formik'
import { AddressAutocomplete } from 'conecto-ui-components'

const AddressAutocompleteField = ({
  type,
  name,
  id,
  label,
  placeholder,
  autoComplete = false,
  onAddressChange,
  onLatLngChange,
  error,
}) => (
  <Field
    name={name}
    type={type}
    render={({ field }) => (
      <AddressAutocomplete
        id={id}
        type={type}
        name={name}
        label={label}
        {...field}
        onAddressChange={onAddressChange}
        onLatLngChange={onLatLngChange}
        autofill="disabled"
        autoComplete="disabled"
        error={error}
      />
    )}
  />
)

export default AddressAutocompleteField
