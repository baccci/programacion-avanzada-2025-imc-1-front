'use client'

import type { DateValue } from '@internationalized/date'
import { CalendarIcon } from 'lucide-react'
import {
  Button,
  DatePicker,
  type DatePickerProps,
  Dialog,
  Group,
  Popover
} from 'react-aria-components'
import { Calendar } from '@/components/calendar-rac'
import { DateInput } from '@/components/datefield-rac'
import { cn } from '@/lib/utils'

type IMCDatePickerProps = DatePickerProps<DateValue>
export default function IMCDatePicker({
  className,
  ...props
}: IMCDatePickerProps) {
  return (
    <DatePicker className={cn('*:not-first:mt-2', className)} {...props}>
      <div className="flex">
        <Group className="w-full">
          <DateInput className="pe-9" />
        </Group>
        <Button
          className={`text-muted-foreground hover:text-jordy-blue-600 data-focus-visible:border-ring 
          data-focus-visible:ring-ring/50 z-10 -ms-9 -me-px flex w-9 items-center justify-center 
          rounded-e-md transition-[color,box-shadow] outline-none data-focus-visible:ring-[3px]`}
        >
          <CalendarIcon size={16} />
        </Button>
      </div>
      <Popover
        className={`bg-dark text-slate-400 data-entering:animate-in data-exiting:animate-out 
          data-[entering]:fade-in-0 data-[exiting]:fade-out-0 data-[entering]:zoom-in-95 
          data-[exiting]:zoom-out-95 data-[placement=bottom]:slide-in-from-top-2
          data-[placement=left]:slide-in-from-right-2 data-[placement=right]:slide-in-from-left-2 
          data-[placement=top]:slide-in-from-bottom-2 z-50 rounded-lg border border-jordy-blue-900/50 shadow-lg outline-hidden`}
        offset={4}
      >
        <Dialog className="max-h-[inherit] overflow-auto p-2">
          <Calendar />
        </Dialog>
      </Popover>
    </DatePicker>
  )
}
