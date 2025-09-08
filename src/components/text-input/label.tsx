import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'

import type { LabelProps } from './types'

export const LABEL_DISPLAYNAME = 'Label'

export const Label: React.FC<LabelProps> = ({
	children,
	className,
	required,
	htmlFor,
	...rest
}) => {
	return (
		<label
			htmlFor={htmlFor}
			className={cn('text-sm flex flex-col gap-1', className)}
			{...rest}
		>
			{children}
			{required && <span className="text-xs text-red-500">*</span>}
		</label>
	)
}

Label.displayName = LABEL_DISPLAYNAME
