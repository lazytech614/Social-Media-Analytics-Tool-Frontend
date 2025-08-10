'use client'

import { useAuth } from '@/hooks/use-auth'
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { 
  User, 
  Settings, 
  LogOut, 
  ChevronDown,
  BarChart3,
  Home,
  Users,
  TrendingUp
} from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

export function NavigationMenu() {
  const { user, isAuthenticated } = useAuth()
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleSignOut = async () => {
    await signOut({ callbackUrl: '/' })
  }

  if (!isAuthenticated) {
    return (
      <div className="flex items-center space-x-4">
        <Link
          href="/auth/signin"
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/auth/signin"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
        >
          Get Started
        </Link>
      </div>
    )
  }

  return (
    <div className="flex items-center space-x-6">
      {/* Navigation Links */}
      <nav className="hidden md:flex items-center space-x-6">
        <Link
          href="/dashboard"
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
        >
          <Home className="h-4 w-4 mr-1" />
          Dashboard
        </Link>
        <Link
          href="/analytics"
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
        >
          <BarChart3 className="h-4 w-4 mr-1" />
          Analytics
        </Link>
        <Link
          href="/accounts"
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
        >
          <Users className="h-4 w-4 mr-1" />
          Accounts
        </Link>
        <Link
          href="/insights"
          className="flex items-center text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
        >
          <TrendingUp className="h-4 w-4 mr-1" />
          Insights
        </Link>
      </nav>

      {/* User Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white px-3 py-2 text-sm font-medium transition-colors"
        >
          <div className="h-8 w-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
            {user?.image ? (
              <img
                src={user.image}
                alt={user.name || 'User'}
                className="h-8 w-8 rounded-full"
              />
            ) : (
              <User className="h-4 w-4 text-white" />
            )}
          </div>
          <span className="hidden sm:inline">{user?.name || 'User'}</span>
          <ChevronDown className="h-4 w-4" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
            <div className="py-1">
              <div className="px-4 py-2 border-b border-gray-100 dark:border-gray-700">
                <p className="text-sm font-medium text-gray-900 dark:text-white">
                  {user?.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {user?.email}
                </p>
              </div>
              
              <Link
                href="/settings"
                className="flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={() => setIsDropdownOpen(false)}
              >
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Link>
              
              <button
                onClick={handleSignOut}
                className="flex items-center w-full px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
