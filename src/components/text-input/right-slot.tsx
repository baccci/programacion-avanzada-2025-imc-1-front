'use client'

import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'
import { useInputContext } from './context'
import type { RightSlotProps } from './types'

export const RIGHT_SLOT_DISPLAYNAME = 'RightSlot'

export const RightSlot: React.FC<RightSlotProps> = ({
	children,
	className,
	onClick,
	focusOnClick = false,
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
		<div className={cn('mr-1.5', className)} onClick={handleClick} {...rest}>
			{children}
		</div>
	)
}

RightSlot.displayName = RIGHT_SLOT_DISPLAYNAME
