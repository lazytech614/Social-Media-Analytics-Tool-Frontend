'use client'

import { motion } from 'framer-motion'
import { X, AlertTriangle, Trash2 } from 'lucide-react'
import type { SocialAccount } from '@/app/accounts/page'

interface DisconnectModalProps {
  account: SocialAccount
  onClose: () => void
  onConfirm: () => void
}

export function DisconnectModal({ account, onClose, onConfirm }: DisconnectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white dark:bg-gray-800 rounded-2xl p-8 max-w-md w-full shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Disconnect Account
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Warning */}
        <div className="flex items-start p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-200 dark:border-red-800 mb-6">
          <AlertTriangle className="w-5 h-5 text-red-600 mr-3 flex-shrink-0 mt-0.5" />
          <div>
            <h3 className="font-medium text-red-900 dark:text-red-100 mb-1">
              Are you sure?
            </h3>
            <p className="text-sm text-red-700 dark:text-red-300">
              Disconnecting your {account.platform} account will stop data collection and remove access to analytics for this platform.
            </p>
          </div>
        </div>

        {/* Account Info */}
        <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
          <h3 className="font-medium text-gray-900 dark:text-white mb-2">
            Account Details:
          </h3>
          <div className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
            <div>Platform: {account.platform}</div>
            <div>Username: {account.username}</div>
            <div>Followers: {account.followerCount.toLocaleString()}</div>
            <div>Connected: {account.connectedAt.toLocaleDateString()}</div>
          </div>
        </div>

        {/* Consequences */}
        <div className="mb-6">
          <h3 className="font-medium text-gray-900 dark:text-white mb-3">
            What happens when you disconnect:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-center">
              <Trash2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
              Analytics data will no longer be collected
            </li>
            <li className="flex items-center">
              <Trash2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
              Historical data will be preserved but not updated
            </li>
            <li className="flex items-center">
              <Trash2 className="w-4 h-4 text-red-500 mr-2 flex-shrink-0" />
              You'll lose access to real-time insights for this platform
            </li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            Keep Connected
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            Disconnect Account
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
