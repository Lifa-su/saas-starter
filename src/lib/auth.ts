// ============================================================
// Mock Authentication Library
// Uses localStorage to simulate auth - replace with your
// preferred auth provider (NextAuth, Clerk, Supabase, etc.)
// ============================================================

import { User } from '@/types'

const STORAGE_KEY = 'saas_starter_auth'
const USERS_KEY = 'saas_starter_users'

/** Get the currently authenticated user from localStorage */
export function getUser(): User | null {
  if (typeof window === 'undefined') return null
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : null
  } catch {
    return null
  }
}

/** Save user session to localStorage */
export function setUser(user: User): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
}

/** Clear user session (logout) */
export function clearUser(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(STORAGE_KEY)
}

/** Get all registered users (mock database) */
function getUsers(): Record<string, { user: User; password: string }> {
  if (typeof window === 'undefined') return {}
  try {
    const data = localStorage.getItem(USERS_KEY)
    return data ? JSON.parse(data) : {}
  } catch {
    return {}
  }
}

/** Save users database */
function saveUsers(users: Record<string, { user: User; password: string }>): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(USERS_KEY, JSON.stringify(users))
}

/** Generate a simple unique ID */
function generateId(): string {
  return Math.random().toString(36).substring(2) + Date.now().toString(36)
}

/**
 * Register a new user
 * Replace this with your actual registration API call
 */
export async function register(
  name: string,
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const users = getUsers()

  // Check if email already exists
  if (users[email.toLowerCase()]) {
    return { success: false, error: 'An account with this email already exists' }
  }

  // Create new user
  const user: User = {
    id: generateId(),
    name,
    email: email.toLowerCase(),
    plan: 'free',
    createdAt: new Date().toISOString(),
  }

  // Save to mock database
  users[email.toLowerCase()] = { user, password }
  saveUsers(users)

  // Auto-login after registration
  setUser(user)

  return { success: true, user }
}

/**
 * Login with email and password
 * Replace this with your actual login API call
 */
export async function login(
  email: string,
  password: string
): Promise<{ success: boolean; user?: User; error?: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const users = getUsers()
  const record = users[email.toLowerCase()]

  if (!record) {
    return { success: false, error: 'No account found with this email' }
  }

  if (record.password !== password) {
    return { success: false, error: 'Incorrect password' }
  }

  // Save session
  setUser(record.user)

  return { success: true, user: record.user }
}

/**
 * Request password reset
 * Replace this with your actual password reset API call
 */
export async function requestPasswordReset(
  email: string
): Promise<{ success: boolean; error?: string }> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 800))

  const users = getUsers()

  if (!users[email.toLowerCase()]) {
    // Don't reveal if email exists for security
    return { success: true }
  }

  // In a real app, send a reset email here
  return { success: true }
}

/**
 * Update user profile
 * Replace this with your actual profile update API call
 */
export async function updateProfile(
  updates: Partial<Pick<User, 'name' | 'email'>>
): Promise<{ success: boolean; user?: User; error?: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600))

  const currentUser = getUser()
  if (!currentUser) {
    return { success: false, error: 'Not authenticated' }
  }

  const updatedUser: User = { ...currentUser, ...updates }
  setUser(updatedUser)

  // Also update in users database
  const users = getUsers()
  if (users[currentUser.email]) {
    users[currentUser.email].user = updatedUser
    // If email changed, update the key
    if (updates.email && updates.email !== currentUser.email) {
      users[updates.email.toLowerCase()] = users[currentUser.email]
      delete users[currentUser.email]
    }
    saveUsers(users)
  }

  return { success: true, user: updatedUser }
}

/**
 * Change password
 * Replace this with your actual password change API call
 */
export async function changePassword(
  currentPassword: string,
  newPassword: string
): Promise<{ success: boolean; error?: string }> {
  await new Promise((resolve) => setTimeout(resolve, 600))

  const currentUser = getUser()
  if (!currentUser) {
    return { success: false, error: 'Not authenticated' }
  }

  const users = getUsers()
  const record = users[currentUser.email]

  if (!record) {
    return { success: false, error: 'User not found' }
  }

  if (record.password !== currentPassword) {
    return { success: false, error: 'Current password is incorrect' }
  }

  record.password = newPassword
  saveUsers(users)

  return { success: true }
}

/** Logout the current user */
export function logout(): void {
  clearUser()
}
