import gql from 'graphql-tag'

export const GET_METRICS = gql`
  {getMetrics}
`

export const LAST_METRIC = gql`
query getLastKnownMeasurement($metricName: String!){
  getLastKnownMeasurement(metricName: $metricName){
   metric, at, value, unit
  }
}
`

export const GET_ATTRIBUTE_SELECTIONS = gql`
  {
    selections @client,
    selectionTime @client
  }
`

export const GET_MULTIPLE_MEASUREMENTS = gql`
query getMultipleMeasurements($metrics: [MeasurementQuery]){
  getMultipleMeasurements(input: $metrics){
   metric, measurements { metric, unit, at, value}
  }
}
`

export const SUBSCRIBE_METRIC = gql`
subscription {
  newMeasurement {
      metric,
      at,
      value,
      unit
  }
}
`
