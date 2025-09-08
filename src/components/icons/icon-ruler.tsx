import type React from 'react'

type IconRulerProps = React.ComponentProps<'svg'>

export const IconRuler: React.FC<IconRulerProps> = ({
  width = 18,
  ...props
}) => {
  return (
    <svg width={width} fill="none" viewBox="0 0 18 10" {...props}>
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 1.444c.552 0 1 .456 1 1.016v5.08c0 .56-.448 1.016-1 1.016H1.889A.89.89 0 0 1 1 7.666V2.46c0-.56.448-1.016 1-1.016zm-9.667 0v1.778M3.667 1.444v2.667M9 1.444v2.667m5.333-2.667v2.667m-2.666-2.667v1.778"
      />
    </svg>
  )
}
