export const IMC_CATEGORIES = {
  LOW_WEIGHT: 'Bajo peso',
  NORMAL: 'Normal',
  OVERWEIGHT: 'Sobrepeso',
  OBESITY: 'Obeso',
} as const

export type IMC_CATEGORIES_TYPE = (typeof IMC_CATEGORIES)[keyof typeof IMC_CATEGORIES]