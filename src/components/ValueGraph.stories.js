import React from 'react'
import { LineGraph } from './ValueGraph'

export default {
  title: 'LineGraph',
  component: LineGraph
}

const data = [
  {
    'name': 'Page A',
    'uv': 4,
    'pv': 2400,
    'zh': 530
  },
  {
    'name': 'Page B',
    'uv': 3,
    'pv': 1398,
    'zh': 400
  },
  {
    'name': 'Page C',
    'uv': 2,
    'pv': 9800,
    'zh': 350
  },
  {
    'name': 'Page D',
    'uv': 2.7,
    'pv': 3908,
    'zh': 400
  },
  {
    'name': 'Page E',
    'uv': 1.8,
    'pv': 4800,
    'zh': 100
  },
  {
    'name': 'Page F',
    'uv': 2.3,
    'pv': 3800,
    'zh': 160
  },
  {
    'name': 'Page G',
    'uv': 3.4,
    'pv': 4300,
    'zh': 190
  }
]

export const ZeroState = () => {
  const groups = {}
  return (
    <LineGraph data={data} groups={groups} xLabel={'name'} />
  )
}

export const OneGraph = () => {
  const groups = {
    uv: {
      color: 'red'
    }
  }
  return (
    <LineGraph data={data} groups={groups} xLabel={'name'} />
  )
}

export const TwoGraphs = () => {
  const groups = {
    uv: {
      color: 'blue'
    },
    pv: {
      color: 'pink'
    }
  }
  return (
    <LineGraph data={data} groups={groups} xLabel={'name'} />
  )
}

export const ThreeGraphs = () => {
  const groups = {
    uv: {
      color: 'blue'
    },
    pv: {
      color: 'pink'
    },
    zh: {
      color: 'red'
    }
  }
  return (
    <LineGraph data={data} groups={groups} xLabel={'name'} />
  )
}
