import type React from 'react'

type IconPasswordProps = React.ComponentProps<'svg'>

export const IconPassword: React.FC<IconPasswordProps> = ({ ...props }) => {
	return (
		<svg
			width={24}
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
			<path d="M12 10v4" />
			<path d="M10 13l4 -2" />
			<path d="M10 11l4 2" />
			<path d="M5 10v4" />
			<path d="M3 13l4 -2" />
			<path d="M3 11l4 2" />
			<path d="M19 10v4" />
			<path d="M17 13l4 -2" />
			<path d="M17 11l4 2" />
		</svg>
	)
}
