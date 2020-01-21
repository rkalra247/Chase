import React from 'react'
import { ValueDisplay } from './ValueDisplay'
import _ from 'lodash'

export default {
  title: 'ValueDisplay',
  component: ValueDisplay
}

export const ValueCard = () => {
  const metricData = {
    metric: 'waterTemp',
    unit: 'F',
    value: 42,
    at: 1579565669567
  }
  const color = 'blue'
  const title = _.startCase(metricData.metric)
  const value = `${metricData.value} ${metricData.unit}`
  const dateObj = new Date(metricData.at)
  const subTitle = dateObj.toLocaleTimeString()
  return (
    <ValueDisplay subTitle={subTitle} value={value} title={title} color={color} />
  )
}

export const LoadingWithTitle = () => {
  return (
    <ValueDisplay title={'Water Temp'} value={''} subTitle={''} color={''} loading />
  )
}

export const LoadingWithoutTitle = () => {
  return (
    <ValueDisplay title={''} value={''} subTitle={''} color={''} loading />
  )
}

export const DisplayWithError = () => {
  return (
    <ValueDisplay title={''} value={''} subTitle={''} color={''} error={'Error'} />
  )
}
