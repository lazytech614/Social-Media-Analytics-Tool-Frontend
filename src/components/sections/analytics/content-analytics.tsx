'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Image, Video, FileText, Calendar, TrendingUp, Hash } from 'lucide-react'
import type { Platform } from '@/app/analytics/page'

interface ContentAnalyticsProps {
  platform: Platform
}

const contentData = {
  instagram: {
    types: [
      { type: 'Photos', count: 245, engagement: 8.2, icon: Image },
      { type: 'Videos', count: 89, engagement: 12.4, icon: Video },
      { type: 'Reels', count: 156, engagement: 15.8, icon: Video },
      { type: 'Stories', count: 320, engagement: 6.1, icon: FileText }
    ],
    hashtags: [
      { tag: '#socialmedia', count: 45, performance: 92 },
      { tag: '#marketing', count: 38, performance: 87 },
      { tag: '#analytics', count: 32, performance: 95 },
      { tag: '#business', count: 28, performance: 78 },
      { tag: '#startup', count: 25, performance: 88 }
    ]
  },
  twitter: {
    types: [
      { type: 'Tweets', count: 432, engagement: 4.8, icon: FileText },
      { type: 'Replies', count: 189, engagement: 3.2, icon: FileText },
      { type: 'Retweets', count: 78, engagement: 2.1, icon: TrendingUp },
      { type: 'Media', count: 65, engagement: 7.9, icon: Image }
    ],
    hashtags: [
      { tag: '#tech', count: 56, performance: 89 },
      { tag: '#innovation', count: 42, performance: 92 },
      { tag: '#AI', count: 38, performance: 95 },
      { tag: '#startup', count: 34, performance: 83 },
      { tag: '#digitalmarketing', count: 29, performance: 87 }
    ]
  },
  youtube: {
    types: [
      { type: 'Long Videos', count: 45, engagement: 8.9, icon: Video },
      { type: 'Shorts', count: 89, engagement: 12.3, icon: Video },
      { type: 'Live Streams', count: 12, engagement: 15.6, icon: Video },
      { type: 'Premieres', count: 8, engagement: 11.2, icon: Video }
    ],
    hashtags: [
      { tag: '#tutorial', count: 23, performance: 94 },
      { tag: '#howto', count: 19, performance: 89 },
      { tag: '#tech', count: 16, performance: 92 },
      { tag: '#review', count: 14, performance: 86 },
      { tag: '#tips', count: 12, performance: 91 }
    ]
  },
  linkedin: {
    types: [
      { type: 'Articles', count: 56, engagement: 12.4, icon: FileText },
      { type: 'Posts', count: 189, engagement: 8.7, icon: FileText },
      { type: 'Videos', count: 23, engagement: 15.2, icon: Video },
      { type: 'Documents', count: 12, engagement: 9.8, icon: FileText }
    ],
    hashtags: [
      { tag: '#leadership', count: 34, performance: 91 },
      { tag: '#business', count: 29, performance: 88 },
      { tag: '#professional', count: 25, performance: 93 },
      { tag: '#career', count: 22, performance: 85 },
      { tag: '#networking', count: 19, performance: 89 }
    ]
  },
  facebook: {
    types: [
      { type: 'Posts', count: 234, engagement: 5.6, icon: FileText },
      { type: 'Photos', count: 156, engagement: 7.2, icon: Image },
      { type: 'Videos', count: 78, engagement: 9.8, icon: Video },
      { type: 'Stories', count: 189, engagement: 4.2, icon: FileText }
    ],
    hashtags: [
      { tag: '#community', count: 42, performance: 86 },
      { tag: '#family', count: 38, performance: 89 },
      { tag: '#local', count: 34, performance: 82 },
      { tag: '#events', count: 29, performance: 87 },
      { tag: '#lifestyle', count: 25, performance: 84 }
    ]
  }
}

export function ContentAnalytics({ platform }: ContentAnalyticsProps) {
  const data = contentData[platform]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Content Analytics
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Content performance by type and hashtags
        </p>
      </div>

      {/* Content Types Performance */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Content Types</h4>
        <div className="h-48 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.types}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="type" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number, name: string) => [
                  name === 'engagement' ? `${value}%` : value,
                  name === 'engagement' ? 'Engagement Rate' : 'Count'
                ]}
              />
              <Bar dataKey="count" fill="#3B82F6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Content Type Details */}
        <div className="grid grid-cols-2 gap-4">
          {data.types.map((type, index) => (
            <div key={type.type} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center">
                  <type.icon className="w-4 h-4 text-blue-600 mr-2" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {type.type}
                  </span>
                </div>
                <span className="text-xs text-green-600 dark:text-green-400">
                  {type.engagement}%
                </span>
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400">
                {type.count} posts
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Hashtags */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Top Hashtags</h4>
        <div className="space-y-3">
          {data.hashtags.map((hashtag, index) => (
            <motion.div
              key={hashtag.tag}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center">
                <Hash className="w-4 h-4 text-blue-600 mr-2" />
                <span className="font-medium text-gray-900 dark:text-white">
                  {hashtag.tag}
                </span>
                <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
                  ({hashtag.count} uses)
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mr-3">
                  <div 
                    className="h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                    style={{ width: `${hashtag.performance}%` }}
                  />
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {hashtag.performance}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
