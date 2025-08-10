'use client'

import { motion } from 'framer-motion'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts'
import { Instagram, Twitter, Linkedin, Facebook } from 'lucide-react'

const data = [
  { name: 'Instagram', value: 45, color: '#E1306C', followers: 85600 },
  { name: 'Twitter', value: 25, color: '#1DA1F2', followers: 42300 },
  { name: 'LinkedIn', value: 20, color: '#0077B5', followers: 28900 },
  { name: 'Facebook', value: 10, color: '#4267B2', followers: 15200 }
]

const IconMap = {
  Instagram,
  Twitter,
  LinkedIn: Linkedin,
  Facebook
}

export function PlatformOverview() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="mb-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          Platform Distribution
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Follower count across platforms
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 h-64 mb-6 lg:mb-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={100}
                paddingAngle={5}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1F2937', 
                  border: 'none', 
                  borderRadius: '12px',
                  color: '#F9FAFB'
                }}
                formatter={(value: number) => [`${value}%`, 'Distribution']}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="w-full lg:w-1/2 lg:pl-6">
          <div className="space-y-4">
            {data.map((platform, index) => {
              const IconComponent = IconMap[platform.name as keyof typeof IconMap]
              return (
                <motion.div
                  key={platform.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700"
                >
                  <div className="flex items-center">
                    <div 
                      className="w-10 h-10 rounded-lg flex items-center justify-center mr-3"
                      style={{ backgroundColor: platform.color }}
                    >
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {platform.name}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {platform.followers.toLocaleString()} followers
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-bold text-gray-900 dark:text-white">
                    {platform.value}%
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
