import type React from 'react'

import { cn } from '../utils/taildwind-class-merge'

type NoiseProps = React.ComponentProps<'img'>

export const Noise: React.FC<NoiseProps> = ({ className, ...props }) => {
  return (
    <img
      src="/media/images/noise.webp"
      alt="Noise"
      className={cn(
        'absolute inset-0 size-full opacity-[50%] mix-blend-overlay pointer-events-none object-cover',
        className
      )}
      {...props}
    />
  )
}
