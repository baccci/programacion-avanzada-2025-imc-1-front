import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'

import type { ErrorProps } from './types'

export const InputError: React.FC<ErrorProps> = ({
	className,
	children,
	...rest
}) => {
	return (
		<span className={cn('text-sm text-red-600', className)} {...rest}>
			{children}
		</span>
	)
}
