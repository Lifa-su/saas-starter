// ============================================================
// Settings Page
// User profile management and password change
// Organized in tabs: Profile, Password, Billing
// ============================================================

'use client'

import { useState } from 'react'
import { clsx } from 'clsx'
import { useAuth } from '@/hooks/useAuth'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Card from '@/components/ui/Card'
import { changePassword } from '@/lib/auth'

type Tab = 'profile' | 'password' | 'billing'

export default function SettingsPage() {
  const { user, updateProfile } = useAuth()
  const [activeTab, setActiveTab] = useState<Tab>('profile')

  // Profile form state
  const [name, setName] = useState(user?.name || '')
  const [email, setEmail] = useState(user?.email || '')
  const [profileLoading, setProfileLoading] = useState(false)
  const [profileSuccess, setProfileSuccess] = useState(false)
  const [profileError, setProfileError] = useState('')

  // Password form state
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')
  const [passwordLoading, setPasswordLoading] = useState(false)
  const [passwordSuccess, setPasswordSuccess] = useState(false)
  const [passwordError, setPasswordError] = useState('')

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setProfileError('')
    setProfileSuccess(false)
    setProfileLoading(true)

    try {
      const result = await updateProfile({ name, email })
      if (result.success) {
        setProfileSuccess(true)
        setTimeout(() => setProfileSuccess(false), 3000)
      } else {
        setProfileError(result.error || 'Failed to update profile')
      }
    } catch {
      setProfileError('An unexpected error occurred')
    } finally {
      setProfileLoading(false)
    }
  }

  const handlePasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setPasswordError('')
    setPasswordSuccess(false)

    if (newPassword.length < 6) {
      setPasswordError('New password must be at least 6 characters')
      return
    }
    if (newPassword !== confirmNewPassword) {
      setPasswordError('New passwords do not match')
      return
    }

    setPasswordLoading(true)

    try {
      const result = await changePassword(currentPassword, newPassword)
      if (result.success) {
        setPasswordSuccess(true)
        setCurrentPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
        setTimeout(() => setPasswordSuccess(false), 3000)
      } else {
        setPasswordError(result.error || 'Failed to change password')
      }
    } catch {
      setPasswordError('An unexpected error occurred')
    } finally {
      setPasswordLoading(false)
    }
  }

  const tabs: { id: Tab; label: string; icon: JSX.Element }[] = [
    {
      id: 'profile',
      label: 'Profile',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
    },
    {
      id: 'password',
      label: 'Password',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
    {
      id: 'billing',
      label: 'Billing',
      icon: (
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
    },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Page header */}
      <div>
        <h1 className="text-2xl lg:text-3xl font-bold text-surface-900 dark:text-white">
          Settings
        </h1>
        <p className="text-surface-500 dark:text-surface-400 mt-1">
          Manage your account settings and preferences.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 p-1 bg-surface-100 dark:bg-surface-800 rounded-xl w-fit">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={clsx(
              'flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200',
              activeTab === tab.id
                ? 'bg-white dark:bg-surface-700 text-surface-900 dark:text-white shadow-sm'
                : 'text-surface-500 dark:text-surface-400 hover:text-surface-700 dark:hover:text-surface-300'
            )}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Profile tab */}
      {activeTab === 'profile' && (
        <Card variant="bordered" padding="lg">
          <h2 className="text-lg font-semibold text-surface-900 dark:text-white mb-1">
            Profile Information
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
            Update your personal information and email address.
          </p>

          {profileSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-sm text-green-600 dark:text-green-400">
              Profile updated successfully!
            </div>
          )}
          {profileError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-sm text-red-600 dark:text-red-400" role="alert">
              {profileError}
            </div>
          )}

          <form onSubmit={handleProfileSubmit} className="space-y-5">
            {/* Avatar */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-400 to-purple-500 flex items-center justify-center text-white text-xl font-bold">
                {user?.name?.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) || '?'}
              </div>
              <div>
                <Button type="button" variant="outline" size="sm">
                  Change Avatar
                </Button>
                <p className="text-xs text-surface-500 mt-1">JPG, PNG or GIF. Max 2MB.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Input
                label="Full name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <Input
                label="Email address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="flex justify-end pt-2">
              <Button type="submit" loading={profileLoading}>
                Save Changes
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Password tab */}
      {activeTab === 'password' && (
        <Card variant="bordered" padding="lg">
          <h2 className="text-lg font-semibold text-surface-900 dark:text-white mb-1">
            Change Password
          </h2>
          <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
            Ensure your account is using a strong, unique password.
          </p>

          {passwordSuccess && (
            <div className="mb-6 p-4 rounded-xl bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 text-sm text-green-600 dark:text-green-400">
              Password changed successfully!
            </div>
          )}
          {passwordError && (
            <div className="mb-6 p-4 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-sm text-red-600 dark:text-red-400" role="alert">
              {passwordError}
            </div>
          )}

          <form onSubmit={handlePasswordSubmit} className="space-y-5 max-w-md">
            <Input
              label="Current password"
              type="password"
              placeholder="••••••••"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <Input
              label="New password"
              type="password"
              placeholder="••••••••"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              helperText="Must be at least 6 characters"
            />
            <Input
              label="Confirm new password"
              type="password"
              placeholder="••••••••"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            <div className="flex justify-end pt-2">
              <Button type="submit" loading={passwordLoading}>
                Update Password
              </Button>
            </div>
          </form>
        </Card>
      )}

      {/* Billing tab */}
      {activeTab === 'billing' && (
        <div className="space-y-6">
          {/* Current plan */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-lg font-semibold text-surface-900 dark:text-white mb-1">
              Current Plan
            </h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              You are currently on the <span className="font-semibold text-primary-600 dark:text-primary-400 capitalize">{user?.plan || 'free'}</span> plan.
            </p>

            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
              <div>
                <p className="font-semibold text-surface-900 dark:text-white capitalize">{user?.plan || 'Free'} Plan</p>
                <p className="text-sm text-surface-500">
                  {user?.plan === 'pro' ? '$29/month' : user?.plan === 'enterprise' ? '$99/month' : 'Free forever'}
                </p>
              </div>
              <Button variant="primary" size="sm">
                Upgrade Plan
              </Button>
            </div>
          </Card>

          {/* Payment method */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-lg font-semibold text-surface-900 dark:text-white mb-1">
              Payment Method
            </h2>
            <p className="text-sm text-surface-500 dark:text-surface-400 mb-6">
              Manage your payment methods and billing information.
            </p>

            <div className="flex items-center justify-between p-4 rounded-xl bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-7 rounded bg-gradient-to-r from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white text-[10px] font-bold">VISA</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-surface-900 dark:text-white">•••• •••• •••• 4242</p>
                  <p className="text-xs text-surface-500">Expires 12/2025</p>
                </div>
              </div>
              <Button variant="outline" size="sm">
                Update
              </Button>
            </div>
          </Card>

          {/* Billing history */}
          <Card variant="bordered" padding="lg">
            <h2 className="text-lg font-semibold text-surface-900 dark:text-white mb-4">
              Billing History
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-surface-200 dark:border-surface-700">
                    <th className="text-left py-3 px-2 font-medium text-surface-500 dark:text-surface-400">Date</th>
                    <th className="text-left py-3 px-2 font-medium text-surface-500 dark:text-surface-400">Description</th>
                    <th className="text-left py-3 px-2 font-medium text-surface-500 dark:text-surface-400">Amount</th>
                    <th className="text-left py-3 px-2 font-medium text-surface-500 dark:text-surface-400">Status</th>
                    <th className="text-right py-3 px-2 font-medium text-surface-500 dark:text-surface-400">Invoice</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { date: 'Feb 1, 2025', desc: 'Pro Plan - Monthly', amount: '$29.00', status: 'Paid' },
                    { date: 'Jan 1, 2025', desc: 'Pro Plan - Monthly', amount: '$29.00', status: 'Paid' },
                    { date: 'Dec 1, 2024', desc: 'Pro Plan - Monthly', amount: '$29.00', status: 'Paid' },
                  ].map((invoice, i) => (
                    <tr key={i} className="border-b border-surface-100 dark:border-surface-800 last:border-0">
                      <td className="py-3 px-2 text-surface-600 dark:text-surface-400">{invoice.date}</td>
                      <td className="py-3 px-2 text-surface-900 dark:text-white">{invoice.desc}</td>
                      <td className="py-3 px-2 text-surface-900 dark:text-white">{invoice.amount}</td>
                      <td className="py-3 px-2">
                        <span className="inline-flex px-2 py-0.5 text-xs font-medium rounded-full bg-green-50 dark:bg-green-500/10 text-green-600 dark:text-green-400">
                          {invoice.status}
                        </span>
                      </td>
                      <td className="py-3 px-2 text-right">
                        <button className="text-primary-600 dark:text-primary-400 hover:underline text-xs font-medium">
                          Download
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
