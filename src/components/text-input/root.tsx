'use client'

import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'

import type { BaseComponentProps } from './types'

export const ROOT_DISPLAYNAME = 'Wrapper'

export const Root: React.FC<BaseComponentProps> = ({
	children,
	className,
	...rest
}) => {
	return (
		<div className={cn('flex flex-col gap-2', className)} {...rest}>
			{children}
		</div>
	)
}

Root.displayName = ROOT_DISPLAYNAME
