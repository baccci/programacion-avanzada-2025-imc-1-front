import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'

import type { InputProps } from './types'

export const INPUT_DISPLAYNAME = 'Input'

export const Input: React.FC<InputProps> = ({
	className,
	ref,
	type,
	...rest
}) => {
	return (
		<input
			className={cn(
				'bg-transparent focus-visible:outline-none placeholder:text-[var(--placeholder-color)] mr-auto px-2 w-full',
				className
			)}
			ref={ref}
			type={type}
			{...rest}
		/>
	)
}

Input.displayName = INPUT_DISPLAYNAME
