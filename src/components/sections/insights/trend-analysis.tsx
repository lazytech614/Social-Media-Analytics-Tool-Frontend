'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Hash, Clock, ArrowUp, ArrowDown, Search, Filter } from 'lucide-react'
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { useState } from 'react'
import type { TimeRange } from '@/app/insights/page'

interface TrendAnalysisProps {
  timeRange: TimeRange
}

const trendingHashtags = [
  { tag: '#AIRevolution', posts: 12500, growth: '+340%', trend: 'up', engagement: 8.9 },
  { tag: '#TechInnovation', posts: 9800, growth: '+180%', trend: 'up', engagement: 7.4 },
  { tag: '#SocialMediaTips', posts: 7600, growth: '+85%', trend: 'up', engagement: 6.8 },
  { tag: '#ContentMarketing', posts: 6200, growth: '+45%', trend: 'up', engagement: 5.9 },
  { tag: '#VideoMarketing', posts: 4800, growth: '-12%', trend: 'down', engagement: 4.2 },
  { tag: '#InfluencerStrategy', posts: 3900, growth: '-28%', trend: 'down', engagement: 3.8 }
]

const trendingTopics = [
  { topic: 'Artificial Intelligence', volume: 95, growth: '+45%', category: 'Technology' },
  { topic: 'Sustainability', volume: 87, growth: '+38%', category: 'Environment' },
  { topic: 'Remote Work', volume: 72, growth: '+22%', category: 'Workplace' },
  { topic: 'Mental Health', volume: 68, growth: '+67%', category: 'Health' },
  { topic: 'Cryptocurrency', volume: 54, growth: '-15%', category: 'Finance' },
  { topic: 'E-commerce', volume: 49, growth: '+12%', category: 'Business' }
]

const hashtagGrowthData = [
  { week: 'Week 1', aiRevolution: 3200, techInnovation: 2800, socialTips: 2100 },
  { week: 'Week 2', aiRevolution: 4100, techInnovation: 3200, socialTips: 2400 },
  { week: 'Week 3', aiRevolution: 5800, techInnovation: 4100, socialTips: 2900 },
  { week: 'Week 4', aiRevolution: 8300, techInnovation: 5600, socialTips: 3800 },
  { week: 'Week 5', aiRevolution: 10200, techInnovation: 7200, socialTips: 4500 },
  { week: 'Week 6', aiRevolution: 12500, techInnovation: 9800, socialTips: 7600 }
]

const topicDistributionData = [
  { name: 'Technology', value: 35, color: '#3B82F6' },
  { name: 'Health', value: 20, color: '#10B981' },
  { name: 'Business', value: 18, color: '#F59E0B' },
  { name: 'Environment', value: 15, color: '#EF4444' },
  { name: 'Finance', value: 8, color: '#8B5CF6' },
  { name: 'Others', value: 4, color: '#6B7280' }
]

const viralityData = [
  { content: 'AI Tutorial Video', reach: 1250000, engagement: 15.8, platform: 'TikTok' },
  { content: 'Sustainability Infographic', reach: 890000, engagement: 12.4, platform: 'Instagram' },
  { content: 'Remote Work Tips Thread', reach: 640000, engagement: 9.7, platform: 'Twitter' },
  { content: 'Mental Health Awareness Post', reach: 520000, engagement: 11.2, platform: 'LinkedIn' }
]

export function TrendAnalysis({ timeRange }: TrendAnalysisProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const filteredTopics = selectedCategory === 'all' 
    ? trendingTopics 
    : trendingTopics.filter(topic => topic.category.toLowerCase() === selectedCategory.toLowerCase())

  const categories = ['all', 'technology', 'health', 'business', 'environment', 'finance']

  return (
    <div className="space-y-8">
      {/* Trending Hashtags */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Hash className="w-6 h-6 text-purple-600 mr-3" />
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Trending Hashtags
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Top performing hashtags with growth indicators
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Search className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="p-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Filter className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trendingHashtags.map((hashtag, index) => (
            <motion.div
              key={hashtag.tag}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                hashtag.trend === 'up'
                  ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                  : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-gray-900 dark:text-white text-lg">
                  {hashtag.tag}
                </span>
                <div className={`flex items-center text-sm font-medium ${
                  hashtag.trend === 'up' 
                    ? 'text-green-600 dark:text-green-400' 
                    : 'text-red-600 dark:text-red-400'
                }`}>
                  {hashtag.trend === 'up' ? (
                    <ArrowUp className="w-4 h-4 mr-1" />
                  ) : (
                    <ArrowDown className="w-4 h-4 mr-1" />
                  )}
                  {hashtag.growth}
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Posts:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {hashtag.posts.toLocaleString()}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-400">Engagement:</span>
                  <span className="font-medium text-gray-900 dark:text-white">
                    {hashtag.engagement}%
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hashtag Growth Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
          Hashtag Growth Over Time
        </h3>

        <div className="h-80 mb-4">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={hashtagGrowthData}>
              <defs>
                <linearGradient id="colorAI" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorTech" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0.1}/>
                </linearGradient>
                <linearGradient id="colorSocial" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                  <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0.1}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis dataKey="week" stroke="#6B7280" />
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
                dataKey="aiRevolution"
                stackId="1"
                stroke="#3B82F6"
                fill="url(#colorAI)"
                name="#AIRevolution"
              />
              <Area
                type="monotone"
                dataKey="techInnovation"
                stackId="1"
                stroke="#10B981"
                fill="url(#colorTech)"
                name="#TechInnovation"
              />
              <Area
                type="monotone"
                dataKey="socialTips"
                stackId="1"
                stroke="#8B5CF6"
                fill="url(#colorSocial)"
                name="#SocialTips"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center space-x-6">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">#AIRevolution</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">#TechInnovation</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">#SocialTips</span>
          </div>
        </div>
      </div>

      {/* Trending Topics and Topic Distribution */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Trending Topics */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white flex items-center">
              <Clock className="w-6 h-6 text-orange-600 mr-2" />
              Trending Topics
            </h3>
            
            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-4">
            {filteredTopics.map((topic, index) => (
              <motion.div
                key={topic.topic}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <span className="font-medium text-gray-900 dark:text-white">
                      {topic.topic}
                    </span>
                    <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                      {topic.category}
                    </span>
                  </div>
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">
                    {topic.growth}
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Volume</span>
                  <div className="flex items-center">
                    <div className="w-20 h-2 bg-gray-200 dark:bg-gray-600 rounded-full mr-3">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${topic.volume}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {topic.volume}%
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Topic Distribution */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
            Topic Distribution
          </h3>

          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topicDistributionData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {topicDistributionData.map((entry, index) => (
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
                  formatter={(value: number) => [`${value}%`, 'Share']}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-2">
            {topicDistributionData.map((item, index) => (
              <div key={item.name} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div 
                    className="w-4 h-4 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                </div>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Viral Content Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Viral Content Analysis
        </h3>

        <div className="space-y-4">
          {viralityData.map((content, index) => (
            <motion.div
              key={content.content}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {content.content}
                  </h4>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                    <span>Platform: {content.platform}</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                    {content.engagement}%
                  </div>
                  <div className="text-xs text-gray-500">Engagement</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Reach:</span>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {(content.reach / 1000000).toFixed(1)}M
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Virality Score:</span>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {Math.floor(content.reach / 10000)}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
