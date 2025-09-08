import type React from 'react'

type IconEmptyCircleProps = React.ComponentProps<'svg'>

export const IconEmptyCircle: React.FC<IconEmptyCircleProps> = ({
	...props
}) => {
	return (
		<svg viewBox="0 0 20 20" {...props}>
			<path
				d="M51.957,36.7a9,9,0,1,1-9-9,9,9,0,0,1,9,9"
				transform="translate(-32.957 -26.695)"
				fill="none"
				stroke="currentColor"
				strokeWidth="2"
			/>
		</svg>
	)
}
