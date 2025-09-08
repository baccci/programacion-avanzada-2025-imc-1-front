import type React from 'react'

type IconChevronUpProps = React.ComponentProps<'svg'>

export const IconChevronUp: React.FC<IconChevronUpProps> = ({
	width = 24,
	...props
}) => {
	return (
		<svg
			width={width}
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M6 15l6 -6l6 6" />
		</svg>
	)
}
