'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { TrendingUp, TrendingDown, Users, Heart, MessageCircle, Share, Eye, Play } from 'lucide-react'
import type { Platform, DateRange } from '@/app/analytics/page'

interface OverviewCardsProps {
  platform: Platform
  dateRange: DateRange
}

// Mock data for different platforms
const platformData = {
  instagram: {
    followers: { value: 125600, change: 12.5, changeType: 'increase' as const },
    likes: { value: 89600, change: 8.3, changeType: 'increase' as const },
    comments: { value: 5420, change: -2.1, changeType: 'decrease' as const },
    shares: { value: 2840, change: 15.7, changeType: 'increase' as const },
    reach: { value: 458000, change: 22.4, changeType: 'increase' as const }
  },
  twitter: {
    followers: { value: 89200, change: 9.8, changeType: 'increase' as const },
    likes: { value: 67400, change: 5.2, changeType: 'increase' as const },
    comments: { value: 8920, change: 18.6, changeType: 'increase' as const },
    shares: { value: 4560, change: 7.3, changeType: 'increase' as const },
    reach: { value: 312000, change: -4.2, changeType: 'decrease' as const }
  },
  youtube: {
    followers: { value: 45800, change: 23.1, changeType: 'increase' as const },
    likes: { value: 34200, change: 31.5, changeType: 'increase' as const },
    comments: { value: 2890, change: 12.8, changeType: 'increase' as const },
    shares: { value: 1240, change: 8.9, changeType: 'increase' as const },
    views: { value: 892000, change: 45.2, changeType: 'increase' as const }
  },
  linkedin: {
    followers: { value: 34100, change: 6.7, changeType: 'increase' as const },
    likes: { value: 12800, change: 3.4, changeType: 'increase' as const },
    comments: { value: 1560, change: 14.2, changeType: 'increase' as const },
    shares: { value: 890, change: 9.1, changeType: 'increase' as const },
    reach: { value: 156000, change: 11.3, changeType: 'increase' as const }
  },
  facebook: {
    followers: { value: 78300, change: 4.2, changeType: 'increase' as const },
    likes: { value: 45600, change: -1.8, changeType: 'decrease' as const },
    comments: { value: 3240, change: 6.9, changeType: 'increase' as const },
    shares: { value: 2100, change: 12.4, changeType: 'increase' as const },
    reach: { value: 234000, change: 7.8, changeType: 'increase' as const }
  }
}

export function OverviewCards({ platform, dateRange }: OverviewCardsProps) {
  const data = platformData[platform]
  
  const getCards = () => {
    const baseCards = [
      {
        title: 'Followers',
        value: data.followers.value,
        change: data.followers.change,
        changeType: data.followers.changeType,
        icon: Users,
        color: 'from-blue-500 to-blue-600'
      },
      {
        title: 'Likes',
        value: data.likes.value,
        change: data.likes.change,
        changeType: data.likes.changeType,
        icon: Heart,
        color: 'from-red-500 to-pink-600'
      },
      {
        title: 'Comments',
        value: data.comments.value,
        change: data.comments.change,
        changeType: data.comments.changeType,
        icon: MessageCircle,
        color: 'from-green-500 to-emerald-600'
      },
      {
        title: 'Shares',
        value: data.shares.value,
        change: data.shares.change,
        changeType: data.shares.changeType,
        icon: Share,
        color: 'from-purple-500 to-indigo-600'
      }
    ]

    // Add platform-specific metrics
    if (platform === 'youtube') {
      baseCards.push({
        title: 'Views',
        value: (data as any).views.value,
        change: (data as any).views.change,
        changeType: (data as any).views.changeType,
        icon: Play,
        color: 'from-orange-500 to-amber-600'
      })
    } else {
      baseCards.push({
        title: 'Reach',
        value: (data as any).reach.value,
        change: (data as any).reach.change,
        changeType: (data as any).reach.changeType,
        icon: Eye,
        color: 'from-orange-500 to-amber-600'
      })
    }

    return baseCards
  }

  const cards = getCards()

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${card.color}`}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            <div className={`flex items-center text-sm font-medium ${
              card.changeType === 'increase' 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {card.changeType === 'increase' ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {Math.abs(card.change)}%
            </div>
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            <CountUp 
              end={card.value} 
              duration={2.5} 
              separator="," 
            />
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {card.title}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
