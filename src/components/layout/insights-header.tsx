'use client'

import { motion } from 'framer-motion'
import { Lightbulb, Download, Share, Calendar, Sparkles, TrendingUp } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import type { TimeRange } from '@/app/insights/page'

interface InsightsHeaderProps {
  onTimeRangeChange: (timeRange: TimeRange) => void
  timeRange: TimeRange
}

const timeRanges = [
  { id: '7d' as TimeRange, label: 'Last 7 days' },
  { id: '30d' as TimeRange, label: 'Last 30 days' },
  { id: '90d' as TimeRange, label: 'Last 3 months' },
  { id: '1y' as TimeRange, label: 'Last 12 months' }
]

export function InsightsHeader({ onTimeRangeChange, timeRange }: InsightsHeaderProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedRange = timeRanges.find(range => range.id === timeRange)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="mb-6 lg:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-4"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                AI Insights Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                Discover actionable insights powered by artificial intelligence
              </p>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center space-x-6"
          >
            <div className="flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-lg">
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">24 New Insights</span>
            </div>
            <div className="flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-lg">
              <TrendingUp className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">+18.5% Growth</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4"
        >
          {/* Time Range Selector */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center px-4 py-3 bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
            >
              <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" />
              <span className="text-gray-900 dark:text-white font-medium">
                {selectedRange?.label}
              </span>
            </button>

            {isDropdownOpen && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
              >
                <div className="py-2">
                  {timeRanges.map((range) => (
                    <button
                      key={range.id}
                      onClick={() => {
                        onTimeRangeChange(range.id)
                        setIsDropdownOpen(false)
                      }}
                      className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                        timeRange === range.id
                          ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                          : 'text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {range.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <button className="p-3 bg-gray-100 dark:bg-gray-700 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors">
              <Share className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </button>
            <button className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl hover:from-purple-700 hover:to-pink-700 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Download className="w-5 h-5 mr-2" />
              Export Report
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
