import type React from 'react'
import { cn } from '@/components/utils/taildwind-class-merge'

type CalculatorLabelProps = React.ComponentProps<'label'>

export const CalculatorLabel: React.FC<CalculatorLabelProps> = ({
  className,
  children,
  htmlFor,
  ...props
}) => {
  return (
    <label
      className={cn(
        'text-input-white flex items-center gap-3 cursor-pointer w-fit text-sm',
        className
      )}
      htmlFor={htmlFor}
      {...props}
    >
      {children}
    </label>
  )
}
