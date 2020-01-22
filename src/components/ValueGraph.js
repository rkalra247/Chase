import React from 'react'
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line } from 'recharts'

export const LineGraph = ({ data, groups = {}, xLabel }) => {
  const groupNames = Object.keys(groups)
  if (!groupNames.length) {
    return (
      <h1>Please select a metric from the dropdown above</h1>
    )
  }
  const yComponents = groupNames.map((key, i) => {
    return (
      <YAxis yAxisId={`left${i}`} key={i} type='number' dataKey={key} />
    )
  })
  const lineComponents = groupNames.map((key, i) => {
    return (
      <Line type='monotone' key={i} yAxisId={`left${i}`} dataKey={key} stroke={groups[key].color} animationDuration={500} />
    )
  })
  if (!yComponents.length) {
    return <h1> Unavailable </h1>
  }
  return (
    <LineChart width={750} height={250} data={data}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey='name' />
      {yComponents}
      <Tooltip />
      <Legend />
      {lineComponents}
    </LineChart>
  )
}
