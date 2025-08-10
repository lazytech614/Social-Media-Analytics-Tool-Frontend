'use client'

import { motion } from 'framer-motion'
import { useAuth } from '@/hooks/use-auth'
import { DashboardHeader } from '@/components/layout/dashboard-header'
import { StatsOverview } from '@/components/sections/dashboard/stats-overview'
import { EngagementChart } from '@/components/sections/dashboard/engagement-chart'
import { PlatformOverview } from '@/components/sections/dashboard/platform-overview'
import { RecentPosts } from '@/components/sections/dashboard/recent-posts'
import { AIInsights } from '@/components/sections/dashboard/ai-insights'
import { QuickActions } from '@/components/sections/dashboard/quick-actions'

export default function DashboardPage() {
  const { user, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
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
          {/* Dashboard Header */}
          <motion.div variants={itemVariants}>
            <DashboardHeader user={user} />
          </motion.div>

          {/* Quick Actions */}
          <motion.div variants={itemVariants}>
            <QuickActions />
          </motion.div>

          {/* Stats Overview */}
          <motion.div variants={itemVariants}>
            <StatsOverview />
          </motion.div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <EngagementChart />
            </motion.div>
            <motion.div variants={itemVariants}>
              <PlatformOverview />
            </motion.div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div variants={itemVariants}>
              <RecentPosts />
            </motion.div>
            <motion.div variants={itemVariants}>
              <AIInsights />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
