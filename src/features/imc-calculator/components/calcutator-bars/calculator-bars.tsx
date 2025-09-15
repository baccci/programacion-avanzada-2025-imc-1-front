'use client'

import { AnimatePresence, motion } from 'motion/react'
import { cn } from '@/components/utils/taildwind-class-merge'
import { IMC_CATEGORIES } from '../../constants/imc'
import type { CalculatorBarsProps } from './types'
import { useBars } from './use-bars'

export const CalculatorBars: React.FC<CalculatorBarsProps> = ({
  category,
  imc, // Range from 0 to 30
  ...props
}) => {
  const { ref, barNumber, barWidth } = useBars()

  // The color of the bars is based on the category
  const barColor = {
    [IMC_CATEGORIES.LOW_WEIGHT]: '#EBD027',
    [IMC_CATEGORIES.NORMAL]: '#2FA63D',
    [IMC_CATEGORIES.OVERWEIGHT]: '#e65238',
    [IMC_CATEGORIES.OBESITY]: '#E7060B'
  }[category || IMC_CATEGORIES.NORMAL]

  const maxImcContemplated = 40

  // The number of bars to show is based on the imc
  const barsPerImc = barNumber / maxImcContemplated

  // Apply a mild non-linear mapping that keeps 0 and max fixed but lifts mid values slightly
  const easeOutQuad = (t: number) => t * (2 - t)
  const mapImcNonLinear = (
    value: number,
    max: number,
    amount: number = 0.35
  ) => {
    const t = Math.min(Math.max(value / max, 0), 1)
    const eased = easeOutQuad(t)
    const mixed = t + (eased - t) * amount
    return mixed * max
  }

  const easedImc = mapImcNonLinear(imc, maxImcContemplated)
  const barsToShow = Math.floor(easedImc * barsPerImc)

  return (
    <motion.div
      key={`bars-${barNumber}-${barsToShow}`}
      className="flex w-full"
      ref={ref}
      initial="hidden"
      animate="show"
      exit="hidden"
      {...props}
    >
      {Array.from({ length: barNumber }).map((_, index) => {
        const isLastBar = index === barNumber - 1
        const marginRight = isLastBar ? 0 : barWidth / 2
        const isActiveBar = index < barsToShow
        return (
          <motion.div
            layout
            style={{ marginRight }}
            key={`${index}-bar`}
            className={cn(
              'h-6 w-1 mr-1 rounded-[1px] starting:opacity-0 opacity-100'
            )}
            initial={{ backgroundColor: '#353535' }}
            animate={{ backgroundColor: isActiveBar ? barColor : '#353535' }}
            transition={{
              backgroundColor: {
                duration: 0.18,
                delay: index * 0.01
              }
            }}
          />
        )
      })}
    </motion.div>
  )
}
