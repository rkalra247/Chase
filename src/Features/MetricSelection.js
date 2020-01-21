import React from 'react'
import { useApolloClient, useQuery } from '@apollo/react-hooks'
import { MultiSelect } from '../components/MultiSelect'
import { GET_METRICS } from '../queries'
import { setMetricColors } from '../lib/colors'
import _ from 'lodash'

export default () => {
  const client = useApolloClient()

  let options = []
  const { loading, error, data = {} } = useQuery(GET_METRICS)
  const serverResults = _.get(data, 'getMetrics', []).sort()
  setMetricColors(serverResults)
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
        const result = e.map(data => data.value)
        client.writeData({ data: {
          selections: result,
          selectionTime: Date.now()
        } })
      }} loading={loading} error={error} />
    </div>
  )
}
