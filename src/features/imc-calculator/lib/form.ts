import { createFormHook, createFormHookContexts } from '@tanstack/react-form'
import { CalculatorInput } from '../components/calculator-input'

// For use in custom components
export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    CalculatorInput
  },
  formComponents: {}
})
