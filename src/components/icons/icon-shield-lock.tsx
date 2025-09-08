import type React from 'react'

type IconShieldLockProps = React.ComponentProps<'svg'>

export const IconShieldLock: React.FC<IconShieldLockProps> = ({
	width = '24',
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
			<path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
			<path d="M12 11m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
			<path d="M12 12l0 2.5" />
		</svg>
	)
}
