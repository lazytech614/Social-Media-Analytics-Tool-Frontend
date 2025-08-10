'use client'

import { motion } from 'framer-motion'
import { TrendingUp, TrendingDown, BarChart3, Target, Award, Zap } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import type { TimeRange } from '@/app/insights/page'

interface PerformanceInsightsProps {
  timeRange: TimeRange
}

const performanceData = [
  { date: '2024-01-01', engagement: 8.2, reach: 45000, impressions: 62000 },
  { date: '2024-01-02', engagement: 9.1, reach: 48000, impressions: 65000 },
  { date: '2024-01-03', engagement: 7.8, reach: 42000, impressions: 58000 },
  { date: '2024-01-04', engagement: 11.4, reach: 55000, impressions: 75000 },
  { date: '2024-01-05', engagement: 10.2, reach: 52000, impressions: 71000 },
  { date: '2024-01-06', engagement: 12.8, reach: 58000, impressions: 78000 },
  { date: '2024-01-07', engagement: 13.5, reach: 61000, impressions: 82000 }
]

const insights = [
  {
    id: 1,
    title: 'Engagement Rate Surge',
    description: 'Your engagement rate increased by 34% compared to last period, indicating stronger audience connection.',
    metric: '+34%',
    trend: 'up',
    icon: TrendingUp,
    color: 'text-green-600 dark:text-green-400'
  },
  {
    id: 2,
    title: 'Peak Performance Day',
    description: 'Saturday posts consistently outperform weekdays by 28%. Consider shifting more content to weekends.',
    metric: '+28%',
    trend: 'up',
    icon: Award,
    color: 'text-blue-600 dark:text-blue-400'
  },
  {
    id: 3,
    title: 'Reach Optimization',
    description: 'Your content reach has stabilized. Try experimenting with trending hashtags to expand visibility.',
    metric: '+2%',
    trend: 'stable',
    icon: Target,
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  {
    id: 4,
    title: 'Viral Content Pattern',
    description: 'Posts with questions in captions generate 65% more comments. Include more interactive elements.',
    metric: '+65%',
    trend: 'up',
    icon: Zap,
    color: 'text-purple-600 dark:text-purple-400'
  }
]

export function PerformanceInsights({ timeRange }: PerformanceInsightsProps) {
  return (
    <div className="space-y-8">
      {/* Performance Metrics Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <BarChart3 className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Performance Trends
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engagement rate and reach analysis over time
              </p>
            </div>
          </div>
        </div>

        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={performanceData}>
              <defs>
                <linearGradient id="colorEngagement" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
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
                dataKey="engagement"
                stroke="#3B82F6"
                fill="url(#colorEngagement)"
              />
              <Line 
                type="monotone" 
                dataKey="reach" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Performance Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4">
                  <insight.icon className={`w-6 h-6 ${insight.color}`} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                    {insight.title}
                  </h4>
                  <div className="flex items-center">
                    <span className={`text-2xl font-bold ${insight.color}`}>
                      {insight.metric}
                    </span>
                    {insight.trend === 'up' ? (
                      <TrendingUp className={`w-5 h-5 ml-2 ${insight.color}`} />
                    ) : insight.trend === 'down' ? (
                      <TrendingDown className="w-5 h-5 ml-2 text-red-500" />
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {insight.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
