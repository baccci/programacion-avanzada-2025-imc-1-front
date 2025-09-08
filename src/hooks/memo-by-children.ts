import React from 'react'

/**
 * Memoizes a computation based on the displayName keys of React children.
 *
 * Warning: This hook is not suitable for memoizing computations that depend on props or state.
 *
 * @param children - React children or ReactNode.
 * @param compute - Function that computes result from children.
 * @returns Memoized result.
 */
export function useMemoChildrenByDisplayName<TResult>(
  children: React.ReactNode,
  compute: (children: React.ReactNode) => TResult
): TResult {
  const cache = React.useRef<{ keys: string[]; result: TResult } | null>(null)

  // Extract keys by reading displayName or 'non-element' for each child
  function getKeys(children: React.ReactNode): string[] {
    const keys: string[] = []
    React.Children.forEach(children, (child) => {
      if (React.isValidElement(child)) {
        const type = child.type as { displayName?: string }
        keys.push(type.displayName ?? 'unknown')
      } else {
        keys.push('non-element')
      }
    })
    return keys
  }

  const currentKeys = getKeys(children)

  function areKeysEqual(keys1: string[] | null, keys2: string[]) {
    if (!keys1 || keys1.length !== keys2.length) return false
    for (let i = 0; i < keys1.length; i++) {
      if (keys1[i] !== keys2[i]) return false
    }
    return true
  }

  if (!cache.current || !areKeysEqual(cache.current.keys, currentKeys)) {
    const newResult = compute(children)
    cache.current = {
      keys: currentKeys,
      result: newResult,
    }
  }

  return cache.current.result
}
