'use client'

import { motion } from 'framer-motion'
import { Instagram, Twitter, Youtube, Linkedin, Facebook, Plus, Check } from 'lucide-react'

interface AvailablePlatformsProps {
  connectedPlatforms: string[]
  onConnect: (platform: string) => void
}

const platforms = [
  {
    name: 'Instagram',
    icon: Instagram,
    color: 'from-pink-500 to-rose-500',
    description: 'Connect your Instagram business account for comprehensive analytics',
    features: ['Post Analytics', 'Story Insights', 'Audience Demographics', 'Hashtag Performance']
  },
  {
    name: 'Twitter',
    icon: Twitter,
    color: 'from-blue-400 to-blue-600',
    description: 'Track your Twitter engagement, reach, and audience growth',
    features: ['Tweet Analytics', 'Follower Growth', 'Engagement Metrics', 'Trending Topics']
  },
  {
    name: 'YouTube',
    icon: Youtube,
    color: 'from-red-500 to-red-600',
    description: 'Monitor your YouTube channel performance and video analytics',
    features: ['Video Performance', 'Subscriber Growth', 'Watch Time', 'Revenue Tracking']
  },
  {
    name: 'LinkedIn',
    icon: Linkedin,
    color: 'from-blue-600 to-blue-700',
    description: 'Professional network insights and content performance tracking',
    features: ['Post Engagement', 'Profile Views', 'Connection Growth', 'Industry Insights']
  },
  {
    name: 'Facebook',
    icon: Facebook,
    color: 'from-blue-700 to-indigo-700',
    description: 'Complete Facebook page analytics and audience insights',
    features: ['Page Analytics', 'Post Performance', 'Audience Insights', 'Ad Performance']
  },
]

export function AvailablePlatforms({ connectedPlatforms, onConnect }: AvailablePlatformsProps) {
  const availablePlatforms = platforms.filter(platform => !connectedPlatforms.includes(platform.name))

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Available Platforms
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Connect more social media accounts to get comprehensive analytics across all platforms
        </p>
      </div>

      {availablePlatforms.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {availablePlatforms.map((platform, index) => (
            <motion.div
              key={platform.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-6 border-2 border-gray-200 dark:border-gray-700 rounded-2xl hover:border-blue-300 dark:hover:border-blue-600 hover:shadow-lg transition-all duration-300 bg-gray-50 dark:bg-gray-700"
            >
              {/* Platform Header */}
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${platform.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                  <platform.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {platform.name}
                  </h3>
                  <div className="flex items-center text-sm text-blue-600 dark:text-blue-400">
                    <Plus className="w-4 h-4 mr-1" />
                    Available
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {platform.description}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Features included:
                </h4>
                <ul className="space-y-2">
                  {platform.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Connect Button */}
              <button
                onClick={() => onConnect(platform.name)}
                className={`w-full flex items-center justify-center px-4 py-3 bg-gradient-to-r ${platform.color} text-white font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200`}
              >
                <Plus className="w-5 h-5 mr-2" />
                Connect {platform.name}
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-2xl">
          <div className="w-24 h-24 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
            <Check className="w-12 h-12 text-green-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
            All Platforms Connected!
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            You've connected all available social media platforms. Great job!
          </p>
        </div>
      )}
    </div>
  )
}
