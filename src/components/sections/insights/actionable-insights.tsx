'use client'

import { motion } from 'framer-motion'
import { CheckCircle, ArrowRight, Clock, Target, Zap, Users, Calendar, TrendingUp } from 'lucide-react'
import { useState } from 'react'
import type { InsightCategory } from '@/app/insights/page'

interface ActionableInsightsProps {
  category: InsightCategory
}

const actionableInsights = [
  {
    id: 1,
    title: 'Schedule Weekend Posts',
    description: 'Your Saturday posts perform 28% better. Schedule 3 posts for this weekend.',
    priority: 'High',
    timeToComplete: '10 min',
    category: 'performance',
    icon: Calendar,
    action: 'Schedule Posts',
    completed: false
  },
  {
    id: 2,
    title: 'Create Video Content',
    description: 'Video posts generate 3x more engagement. Create 2 videos this week.',
    priority: 'High',
    timeToComplete: '2 hours',
    category: 'content',
    icon: Zap,
    action: 'Create Videos',
    completed: false
  },
  {
    id: 3,
    title: 'Target 25-34 Demographics',
    description: 'This age group shows highest engagement. Create content targeting professionals.',
    priority: 'Medium',
    timeToComplete: '30 min',
    category: 'audience',
    icon: Users,
    action: 'Create Targeting Strategy',
    completed: false
  },
  {
    id: 4,
    title: 'Use Trending Hashtags',
    description: '#TechInnovation is trending 340% above average. Include in next 3 posts.',
    priority: 'Medium',
    timeToComplete: '5 min',
    category: 'trends',
    icon: TrendingUp,
    action: 'Update Hashtags',
    completed: true
  },
  {
    id: 5,
    title: 'Optimize Posting Time',
    description: 'Post between 2-4 PM EST for maximum engagement based on audience activity.',
    priority: 'High',
    timeToComplete: '15 min',
    category: 'performance',
    icon: Clock,
    action: 'Reschedule Posts',
    completed: false
  },
  {
    id: 6,
    title: 'Competitive Analysis',
    description: 'Your main competitor increased video content by 50%. Consider similar strategy.',
    priority: 'Low',
    timeToComplete: '45 min',
    category: 'competitors',
    icon: Target,
    action: 'Analyze Strategy',
    completed: false
  }
]

export function ActionableInsights({ category }: ActionableInsightsProps) {
  const [completedActions, setCompletedActions] = useState<number[]>([4])

  const filteredInsights = category === 'all' 
    ? actionableInsights 
    : actionableInsights.filter(insight => insight.category === category)

  const handleToggleComplete = (id: number) => {
    setCompletedActions(prev => 
      prev.includes(id) 
        ? prev.filter(actionId => actionId !== id)
        : [...prev, id]
    )
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
      case 'Low':
        return 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300'
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900/30 dark:text-gray-300'
    }
  }

  if (filteredInsights.length === 0) {
    return null
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Actionable Insights
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Take action on these recommendations to improve your performance
          </p>
        </div>
        <div className="text-sm text-gray-500 dark:text-gray-400">
          {completedActions.length} of {filteredInsights.length} completed
        </div>
      </div>

      <div className="space-y-4">
        {filteredInsights.map((insight, index) => {
          const isCompleted = completedActions.includes(insight.id)
          
          return (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                isCompleted
                  ? 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 hover:border-blue-300 dark:hover:border-blue-600'
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start flex-1">
                  {/* Action Icon */}
                  <div className={`p-3 rounded-xl mr-4 ${
                    isCompleted 
                      ? 'bg-green-100 dark:bg-green-900/30' 
                      : 'bg-blue-100 dark:bg-blue-900/30'
                  }`}>
                    <insight.icon className={`w-6 h-6 ${
                      isCompleted 
                        ? 'text-green-600 dark:text-green-400' 
                        : 'text-blue-600 dark:text-blue-400'
                    }`} />
                  </div>

                  <div className="flex-1">
                    {/* Header */}
                    <div className="flex items-center mb-2">
                      <h3 className={`font-semibold mr-3 ${
                        isCompleted 
                          ? 'text-green-900 dark:text-green-100 line-through' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {insight.title}
                      </h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(insight.priority)}`}>
                        {insight.priority}
                      </span>
                    </div>

                    {/* Description */}
                    <p className={`mb-4 leading-relaxed ${
                      isCompleted 
                        ? 'text-green-700 dark:text-green-300' 
                        : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {insight.description}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center space-x-4 text-sm">
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Clock className="w-4 h-4 mr-1" />
                        {insight.timeToComplete}
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Target className="w-4 h-4 mr-1" />
                        {insight.category}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center space-x-3 ml-4">
                  {!isCompleted && (
                    <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
                      {insight.action}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                  
                  <button
                    onClick={() => handleToggleComplete(insight.id)}
                    className={`flex items-center justify-center w-10 h-10 rounded-lg transition-colors ${
                      isCompleted
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Progress Summary */}
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl">
        <div className="flex items-center justify-between mb-2">
          <h4 className="font-medium text-gray-900 dark:text-white">
            Progress Summary
          </h4>
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            {Math.round((completedActions.length / filteredInsights.length) * 100)}% Complete
          </span>
        </div>
        <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${(completedActions.length / filteredInsights.length) * 100}%` }}
            transition={{ duration: 1 }}
            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
          />
        </div>
      </div>
    </div>
  )
}
