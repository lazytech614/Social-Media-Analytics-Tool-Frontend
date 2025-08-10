'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts'
import type { Platform } from '@/app/analytics/page'

interface EngagementAnalyticsProps {
  platform: Platform
}

// Mock engagement data for different platforms
const engagementData = {
  instagram: [
    { date: '2024-01-01', likes: 4000, comments: 2400, shares: 1200, engagement: 7.8 },
    { date: '2024-01-02', likes: 3000, comments: 1398, shares: 1800, engagement: 6.2 },
    { date: '2024-01-03', likes: 5000, comments: 3800, shares: 2400, engagement: 11.2 },
    { date: '2024-01-04', likes: 2780, comments: 3908, shares: 1600, engagement: 8.3 },
    { date: '2024-01-05', likes: 6890, comments: 4800, shares: 2200, engagement: 13.9 },
    { date: '2024-01-06', likes: 3390, comments: 3800, shares: 2800, engagement: 10.0 },
    { date: '2024-01-07', likes: 4490, comments: 4300, shares: 3200, engagement: 12.0 }
  ],
  twitter: [
    { date: '2024-01-01', likes: 2500, comments: 890, shares: 450, engagement: 4.8 },
    { date: '2024-01-02', likes: 3200, comments: 1200, shares: 680, engagement: 5.1 },
    { date: '2024-01-03', likes: 2800, comments: 1100, shares: 520, engagement: 4.4 },
    { date: '2024-01-04', likes: 4100, comments: 1500, shares: 890, engagement: 6.5 },
    { date: '2024-01-05', likes: 3600, comments: 1300, shares: 720, engagement: 5.6 },
    { date: '2024-01-06', likes: 4800, comments: 1800, shares: 1100, engagement: 7.7 },
    { date: '2024-01-07', likes: 5200, comments: 2100, shares: 1250, engagement: 8.6 }
  ],
  youtube: [
    { date: '2024-01-01', likes: 1200, comments: 340, shares: 180, views: 25000, engagement: 6.9 },
    { date: '2024-01-02', likes: 1800, comments: 520, shares: 280, views: 32000, engagement: 8.1 },
    { date: '2024-01-03', likes: 2400, comments: 680, shares: 380, views: 41000, engagement: 8.5 },
    { date: '2024-01-04', likes: 1900, comments: 540, shares: 320, views: 35000, engagement: 7.9 },
    { date: '2024-01-05', likes: 3200, comments: 890, shares: 520, views: 58000, engagement: 7.9 },
    { date: '2024-01-06', likes: 2800, comments: 760, shares: 450, views: 48000, engagement: 8.4 },
    { date: '2024-01-07', likes: 3600, comments: 980, shares: 640, views: 62000, engagement: 8.3 }
  ],
  linkedin: [
    { date: '2024-01-01', likes: 180, comments: 45, shares: 32, engagement: 7.5 },
    { date: '2024-01-02', likes: 220, comments: 68, shares: 41, engagement: 9.6 },
    { date: '2024-01-03', likes: 340, comments: 89, shares: 67, engagement: 14.5 },
    { date: '2024-01-04', likes: 290, comments: 73, shares: 55, engagement: 12.2 },
    { date: '2024-01-05', likes: 420, comments: 98, shares: 78, engagement: 17.4 },
    { date: '2024-01-06', likes: 380, comments: 91, shares: 69, engagement: 15.8 },
    { date: '2024-01-07', likes: 460, comments: 112, shares: 89, engagement: 19.3 }
  ],
  facebook: [
    { date: '2024-01-01', likes: 1800, comments: 420, shares: 280, engagement: 3.2 },
    { date: '2024-01-02', likes: 2200, comments: 580, shares: 390, engagement: 4.1 },
    { date: '2024-01-03', likes: 1600, comments: 340, shares: 220, engagement: 2.8 },
    { date: '2024-01-04', likes: 2800, comments: 720, shares: 480, engagement: 5.1 },
    { date: '2024-01-05', likes: 2400, comments: 650, shares: 420, engagement: 4.4 },
    { date: '2024-01-06', likes: 3200, comments: 890, shares: 580, engagement: 6.0 },
    { date: '2024-01-07', likes: 2900, comments: 780, shares: 520, engagement: 5.3 }
  ]
}

export function EngagementAnalytics({ platform }: EngagementAnalyticsProps) {
  const data = engagementData[platform]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
            Engagement Trends
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {platform.charAt(0).toUpperCase() + platform.slice(1)} engagement over time
          </p>
        </div>
      </div>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id={`colorLikes-${platform}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id={`colorComments-${platform}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
              </linearGradient>
              <linearGradient id={`colorShares-${platform}`} x1="0" y1="0" x2="0" y2="1">
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
              fill={`url(#colorLikes-${platform})`}
            />
            <Area
              type="monotone"
              dataKey="comments"
              stackId="1"
              stroke="#10B981"
              fill={`url(#colorComments-${platform})`}
            />
            <Area
              type="monotone"
              dataKey="shares"
              stackId="1"
              stroke="#8B5CF6"
              fill={`url(#colorShares-${platform})`}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Engagement Rate Chart */}
      <div className="h-60">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Engagement Rate</h4>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
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
                color: '#F9FAFB'
              }}
              formatter={(value: number) => [`${value}%`, 'Engagement Rate']}
            />
            <Line 
              type="monotone" 
              dataKey="engagement" 
              stroke="#F59E0B" 
              strokeWidth={3}
              dot={{ fill: '#F59E0B', strokeWidth: 2, r: 4 }}
              activeDot={{ r: 6, stroke: '#F59E0B', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
