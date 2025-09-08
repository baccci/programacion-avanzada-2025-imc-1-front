import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'

import type { HintProps } from './types'

export const Hint: React.FC<HintProps> = ({ className, children, ...rest }) => {
	return (
		<span className={cn('text-sm text-gray-500', className)} {...rest}>
			{children}
		</span>
	)
}
