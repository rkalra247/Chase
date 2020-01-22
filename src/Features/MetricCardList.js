import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import MetricCard from './MetricCard'
import { GET_ATTRIBUTE_SELECTIONS } from '../queries'
import _ from 'lodash'

export default () => {
  const { data = [] } = useQuery(GET_ATTRIBUTE_SELECTIONS)

  const selections = _.get(data, 'selections', [])
  const mapList = selections.map((d, i) => {
    return (<MetricCard metric={d} key={i} />)
  })

  return (
    <div style={{ margin: '15px', textAlign: 'center' }}>
      {mapList}
    </div>
  )
}
