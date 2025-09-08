'use client'

import React from 'react'
import InputBase from '../text-input'
import { withInput } from '../text-input/hoc'
import { useChildren } from './hooks'
import { Input } from './input'
import { TextboxRoot } from './textbox-root'

import type { TextboxComponentType } from './types'

export const Textbox: TextboxComponentType = (props) => {
	const {
		label,
		leftSlot,
		rightSlot,
		error,
		hint,
		variant,
		size,
		children,
		ref,
		className,
		...rest
	} = props
	const { Label, LeftSlot, RightSlot, TextboxError, Hint } = useChildren({
		label,
		leftSlot,
		rightSlot,
		error,
		hint
	})

	const Input = withInput(children)

	return (
		<React.Fragment>
			<Label>
				{label}
				<InputBase variant={variant} size={size} className={className}>
					{LeftSlot}
					<Input {...rest} ref={ref} />
					{RightSlot}
				</InputBase>
				{Hint}
				{TextboxError}
			</Label>
		</React.Fragment>
	)
}

Textbox.displayName = 'Textbox'
Textbox.Root = TextboxRoot
Textbox.Input = Input
