import type { ValidationErrorMap } from '@tanstack/react-form'
import type { MotionProps } from 'motion/react'
import { motion } from 'motion/react'
import type React from 'react'
import { ConditionalRender } from '@/components/conditional-render'

const enterAnimation: MotionProps = {
  initial: { y: -24, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.15 }
}

type CalculatorErrorsProps = React.ComponentProps<typeof motion.div> & {
  errorMap: ValidationErrorMap
}

type RawError = Record<string, Array<Record<string, unknown>>>

export const CalculatorErrors: React.FC<CalculatorErrorsProps> = ({
  errorMap,
  ...props
}) => {
  const errors = errorMap.onSubmit as RawError
  const errorsFlat = errors && Object.values(errors).flat()
  const firstError = errorsFlat?.[0]?.message as string
  const showErrors = !!firstError
  return (
    <ConditionalRender condition={showErrors}>
      <motion.div
        className={`text-white px-4 pt-4 pb-2 bg-red-900 rounded-b-2xl z-[-1]
          relative -top-3 text-sm tracking-tight`}
        {...enterAnimation}
        {...props}
      >
        {firstError}
      </motion.div>
    </ConditionalRender>
  )
}
