import type React from 'react'

import InputBase from '../text-input'

import type { TextboxRootProps } from './types'

export const ROOT_DISPLAYNAME = 'Wrapper'

export const TextboxRoot: React.FC<TextboxRootProps> = ({
	children,
	...rest
}) => {
	return <InputBase.Root {...rest}>{children}</InputBase.Root>
}

TextboxRoot.displayName = ROOT_DISPLAYNAME
