import useMeasure from 'react-use-measure'

export function useBars() {
  const [ref, { width }] = useMeasure()
  const barWidth = 8
  const barNumber = Math.ceil(width / barWidth)

  return {
    barNumber,
    barWidth,
    ref
  }
}
