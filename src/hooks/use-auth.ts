'use client'

import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useEffect } from 'react'

export function useAuth() {
  const { data: session, status } = useSession()

  return {
    user: session?.user,
    session,
    isLoading: status === 'loading',
    isAuthenticated: !!session,
  }
}

export function useRequireAuth() {
  const { isAuthenticated, isLoading } = useAuth()

  useEffect(() => {
    if (!isLoading && !isAuthenticated) {
      redirect('/auth/signin')
    }
  }, [isAuthenticated, isLoading])

  return { isAuthenticated, isLoading }
}
