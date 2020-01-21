import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { MultiSelect } from '../components/MultiSelect'
import { GET_METRICS } from '../queries'
import _ from 'lodash'

export default () => {
  let options = []
  const { loading, error, data = {} } = useQuery(GET_METRICS)
  const serverResults = _.get(data, 'getMetrics', []).sort()
  if (serverResults.length) {
    options = serverResults.map(value => {
      return {
        value,
        label: value
      }
    })
  }

  return (
    <div style={{ width: '95%', margin: '10px auto', boxSizing: 'border-box' }}>
      <MultiSelect options={options} onChange={(e) => {
        console.log(e)
      }} loading={loading} error={error} />
    </div>
  )
}
