import { formOptions } from '@tanstack/react-form'
import { type ImcSchema, imcSchema } from '../schemas/imc-schema'

export const imcFormOpts = formOptions({
  defaultValues: {
    altura: '' as unknown as number,
    peso: '' as unknown as number
  } as ImcSchema,
  validators: {
    onSubmit: imcSchema
  }
})
