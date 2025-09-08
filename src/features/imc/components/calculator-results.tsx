import type React from 'react'
import { ConditionalRender } from '@/components/conditional-render'
import { cn } from '@/components/utils/taildwind-class-merge'
import type { IMCResult } from '../services/get-imc'
import { CalculatorBars } from './calcutator-bars/calculator-bars'

type CalculatorResultProps = Omit<React.ComponentProps<'div'>, 'results'> & {
  results: IMCResult | undefined
}

export const CalculatorResults: React.FC<CalculatorResultProps> = ({
  className,
  results,
  ...props
}) => {
  const showResults = !(!results?.categoria || !results?.imc)
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-2xl bg-input-black-bg p-4 mb-5',
        className
      )}
      {...props}
    >
      <ConditionalRender condition={!showResults}>
        <div className="text-[#8f8f8f] text-base mx-auto tracking-tight">
          Resultados
        </div>
      </ConditionalRender>
      <ConditionalRender condition={showResults}>
        <div className="flex flex-col gap-2 text-input-white">
          <div className="p-4 rounded-lg bg-[#2d2d2d]">
            IMC: <strong className="text-white">{results?.imc}</strong>
          </div>
          <div className="p-4 rounded-lg bg-[#2d2d2d]">
            Categoría:{' '}
            <strong className="text-white">{results?.categoria}</strong>
          </div>
        </div>
        <CalculatorBars imc={results?.imc || 0} category={results?.categoria} />
      </ConditionalRender>
    </div>
  )
}
