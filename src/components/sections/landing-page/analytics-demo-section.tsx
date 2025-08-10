'use client'

import { motion } from 'framer-motion'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import CountUp from 'react-countup'
import { Calendar, TrendingUp, Users, Heart, MessageCircle, Share } from 'lucide-react'

// Mock data for charts
const engagementData = [
  { month: 'Jan', likes: 4000, comments: 2400, shares: 1200, reach: 8000 },
  { month: 'Feb', likes: 3000, comments: 1398, shares: 1800, reach: 9200 },
  { month: 'Mar', likes: 2000, comments: 3800, shares: 2400, reach: 7800 },
  { month: 'Apr', likes: 2780, comments: 3908, shares: 1600, reach: 11000 },
  { month: 'May', likes: 1890, comments: 4800, shares: 2200, reach: 13500 },
  { month: 'Jun', likes: 2390, comments: 3800, shares: 2800, reach: 15200 }
]

const audienceData = [
  { day: 'Mon', engagement: 65 },
  { day: 'Tue', engagement: 78 },
  { day: 'Wed', engagement: 90 },
  { day: 'Thu', engagement: 81 },
  { day: 'Fri', engagement: 95 },
  { day: 'Sat', engagement: 88 },
  { day: 'Sun', engagement: 70 }
]

const growthData = [
  { period: 'Q1', growth: 12 },
  { period: 'Q2', growth: 19 },
  { period: 'Q3', growth: 25 },
  { period: 'Q4', growth: 38 }
]

export function AnalyticsDemoSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            See Your Data Come to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Life
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Interactive dashboards and real-time analytics that make complex data easy to understand
          </p>
        </motion.div>

        {/* Key Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: Users, label: 'Total Followers', value: 125000, color: 'text-blue-600' },
            { icon: Heart, label: 'Total Likes', value: 89600, color: 'text-red-500' },
            { icon: MessageCircle, label: 'Comments', value: 24800, color: 'text-green-600' },
            { icon: Share, label: 'Shares', value: 15200, color: 'text-purple-600' }
          ].map((metric, index) => (
            <div key={metric.label} className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <metric.icon className={`w-8 h-8 ${metric.color}`} />
                <TrendingUp className="w-4 h-4 text-green-500" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                <CountUp end={metric.value} duration={2.5} separator="," />
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{metric.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Engagement Trends */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Engagement Trends
              </h3>
              <Calendar className="w-5 h-5 text-gray-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={engagementData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Area 
                  type="monotone" 
                  dataKey="reach" 
                  stackId="1" 
                  stroke="#3B82F6" 
                  fill="url(#colorReach)" 
                />
                <defs>
                  <linearGradient id="colorReach" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Daily Engagement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Weekly Performance
              </h3>
              <TrendingUp className="w-5 h-5 text-green-500" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={audienceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="day" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
                <Bar dataKey="engagement" radius={[4, 4, 0, 0]}>
                  {audienceData.map((entry, index) => (
                    <Bar key={`cell-${index}`} fill={`hsl(${220 + index * 20}, 70%, 60%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Growth Chart */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg"
        >
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                Quarterly Growth Analysis
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Track your social media growth over time with detailed insights
              </p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-green-600">+38%</div>
              <div className="text-sm text-gray-500">This Quarter</div>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="period" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }} 
              />
              <Line 
                type="monotone" 
                dataKey="growth" 
                stroke="#10B981" 
                strokeWidth={3}
                dot={{ fill: '#10B981', strokeWidth: 2, r: 6 }}
                activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  )
}
