'use client'

import { motion } from 'framer-motion'
import { Sparkles, Clock, TrendingUp, Users, Hash, ArrowRight, Lightbulb } from 'lucide-react'

interface AIRecommendationsProps {
  isGenerating: boolean
}

const recommendations = [
  {
    id: 1,
    type: 'Timing',
    title: 'Optimal Posting Time Detected',
    description: 'Your audience is 45% more active on weekdays between 2-4 PM EST. Consider scheduling more content during this window.',
    impact: 'High',
    confidence: 94,
    action: 'Schedule posts for 2-4 PM',
    icon: Clock,
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 2,
    type: 'Content',
    title: 'Video Content Opportunity',
    description: 'Video posts are generating 3.2x more engagement than images. Increase video content to boost overall performance.',
    impact: 'High',
    confidence: 89,
    action: 'Create more video content',
    icon: TrendingUp,
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 3,
    type: 'Audience',
    title: 'Emerging Demographic Trend',
    description: 'Your 25-34 age group engagement increased by 67% this month. Tailor content for this growing segment.',
    impact: 'Medium',
    confidence: 82,
    action: 'Target 25-34 demographic',
    icon: Users,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 4,
    type: 'Hashtags',
    title: 'Trending Hashtag Alert',
    description: '#TechInnovation is trending 340% above average in your industry. Include it in relevant posts.',
    impact: 'Medium',
    confidence: 76,
    action: 'Use #TechInnovation hashtag',
    icon: Hash,
    color: 'from-orange-500 to-red-600'
  }
]

export function AIRecommendations({ isGenerating }: AIRecommendationsProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              AI Recommendations
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Personalized insights to boost your social media performance
            </p>
          </div>
        </div>
        
        {isGenerating && (
          <div className="flex items-center text-blue-600 dark:text-blue-400">
            <div className="w-4 h-4 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mr-2"></div>
            <span className="text-sm font-medium">Analyzing...</span>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {recommendations.map((recommendation, index) => (
          <motion.div
            key={recommendation.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${recommendation.color} mr-3`}>
                  <recommendation.icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="text-xs font-medium text-blue-600 dark:text-blue-400 mb-1">
                    {recommendation.type}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {recommendation.title}
                  </h3>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  recommendation.impact === 'High' 
                    ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                    : recommendation.impact === 'Medium'
                    ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                    : 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
                }`}>
                  {recommendation.impact} Impact
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
              {recommendation.description}
            </p>

            {/* Confidence Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Confidence Level
                </span>
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  {recommendation.confidence}%
                </span>
              </div>
              <div className="w-full h-2 bg-gray-200 dark:bg-gray-600 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${recommendation.confidence}%` }}
                  transition={{ duration: 1, delay: index * 0.2 }}
                  className={`h-full bg-gradient-to-r ${recommendation.color} rounded-full`}
                />
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full flex items-center justify-between p-3 bg-gray-100 dark:bg-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-500 transition-colors group">
              <div className="flex items-center">
                <Lightbulb className="w-4 h-4 text-gray-600 dark:text-gray-300 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                  {recommendation.action}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
