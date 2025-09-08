'use client'

import React from 'react'

import { IconEye } from '../icons/icon-eye'
import { IconEyeClosed } from '../icons/icon-eye-closed'
import InputBase from '../text-input'
import { cn } from '../utils/taildwind-class-merge'
import { useChildren } from './hooks'
import type { BaseTextboxProps } from './types'
import { iconButtonVariants, passwordRightSlotVariants } from './variants'

export const PasswordTextbox = React.forwardRef<
  HTMLInputElement,
  BaseTextboxProps
>((props, ref) => {
  const { label, leftSlot, rightSlot, error, hint, variant, size, ...rest } =
    props
  const { Label, LeftSlot, TextboxError, Hint } = useChildren({
    label,
    leftSlot,
    rightSlot,
    error,
    hint
  })
  const [showPassword, setShowPassword] = React.useState(false)
  const inputType = showPassword ? 'text' : 'password'
  const { value, onChange } = usePasswordValue(
    rest.onChange,
    rest.value as string
  )

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const EyeIcon = {
    text: <IconEyeClosed width={20} />,
    password: <IconEye width={20} />
  }[inputType]

  return (
    <Label>
      {label}
      <InputBase variant={variant} size={size} memoizeChildren={false}>
        {LeftSlot}
        <InputBase.Input
          ref={ref}
          value={value}
          onChange={onChange}
          type={inputType}
          {...rest}
        />
        <InputBase.RightSlot
          className={cn(passwordRightSlotVariants({ size }))}
        >
          <button
            type="button"
            onClick={handleTogglePasswordVisibility}
            className={cn(iconButtonVariants({ variant, size }))}
          >
            {EyeIcon}
          </button>
        </InputBase.RightSlot>
      </InputBase>
      {Hint}
      {TextboxError}
    </Label>
  )
})
PasswordTextbox.displayName = 'PasswordTextbox'

function usePasswordValue(
  onChange: React.ChangeEventHandler<HTMLInputElement> | undefined,
  value: string
) {
  const [controlledValue, setControlledValue] = React.useState(value)

  function controlledOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value
    setControlledValue(newValue)
  }

  const finalValue = value ?? controlledValue
  const finalOnChange = onChange ?? controlledOnChange

  return {
    value: finalValue,
    onChange: finalOnChange
  }
}
