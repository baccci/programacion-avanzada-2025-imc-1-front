import React from 'react'

import getChildrenByDisplayName from '@/components/utils/component-children'
import { LEFT_SLOT_DISPLAYNAME } from './left-slot'
import { RIGHT_SLOT_DISPLAYNAME } from './right-slot'


/**
 * Returns the left and right slots, and the rest of the children separated.
 * @param children - The children of the TextInput component.
 * @returns The left and right slots, and the rest of the children separated.
 */
export function useChildren(children: React.ReactNode) {
  return separateChildren(children)
}

function separateChildren(children: React.ReactNode) {
  const displayNamesToExclude = [LEFT_SLOT_DISPLAYNAME, RIGHT_SLOT_DISPLAYNAME]

  const rightSlot = getChildrenByDisplayName(children, RIGHT_SLOT_DISPLAYNAME)?.[0] ?? null
  const leftSlot = getChildrenByDisplayName(children, LEFT_SLOT_DISPLAYNAME)?.[0] ?? null
  const otherChildren = React.Children.toArray(children).filter((child) => {
    if (!React.isValidElement(child)) return true
    const type = child.type as { displayName?: string }
    return !displayNamesToExclude.includes(type.displayName ?? '')
  })

  return [rightSlot, leftSlot, otherChildren] as const
}