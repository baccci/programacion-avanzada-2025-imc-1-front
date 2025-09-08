import type React from 'react'

type IconArrowProps = React.ComponentProps<'svg'>

export const IconArrow: React.FC<IconArrowProps> = ({
	width = 14,
	...props
}) => {
	return (
		<svg width={width} viewBox="0 0 14 10" fill="none" {...props}>
			<path
				d="M13.4243 5.42426C13.6586 5.18995 13.6586 4.81005 13.4243 4.57574L9.60589 0.757359C9.37157 0.523045 8.99167 0.523045 8.75736 0.757359C8.52304 0.991674 8.52304 1.37157 8.75736 1.60589L12.1515 5L8.75736 8.39411C8.52304 8.62843 8.52304 9.00833 8.75736 9.24264C8.99167 9.47696 9.37157 9.47696 9.60589 9.24264L13.4243 5.42426ZM0 5V5.6H13V5V4.4H0V5Z"
				fill="currentColor"
			/>
		</svg>
	)
}
