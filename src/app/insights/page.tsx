'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRequireAuth } from '@/hooks/use-auth'
import { InsightsHeader } from '@/components/layout/insights-header'
import { InsightCategories } from '@/components/sections/insights/insight-categories'
import { AIRecommendations } from '@/components/sections/insights/ai-recommendations'
import { PerformanceInsights } from '@/components/sections/insights/performance-insights'
import { AudienceInsights } from '@/components/sections/insights/audience-insights'
import { ContentInsights } from '@/components/sections/insights/content-insights'
import { TrendAnalysis } from '@/components/sections/insights/trend-analysis'
import { CompetitorAnalysis } from '@/components/sections/insights/competitor-analysis'
import { ActionableInsights } from '@/components/sections/insights/actionable-insights'

export type InsightCategory = 'all' | 'performance' | 'audience' | 'content' | 'trends' | 'competitors'
export type TimeRange = '7d' | '30d' | '90d' | '1y'

export default function InsightsPage() {
  const { isLoading } = useRequireAuth()
  const [selectedCategory, setSelectedCategory] = useState<InsightCategory>('all')
  const [timeRange, setTimeRange] = useState<TimeRange>('30d')
  const [isGeneratingInsights, setIsGeneratingInsights] = useState(false)

  // Simulate AI insights generation
  useEffect(() => {
    setIsGeneratingInsights(true)
    const timer = setTimeout(() => {
      setIsGeneratingInsights(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [selectedCategory, timeRange])

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Insights Header */}
          <motion.div variants={itemVariants}>
            <InsightsHeader 
              onTimeRangeChange={setTimeRange}
              timeRange={timeRange}
            />
          </motion.div>

          {/* Insight Categories */}
          <motion.div variants={itemVariants}>
            <InsightCategories
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </motion.div>

          {/* AI Recommendations - Always visible */}
          <motion.div variants={itemVariants}>
            <AIRecommendations isGenerating={isGeneratingInsights} />
          </motion.div>

          {/* Dynamic Content Based on Category */}
          <AnimatePresence mode="wait">
            {isGeneratingInsights ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-20"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">Generating AI insights...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {(selectedCategory === 'all' || selectedCategory === 'performance') && (
                  <PerformanceInsights timeRange={timeRange} />
                )}

                {(selectedCategory === 'all' || selectedCategory === 'audience') && (
                  <AudienceInsights timeRange={timeRange} />
                )}

                {(selectedCategory === 'all' || selectedCategory === 'content') && (
                  <ContentInsights timeRange={timeRange} />
                )}

                {(selectedCategory === 'all' || selectedCategory === 'trends') && (
                  <TrendAnalysis timeRange={timeRange} />
                )}

                {(selectedCategory === 'all' || selectedCategory === 'competitors') && (
                  <CompetitorAnalysis timeRange={timeRange} />
                )}

                {/* Actionable Insights - Always visible */}
                <ActionableInsights category={selectedCategory} />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
