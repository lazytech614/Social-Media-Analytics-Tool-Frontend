'use client'

import { motion } from 'framer-motion'
import { Users, Plus, Settings, RefreshCw } from 'lucide-react'

interface AccountsHeaderProps {
  accountCount: number
}

export function AccountsHeader({ accountCount }: AccountsHeaderProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-6 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-4"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                Connected Accounts
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Manage your social media connections and settings
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <div className="flex items-center px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm font-medium">{accountCount} Active Accounts</span>
          </div>

          {/* TODO: Make these functional */}
          <div className="flex items-center space-x-3">
            <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors group">
              <RefreshCw className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:rotate-180 transition-transform duration-500" />
            </button>
            <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Settings className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Plus className="w-5 h-5 mr-2" />
              Add Account
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
