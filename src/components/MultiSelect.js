import React, { useState } from 'react'
import Select from 'react-select'

const getPlaceholder = (loading, error, options = []) => {
  if (loading) return 'Loading options...'
  if (error) return 'Error: Could not load options'
  if (!options.length) return 'No options'
  return 'Please Select'
}

export const MultiSelect = ({ options = [], onChange, loading, error }) => {
  const isDisabled = loading || error || !options.length
  const [values, setSelection] = useState(null)
  return (
    <Select
      value={values}
      isMulti
      isDisabled={isDisabled}
      placeholder={getPlaceholder(loading, error, options)}
      onChange={(e) => {
        setSelection(e)
        onChange && onChange(e || [])
      }}
      options={options}
    />
  )
}
