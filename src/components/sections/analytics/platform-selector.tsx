'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Linkedin, Facebook, Check } from 'lucide-react'
import type { Platform } from '@/app/analytics/page'

interface PlatformSelectorProps {
  selectedPlatform: Platform
  onPlatformChange: (platform: Platform) => void
}

const platforms = [
  {
    id: 'instagram' as Platform,
    name: 'Instagram',
    icon: Instagram,
    color: 'from-pink-500 to-rose-500',
    stats: { followers: '125.6K', posts: '1,847' }
  },
  {
    id: 'twitter' as Platform,
    name: 'Twitter',
    icon: Twitter,
    color: 'from-blue-400 to-blue-600',
    stats: { followers: '89.2K', posts: '3,294' }
  },
  {
    id: 'youtube' as Platform,
    name: 'YouTube',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    stats: { followers: '45.8K', posts: '234' }
  },
  {
    id: 'linkedin' as Platform,
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    stats: { followers: '34.1K', posts: '567' }
  },
  {
    id: 'facebook' as Platform,
    name: 'Facebook',
    icon: Facebook,
    color: 'from-blue-700 to-indigo-700',
    stats: { followers: '78.3K', posts: '892' }
  }
]

export function PlatformSelector({ selectedPlatform, onPlatformChange }: PlatformSelectorProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Select Platform
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {platforms.map((platform) => (
          <motion.button
            key={platform.id}
            onClick={() => onPlatformChange(platform.id)}
            className={`relative p-4 rounded-xl border-2 transition-all duration-300 group ${
              selectedPlatform === platform.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {selectedPlatform === platform.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <Check className="w-4 h-4 text-white" />
              </motion.div>
            )}

            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${platform.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
              <platform.icon className="w-6 h-6 text-white" />
            </div>

            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white mb-2">
                {platform.name}
              </div>
              <div className="space-y-1">
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {platform.stats.followers} followers
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {platform.stats.posts} posts
                </div>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  )
}
