import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { LineGraph } from '../components/ValueGraph'
import { getMetricColor } from '../lib/colors'
import { GET_ATTRIBUTE_SELECTIONS, GET_MULTIPLE_MEASUREMENTS } from '../queries'
import _ from 'lodash'

const TEN_MINUTES = 1000 * 60 * 10

let prevData = false

const Graph = ({ selections, selectionTime }) => {
  const allMetrics = selections.map(metricName => {
    return {
      metricName, after: selectionTime - TEN_MINUTES, before: selectionTime
    }
  })

  // On Error, we will toast a message
  const { loading, data } = useQuery(GET_MULTIPLE_MEASUREMENTS, {
    variables: {
      metrics: allMetrics
    }
  })
  if (loading && !prevData && !data) {
    return <h1>Loading...</h1>
  }
  const graphData = data || prevData

  const allMeasurements = _.get(graphData, 'getMultipleMeasurements', []).map(m => m.measurements)
  if (allMeasurements) {
    prevData = graphData
  }
  const measurementObj = _.flatten(allMeasurements)
    .sort((a, b) => a.at - b.at).reduce((acc, m) => {
      const newDate = new Date(Math.floor(m.at / 10000) * 10000)
      const timeKey = newDate.toLocaleTimeString()
      const dataPoint = acc[timeKey] || {}
      dataPoint[m.metric] = m.value
      dataPoint.name = timeKey

      acc[timeKey] = dataPoint
      return acc
    }, {})
  const groups = selections.reduce((acc, metric) => {
    acc[metric] = { color: getMetricColor(metric) }
    return acc
  }, {})
  return (
    <LineGraph data={Object.values(measurementObj).splice(0, 100)} groups={groups} />
  )
}

export default () => {
  const selectionSource = useQuery(GET_ATTRIBUTE_SELECTIONS)
  const selections = _.get(selectionSource, 'data.selections', [])
  const selectionTime = _.get(selectionSource, 'data.selectionTime', false)
  return (
    <Graph selections={selections} selectionTime={selectionTime} />
  )
}
