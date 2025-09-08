import React from 'react'

import InputBase from '../text-input'

interface UseChildrenArgs {
	label: React.ReactNode
	leftSlot: React.ReactNode
	rightSlot: React.ReactNode
	error: React.ReactNode
	hint: React.ReactNode
}

export function useChildren({
	label,
	leftSlot,
	rightSlot,
	error,
	hint
}: UseChildrenArgs) {
	const thereIsLabel = String(!!label)
	const thereIsLeftSlot = String(!!leftSlot)
	const thereIsRightSlot = String(!!rightSlot)
	const thereIsError = String(!!error)
	const thereIsHint = String(!!hint)

	const Label =
		{
			true: InputBase.Label,
			false: React.Fragment
		}[thereIsLabel] || React.Fragment

	const LeftSlot = {
		true: <InputBase.LeftSlot>{leftSlot}</InputBase.LeftSlot>,
		false: null
	}[thereIsLeftSlot]

	const RightSlot = {
		true: <InputBase.RightSlot>{rightSlot}</InputBase.RightSlot>,
		false: null
	}[thereIsRightSlot]

	const TextboxError = {
		true: <InputBase.Error>{error}</InputBase.Error>,
		false: null
	}[thereIsError]

	const Hint = {
		true: <InputBase.Hint>{hint}</InputBase.Hint>,
		false: null
	}[thereIsHint]

	return {
		RightSlot,
		LeftSlot,
		Label,
		TextboxError,
		Hint
	}
}
