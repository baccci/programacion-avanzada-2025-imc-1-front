import React from 'react'

export function createContext<ContextValue>(useValue: () => ContextValue) {
  const Context = React.createContext<ContextValue | null>(null)

  function Provider({ children }: { children: React.ReactNode }) {
    const value = useValue()
    return <Context.Provider value={value}>{children}</Context.Provider>
  }

  function useContext() {
    const context = React.useContext(Context)

    if (!context) {
      throw new Error('useContext must be used within a Provider')
    }

    return context
  }

  return [Provider, useContext] as const
}
