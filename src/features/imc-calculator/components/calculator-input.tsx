import type React from 'react'
import { cn } from '@/components/utils/taildwind-class-merge'
import { useFieldContext } from '../lib/form'

type CalculatorInputProps = React.ComponentProps<'input'>

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>

export const CalculatorInput: React.FC<CalculatorInputProps> = ({
  className,
  ...props
}) => {
  const field = useFieldContext<number>()
  const handleChange = (event: InputChangeEvent) =>
    field.handleChange(Number(event.target.value))

  return (
    <input
      className={cn(
        'w-full appearance-none text-white font-semibold text-2xl outline-none',
        className
      )}
      type="number"
      value={field.state.value}
      onChange={handleChange}
      {...props}
    />
  )
}
