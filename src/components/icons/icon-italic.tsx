import type React from 'react'

type IconItalicProps = React.ComponentProps<'svg'>

export const IconItalic: React.FC<IconItalicProps> = ({ ...props }) => {
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
			<path d="M11 5l6 0" />
			<path d="M7 19l6 0" />
			<path d="M14 5l-4 14" />
		</svg>
	)
}
