'use client'

import type React from 'react'

import { type SVGMotionProps, motion } from 'framer-motion'

type IconOkProps = SVGMotionProps<SVGSVGElement> & {
	outerColor?: string
	innerColor?: string
	animationDuration?: number
}

export const IconOk: React.FC<IconOkProps> = ({
	outerColor = '#29cd78',
	innerColor = '#000',
	animationDuration,
	...rest
}) => {
	const duration = animationDuration ?? 0.5

	return (
		<motion.svg
			viewBox="0 0 20 20"
			{...rest}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<g>
				<motion.path
					d="M10,0 a10,10 0 1,1 0,20 a10,10 0 1,1 0,-20"
					fill={outerColor}
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{ duration, ease: 'easeOut' }}
				/>
				<motion.path
					d="M6,10 L8.5,12.5 L14,7"
					stroke={innerColor}
					strokeWidth="1.5"
					fill="none"
					initial={{ pathLength: 0, opacity: 0 }}
					animate={{ pathLength: 1, opacity: 1 }}
					transition={{
						duration,
						delay: 0.3,
						ease: 'easeInOut'
					}}
					style={{
						strokeLinecap: 'round',
						strokeLinejoin: 'round'
					}}
				/>
			</g>
		</motion.svg>
	)
}
