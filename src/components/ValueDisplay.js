import Card from '@material-ui/core/Card'
import React from 'react'
import Typography from '@material-ui/core/Typography'

const makeCircleStyle = (color) => {
  return {
    width: '15px',
    height: '15px',
    borderRadius: '50%',
    margin: '5px',
    backgroundColor: color,
    display: 'inline-block',
    verticalAlign: 'bottom'
  }
}

export const ValueDisplay = ({ subTitle, value, title = '', color, loading, error }) => {
  if (error) {
    return (
      <Card title={title} style={{ width: '200px', textAlign: 'center' }} >
        <Typography variant='h5' component='h2' >
          Error
        </Typography>
      </Card>
    )
  }
  if (loading) {
    const subTitle = title ? 'N/A' : ''
    return (
      <Card title={title} style={{ width: '200px', textAlign: 'center' }} >
        <Typography color='textSecondary' gutterBottom>
          {title}
        </Typography>
        <Typography variant='h5' component='h2' >
        Loading...
        </Typography>
        <Typography color='textSecondary' gutterBottom >
          {subTitle}
        </Typography>
      </Card>
    )
  }
  return (
    <Card title={title} style={{ width: '200px', textAlign: 'center' }} >
      <Typography color='textSecondary' gutterBottom>
        <span style={makeCircleStyle(color)} />
        {title}
      </Typography>
      <Typography variant='h5' component='h2' >
        {value}
      </Typography>
      <Typography color='textSecondary' gutterBottom>
        {subTitle}
      </Typography>
    </Card>
  )
}
