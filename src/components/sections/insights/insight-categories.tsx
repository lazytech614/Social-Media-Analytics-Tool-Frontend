'use client'

import { motion } from 'framer-motion'
import { BarChart3, Users, FileText, TrendingUp, Target, Grid3x3 } from 'lucide-react'
import type { InsightCategory } from '@/app/insights/page'

interface InsightCategoriesProps {
  selectedCategory: InsightCategory
  onCategoryChange: (category: InsightCategory) => void
}

const categories = [
  {
    id: 'all' as InsightCategory,
    name: 'All Insights',
    icon: Grid3x3,
    description: 'Complete overview of all insights',
    color: 'from-gray-500 to-gray-600'
  },
  {
    id: 'performance' as InsightCategory,
    name: 'Performance',
    icon: BarChart3,
    description: 'Engagement and reach analysis',
    color: 'from-blue-500 to-blue-600'
  },
  {
    id: 'audience' as InsightCategory,
    name: 'Audience',
    icon: Users,
    description: 'Demographics and behavior insights',
    color: 'from-green-500 to-emerald-600'
  },
  {
    id: 'content' as InsightCategory,
    name: 'Content',
    icon: FileText,
    description: 'Content optimization recommendations',
    color: 'from-purple-500 to-indigo-600'
  },
  {
    id: 'trends' as InsightCategory,
    name: 'Trends',
    icon: TrendingUp,
    description: 'Trending topics and hashtags',
    color: 'from-orange-500 to-red-600'
  },
  {
    id: 'competitors' as InsightCategory,
    name: 'Competitors',
    icon: Target,
    description: 'Competitive analysis insights',
    color: 'from-pink-500 to-rose-600'
  }
]

export function InsightCategories({ selectedCategory, onCategoryChange }: InsightCategoriesProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Insight Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <motion.button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`relative p-4 rounded-xl border-2 transition-all duration-300 group ${
              selectedCategory === category.id
                ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20 shadow-lg'
                : 'border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 bg-gray-50 dark:bg-gray-700'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mb-3 mx-auto group-hover:scale-110 transition-transform duration-300`}>
              <category.icon className="w-6 h-6 text-white" />
            </div>

            <div className="text-center">
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {category.name}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 leading-tight">
                {category.description}
              </div>
            </div>

            {selectedCategory === category.id && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
              >
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </motion.div>
            )}
          </motion.button>
        ))}
      </div>
    </div>
  )
}
