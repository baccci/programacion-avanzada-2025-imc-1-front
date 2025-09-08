'use client'

import type React from 'react'

import { cn } from '@/components/utils/taildwind-class-merge'
import { InputProvider, useInput } from './context'
import { InputError } from './error'
import { Hint } from './hint'
import { useChildren } from './hooks'
import { Input } from './input'
import { Label } from './label'
import { LeftSlot } from './left-slot'
import { RightSlot } from './right-slot'
import { Root } from './root'
import type { TextInputComponent } from './types'
import { inputsVariants } from './variants'

const InputBase: TextInputComponent = (props) => {
  const { children, className, variant, size, ref, ...rest } = props
  const [RightSlot, LeftSlot, otherChildren] = useChildren(children)
  const context = useInput({
    inputRef: ref as React.RefObject<HTMLInputElement>,
    props
  })

  return (
    <InputProvider value={context}>
      <div
        className={cn(inputsVariants({ variant, size, className }))}
        {...rest}
      >
        {LeftSlot}
        {otherChildren}
        {RightSlot}
      </div>
    </InputProvider>
  )
}

InputBase.displayName = 'TextInput'
InputBase.RightSlot = RightSlot
InputBase.LeftSlot = LeftSlot
InputBase.Root = Root
InputBase.Label = Label
InputBase.Error = InputError
InputBase.Hint = Hint
InputBase.Input = Input

export default InputBase as TextInputComponent
