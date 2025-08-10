'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { TrendingUp, TrendingDown, Users, Heart, MessageCircle, Share, Eye } from 'lucide-react'

const stats = [
  {
    title: 'Total Followers',
    value: 127500,
    change: '+12.5%',
    changeType: 'increase',
    icon: Users,
    color: 'from-blue-500 to-blue-600'
  },
  {
    title: 'Engagement Rate',
    value: 8.4,
    suffix: '%',
    change: '+2.1%',
    changeType: 'increase',
    icon: Heart,
    color: 'from-red-500 to-pink-600'
  },
  {
    title: 'Total Posts',
    value: 234,
    change: '+18',
    changeType: 'increase',
    icon: MessageCircle,
    color: 'from-green-500 to-emerald-600'
  },
  {
    title: 'Reach',
    value: 89600,
    change: '-3.2%',
    changeType: 'decrease',
    icon: Eye,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Shares',
    value: 5847,
    change: '+24.8%',
    changeType: 'increase',
    icon: Share,
    color: 'from-orange-500 to-amber-600'
  }
]

export function StatsOverview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color}`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <div className={`flex items-center text-sm font-medium ${
              stat.changeType === 'increase' 
                ? 'text-green-600 dark:text-green-400' 
                : 'text-red-600 dark:text-red-400'
            }`}>
              {stat.changeType === 'increase' ? (
                <TrendingUp className="w-4 h-4 mr-1" />
              ) : (
                <TrendingDown className="w-4 h-4 mr-1" />
              )}
              {stat.change}
            </div>
          </div>
          
          <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
            <CountUp 
              end={stat.value} 
              duration={2.5} 
              separator="," 
              decimals={stat.suffix === '%' ? 1 : 0}
              suffix={stat.suffix || ''}
            />
          </div>
          
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {stat.title}
          </div>
        </motion.div>
      ))}
    </div>
  )
}
