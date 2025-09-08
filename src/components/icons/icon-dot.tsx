import type React from 'react'

type IconDotProps = React.ComponentProps<'svg'>

export const IconDot: React.FC<IconDotProps> = ({ width = 24, ...props }) => {
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
			<circle cx="12.1" cy="12.1" r="1" />
		</svg>
	)
}
