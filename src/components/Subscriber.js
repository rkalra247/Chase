import React from 'react'
import { useSubscription, useApolloClient } from '@apollo/react-hooks'
import { SUBSCRIBE_METRIC, LAST_METRIC } from '../queries'
import _ from 'lodash'

export default () => {
  const client = useApolloClient()
  const subscription = useSubscription(SUBSCRIBE_METRIC) || {}
  const newMeasurement = _.get(subscription, 'data.newMeasurement', {})

  if (newMeasurement.metric) {
    const newData = { ...newMeasurement, __typename: 'Measurement' }
    client.writeQuery({
      query: LAST_METRIC,
      variables: {
        metricName: newMeasurement.metric
      },
      data: {
        getLastKnownMeasurement: newData
      }
    })
  }
  return <div />
}
