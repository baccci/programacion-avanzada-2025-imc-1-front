import { cva } from 'class-variance-authority'

export const ctaVariants = cva(
  `text-base text-white font-medium tracking-tight 
  focus-visible:ring-jordy-blue-400 focus-visible:outline-none ring-offset-0 ring-offset-transparent focus-visible:ring-[0px]`,
  {
    variants: {
      variant: {
        primary: 'bg-jordy-blue-600 hover:bg-jordy-blue-700',
        secondary: 'bg-transparent text-dark hover:bg-accent hover:text-accent-foreground',
        rounded: 'rounded-full bg-dark text-white'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-lg px-3',
        lg: 'h-11 rounded-xl px-8',
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'lg'
    }
  }
)