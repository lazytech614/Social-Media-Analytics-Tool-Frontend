'use client'

import { motion } from 'framer-motion'
import { X, Shield, CheckCircle, AlertTriangle } from 'lucide-react'
import { useState } from 'react'

interface ConnectionModalProps {
  platform: string
  onClose: () => void
  onConnect: () => void
}

export function ConnectionModal({ platform, onClose, onConnect }: ConnectionModalProps) {
  const [isConnecting, setIsConnecting] = useState(false)
  const [step, setStep] = useState(1)

  const handleConnect = async () => {
    setIsConnecting(true)
    setStep(2)
    
    // Simulate connection process
    setTimeout(() => {
      setStep(3)
      setTimeout(() => {
        onConnect()
      }, 1500)
    }, 2000)
  }

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
            Connect {platform}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Connection Steps */}
        {step === 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            {/* Security Notice */}
            <div className="flex items-start p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
              <Shield className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                  Secure Connection
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300">
                  We use OAuth 2.0 for secure authentication. Your login credentials are never stored by Insighto.
                </p>
              </div>
            </div>

            {/* Permissions */}
            <div>
              <h3 className="font-medium text-gray-900 dark:text-white mb-3">
                We'll request access to:
              </h3>
              <ul className="space-y-2">
                {[
                  'Basic profile information',
                  'Posts and media content',
                  'Engagement metrics (likes, comments, shares)',
                  'Audience insights and demographics'
                ].map((permission, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                    {permission}
                  </li>
                ))}
              </ul>
            </div>

            {/* Privacy Note */}
            <div className="flex items-start p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border border-yellow-200 dark:border-yellow-800">
              <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-medium text-yellow-900 dark:text-yellow-100 mb-1">
                  Privacy First
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300">
                  Your data is encrypted and never shared with third parties. You can disconnect at any time.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex space-x-4 pt-4">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleConnect}
                disabled={isConnecting}
                className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 disabled:opacity-50"
              >
                Connect to {platform}
              </button>
            </div>
          </motion.div>
        )}

        {/* Connecting Step */}
        {step === 2 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Connecting to {platform}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Please complete the authorization process in the popup window...
            </p>
          </motion.div>
        )}

        {/* Success Step */}
        {step === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
          >
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Successfully Connected!
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Your {platform} account has been connected and we're syncing your data.
            </p>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}
