'use client'

import { motion } from 'framer-motion'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { TrendingUp } from 'lucide-react'

const data = [
  { date: '2024-01-01', likes: 4000, comments: 2400, shares: 1200 },
  { date: '2024-01-02', likes: 3000, comments: 1398, shares: 1800 },
  { date: '2024-01-03', likes: 2000, comments: 3800, shares: 2400 },
  { date: '2024-01-04', likes: 2780, comments: 3908, shares: 1600 },
  { date: '2024-01-05', likes: 1890, comments: 4800, shares: 2200 },
  { date: '2024-01-06', likes: 2390, comments: 3800, shares: 2800 },
  { date: '2024-01-07', likes: 3490, comments: 4300, shares: 3200 }
]

export function EngagementChart() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Engagement Overview
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Last 7 days performance
          </p>
        </div>
        <div className="flex items-center text-green-600 dark:text-green-400">
          <TrendingUp className="w-5 h-5 mr-1" />
          <span className="text-sm font-medium">+15.3%</span>
        </div>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id="colorShares" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
            <XAxis 
              dataKey="date" 
              stroke="#6B7280"
              tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
            />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1F2937', 
                border: 'none', 
                borderRadius: '12px',
                color: '#F9FAFB',
                boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
              }} 
            />
            <Area
              type="monotone"
              dataKey="likes"
              stackId="1"
              stroke="#3B82F6"
              fill="url(#colorLikes)"
            />
            <Area
              type="monotone"
              dataKey="comments"
              stackId="1"
              stroke="#10B981"
              fill="url(#colorComments)"
            />
            <Area
              type="monotone"
              dataKey="shares"
              stackId="1"
              stroke="#8B5CF6"
              fill="url(#colorShares)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 mt-4">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Likes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Comments</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
          <span className="text-sm text-gray-600 dark:text-gray-400">Shares</span>
        </div>
      </div>
    </div>
  )
}
