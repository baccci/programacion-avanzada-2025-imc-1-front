import React from 'react'

import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, test } from 'vitest'
import { IconEmail } from '../icons/icon-email'
import { IconEye } from '../icons/icon-eye'
import { Textbox } from './textbox'

describe('Textbox', () => {
	beforeEach(() => {
		render(
			<Textbox
				label="Label"
				id="textbox"
				leftSlot={<IconEmail data-testid="icon-email" />}
				rightSlot={<IconEye data-testid="icon-eye" />}
				hint="Hint"
			/>
		)
	})

	afterEach(cleanup)

	test('renders the label', () => {
		const labelElement = screen.getByText('Label')
		expect(labelElement).toBeDefined()
	})

	test('renders the left slot', () => {
		const leftSlotElement = screen.getByTestId('icon-email')
		expect(leftSlotElement).toBeDefined()
	})

	test('renders the right slot', () => {
		const rightSlotElement = screen.getByTestId('icon-eye')
		expect(rightSlotElement).toBeDefined()
	})

	test('renders the hint', () => {
		const hintElement = screen.getByText('Hint')
		expect(hintElement).toBeDefined()
	})
})

describe('Textbox right slot', () => {
	function ControlledTextbox() {
		const [value, setValue] = React.useState('first value')

		const handleIconClick = () => {
			setValue('new value')
		}

		return (
			<Textbox
				label="Label"
				id="textbox"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				rightSlot={
					<IconEye
						data-testid="icon-eye"
						onClick={handleIconClick} // Change value when icon is clicked
					/>
				}
				hint="Hint"
			/>
		)
	}

	afterEach(cleanup)

	test('changes the textbox value when clicking the right icon', () => {
		render(<ControlledTextbox />)

		const textboxElement = screen.getByRole('textbox', {
			name: /Label/i
		}) as HTMLInputElement
		const value = textboxElement?.value
		expect(value).toBe('first value')

		const rightIcon = screen.getByTestId('icon-eye')
		fireEvent.click(rightIcon)

		const newValue = textboxElement?.value
		expect(newValue).toBe('new value')
	})
})
