// ============================================================
// Authentication Hook
// Provides auth state and methods throughout the app
// Replace the underlying lib/auth.ts when connecting your backend
// ============================================================

'use client'

import { useState, useEffect, useCallback } from 'react'
import { User } from '@/types'
import * as auth from '@/lib/auth'

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Check for existing session on mount
  useEffect(() => {
    const currentUser = auth.getUser()
    setUser(currentUser)
    setLoading(false)
  }, [])

  const loginFn = useCallback(async (email: string, password: string) => {
    const result = await auth.login(email, password)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }, [])

  const registerFn = useCallback(async (name: string, email: string, password: string) => {
    const result = await auth.register(name, email, password)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }, [])

  const logoutFn = useCallback(() => {
    auth.logout()
    setUser(null)
  }, [])

  const updateProfileFn = useCallback(async (updates: Partial<Pick<User, 'name' | 'email'>>) => {
    const result = await auth.updateProfile(updates)
    if (result.success && result.user) {
      setUser(result.user)
    }
    return result
  }, [])

  return {
    user,
    loading,
    login: loginFn,
    register: registerFn,
    logout: logoutFn,
    updateProfile: updateProfileFn,
    isAuthenticated: !!user,
  }
}
