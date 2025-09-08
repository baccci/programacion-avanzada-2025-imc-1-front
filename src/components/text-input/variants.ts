import { cn } from '@/components/utils/taildwind-class-merge'
import { cva } from 'class-variance-authority'

const DEFAULT_OUTLINE_STYLES = 'focus-within:outline-2 focus-within:outline-offset-2 focus-within:outline-ring'
const DEFAULT_PLACEHOLDER_STYLES = '[--placeholder-color:rgb(143,143,143)] hover:[--placeholder-color:rgb(125,125,125)]'
const SOFT_GRAY_PLACEHOLDER_STYLES = '[--placeholder-color:var(--soft-gray)] hover:[--placeholder-color:var(--soft-gray)]'

const baseInputStyles = cn('rounded-lg flex items-center text-sm hover:brightness-[98%] transition-[color,filter] duration-150', DEFAULT_OUTLINE_STYLES, DEFAULT_PLACEHOLDER_STYLES)
const defaultInputStyles = 'bg-input-bg'
const outlinedInputStyles = cn('border border-border bg-transparent', SOFT_GRAY_PLACEHOLDER_STYLES)
const ghostInputStyles = cn('bg-transparent border-none', SOFT_GRAY_PLACEHOLDER_STYLES)

export const inputsVariants = cva(
  baseInputStyles,
  {
    variants: {
      variant: {
        default: defaultInputStyles,
        outlined: outlinedInputStyles,
        ghost: ghostInputStyles
      },
      size: {
        sm: 'h-8',
        default: 'h-9',
        lg: 'h-10',
        xl: 'h-11 rounded-xl'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)
