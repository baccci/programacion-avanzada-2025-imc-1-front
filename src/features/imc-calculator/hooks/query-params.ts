import { useRouter, useSearchParams } from 'next/navigation'
import React from 'react'

export function useQueryParams() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const createQueryString = React.useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  function updateQueryString(name: string, value: string) {
    const queryString = createQueryString(name, value)
    router.replace(`?${queryString}`)
  }

  return {
    createQueryString,
    updateQueryString
  }
}
