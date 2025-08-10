# Insighto - AI-Powered Social Media Analytics

**Insighto** is an AI-automated social media analytics platform that helps users gain deep insights into their social media performance across multiple platforms including Instagram, Twitter, YouTube, and more. Get comprehensive analytics, AI-powered recommendations, and actionable insights to grow your social media presence.

## 🚀 Features

### 📊 Multi-Platform Analytics
- **Instagram Analytics**: Posts, Stories, Reels performance tracking
- **Twitter/X Analytics**: Tweet engagement, follower growth, trending hashtags
- **YouTube Analytics**: Video performance, subscriber insights, watch time analysis
- **Cross-Platform Comparison**: Unified dashboard for all your social accounts

### 🤖 AI-Powered Insights
- **Content Performance Prediction**: AI algorithms predict which content will perform best
- **Optimal Posting Times**: Machine learning recommendations for maximum engagement
- **Audience Analysis**: Deep dive into follower demographics and behavior patterns
- **Trend Detection**: Identify emerging trends and viral content opportunities
- **Competitor Analysis**: AI-driven competitive intelligence and benchmarking

### 📈 Advanced Analytics
- **Real-time Dashboards**: Live metrics and performance indicators
- **Custom Reports**: Generate detailed reports with exportable data
- **Growth Tracking**: Monitor follower growth, engagement rates, and reach metrics
- **ROI Analysis**: Track social media return on investment
- **Sentiment Analysis**: AI-powered analysis of comments and mentions

### 🎯 Smart Recommendations
- **Content Strategy**: AI suggestions for content types and themes
- **Hashtag Optimization**: Smart hashtag recommendations for better reach
- **Engagement Optimization**: Tips to improve likes, comments, and shares
- **Audience Growth**: Strategies to attract and retain followers

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) for type safety
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for responsive design
- **Authentication**: [NextAuth.js](https://next-auth.js.org/) for secure user management
- **Charts & Visualizations**: [Recharts](https://recharts.org/) for data visualization
- **Animations**: [Framer Motion](https://www.framer.com/motion/) for smooth UI transitions
- **State Management**: React Context API with custom hooks
- **API Integration**: RESTful APIs with built-in caching
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: Version 18.x or higher
- **npm** or **yarn**: Latest version
- **Git**: For version control

## ⚡ Quick Start

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/insighto-frontend.git
cd insighto-frontend
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Setup

Create a `.env.local` file in the root directory:

```env
# NextAuth Configuration
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-nextauth-secret-key

# Social Media API Keys
INSTAGRAM_CLIENT_ID=your-instagram-client-id
INSTAGRAM_CLIENT_SECRET=your-instagram-client-secret

TWITTER_CLIENT_ID=your-twitter-client-id
TWITTER_CLIENT_SECRET=your-twitter-client-secret

YOUTUBE_CLIENT_ID=your-youtube-client-id
YOUTUBE_CLIENT_SECRET=your-youtube-client-secret

# Backend API
API_BASE_URL=http://localhost:8000
API_KEY=your-api-key

# Database (if using direct connections)
DATABASE_URL=your-database-connection-string

# AI Service Configuration
OPENAI_API_KEY=your-openai-api-key
ANTHROPIC_API_KEY=your-anthropic-api-key
```

### 4. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
insighto-frontend/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── (auth)/            # Authentication pages
│   │   ├── dashboard/         # Main dashboard pages
│   │   ├── analytics/         # Analytics pages
│   │   ├── api/              # API routes
│   │   └── globals.css       # Global styles
│   ├── components/           # Reusable UI components
│   │   ├── ui/              # Base UI components
│   │   ├── charts/          # Chart components
│   │   ├── forms/           # Form components
│   │   └── layout/          # Layout components
│   ├── lib/                 # Utility functions and configurations
│   │   ├── auth.ts          # NextAuth configuration
│   │   ├── api.ts           # API client setup
│   │   ├── utils.ts         # Helper functions
│   │   └── validations.ts   # Form validation schemas
│   ├── hooks/               # Custom React hooks
│   ├── store/               # State management
│   ├── types/               # TypeScript type definitions
│   └── constants/           # Application constants
├── public/                  # Static assets
├── tailwind.config.js       # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## 🎨 Key Components

### Dashboard Components
- **`DashboardOverview`**: Main dashboard with key metrics
- **`AnalyticsChart`**: Interactive charts using Recharts
- **`SocialAccountCard`**: Connected social media accounts display
- **`AIInsightsPanel`**: AI-generated insights and recommendations

### Analytics Components
- **`MetricsGrid`**: Grid layout for analytics metrics
- **`PerformanceChart`**: Performance tracking visualizations
- **`CompetitorComparison`**: Side-by-side competitor analysis
- **`TrendAnalysis`**: Trending content and hashtag analysis

### UI Components
- **`LoadingSpinner`**: Custom loading animations with Framer Motion
- **`Modal`**: Reusable modal component
- **`Button`**: Styled button variants with Tailwind
- **`Form`**: Form components with validation

## 🔐 Authentication

The application uses NextAuth.js for authentication with support for:

- **OAuth Providers**: Google, GitHub, Twitter
- **Social Media Authentication**: Instagram, YouTube, TikTok
- **JWT Tokens**: Secure token-based authentication
- **Session Management**: Automatic session handling

## 📊 Data Visualization

Charts and graphs are built using Recharts with custom styling:

- **Line Charts**: Follower growth, engagement over time
- **Bar Charts**: Post performance, platform comparison
- **Pie Charts**: Audience demographics, content distribution
- **Area Charts**: Reach and impression trends
- **Custom Charts**: AI insight visualizations

## 🎭 Animations

Framer Motion is used throughout the application for:

- **Page Transitions**: Smooth navigation between pages
- **Component Animations**: Hover effects, loading states
- **Data Visualization**: Animated chart transitions
- **Micro-interactions**: Button clicks, form submissions

## 🚀 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build production application |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint for code linting |
| `npm run lint:fix` | Fix ESLint issues automatically |
| `npm run type-check` | Run TypeScript type checking |
| `npm run test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |

## 🌐 API Integration

The frontend integrates with multiple APIs:

### Social Media APIs
- **Instagram Basic Display API**: Profile and media data
- **Twitter API v2**: Tweets, followers, analytics
- **YouTube Data API v3**: Channel statistics, video metrics
- **TikTok Business API**: Video performance, audience insights

### AI Services
- **OpenAI GPT**: Content analysis and recommendations
- **Custom ML Models**: Engagement prediction, trend analysis
- **Sentiment Analysis API**: Comment and mention analysis

## 🔧 Configuration

### Tailwind CSS Customization

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        },
        secondary: {
          500: '#10b981',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
      },
    },
  },
}
```

### Next.js Configuration

```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['instagram.com', 'twitter.com', 'youtube.com'],
  },
  experimental: {
    appDir: true,
  },
  env: {
    CUSTOM_KEY: process.env.CUSTOM_KEY,
  },
}
```

## 📱 Responsive Design

The application is fully responsive with breakpoints:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px - 1440px
- **Large Desktop**: 1440px+

## 🔒 Security Features

- **CSRF Protection**: Built-in CSRF token validation
- **XSS Prevention**: Input sanitization and validation
- **Secure Headers**: Security headers configuration
- **API Rate Limiting**: Protection against API abuse
- **Data Encryption**: Sensitive data encryption at rest

## 🧪 Testing

```bash
# Run all tests
npm run test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🚢 Deployment

### Vercel (Recommended)

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on every push to main branch

```bash
npm install -g vercel
vercel --prod
```

### Docker Deployment

```dockerfile
# Dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit changes**: `git commit -m 'Add amazing feature'`
4. **Push to branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Code Style Guidelines

- Use TypeScript for all new components
- Follow ESLint and Prettier configurations
- Write meaningful commit messages
- Add JSDoc comments for complex functions
- Ensure responsive design for all components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.insighto.com](https://docs.insighto.com)
- **Issues**: [GitHub Issues](https://github.com/your-username/insighto-frontend/issues)
- **Email**: support@insighto.com
- **Discord**: [Join our community](https://discord.gg/insighto)

## 🎯 Roadmap

### Upcoming Features
- [ ] TikTok Analytics Integration
- [ ] LinkedIn Business Analytics
- [ ] Advanced AI Content Generation
- [ ] Custom Dashboard Builder
- [ ] White-label Solutions
- [ ] Mobile App (React Native)
- [ ] Advanced Reporting & Exports
- [ ] Team Collaboration Features

### Version History
- **v1.0.0** - Initial release with Instagram, Twitter, YouTube support
- **v1.1.0** - Added AI insights and recommendations
- **v1.2.0** - Enhanced dashboard and mobile responsiveness
- **v2.0.0** - Complete UI redesign and performance improvements

---

**Built with ❤️ by the Insighto Team**

For more information, visit our [website](https://insighto.com) or check out our [documentation](https://docs.insighto.com).