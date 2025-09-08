import { cva } from 'class-variance-authority'

export const passwordRightSlotBaseStyles = 'mr-1'

export const passwordRightSlotVariants = cva(
  passwordRightSlotBaseStyles,
  {
    variants: {
      size: {
        sm: 'mr-1.5',
        default: 'mr-1.5',
        lg: 'mr-2',
        xl: 'mr-2.5'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
)

const baseIconButtonVariantBaseStyles = `rounded-md p-0.5 hover:brightness-95 text-slate-600
transition-all duration-150 size-full flex items-center justify-center`
const defaultIconButtonStyles = 'bg-input-bg'
const outlinedIconButtonStyles = 'hover:brightness-100 hover:bg-gray-100 p-[1px]'
const ghostIconButtonStyles = 'hover:brightness-100 hover:bg-gray-100'

export const iconButtonVariants = cva(
  baseIconButtonVariantBaseStyles,
  {
    variants: {
      variant: {
        default: defaultIconButtonStyles,
        outlined: outlinedIconButtonStyles,
        ghost: ghostIconButtonStyles
      },
      size: {
        sm: 'p-0.5',
        default: 'p-0.5',
        lg: 'p-1',
        xl: 'p-1'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)