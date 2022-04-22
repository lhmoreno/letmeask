import { createContext, ReactNode, useEffect, useState } from 'react'

type AuthStatus = 'authenticated' | 'unauthenticated' | 'pending'

interface UserContextProps {
  authStatus: AuthStatus
}

interface UserProviderProps {
  children?: ReactNode
}

export const UserContext = createContext<UserContextProps>({
  authStatus: 'pending'
})

export function UserProvider({ children }: UserProviderProps) {
  const [authStatus, setAuthStatus] = useState<AuthStatus>('pending')

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAuthStatus('unauthenticated')
    }, 150)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <UserContext.Provider
      value={{
        authStatus
      }}
    >
      { children }
    </UserContext.Provider>
  )
}
