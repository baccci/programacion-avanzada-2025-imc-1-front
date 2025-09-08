'use client'

import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'
import { useInputContext } from './context'

import type { LeftSlotProps } from './types'

export const LEFT_SLOT_DISPLAYNAME = 'LeftSlot'

export const LeftSlot: React.FC<LeftSlotProps> = ({
	onClick,
	children,
	className,
	focusOnClick = true,
	...rest
}) => {
	const { focusInput } = useInputContext()

	function handleClick(e: React.MouseEvent<HTMLDivElement>) {
		if (focusOnClick) {
			focusInput()
		}
		onClick?.(e)
	}

	return (
		<div className={cn('ml-1.5', className)} onClick={handleClick} {...rest}>
			{children}
		</div>
	)
}

LeftSlot.displayName = LEFT_SLOT_DISPLAYNAME
