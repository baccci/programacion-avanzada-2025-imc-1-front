import type React from 'react'

import InputBase from '../text-input'

import type { InputProps } from './types'

const INPUT_DISPLAYNAME = 'Input'

// This component is used in case the developer need to pass props or classname to the input element
export const Input: React.FC<InputProps> = (props) => {
	return <InputBase.Input {...props} />
}

Input.displayName = INPUT_DISPLAYNAME
