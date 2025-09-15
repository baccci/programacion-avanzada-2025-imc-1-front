import { z } from 'zod'
import { FORM_FIELD_ERRORS, FORM_FIELDS, IMC_LIMITS } from '../constants/imc'

const heightSchema = z
  .number({
    error: FORM_FIELD_ERRORS.altura.required
  })
  .gt(IMC_LIMITS.height.min, {
    error: FORM_FIELD_ERRORS.altura.min
  })
  .max(IMC_LIMITS.height.max, {
    error: FORM_FIELD_ERRORS.altura.max
  })
const weightSchema = z
  .number({
    error: FORM_FIELD_ERRORS.peso.required
  })
  .min(IMC_LIMITS.weight.min, {
    error: FORM_FIELD_ERRORS.peso.min
  })
  .max(IMC_LIMITS.weight.max, {
    error: FORM_FIELD_ERRORS.peso.max
  })

export const imcSchema = z.object({
  [FORM_FIELDS.altura]: heightSchema,
  [FORM_FIELDS.peso]: weightSchema
})

export type ImcSchema = z.infer<typeof imcSchema>
