import React from 'react'
import { Field } from 'formik'
import { AddressAutocomplete } from '../../_components/Input'

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
        autoComplete={autoComplete || name}
        error={error}
      />
    )}
  />
)

export default AddressAutocompleteField
