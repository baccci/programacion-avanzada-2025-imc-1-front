import type { HTMLMotionProps } from 'motion/react'
import type { IMC_CATEGORIES_TYPE } from '../../constants/imc'

export type CalculatorBarsProps = HTMLMotionProps<'div'> & {
  imc: number
  category: IMC_CATEGORIES_TYPE | undefined
}
