import type React from 'react'

import getChildrenByDisplayName from '@/components/utils/component-children'

export function useGetChildrenByDisplayname<T>(
  children: React.ReactNode,
  displayName: string,
) {
  return getChildrenByDisplayName<T>(children, displayName)
}
