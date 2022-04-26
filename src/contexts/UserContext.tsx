import { createContext, ReactNode, useEffect, useState } from 'react'
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

import accountImg from '../assets/images/account.png'

type AuthStatus = 'authenticated' | 'unauthenticated' | 'pending'

interface User {
  id: string
  name: string
  avatar: string
}

interface UserContextProps {
  authStatus: AuthStatus
  user?: User
  signin: () => Promise<void>
  signout: () => Promise<void>
}

interface UserProviderProps {
  children?: ReactNode
}

export const UserContext = createContext<UserContextProps>({
  authStatus: 'pending',
  signin: async () => {},
  signout: async () => {}
})

export function UserProvider({ children }: UserProviderProps) {
  const auth = getAuth()
  const navigate = useNavigate()
  const [authStatus, setAuthStatus] = useState<AuthStatus>('pending')
  const [user, setUser] = useState<User>()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        const { displayName, photoURL, uid } = authUser

        setUser({
          id: uid,
          name: displayName || 'Batatão',
          avatar: photoURL || accountImg
        })
        setAuthStatus('authenticated')
      } else {
        setAuthStatus('unauthenticated')
      }
    })

    return () => unsubscribe()
  }, [])

  async function signin() {
    await signInWithPopup(auth, new GoogleAuthProvider)
    navigate('/rooms')
  }

  async function signout() {
    await signOut(auth)
    navigate('/')
  }

  return (
    <UserContext.Provider
      value={{
        authStatus,
        user,
        signin,
        signout
      }}
    >
      { children }
    </UserContext.Provider>
  )
}
