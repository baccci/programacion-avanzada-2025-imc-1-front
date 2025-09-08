import React from 'react'

type ReactChild<T> = React.ReactElement<T, string | React.JSXElementConstructor<T>> & {
  type: { displayName: string }
}

/**
 * Returns an array of React elements that match the specified display name.
 * @param children - The children to search through.
 * @param displayName - The display name to match against.
 * @returns An array of React elements that match the specified display name.
 */
const getChildrenByDisplayName = <T>(children: React.ReactNode, displayName: string) => {
  return React.Children.map(children, (child: unknown) => {
    const reactChild = child as ReactChild<T>
    const reactChildType = reactChild?.type as { displayName: string }
    return reactChildType?.displayName === displayName
      ? child as ReactChild<T>
      : null
  }
  )
}

export default getChildrenByDisplayName

export const getChildrenWithoutDisplayName = <T>(children: React.ReactNode, displayName: string) => {
  return React.Children.map(children, (child: unknown) => {
    const reactChild = child as ReactChild<T>
    const reactChildType = reactChild?.type as { displayName: string }
    return reactChildType?.displayName !== displayName
      ? child as React.ReactElement<T>
      : null
  }
  )
}