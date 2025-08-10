'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Linkedin, Facebook, MoreHorizontal, AlertCircle, CheckCircle, Clock, Settings, Unlink, Users } from 'lucide-react'
import Image from 'next/image'
import { useState, useRef, useEffect } from 'react'
import type { SocialAccount } from '@/app/accounts/page'

interface ConnectedAccountsProps {
  accounts: SocialAccount[]
  onDisconnect: (account: SocialAccount) => void
  onSettings: (account: SocialAccount) => void
}

const PlatformIcons = {
  Instagram,
  Twitter,
  YouTube: Youtube,
  LinkedIn: Linkedin,
  Facebook
}

const PlatformColors = {
  Instagram: 'from-pink-500 to-rose-500',
  Twitter: 'from-blue-400 to-blue-600',
  YouTube: 'from-red-500 to-red-600',
  LinkedIn: 'from-blue-600 to-blue-700',
  Facebook: 'from-blue-700 to-indigo-700'
}

export function ConnectedAccounts({ accounts, onDisconnect, onSettings }: ConnectedAccountsProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (openDropdown && dropdownRefs.current[openDropdown] && 
          !dropdownRefs.current[openDropdown]?.contains(event.target as Node)) {
        setOpenDropdown(null)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [openDropdown])

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      case 'error':
        return <AlertCircle className="w-5 h-5 text-red-500" />
      case 'connecting':
        return <Clock className="w-5 h-5 text-yellow-500 animate-spin" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-400" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'connected':
        return 'Connected'
      case 'error':
        return 'Connection Error'
      case 'connecting':
        return 'Connecting...'
      default:
        return 'Disconnected'
    }
  }

  const getLastSyncText = (lastSync: Date) => {
    const now = new Date()
    const diffInMinutes = Math.floor((now.getTime() - lastSync.getTime()) / 60000)
    
    if (diffInMinutes < 1) return 'Just now'
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`
    
    const diffInHours = Math.floor(diffInMinutes / 60)
    if (diffInHours < 24) return `${diffInHours}h ago`
    
    const diffInDays = Math.floor(diffInHours / 24)
    return `${diffInDays}d ago`
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Your Connected Accounts
        </h2>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {accounts.filter(acc => acc.isActive).length} of {accounts.length} active
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {accounts.map((account, index) => {
          const IconComponent = PlatformIcons[account.platform as keyof typeof PlatformIcons]
          const colorClass = PlatformColors[account.platform as keyof typeof PlatformColors]

          return (
            <motion.div
              key={account.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative p-6 rounded-2xl border-2 transition-all duration-300 hover:shadow-lg ${
                account.isActive
                  ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                  : account.status === 'error'
                  ? 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700'
              }`}
            >
              {/* Account Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${colorClass} flex items-center justify-center mr-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">
                      {account.platform}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {account.username}
                    </p>
                  </div>
                </div>

                {/* Dropdown Menu - FIXED REF CALLBACK */}
                <div className="relative" ref={(el) => { dropdownRefs.current[account.id] = el }}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === account.id ? null : account.id)}
                    className="p-2 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg transition-colors"
                  >
                    <MoreHorizontal className="w-5 h-5 text-gray-500" />
                  </button>

                  {openDropdown === account.id && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg shadow-lg py-2 z-10"
                    >
                      <button
                        onClick={() => {
                          onSettings(account)
                          setOpenDropdown(null)
                        }}
                        className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Settings
                      </button>
                      <button
                        onClick={() => {
                          onDisconnect(account)
                          setOpenDropdown(null)
                        }}
                        className="w-full flex items-center px-4 py-2 text-sm text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                      >
                        <Unlink className="w-4 h-4 mr-2" />
                        Disconnect
                      </button>
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Account Stats */}
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Followers</span>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {account.followerCount.toLocaleString()}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Connected</span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {account.connectedAt.toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Last Sync</span>
                  <span className="text-sm text-gray-900 dark:text-white">
                    {getLastSyncText(account.lastSync)}
                  </span>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                <div className="flex items-center">
                  {getStatusIcon(account.status)}
                  <span className={`ml-2 text-sm font-medium ${
                    account.status === 'connected' 
                      ? 'text-green-600 dark:text-green-400'
                      : account.status === 'error'
                      ? 'text-red-600 dark:text-red-400'
                      : 'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {getStatusText(account.status)}
                  </span>
                </div>

                {account.status === 'error' && (
                  <button className="text-xs text-blue-600 dark:text-blue-400 hover:underline">
                    Reconnect
                  </button>
                )}
              </div>
            </motion.div>
          )
        })}
      </div>

      {accounts.length === 0 && (
        <div className="text-center py-12">
          <div className="w-24 h-24 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-12 h-12 text-gray-400" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            No accounts connected
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Start by connecting your first social media account to begin analytics tracking.
          </p>
          <button className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Connect Your First Account
          </button>
        </div>
      )}
    </div>
  )
}
