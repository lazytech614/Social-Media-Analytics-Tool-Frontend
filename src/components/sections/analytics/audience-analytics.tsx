'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts'
import type { Platform } from '@/app/analytics/page'

interface AudienceAnalyticsProps {
  platform: Platform
}

const audienceData = {
  instagram: {
    demographics: [
      { name: '18-24', value: 35, count: 44800 },
      { name: '25-34', value: 42, count: 52752 },
      { name: '35-44', value: 15, count: 18840 },
      { name: '45-54', value: 6, count: 7536 },
      { name: '55+', value: 2, count: 2512 }
    ],
    locations: [
      { name: 'United States', value: 45 },
      { name: 'Canada', value: 15 },
      { name: 'United Kingdom', value: 12 },
      { name: 'Australia', value: 10 },
      { name: 'Germany', value: 8 },
      { name: 'Others', value: 10 }
    ]
  },
  twitter: {
    demographics: [
      { name: '18-24', value: 28, count: 24976 },
      { name: '25-34', value: 38, count: 33896 },
      { name: '35-44', value: 22, count: 19624 },
      { name: '45-54', value: 8, count: 7136 },
      { name: '55+', value: 4, count: 3568 }
    ],
    locations: [
      { name: 'United States', value: 55 },
      { name: 'United Kingdom', value: 18 },
      { name: 'Canada', value: 12 },
      { name: 'India', value: 8 },
      { name: 'Australia', value: 4 },
      { name: 'Others', value: 3 }
    ]
  },
  youtube: {
    demographics: [
      { name: '18-24', value: 32, count: 14656 },
      { name: '25-34', value: 41, count: 18778 },
      { name: '35-44', value: 18, count: 8244 },
      { name: '45-54', value: 7, count: 3206 },
      { name: '55+', value: 2, count: 916 }
    ],
    locations: [
      { name: 'United States', value: 42 },
      { name: 'India', value: 20 },
      { name: 'Brazil', value: 12 },
      { name: 'United Kingdom', value: 10 },
      { name: 'Canada', value: 8 },
      { name: 'Others', value: 8 }
    ]
  },
  linkedin: {
    demographics: [
      { name: '25-34', value: 45, count: 15345 },
      { name: '35-44', value: 35, count: 11935 },
      { name: '45-54', value: 15, count: 5115 },
      { name: '18-24', value: 4, count: 1364 },
      { name: '55+', value: 1, count: 341 }
    ],
    locations: [
      { name: 'United States', value: 48 },
      { name: 'United Kingdom', value: 22 },
      { name: 'Canada', value: 15 },
      { name: 'Germany', value: 8 },
      { name: 'Australia', value: 5 },
      { name: 'Others', value: 2 }
    ]
  },
  facebook: {
    demographics: [
      { name: '25-34', value: 32, count: 25056 },
      { name: '35-44', value: 28, count: 21924 },
      { name: '18-24', value: 20, count: 15660 },
      { name: '45-54', value: 15, count: 11745 },
      { name: '55+', value: 5, count: 3915 }
    ],
    locations: [
      { name: 'United States', value: 38 },
      { name: 'United Kingdom', value: 16 },
      { name: 'Canada', value: 14 },
      { name: 'Australia', value: 12 },
      { name: 'Germany', value: 10 },
      { name: 'Others', value: 10 }
    ]
  }
}

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6', '#6B7280']

export function AudienceAnalytics({ platform }: AudienceAnalyticsProps) {
  const data = audienceData[platform]

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Audience Analytics
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Demographics and location insights
        </p>
      </div>

      {/* Age Demographics */}
      <div className="mb-8">
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Age Demographics</h4>
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 h-48 mb-4 lg:mb-0">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.demographics}
                  cx="50%"
                  cy="50%"
                  innerRadius={40}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.demographics.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number, name: string, props: any) => [
                    `${value}% (${props.payload.count.toLocaleString()})`, 
                    'Age Group'
                  ]}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="w-full lg:w-1/2 lg:pl-6">
            <div className="space-y-3">
              {data.demographics.map((item, index) => (
                <div key={item.name} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div 
                      className="w-4 h-4 rounded-full mr-3"
                      style={{ backgroundColor: COLORS[index % COLORS.length] }}
                    />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item.name}</span>
                  </div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {item.value}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Locations */}
      <div>
        <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-4">Top Locations</h4>
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data.locations} layout="horizontal">
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
              <XAxis type="number" stroke="#6B7280" />
              <YAxis type="category" dataKey="name" stroke="#6B7280" width={80} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '8px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number) => [`${value}%`, 'Audience']}
              />
              <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                {data.locations.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}
