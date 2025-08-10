'use client'

import { motion } from 'framer-motion'
import { 
  BarChart3, 
  Brain, 
  Clock, 
  Globe, 
  Shield, 
  Smartphone,
  TrendingUp,
  Users,
  Zap
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Advanced machine learning algorithms analyze your social media data to uncover hidden patterns and trends.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Get instant insights into your social media performance with live data updates and interactive dashboards.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: TrendingUp,
    title: "Growth Optimization",
    description: "Identify the best times to post, optimal content types, and strategies to maximize engagement.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Users,
    title: "Audience Intelligence",
    description: "Understand your audience demographics, interests, and behavior patterns to create targeted content.",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Globe,
    title: "Multi-Platform Support",
    description: "Connect and analyze data from Instagram, Twitter, LinkedIn, Facebook, and more in one place.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security with end-to-end encryption ensures your social media data stays protected.",
    color: "from-gray-500 to-slate-500"
  },
  {
    icon: Clock,
    title: "Automated Reporting",
    description: "Schedule automated reports and get insights delivered to your inbox on a regular basis.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Access your analytics on-the-go with our fully responsive design and mobile-first approach.",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Process millions of data points in seconds with our optimized infrastructure and caching.",
    color: "from-violet-500 to-purple-500"
  }
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
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
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Everything You Need to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Dominate
            </span>{' '}
            Social Media
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Powerful features designed to help you understand, optimize, and scale your social media presence
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group relative p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700"
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
