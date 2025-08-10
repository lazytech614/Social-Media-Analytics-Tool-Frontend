'use client'

import { motion } from 'framer-motion'
import { Lightbulb, TrendingUp, Clock, Users, Zap, ArrowRight } from 'lucide-react'

const insights = [
  {
    id: 1,
    type: 'Best Time',
    title: 'Optimal Posting Time',
    description: 'Your audience is most active on weekdays between 2-4 PM EST',
    impact: 'high',
    icon: Clock,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    type: 'Content',
    title: 'Video Content Performance',
    description: 'Video posts generate 3.2x more engagement than image posts',
    impact: 'high',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    type: 'Audience',
    title: 'Growing Demographic',
    description: 'Your 25-34 age group engagement increased by 45% this month',
    impact: 'medium',
    icon: Users,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 4,
    type: 'Hashtags',
    title: 'Trending Hashtags',
    description: '#TechTrends and #Innovation are performing 20% above average',
    impact: 'medium',
    icon: Zap,
    color: 'from-orange-500 to-red-600'
  }
]

export function AIInsights() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
            <Lightbulb className="w-5 h-5 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            AI Insights
          </h3>
        </div>
        <button className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:underline flex items-center">
          View All
          <ArrowRight className="w-4 h-4 ml-1" />
        </button>
      </div>

      <div className="space-y-4">
        {insights.map((insight, index) => (
          <motion.div
            key={insight.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div className={`p-2 rounded-lg bg-gradient-to-r ${insight.color} flex-shrink-0`}>
                <insight.icon className="w-5 h-5 text-white" />
              </div>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-2 py-1 rounded-full">
                      {insight.type}
                    </span>
                    <div className={`w-2 h-2 rounded-full ${
                      insight.impact === 'high' 
                        ? 'bg-green-500' 
                        : insight.impact === 'medium' 
                        ? 'bg-yellow-500' 
                        : 'bg-gray-500'
                    }`}></div>
                  </div>
                </div>
                
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {insight.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {insight.description}
                </p>
              </div>

              <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-5 h-5 text-gray-400" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
              Weekly AI Report Ready
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Get detailed insights and recommendations
            </p>
          </div>
          <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200">
            Download
          </button>
        </div>
      </div>
    </div>
  )
}
