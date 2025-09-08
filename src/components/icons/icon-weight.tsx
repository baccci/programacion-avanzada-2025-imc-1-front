import type React from 'react'

type IconWeightProps = React.ComponentProps<'svg'>

export const IconWeight: React.FC<IconWeightProps> = ({
  width = 18,
  ...props
}) => {
  return (
    <svg width={width} fill="none" viewBox="0 0 18 18" {...props}>
      <g
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path d="M6.75 4.5a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0" />
        <path d="M5.126 6.75h7.748a.75.75 0 0 1 .738.616l1.228 6.75a.75.75 0 0 1-.738.884H3.899a.75.75 0 0 1-.738-.884l1.227-6.75a.75.75 0 0 1 .738-.616" />
      </g>
    </svg>
  )
}
