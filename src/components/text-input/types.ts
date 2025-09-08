import type React from 'react'

import type { VariantProps } from 'class-variance-authority'
import type { inputsVariants } from './variants'

export type InputVariants = VariantProps<typeof inputsVariants>
export type TextInputProps = Omit<React.ComponentProps<'input'>, 'size'>
  & InputVariants
  & {
    label?: React.ReactNode
    memoizeChildren?: boolean
  }

export type BaseComponentProps = React.ComponentProps<'div'>
export type SlotComponentProps = BaseComponentProps & {
  focusOnClick?: boolean,
}

export type LabelWithForm = {
  htmlFor: string
}
export type LabelWithChildren = {
  children: React.ReactNode
}
export type LabelWithFormOrChildren = LabelWithForm | LabelWithChildren

export type InputProps = React.ComponentProps<'input'>
export type LeftSlotProps = SlotComponentProps
export type RightSlotProps = SlotComponentProps
export type ErrorProps = React.ComponentProps<'span'>
export type HintProps = React.ComponentProps<'span'>
export type LabelProps = React.ComponentProps<'label'> & {
  required?: boolean,
} & LabelWithFormOrChildren

export type TextInputComponent = React.FC<TextInputProps>
  & {
    LeftSlot: React.FC<LeftSlotProps>,
    RightSlot: React.FC<RightSlotProps>,
    Root: React.FC<BaseComponentProps>,
    Label: React.FC<LabelProps>,
    Error: React.FC<ErrorProps>,
    Hint: React.FC<HintProps>,
    Input: React.FC<InputProps>,
  }