import type React from 'react'

type ConditionalRenderProps = {
  condition: boolean
  children: React.ReactNode
}

export const ConditionalRender: React.FC<ConditionalRenderProps> = ({
  condition,
  children
}) => {
  return condition ? children : null
}
