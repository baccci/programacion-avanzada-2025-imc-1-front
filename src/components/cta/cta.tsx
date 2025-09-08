import type { VariantProps } from 'class-variance-authority'
import Link from 'next/link'
import type React from 'react'
import { Button, type ButtonProps, type buttonVariants } from '../button'
import { cn } from '../utils/taildwind-class-merge'
import { ctaVariants } from './variants'

type ButtonVariants = VariantProps<typeof buttonVariants>

export type CtaProps = Omit<ButtonProps, keyof ButtonVariants> &
  VariantProps<typeof ctaVariants>

export const Cta: React.FC<CtaProps> = ({
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <Button
      className={cn(ctaVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </Button>
  )
}

type CtaLinkProps = React.ComponentProps<'a'> & VariantProps<typeof ctaVariants>

export const CtaLink: React.FC<CtaLinkProps> = ({
  href = '#',
  children,
  className,
  variant,
  size,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        'flex items-center',
        ctaVariants({ variant, size, className })
      )}
      {...props}
    >
      {children}
    </Link>
  )
}
