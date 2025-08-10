'use client'

import { motion } from 'framer-motion'
import { RadialBarChart, RadialBar, ResponsiveContainer, Tooltip } from 'recharts'
import { Clock, Calendar, Target, Award, TrendingUp, Users } from 'lucide-react'
import type { Platform } from '@/app/analytics/page'

interface PerformanceAnalyticsProps {
  platform: Platform
}

const performanceData = {
  instagram: {
    bestTimes: [
      { time: '9:00 AM', engagement: 12.4 },
      { time: '1:00 PM', engagement: 15.8 },
      { time: '7:00 PM', engagement: 18.2 },
      { time: '9:00 PM', engagement: 14.6 }
    ],
    weeklyPerformance: [
      { day: 'Monday', score: 85 },
      { day: 'Tuesday', score: 92 },
      { day: 'Wednesday', score: 78 },
      { day: 'Thursday', score: 88 },
      { day: 'Friday', score: 95 },
      { day: 'Saturday', score: 82 },
      { day: 'Sunday', score: 76 }
    ],
    goals: {
      engagement: { target: 10, current: 12.4, color: '#10B981' },
      followers: { target: 1000, current: 1250, color: '#3B82F6' },
      reach: { target: 50000, current: 45800, color: '#F59E0B' }
    }
  },
  twitter: {
    bestTimes: [
      { time: '8:00 AM', engagement: 8.2 },
      { time: '12:00 PM', engagement: 9.8 },
      { time: '5:00 PM', engagement: 11.4 },
      { time: '8:00 PM', engagement: 9.6 }
    ],
    weeklyPerformance: [
      { day: 'Monday', score: 88 },
      { day: 'Tuesday', score: 84 },
      { day: 'Wednesday', score: 91 },
      { day: 'Thursday', score: 86 },
      { day: 'Friday', score: 79 },
      { day: 'Saturday', score: 72 },
      { day: 'Sunday', score: 75 }
    ],
    goals: {
      engagement: { target: 8, current: 9.8, color: '#10B981' },
      followers: { target: 800, current: 892, color: '#3B82F6' },
      reach: { target: 30000, current: 31200, color: '#F59E0B' }
    }
  },
  youtube: {
    bestTimes: [
      { time: '6:00 PM', engagement: 15.6 },
      { time: '8:00 PM', engagement: 18.2 },
      { time: '9:00 PM', engagement: 16.8 },
      { time: '10:00 PM', engagement: 14.4 }
    ],
    weeklyPerformance: [
      { day: 'Monday', score: 82 },
      { day: 'Tuesday', score: 78 },
      { day: 'Wednesday', score: 85 },
      { day: 'Thursday', score: 89 },
      { day: 'Friday', score: 92 },
      { day: 'Saturday', score: 95 },
      { day: 'Sunday', score: 88 }
    ],
    goals: {
      engagement: { target: 12, current: 16.2, color: '#10B981' },
      subscribers: { target: 500, current: 458, color: '#3B82F6' },
      views: { target: 100000, current: 89200, color: '#F59E0B' }
    }
  },
  linkedin: {
    bestTimes: [
      { time: '8:00 AM', engagement: 14.2 },
      { time: '12:00 PM', engagement: 16.8 },
      { time: '5:00 PM', engagement: 19.4 },
      { time: '6:00 PM', engagement: 15.6 }
    ],
    weeklyPerformance: [
      { day: 'Monday', score: 92 },
      { day: 'Tuesday', score: 95 },
      { day: 'Wednesday', score: 88 },
      { day: 'Thursday', score: 91 },
      { day: 'Friday', score: 85 },
      { day: 'Saturday', score: 62 },
      { day: 'Sunday', score: 58 }
    ],
    goals: {
      engagement: { target: 15, current: 17.2, color: '#10B981' },
      connections: { target: 300, current: 341, color: '#3B82F6' },
      impressions: { target: 20000, current: 18900, color: '#F59E0B' }
    }
  },
  facebook: {
    bestTimes: [
      { time: '9:00 AM', engagement: 6.8 },
      { time: '1:00 PM', engagement: 8.2 },
      { time: '3:00 PM', engagement: 9.4 },
      { time: '7:00 PM', engagement: 7.8 }
    ],
    weeklyPerformance: [
      { day: 'Monday', score: 78 },
      { day: 'Tuesday', score: 82 },
      { day: 'Wednesday', score: 85 },
      { day: 'Thursday', score: 88 },
      { day: 'Friday', score: 84 },
      { day: 'Saturday', score: 91 },
      { day: 'Sunday', score: 89 }
    ],
    goals: {
      engagement: { target: 6, current: 8.1, color: '#10B981' },
      followers: { target: 600, current: 783, color: '#3B82F6' },
      reach: { target: 25000, current: 23400, color: '#F59E0B' }
    }
  }
}

export function PerformanceAnalytics({ platform }: PerformanceAnalyticsProps) {
  const data = performanceData[platform]
  
  // Convert goals data to radial bar format
  const goalsData = Object.entries(data.goals).map(([key, goal]) => ({
    name: key,
    value: Math.min((goal.current / goal.target) * 100, 100),
    target: goal.target,
    current: goal.current,
    fill: goal.color
  }))

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Performance Insights
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Optimal times and goal progress
        </p>
      </div>

      {/* Best Posting Times */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
          <Clock className="w-5 h-5 mr-2 text-blue-600" />
          Best Posting Times
        </h4>
        <div className="grid grid-cols-2 gap-3">
          {data.bestTimes.map((time, index) => (
            <motion.div
              key={time.time}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {time.time}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Engagement: {time.engagement}%
                  </div>
                </div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Weekly Performance */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
          <Calendar className="w-5 h-5 mr-2 text-green-600" />
          Weekly Performance
        </h4>
        <div className="space-y-2">
          {data.weeklyPerformance.map((day, index) => (
            <motion.div
              key={day.day}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex items-center justify-between p-2"
            >
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300 w-20">
                {day.day}
              </span>
              <div className="flex-1 mx-4">
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${day.score}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                  />
                </div>
              </div>
              <span className="text-sm font-semibold text-gray-900 dark:text-white w-10 text-right">
                {day.score}%
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Goal Progress */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center">
          <Target className="w-5 h-5 mr-2 text-purple-600" />
          Goal Progress
        </h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              cx="50%"
              cy="50%"
              innerRadius="20%"
              outerRadius="80%"
              data={goalsData}
            >
              <RadialBar
                dataKey="value"
                cornerRadius={10}
                fill="#8884d8"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number, name: string, props: any) => [
                  `${props.payload.current.toLocaleString()} / ${props.payload.target.toLocaleString()}`,
                  name.charAt(0).toUpperCase() + name.slice(1)
                ]}
              />
            </RadialBarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-1 gap-3 mt-4">
          {Object.entries(data.goals).map(([key, goal], index) => (
            <div key={key} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              <div className="flex items-center">
                <div 
                  className="w-4 h-4 rounded-full mr-3"
                  style={{ backgroundColor: goal.color }}
                />
                <span className="font-medium text-gray-900 dark:text-white capitalize">
                  {key}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-gray-900 dark:text-white">
                  {goal.current.toLocaleString()} / {goal.target.toLocaleString()}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400">
                  {((goal.current / goal.target) * 100).toFixed(1)}% complete
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
