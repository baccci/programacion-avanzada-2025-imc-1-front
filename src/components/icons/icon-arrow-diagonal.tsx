import type React from 'react'

type IconArrowDiagonalProps = React.ComponentProps<'svg'>

export const IconArrowDiagonal: React.FC<IconArrowDiagonalProps> = ({
	width = 12,
	...props
}) => {
	return (
		<svg width={width} fill="none" viewBox="0 0 12 12" {...props}>
			<path
				fill="currentColor"
				d="M.293 10.293a1 1 0 1 0 1.414 1.414zM12 1a1 1 0 0 0-1-1H2a1 1 0 0 0 0 2h8v8a1 1 0 1 0 2 0zM1 11l.707.707 10-10L11 1l-.707-.707-10 10z"
			/>
		</svg>
	)
}
