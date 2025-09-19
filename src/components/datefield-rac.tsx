'use client'

import {
  composeRenderProps,
  type DateFieldProps,
  DateField as DateFieldRac,
  type DateInputProps as DateInputPropsRac,
  DateInput as DateInputRac,
  type DateSegmentProps,
  DateSegment as DateSegmentRac,
  type DateValue as DateValueRac,
  type TimeFieldProps,
  TimeField as TimeFieldRac,
  type TimeValue as TimeValueRac
} from 'react-aria-components'

import { cn } from '@/lib/utils'

function DateField<T extends DateValueRac>({
  className,
  children,
  ...props
}: DateFieldProps<T>) {
  return (
    <DateFieldRac
      className={composeRenderProps(className, (className) => cn(className))}
      {...props}
    >
      {children}
    </DateFieldRac>
  )
}

function TimeField<T extends TimeValueRac>({
  className,
  children,
  ...props
}: TimeFieldProps<T>) {
  return (
    <TimeFieldRac
      className={composeRenderProps(className, (className) => cn(className))}
      {...props}
    >
      {children}
    </TimeFieldRac>
  )
}

function DateSegment({ className, ...props }: DateSegmentProps) {
  return (
    <DateSegmentRac
      className={composeRenderProps(className, (className) =>
        cn(
          `text-input-bg data-focused:bg-[#364161] data-invalid:data-focused:bg-destructive 
          data-focused:data-placeholder:text-input-bg data-focused:text-input-bg 
          data-invalid:data-placeholder:text-destructive data-invalid:text-destructive 
          data-placeholder:text-muted-foreground data-[type=literal]:text-muted-foreground/70 
          inline rounded p-0.5 caret-transparent outline-hidden data-disabled:cursor-not-allowed 
          data-disabled:opacity-50 data-invalid:data-focused:text-white 
          data-invalid:data-focused:data-placeholder:text-white 
          data-[type=literal]:px-0`,
          className
        )
      )}
      {...props}
      data-invalid
    />
  )
}

const dateInputStyles = `relative text-input-bg inline-flex h-10 w-full items-center overflow-hidden whitespace-nowrap 
rounded-xl bg-input-black-bg px-3 py-2 text-sm transition-[color,box-shadow,background-color] outline-none 
data-focus-within:border-ring data-focus-within:ring-ring/50 data-focus-within:bg-[#292929]
data-focus-within:has-aria-invalid:ring-destructive/20 dark:data-focus-within:has-aria-invalid:ring-destructive/40 
data-focus-within:has-aria-invalid:border-destructive`

interface DateInputProps extends DateInputPropsRac {
  className?: string
  unstyled?: boolean
}

function DateInput({
  className,
  unstyled = false,
  ...props
}: Omit<DateInputProps, 'children'>) {
  return (
    <DateInputRac
      className={composeRenderProps(className, (className) =>
        cn(!unstyled && dateInputStyles, className)
      )}
      {...props}
    >
      {(segment) => <DateSegment segment={segment} />}
    </DateInputRac>
  )
}

export {
  DateField,
  DateInput,
  DateSegment,
  TimeField,
  dateInputStyles as dateInputStyle
}
export type { DateInputProps }
