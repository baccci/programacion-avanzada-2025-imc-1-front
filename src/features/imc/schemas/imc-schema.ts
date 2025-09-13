import { z } from 'zod'

export const FORM_FIELDS = {
  altura: 'altura',
  peso: 'peso'
} as const

export const FORM_FIELD_ERRORS = {
  altura: {
    min: 'La altura debe ser mayor a 140cm',
    max: 'La altura máxima es de 250cm',
    required: 'La altura es requerida'
  },
  peso: {
    min: 'El peso debe ser mayor a 30kg',
    max: 'El peso máximo es de 600kg',
    required: 'El peso es requerido'
  }
}

const heightSchema = z.number({
  error: FORM_FIELD_ERRORS.altura.required
}).min(1.4, {
  error: FORM_FIELD_ERRORS.altura.min
}).max(2.5, {
  error: FORM_FIELD_ERRORS.altura.max
})
const weightSchema = z.number({
  error: FORM_FIELD_ERRORS.peso.required
}).min(30, {
  error: FORM_FIELD_ERRORS.peso.min
}).max(600, {
  error: FORM_FIELD_ERRORS.peso.max
})

export const imcSchema = z.object({
  [FORM_FIELDS.altura]: heightSchema,
  [FORM_FIELDS.peso]: weightSchema
})

export type ImcSchema = z.infer<typeof imcSchema>