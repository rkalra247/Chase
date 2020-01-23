import React from 'react'
import { ValueDisplay } from '../components/ValueDisplay'
import { getMetricColor } from '../lib/colors'
import { useQuery } from '@apollo/react-hooks'
import { LAST_METRIC } from '../queries'
import _ from 'lodash'

export default ({ metric }) => {
  const { loading, error, data = {} } = useQuery(LAST_METRIC, {
    variables: {
      metricName: metric
    }
  })
  const title = _.startCase(metric)
  const { unit, value, at } = _.get(data, 'getLastKnownMeasurement', {})
  const color = getMetricColor(metric)

  const metricValue = `${value} ${unit}`
  const dateObj = new Date(at)
  const subTitle = dateObj.toLocaleTimeString()
  return (
    <div style={{ margin: '5px' }}>
      <ValueDisplay title={title} value={metricValue} subTitle={subTitle} color={color} loading={loading} error={error} />
    </div>
  )
}
