'use client'

import { motion } from 'framer-motion'
import { Calendar, ChevronDown } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import type { DateRange } from '@/app/analytics/page'

interface DateRangeSelectorProps {
  dateRange: DateRange
  onDateRangeChange: (dateRange: DateRange) => void
}

const dateRanges = [
  { id: '7d' as DateRange, label: 'Last 7 days' },
  { id: '30d' as DateRange, label: 'Last 30 days' },
  { id: '90d' as DateRange, label: 'Last 3 months' },
  { id: '1y' as DateRange, label: 'Last 12 months' },
  { id: 'custom' as DateRange, label: 'Custom range' }
]

export function DateRangeSelector({ dateRange, onDateRangeChange }: DateRangeSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const selectedRange = dateRanges.find(range => range.id === dateRange)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Time Period
      </h2>

      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between px-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
        >
          <div className="flex items-center">
            <Calendar className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-3" />
            <span className="text-gray-900 dark:text-white font-medium">
              {selectedRange?.label}
            </span>
          </div>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50"
          >
            <div className="py-2">
              {dateRanges.map((range) => (
                <button
                  key={range.id}
                  onClick={() => {
                    onDateRangeChange(range.id)
                    setIsOpen(false)
                  }}
                  className={`w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                    dateRange === range.id
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
    </div>
  )
}
