'use client'

import { useStore } from '@tanstack/react-form'
import type React from 'react'
import { Cta } from '@/components/cta/cta'
import { IconArrow } from '@/components/icons/icon-arrow'
import { cn } from '@/components/utils/taildwind-class-merge'
import { FORM_FIELDS } from '../constants/imc'
import { useGetIMC } from '../hooks/use-imc'
import { useAppForm } from '../lib/form'
import { CalculatorErrors } from './calculator-errors'
import { CalculatorFields } from './calculator-fields'
import { CalculatorResults } from './calculator-results'
import { imcFormOpts } from './form-options'

type CalculatorProps = React.ComponentProps<'form'>

export const Calculator: React.FC<CalculatorProps> = ({
  className,
  ...props
}) => {
  const { mutateAsync, isPending, data } = useGetIMC()
  const form = useAppForm({
    ...imcFormOpts,
    onSubmit: async (values) => {
      return await mutateAsync(values.value)
    }
  })

  // Get the form error map
  const formErrorMap = useStore(form.store, (state) => state.errorMap)

  // Handle the form submit
  const handleSubmit = (e: SubmitEvent) => genericSubmit(e, form)

  // Check if the inputs are empty to disable the submit button
  const heightInputValue = useStore(
    form.store,
    (state) => state.values[FORM_FIELDS.altura]
  ) as string | number
  const weightInputValue = useStore(
    form.store,
    (state) => state.values[FORM_FIELDS.peso]
  ) as string | number
  const inputsAreEmpty = heightInputValue === '' || weightInputValue === ''

  return (
    <form.AppForm>
      <form
        className={cn('max-w-[43rem] w-full', className)}
        onSubmit={handleSubmit}
        {...props}
      >
        <div className="size-full rounded-[25px] bg-[#fff]/8 backdrop-blur-3xl p-[1px]">
          <div className="flex flex-col rounded-3xl p-4 bg-dark">
            <div className="w-full isolate relative z-[1] mb-4">
              <CalculatorFields form={form} />
              <CalculatorErrors errorMap={formErrorMap} />
            </div>
            <CalculatorResults results={data} />
            <Cta
              className="w-full font-[18px]"
              type="submit"
              loading={isPending}
              disabled={inputsAreEmpty}
            >
              Calcular IMC <IconArrow className="ml-2" strokeWidth={2} />{' '}
            </Cta>
          </div>
        </div>
      </form>
    </form.AppForm>
  )
}

type SubmitEvent = React.FormEvent<HTMLFormElement>
type Form = {
  handleSubmit: () => Promise<void>
}

function genericSubmit(e: SubmitEvent, form: Form) {
  e.preventDefault()
  form.handleSubmit()
}
