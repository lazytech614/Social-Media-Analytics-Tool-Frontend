'use client'

import { motion } from 'framer-motion'
import { Heart, MessageCircle, Share, MoreHorizontal, Instagram, Twitter } from 'lucide-react'
import Image from 'next/image'

const recentPosts = [
  {
    id: 1,
    platform: 'Instagram',
    content: 'Just launched our new AI-powered analytics dashboard! 🚀 The insights are incredible.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    timestamp: '2 hours ago',
    likes: 245,
    comments: 18,
    shares: 12,
    icon: Instagram,
    iconColor: 'text-pink-600'
  },
  {
    id: 2,
    platform: 'Twitter',
    content: 'Pro tip: The best time to post on social media varies by platform and audience. Our AI analyzes your data to find your optimal posting times 📊',
    timestamp: '4 hours ago',
    likes: 89,
    comments: 7,
    shares: 23,
    icon: Twitter,
    iconColor: 'text-blue-500'
  },
  {
    id: 3,
    platform: 'Instagram',
    content: 'Behind the scenes of our latest campaign! The engagement rates have been phenomenal 📈',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop',
    timestamp: '1 day ago',
    likes: 567,
    comments: 34,
    shares: 45,
    icon: Instagram,
    iconColor: 'text-pink-600'
  }
]

export function RecentPosts() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
          Recent Posts
        </h3>
        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline">
          View All
        </button>
      </div>

      <div className="space-y-6">
        {recentPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="border-b border-gray-200 dark:border-gray-700 last:border-b-0 pb-6 last:pb-0"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <post.icon className={`w-5 h-5 ${post.iconColor}`} />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {post.platform}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      •
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.timestamp}
                    </span>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <MoreHorizontal className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3 text-sm leading-relaxed">
                  {post.content}
                </p>

                {post.image && (
                  <div className="relative w-full h-32 mb-3 rounded-lg overflow-hidden">
                    <Image
                      src={post.image}
                      alt="Post content"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                <div className="flex items-center space-x-6">
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <Heart className="w-4 h-4" />
                    <span className="text-sm">{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <MessageCircle className="w-4 h-4" />
                    <span className="text-sm">{post.comments}</span>
                  </div>
                  <div className="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
                    <Share className="w-4 h-4" />
                    <span className="text-sm">{post.shares}</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
