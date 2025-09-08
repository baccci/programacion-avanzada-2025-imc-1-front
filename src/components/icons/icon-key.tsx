import type React from 'react'

interface IconKeyProps extends React.ComponentProps<'svg'> {
	fillColor?: string
	strokeColor?: string
	className?: string
}

export const IconKey: React.FC<IconKeyProps> = ({
	fillColor = 'none',
	strokeColor = 'currentColor',
	...rest
}) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill={fillColor}
			stroke={strokeColor}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
		>
			<path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" />
			<circle cx="16.5" cy="7.5" r=".5" />
		</svg>
	)
}
