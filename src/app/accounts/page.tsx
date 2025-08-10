'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRequireAuth } from '@/hooks/use-auth'
import { AccountsHeader } from '@/components/layout/accounts-header'
import { ConnectedAccounts } from '@/components/sections/accounts/connected-accounts'
import { AvailablePlatforms } from '@/components/sections/accounts/available-platforms'
import { AccountSettings } from '@/components/sections/accounts/account-settings'
import { ConnectionModal } from '@/components/sections/accounts/connection-modal'
import { DisconnectModal } from '@/components/sections/accounts/disconnect-modal'

export type ConnectionStatus = 'connected' | 'disconnected' | 'connecting' | 'error'

export interface SocialAccount {
  id: string
  platform: string
  username: string
  displayName: string
  followerCount: number
  status: ConnectionStatus
  connectedAt: Date
  lastSync: Date
  avatar?: string
  isActive: boolean
}

export default function AccountsPage() {
  const { isLoading } = useRequireAuth()
  const [selectedAccount, setSelectedAccount] = useState<SocialAccount | null>(null)
  const [showConnectionModal, setShowConnectionModal] = useState(false)
  const [showDisconnectModal, setShowDisconnectModal] = useState(false)
  const [selectedPlatform, setSelectedPlatform] = useState<string>('')
  const [accounts, setAccounts] = useState<SocialAccount[]>([
    {
      id: '1',
      platform: 'Instagram',
      username: '@yourcompany',
      displayName: 'Your Company',
      followerCount: 125600,
      status: 'connected',
      connectedAt: new Date('2024-01-15'),
      lastSync: new Date(),
      avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=face',
      isActive: true
    },
    {
      id: '2',
      platform: 'Twitter',
      username: '@yourcompany',
      displayName: 'Your Company',
      followerCount: 89200,
      status: 'connected',
      connectedAt: new Date('2024-01-10'),
      lastSync: new Date(Date.now() - 3600000), // 1 hour ago
      avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=face',
      isActive: true
    },
    {
      id: '3',
      platform: 'YouTube',
      username: '@yourcompanychannel',
      displayName: 'Your Company Channel',
      followerCount: 45800,
      status: 'error',
      connectedAt: new Date('2024-01-05'),
      lastSync: new Date(Date.now() - 86400000), // 1 day ago
      avatar: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=100&h=100&fit=crop&crop=face',
      isActive: false
    }
  ])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const handleConnectAccount = (platform: string) => {
    setSelectedPlatform(platform)
    setShowConnectionModal(true)
  }

  const handleDisconnectAccount = (account: SocialAccount) => {
    setSelectedAccount(account)
    setShowDisconnectModal(true)
  }

  const handleAccountSettings = (account: SocialAccount) => {
    setSelectedAccount(account)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Accounts Header */}
          <motion.div variants={itemVariants}>
            <AccountsHeader accountCount={accounts.filter(acc => acc.isActive).length} />
          </motion.div>

          {/* Connected Accounts */}
          <motion.div variants={itemVariants}>
            <ConnectedAccounts
              accounts={accounts}
              onDisconnect={handleDisconnectAccount}
              onSettings={handleAccountSettings}
            />
          </motion.div>

          {/* Available Platforms */}
          <motion.div variants={itemVariants}>
            <AvailablePlatforms
              connectedPlatforms={accounts.map(acc => acc.platform)}
              onConnect={handleConnectAccount}
            />
          </motion.div>

          {/* Account Settings */}
          {selectedAccount && (
            <motion.div variants={itemVariants}>
              <AccountSettings
                account={selectedAccount}
                onClose={() => setSelectedAccount(null)}
              />
            </motion.div>
          )}
        </motion.div>
      </div>

      {/* Modals */}
      <AnimatePresence>
        {showConnectionModal && (
          <ConnectionModal
            platform={selectedPlatform}
            onClose={() => setShowConnectionModal(false)}
            onConnect={() => {
              setShowConnectionModal(false)
              // Handle connection logic here
            }}
          />
        )}

        {showDisconnectModal && selectedAccount && (
          <DisconnectModal
            account={selectedAccount}
            onClose={() => setShowDisconnectModal(false)}
            onConfirm={() => {
              setAccounts(accounts.map(acc => 
                acc.id === selectedAccount.id 
                  ? { ...acc, status: 'disconnected', isActive: false }
                  : acc
              ))
              setShowDisconnectModal(false)
              setSelectedAccount(null)
            }}
          />
        )}
      </AnimatePresence>
    </div>
  )
}
