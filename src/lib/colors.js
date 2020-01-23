let colorMap = {}
const colors = [
  '#ff0000',
  '#8c7e46',
  '#23858c',
  '#6600bf',
  '#bfb300',
  '#332200'
]

export const setMetricColors = (arr) => {
  colorMap = arr.reduce((acc, m, i) => {
    acc[m] = colors[i]
    return acc
  }, {})
}

export const getMetricColor = (metric) => {
  return colorMap[metric]
}
