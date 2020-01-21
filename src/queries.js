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
  }
`
