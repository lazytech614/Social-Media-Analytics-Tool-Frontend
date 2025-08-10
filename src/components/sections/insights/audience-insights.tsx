'use client'

import { motion } from 'framer-motion'
import { Users, MapPin, Clock, Heart } from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import type { TimeRange } from '@/app/insights/page'

interface AudienceInsightsProps {
  timeRange: TimeRange
}

const demographicData = [
  { name: '18-24', value: 28, count: 15400, color: '#3B82F6' },
  { name: '25-34', value: 42, count: 23100, color: '#10B981' },
  { name: '35-44', value: 20, count: 11000, color: '#F59E0B' },
  { name: '45-54', value: 8, count: 4400, color: '#EF4444' },
  { name: '55+', value: 2, count: 1100, color: '#8B5CF6' }
]

const locationData = [
  { country: 'United States', percentage: 45, engagement: 8.9 },
  { country: 'Canada', percentage: 18, engagement: 9.2 },
  { country: 'United Kingdom', percentage: 12, engagement: 7.8 },
  { country: 'Australia', percentage: 10, engagement: 8.5 },
  { country: 'Germany', percentage: 8, engagement: 7.2 },
  { country: 'Others', percentage: 7, engagement: 6.8 }
]

const activityData = [
  { hour: '6 AM', activity: 12 },
  { hour: '9 AM', activity: 34 },
  { hour: '12 PM', activity: 58 },
  { hour: '3 PM', activity: 78 },
  { hour: '6 PM', activity: 95 },
  { hour: '9 PM', activity: 72 },
  { hour: '12 AM', activity: 25 }
]

const insights = [
  {
    title: 'Growing Young Audience',
    description: 'Your 18-24 demographic increased by 45% this month, showing strong appeal to younger users.',
    icon: Users,
    color: 'text-blue-600'
  },
  {
    title: 'Geographic Expansion',
    description: 'Canadian audience engagement is 15% higher than average, indicating strong market potential.',
    icon: MapPin,
    color: 'text-green-600'
  },
  {
    title: 'Prime Time Discovery',
    description: 'Peak engagement window is 6-8 PM, when 68% of your audience is most active.',
    icon: Clock,
    color: 'text-purple-600'
  },
  {
    title: 'Loyalty Trend',
    description: 'Returning visitors increased by 23%, showing improved content relevance and brand loyalty.',
    icon: Heart,
    color: 'text-red-600'
  }
]

export function AudienceInsights({ timeRange }: AudienceInsightsProps) {
  return (
    <div className="space-y-8">
      {/* Main Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center mb-4">
              <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl mr-4">
                <insight.icon className={`w-6 h-6 ${insight.color}`} />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {insight.title}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {insight.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Demographics and Activity Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Age Demographics */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Users className="w-6 h-6 text-blue-600 mr-2" />
            Age Demographics
          </h3>
          
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-1/2 h-64 mb-4 lg:mb-0">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={demographicData}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {demographicData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#1F2937', 
                      border: 'none', 
                      borderRadius: '8px',
                      color: '#F9FAFB'
                    }}
                    formatter={(value: number, name: string, props: any) => [
                      `${value}% (${props.payload.count.toLocaleString()})`, 
                      'Age Group'
                    ]}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            
            <div className="w-full lg:w-1/2 lg:pl-6">
              <div className="space-y-3">
                {demographicData.map((item, index) => (
                  <div key={item.name} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div 
                        className="w-4 h-4 rounded-full mr-3"
                        style={{ backgroundColor: item.color }}
                      />
                      <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                    </div>
                    <div className="text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}%
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Activity Hours */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Clock className="w-6 h-6 text-purple-600 mr-2" />
            Audience Activity Hours
          </h3>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={activityData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="hour" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Activity Level']}
                />
                <Bar dataKey="activity" radius={[4, 4, 0, 0]}>
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`hsl(${250 + index * 20}, 70%, 60%)`} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Geographic Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <MapPin className="w-6 h-6 text-green-600 mr-2" />
          Geographic Distribution & Engagement
        </h3>
        
        <div className="space-y-4">
          {locationData.map((location, index) => (
            <motion.div
              key={location.country}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
            >
              <div className="flex items-center flex-1">
                <span className="font-medium text-gray-900 dark:text-white min-w-24">
                  {location.country}
                </span>
                <div className="flex-1 mx-4">
                  <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${location.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white min-w-12">
                  {location.percentage}%
                </span>
              </div>
              <div className="ml-6 text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">
                  {location.engagement}%
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  Engagement
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
