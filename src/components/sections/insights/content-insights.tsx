'use client'

import { motion } from 'framer-motion'
import { FileText, Image, Video, Hash, TrendingUp, Award, Target } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import type { TimeRange } from '@/app/insights/page'

interface ContentInsightsProps {
  timeRange: TimeRange
}

const contentTypeData = [
  { type: 'Videos', engagement: 12.4, posts: 45, reach: 85000, color: '#3B82F6' },
  { type: 'Images', engagement: 8.7, posts: 128, reach: 65000, color: '#10B981' },
  { type: 'Carousels', engagement: 9.8, posts: 32, reach: 72000, color: '#F59E0B' },
  { type: 'Text Posts', engagement: 6.2, posts: 78, reach: 42000, color: '#EF4444' }
]

const hashtagData = [
  { tag: '#socialmedia', usage: 45, performance: 94, growth: '+23%' },
  { tag: '#marketing', usage: 38, performance: 87, growth: '+15%' },
  { tag: '#AI', usage: 32, performance: 96, growth: '+45%' },
  { tag: '#tech', usage: 28, performance: 82, growth: '+8%' },
  { tag: '#innovation', usage: 25, performance: 89, growth: '+31%' }
]

const topPosts = [
  {
    id: 1,
    type: 'Video',
    title: 'AI Revolution in Social Media Marketing',
    engagement: 15.8,
    reach: 125000,
    comments: 342,
    shares: 89
  },
  {
    id: 2,
    type: 'Carousel',
    title: '5 Tips for Better Social Media Analytics',
    engagement: 12.4,
    reach: 98000,
    comments: 256,
    shares: 67
  },
  {
    id: 3,
    type: 'Image',
    title: 'Behind the Scenes: Our Analytics Dashboard',
    engagement: 11.2,
    reach: 87000,
    comments: 198,
    shares: 45
  }
]

const insights = [
  {
    title: 'Video Content Dominance',
    description: 'Video posts generate 3.2x more engagement than other content types. Prioritize video creation.',
    metric: '12.4%',
    icon: Video,
    color: 'text-blue-600'
  },
  {
    title: 'Optimal Post Length',
    description: 'Posts with 100-150 characters receive 28% more engagement than longer posts.',
    metric: '+28%',
    icon: FileText,
    color: 'text-green-600'
  },
  {
    title: 'Trending Topic Alert',
    description: '#AI hashtag performance increased by 45% this month. Include in relevant content.',
    metric: '+45%',
    icon: Hash,
    color: 'text-purple-600'
  },
  {
    title: 'Visual Appeal Factor',
    description: 'Posts with high-quality images receive 67% more saves and shares than standard images.',
    metric: '+67%',
    icon: Image,
    color: 'text-orange-600'
  }
]

export function ContentInsights({ timeRange }: ContentInsightsProps) {
  return (
    <div className="space-y-8">
      {/* Content Insights Grid */}
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
              <div>
                <div className={`text-2xl font-bold ${insight.color}`}>
                  {insight.metric}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white text-sm">
                  {insight.title}
                </h3>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {insight.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Content Performance Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Content Type Performance */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <BarChart className="w-6 h-6 text-blue-600 mr-2" />
            Content Type Performance
          </h3>
          
          <div className="h-64 mb-6">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={contentTypeData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="type" stroke="#6B7280" />
                <YAxis stroke="#6B7280" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number) => [`${value}%`, 'Engagement Rate']}
                />
                <Bar dataKey="engagement" radius={[4, 4, 0, 0]}>
                  {contentTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="space-y-3">
            {contentTypeData.map((item, index) => (
              <div key={item.type} className="flex items-center justify-between text-sm">
                <div className="flex items-center">
                  <div 
                    className="w-3 h-3 rounded-full mr-3"
                    style={{ backgroundColor: item.color }}
                  />
                  <span className="text-gray-700 dark:text-gray-300">{item.type}</span>
                </div>
                <div className="text-gray-900 dark:text-white font-medium">
                  {item.posts} posts
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Performing Hashtags */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Hash className="w-6 h-6 text-purple-600 mr-2" />
            Top Performing Hashtags
          </h3>
          
          <div className="space-y-4">
            {hashtagData.map((hashtag, index) => (
              <motion.div
                key={hashtag.tag}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-medium text-gray-900 dark:text-white">
                    {hashtag.tag}
                  </span>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-green-600 dark:text-green-400">
                      {hashtag.growth}
                    </span>
                    <TrendingUp className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400">Performance</span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {hashtag.performance}%
                  </span>
                </div>
                
                <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${hashtag.performance}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Top Performing Posts */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
          <Award className="w-6 h-6 text-yellow-600 mr-2" />
          Top Performing Posts
        </h3>
        
        <div className="space-y-4">
          {topPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-r from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs font-medium rounded-full mr-3">
                      {post.type}
                    </span>
                    <span className="text-2xl font-bold text-green-600 dark:text-green-400">
                      {post.engagement}%
                    </span>
                  </div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {post.title}
                  </h4>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Reach</span>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {post.reach.toLocaleString()}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Comments</span>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {post.comments}
                  </div>
                </div>
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Shares</span>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {post.shares}
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
