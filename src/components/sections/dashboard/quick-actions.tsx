'use client'

import { motion } from 'framer-motion'
import { Plus, Upload, BarChart3, Settings, Users, Calendar } from 'lucide-react'

const actions = [
  {
    title: 'Create Post',
    description: 'Schedule a new post',
    icon: Plus,
    color: 'from-blue-500 to-blue-600',
    href: '/dashboard/create'
  },
  {
    title: 'Upload Content',
    description: 'Bulk upload media',
    icon: Upload,
    color: 'from-green-500 to-emerald-600',
    href: '/dashboard/upload'
  },
  {
    title: 'View Analytics',
    description: 'Deep dive into metrics',
    icon: BarChart3,
    color: 'from-purple-500 to-indigo-600',
    href: '/dashboard/analytics'
  },
  {
    title: 'Manage Accounts',
    description: 'Connect social platforms',
    icon: Users,
    color: 'from-orange-500 to-red-600',
    href: '/dashboard/accounts'
  },
  {
    title: 'Schedule Posts',
    description: 'Plan your content',
    icon: Calendar,
    color: 'from-pink-500 to-rose-600',
    href: '/dashboard/scheduler'
  },
  {
    title: 'Settings',
    description: 'Configure preferences',
    icon: Settings,
    color: 'from-gray-500 to-gray-600',
    href: '/dashboard/settings'
  }
]

export function QuickActions() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Quick Actions</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={action.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group p-4 rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-transparent bg-gray-50 dark:bg-gray-700 hover:bg-gradient-to-br hover:from-gray-50 hover:to-white dark:hover:from-gray-700 dark:hover:to-gray-600 transition-all duration-300"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${action.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
              {action.title}
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-400">
              {action.description}
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
