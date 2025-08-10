import type { 
  User, 
  SocialAccount, 
  Post, 
  AnalyticsResult, 
  AIInsight,
  Platform,
  PostType,
  InsightType 
} from '@prisma/client'

// Extended types with relations
export type UserWithAccounts = User & {
  socialAccounts: SocialAccount[]
  _count: {
    socialAccounts: number
    insights: number
  }
}

export type PostWithAnalytics = Post & {
  analyticsResults: AnalyticsResult[]
  socialAccount: SocialAccount
}

export type SocialAccountWithPosts = SocialAccount & {
  posts: Post[]
  _count: {
    posts: number
  }
}

// API response types
export type DatabaseResponse<T> = {
  success: boolean
  data?: T
  error?: string
  timestamp: string
}

// Utility types
export type CreateUserData = Pick<User, 'email' | 'name' | 'timezone'>
export type CreatePostData = Pick<Post, 'socialAccountId' | 'postId' | 'content' | 'postDate' | 'postType'>

export { Platform, PostType, InsightType }
