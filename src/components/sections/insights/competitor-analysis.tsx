'use client'

import { motion } from 'framer-motion'
import { Target, Users, TrendingUp, TrendingDown, BarChart3, Award, Activity, Eye, MessageCircle, Share } from 'lucide-react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts'
import type { TimeRange } from '@/app/insights/page'

interface CompetitorAnalysisProps {
  timeRange: TimeRange
}

const competitorData = [
  {
    name: 'Your Company',
    followers: 125600,
    engagement: 8.1,
    posts: 156,
    growth: '+12.5%',
    reach: 458000,
    isYou: true
  },
  {
    name: 'Competitor A',
    followers: 148200,
    engagement: 6.8,
    posts: 203,
    growth: '+8.2%',
    reach: 512000,
    isYou: false
  },
  {
    name: 'Competitor B',
    followers: 92400,
    engagement: 9.4,
    posts: 134,
    growth: '+15.7%',
    reach: 389000,
    isYou: false
  },
  {
    name: 'Competitor C',
    followers: 167800,
    engagement: 5.9,
    posts: 278,
    growth: '+4.1%',
    reach: 634000,
    isYou: false
  }
]

const performanceComparison = [
  { metric: 'Followers', you: 85, competitorA: 95, competitorB: 65, competitorC: 100 },
  { metric: 'Engagement', you: 90, competitorA: 70, competitorB: 100, competitorC: 55 },
  { metric: 'Content Quality', you: 85, competitorA: 75, competitorB: 80, competitorC: 70 },
  { metric: 'Posting Frequency', you: 70, competitorA: 95, competitorC: 60, competitorB: 85 },
  { metric: 'Growth Rate', you: 80, competitorA: 60, competitorB: 95, competitorC: 40 }
]

const monthlyGrowthData = [
  { month: 'Jan', you: 118000, competitorA: 142000, competitorB: 85000, competitorC: 159000 },
  { month: 'Feb', you: 119500, competitorA: 143500, competitorB: 87200, competitorC: 161200 },
  { month: 'Mar', you: 121200, competitorA: 145800, competitorB: 89100, competitorC: 163800 },
  { month: 'Apr', you: 123100, competitorA: 147200, competitorB: 90800, competitorC: 165400 },
  { month: 'May', you: 125600, competitorA: 148200, competitorB: 92400, competitorC: 167800 }
]

const contentAnalysis = [
  {
    competitor: 'Your Company',
    topContent: 'AI Tutorial Series',
    engagement: 15.8,
    avgLikes: 2840,
    avgComments: 156,
    postFrequency: 3.2,
    bestTime: '2-4 PM',
    strongSuits: ['Video Content', 'Educational Posts', 'Community Engagement']
  },
  {
    competitor: 'Competitor A',
    topContent: 'Industry News Updates',
    engagement: 6.8,
    avgLikes: 1920,
    avgComments: 89,
    postFrequency: 4.1,
    bestTime: '9-11 AM',
    strongSuits: ['Timely Updates', 'Professional Content', 'High Volume']
  },
  {
    competitor: 'Competitor B',
    topContent: 'Behind-the-Scenes',
    engagement: 9.4,
    avgLikes: 1580,
    avgComments: 203,
    postFrequency: 2.7,
    bestTime: '6-8 PM',
    strongSuits: ['Authentic Content', 'Strong Community', 'User-Generated Content']
  }
]

const competitorInsights = [
  {
    title: 'Content Strategy Gap',
    description: 'Competitor C posts 78% more frequently but has lower engagement. Opportunity for quality over quantity approach.',
    impact: 'High',
    action: 'Maintain current posting quality',
    icon: Target
  },
  {
    title: 'Engagement Leadership',
    description: 'You lead in engagement rate (8.1%) vs industry average (6.8%). This is a key competitive advantage.',
    impact: 'High',
    action: 'Leverage in marketing materials',
    icon: TrendingUp
  },
  {
    title: 'Growth Opportunity',
    description: 'Competitor B shows 15.7% growth rate. Analyze their recent campaign strategies for insights.',
    impact: 'Medium',
    action: 'Study their growth tactics',
    icon: Activity
  },
  {
    title: 'Follower Gap',
    description: 'Competitor C has 25% more followers. Focus on follower acquisition campaigns to close the gap.',
    impact: 'Medium',
    action: 'Launch follower growth campaign',
    icon: Users
  }
]

export function CompetitorAnalysis({ timeRange }: CompetitorAnalysisProps) {
  const getChangeIcon = (growth: string) => {
    const isPositive = growth.startsWith('+')
    return isPositive ? (
      <TrendingUp className="w-4 h-4 text-green-600" />
    ) : (
      <TrendingDown className="w-4 h-4 text-red-600" />
    )
  }

  const getChangeColor = (growth: string) => {
    const isPositive = growth.startsWith('+')
    return isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
  }

  return (
    <div className="space-y-8">
      {/* Competitor Overview */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
          <Target className="w-6 h-6 text-red-600 mr-3" />
          Competitive Landscape Overview
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="text-left py-4 px-2 text-gray-600 dark:text-gray-400 font-medium">Company</th>
                <th className="text-right py-4 px-2 text-gray-600 dark:text-gray-400 font-medium">Followers</th>
                <th className="text-right py-4 px-2 text-gray-600 dark:text-gray-400 font-medium">Engagement Rate</th>
                <th className="text-right py-4 px-2 text-gray-600 dark:text-gray-400 font-medium">Posts</th>
                <th className="text-right py-4 px-2 text-gray-600 dark:text-gray-400 font-medium">Growth</th>
                <th className="text-right py-4 px-2 text-gray-600 dark:text-gray-400 font-medium">Reach</th>
              </tr>
            </thead>
            <tbody>
              {competitorData.map((company, index) => (
                <motion.tr
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                    company.isYou ? 'bg-blue-50 dark:bg-blue-900/20' : ''
                  }`}
                >
                  <td className="py-4 px-2">
                    <div className="flex items-center">
                      <span className={`font-semibold ${
                        company.isYou 
                          ? 'text-blue-600 dark:text-blue-400' 
                          : 'text-gray-900 dark:text-white'
                      }`}>
                        {company.name}
                      </span>
                      {company.isYou && (
                        <span className="ml-2 px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                          You
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="text-right py-4 px-2 font-medium text-gray-900 dark:text-white">
                    {company.followers.toLocaleString()}
                  </td>
                  <td className="text-right py-4 px-2 font-medium text-gray-900 dark:text-white">
                    {company.engagement}%
                  </td>
                  <td className="text-right py-4 px-2 font-medium text-gray-900 dark:text-white">
                    {company.posts}
                  </td>
                  <td className={`text-right py-4 px-2 font-medium ${getChangeColor(company.growth)}`}>
                    <div className="flex items-center justify-end">
                      {getChangeIcon(company.growth)}
                      <span className="ml-1">{company.growth}</span>
                    </div>
                  </td>
                  <td className="text-right py-4 px-2 font-medium text-gray-900 dark:text-white">
                    {(company.reach / 1000).toFixed(0)}K
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Performance Radar Chart and Growth Trends */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Performance Comparison Radar */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Award className="w-6 h-6 text-purple-600 mr-2" />
            Performance Comparison
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={performanceComparison}>
                <PolarGrid stroke="#374151" />
                <PolarAngleAxis dataKey="metric" className="text-xs" />
                <PolarRadiusAxis domain={[0, 100]} tick={false} />
                <Radar
                  name="You"
                  dataKey="you"
                  stroke="#3B82F6"
                  fill="#3B82F6"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Radar
                  name="Competitor A"
                  dataKey="competitorA"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Radar
                  name="Competitor B"
                  dataKey="competitorB"
                  stroke="#F59E0B"
                  fill="#F59E0B"
                  fillOpacity={0.1}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#F9FAFB'
                  }} 
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Monthly Growth Trends */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
            Follower Growth Trends
          </h3>

          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={monthlyGrowthData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis dataKey="month" stroke="#6B7280" />
                <YAxis stroke="#6B7280" tickFormatter={(value) => `${(value / 1000).toFixed(0)}K`} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1F2937', 
                    border: 'none', 
                    borderRadius: '12px',
                    color: '#F9FAFB'
                  }}
                  formatter={(value: number) => [value.toLocaleString(), 'Followers']}
                />
                <Line 
                  type="monotone" 
                  dataKey="you" 
                  stroke="#3B82F6" 
                  strokeWidth={3}
                  dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                  name="You"
                />
                <Line 
                  type="monotone" 
                  dataKey="competitorA" 
                  stroke="#10B981" 
                  strokeWidth={2}
                  dot={{ fill: '#10B981', strokeWidth: 2, r: 3 }}
                  name="Competitor A"
                />
                <Line 
                  type="monotone" 
                  dataKey="competitorB" 
                  stroke="#F59E0B" 
                  strokeWidth={2}
                  dot={{ fill: '#F59E0B', strokeWidth: 2, r: 3 }}
                  name="Competitor B"
                />
                <Line 
                  type="monotone" 
                  dataKey="competitorC" 
                  stroke="#EF4444" 
                  strokeWidth={2}
                  dot={{ fill: '#EF4444', strokeWidth: 2, r: 3 }}
                  name="Competitor C"
                />
                <Legend />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Content Strategy Analysis */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Content Strategy Analysis
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contentAnalysis.map((analysis, index) => (
            <motion.div
              key={analysis.competitor}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`p-6 rounded-xl border-2 ${
                analysis.competitor === 'Your Company'
                  ? 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10'
                  : 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {analysis.competitor}
                </h4>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                  {analysis.engagement}%
                </div>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-600 dark:text-gray-400">Top Content:</span>
                  <div className="font-medium text-gray-900 dark:text-white">
                    {analysis.topContent}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Avg Likes:</span>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {analysis.avgLikes.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Avg Comments:</span>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {analysis.avgComments}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Post/Week:</span>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {analysis.postFrequency}
                    </div>
                  </div>
                  <div>
                    <span className="text-gray-600 dark:text-gray-400">Best Time:</span>
                    <div className="font-medium text-gray-900 dark:text-white">
                      {analysis.bestTime}
                    </div>
                  </div>
                </div>

                <div>
                  <span className="text-gray-600 dark:text-gray-400">Strong Suits:</span>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {analysis.strongSuits.map((suit, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                      >
                        {suit}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Competitive Insights */}
      <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Strategic Insights & Recommendations
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {competitorInsights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl mr-4">
                    <insight.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {insight.title}
                    </h4>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      insight.impact === 'High'
                        ? 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300'
                        : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-300'
                    }`}>
                      {insight.impact} Impact
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                {insight.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-600">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Recommended Action:
                </span>
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {insight.action}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
