import type React from 'react'

import { deprecated_createContext } from '@/components/utils/create-context'

import type { TextInputProps } from './types'

interface InputContextArgs {
  inputRef: React.RefObject<HTMLInputElement | null>
  props: TextInputProps
}

export function useInput({ inputRef, props }: InputContextArgs) {
  const variant = props.variant || 'default'
  const size = props.size || 'default'
  const id = props.id
  const focusInput = () => {
    inputRef?.current?.focus()
  }

  return {
    id,
    size,
    variant,
    focusInput
  }
}

type InputContextType = ReturnType<typeof useInput>

const InputContext = deprecated_createContext<InputContextType>()

export const InputProvider = InputContext[0]
export const useInputContext = InputContext[1]