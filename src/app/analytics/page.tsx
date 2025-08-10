'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useRequireAuth } from '@/hooks/use-auth'
import { PlatformSelector } from '@/components/sections/analytics/platform-selector'
import { AnalyticsHeader } from '@/components/layout/analytics-header'
import { OverviewCards } from '@/components/sections/analytics/overview-cards'
import { EngagementAnalytics } from '@/components/sections/analytics/engagement-analytics'
import { AudienceAnalytics } from '@/components/sections/analytics/audience-analytics'
import { ContentAnalytics } from '@/components/sections/analytics/content-analytics'
import { PerformanceAnalytics } from '@/components/sections/analytics/performance-analytics'
import { DateRangeSelector } from '@/components/sections/analytics/date-range-selector'

export type Platform = 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'facebook'
export type DateRange = '7d' | '30d' | '90d' | '1y' | 'custom'

export default function AnalyticsPage() {
  const { isLoading } = useRequireAuth()
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>('instagram')
  const [dateRange, setDateRange] = useState<DateRange>('30d')
  const [isAnalyticsLoading, setIsAnalyticsLoading] = useState(false)

  // Simulate loading when platform changes
  useEffect(() => {
    setIsAnalyticsLoading(true)
    const timer = setTimeout(() => {
      setIsAnalyticsLoading(false)
    }, 800)
    return () => clearTimeout(timer)
  }, [selectedPlatform, dateRange])

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
          {/* Analytics Header */}
          <motion.div variants={itemVariants}>
            <AnalyticsHeader />
          </motion.div>

          {/* Platform & Date Range Selectors */}
          <div className="flex flex-col lg:flex-row gap-6">
            <motion.div variants={itemVariants} className="flex-1">
              <PlatformSelector
                selectedPlatform={selectedPlatform}
                onPlatformChange={setSelectedPlatform}
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <DateRangeSelector
                dateRange={dateRange}
                onDateRangeChange={setDateRange}
              />
            </motion.div>
          </div>

          {/* Analytics Content */}
          <AnimatePresence mode="wait">
            {isAnalyticsLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center justify-center py-20"
              >
                <div className="text-center">
                  <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600 dark:text-gray-300">Loading {selectedPlatform} analytics...</p>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={selectedPlatform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Overview Cards */}
                <OverviewCards platform={selectedPlatform} dateRange={dateRange} />

                {/* Analytics Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <EngagementAnalytics platform={selectedPlatform} />
                  <AudienceAnalytics platform={selectedPlatform} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <ContentAnalytics platform={selectedPlatform} />
                  <PerformanceAnalytics platform={selectedPlatform} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
