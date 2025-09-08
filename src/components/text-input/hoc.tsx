import React from 'react'

import { useGetChildrenByDisplayname } from '@/hooks/get-children-by-displayname'
import { INPUT_DISPLAYNAME } from './input'
import InputBase from './input-base'

import type { InputProps } from './types'

/**
 * Returns a component that renders the Input, either the custom one passed as a child,
 * or the default one (`TextInput.Input`) if not present.
 */
export function withInput(children: React.ReactNode) {
	// If the Input component is passed as a child, return it
	const matchedArray = useGetChildrenByDisplayname<InputProps>(
		children,
		INPUT_DISPLAYNAME,
		true
	)

	// Pick the first matching child if it exists
	const matched =
		Array.isArray(matchedArray) && matchedArray.length > 0
			? matchedArray[0]
			: null

	const InputWrapper = (
		props: React.ComponentProps<typeof InputBase.Input>
	) => {
		if (!matched) {
			return <InputBase.Input {...props} />
		}

		return React.cloneElement(matched, props)
	}

	return InputWrapper
}
