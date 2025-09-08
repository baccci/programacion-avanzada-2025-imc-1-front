import type React from 'react'

type IconChevronRightProps = React.ComponentProps<'svg'>

export const IconChevronRight: React.FC<IconChevronRightProps> = ({
	...props
}) => {
	return (
		<svg
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M9 6l6 6l-6 6" />
		</svg>
	)
}
