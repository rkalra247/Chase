import React, { useState } from 'react'
import { MultiSelect } from './MultiSelect'

export default {
  title: 'MultiSelect',
  component: MultiSelect
}

export const NoOptions = () => {
  return (
    <MultiSelect options={[]} />
  )
}

export const LoadingMessage = () => {
  return (
    <MultiSelect loading />
  )
}

export const ErrorMessage = () => {
  return (
    <MultiSelect error={new Error('fetch error')} />
  )
}

export const Selection = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'mango', label: 'Mango' }
  ]
  const [values, setSelection] = useState([])
  const selectedString = values.map(e => e.value).join(',')
  return (
    <div>
      <MultiSelect options={options} onChange={(e) => {
        setSelection(e)
      }} />
      <h1>{selectedString}</h1>
    </div>
  )
}
