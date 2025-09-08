import type React from 'react'

type IconPasswordUserProps = React.ComponentProps<'svg'>

export const IconPasswordUser: React.FC<IconPasswordUserProps> = ({
	...props
}) => {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			{...props}
		>
			<path stroke="none" d="M0 0h24v24H0z" fill="none" />
			<path d="M12 17v4" />
			<path d="M10 20l4 -2" />
			<path d="M10 18l4 2" />
			<path d="M5 17v4" />
			<path d="M3 20l4 -2" />
			<path d="M3 18l4 2" />
			<path d="M19 17v4" />
			<path d="M17 20l4 -2" />
			<path d="M17 18l4 2" />
			<path d="M9 6a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
			<path d="M7 14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2" />
		</svg>
	)
}
