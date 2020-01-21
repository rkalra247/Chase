/* global describe it beforeAll expect */
import { setMetricColors, getMetricColor } from './colors'

describe('metric colors', () => {
  beforeAll(() => {
    setMetricColors(['waterTemp', 'fireworks', 'monitor'])
  })
  it('should return red for waterTemp', () => {
    expect(getMetricColor('waterTemp')).toEqual('#ff0000')
  })
  it('should return bluegreen for monitor', () => {
    expect(getMetricColor('monitor')).toEqual('#23858c')
  })
  it('should return undefined for nonexistant metrics', () => {
    expect(getMetricColor('bla')).toEqual(undefined)
  })
})
