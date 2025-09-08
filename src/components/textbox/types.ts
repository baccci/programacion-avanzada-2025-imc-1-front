import type React from 'react'

import type InputBase from '../text-input'
import type { TextInputProps } from '../text-input/types'

export type InputProps = React.ComponentProps<typeof InputBase.Input>
export type TextboxRootProps = React.ComponentProps<'div'>

export type BaseTextboxProps = TextInputProps & {
  error?: React.ReactNode
  hint?: React.ReactNode
  label?: React.ReactNode
  leftSlot?: React.ReactNode
  rightSlot?: React.ReactNode
}

export type TextboxComponentType = React.FC<BaseTextboxProps> & {
  Root: React.FC<TextboxRootProps>
  Input: React.FC<InputProps>
}
