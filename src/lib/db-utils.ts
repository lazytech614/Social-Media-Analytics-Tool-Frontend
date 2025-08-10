import { prisma } from './prisma'
import type { Platform, PrismaClient } from '@prisma/client'

// Fix: Use the correct transaction client type
type TransactionClient = Omit<PrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use' | '$extends'>

// Database transaction wrapper with correct typing
export const withTransaction = async <T>(
  callback: (tx: TransactionClient) => Promise<T>
): Promise<T> => {
  return await prisma.$transaction(callback)
}

// Alternative approach using Prisma's built-in type
export const withTransactionAlt = async <T>(
  callback: Parameters<typeof prisma.$transaction>[0]
): Promise<T> => {
  return await prisma.$transaction(callback as any) as T
}

// Common database operations
export const dbOperations = {
  // User operations
  user: {
    findByEmail: (email: string) =>
      prisma.user.findUnique({ where: { email } }),
    
    create: (data: { email: string; name?: string; timezone?: string }) =>
      prisma.user.create({ data }),
    
    getWithAccounts: (userId: string) =>
      prisma.user.findUnique({
        where: { id: userId },
        include: {
          socialAccounts: {
            where: { isActive: true },
            orderBy: { connectedAt: 'desc' }
          },
          _count: {
            select: { socialAccounts: true, insights: true }
          }
        }
      })
  },

  // Social account operations
  socialAccount: {
    create: (data: {
      userId: string
      platform: Platform
      accountId: string
      username?: string
      accessToken: string
      refreshToken?: string
    }) => prisma.socialAccount.create({ data }),
    
    findByPlatform: (userId: string, platform: Platform) =>
      prisma.socialAccount.findUnique({
        where: { userId_platform: { userId, platform } }
      }),
    
    updateTokens: (id: string, tokens: { accessToken: string; refreshToken?: string }) =>
      prisma.socialAccount.update({
        where: { id },
        data: { ...tokens, lastSyncAt: new Date() }
      })
  },

  // Post operations  
  post: {
    // Fix the postData type instead of using 'any'
    upsert: (postData: {
      socialAccountId: string
      postId: string
      content?: string
      postDate: Date
      likesCount?: number
      commentsCount?: number
      sharesCount?: number
      postType?: any // Use actual PostType from schema
    }) =>
      prisma.post.upsert({
        where: {
          socialAccountId_postId: {
            socialAccountId: postData.socialAccountId,
            postId: postData.postId
          }
        },
        update: {
          likesCount: postData.likesCount || 0,
          commentsCount: postData.commentsCount || 0,
          sharesCount: postData.sharesCount || 0,
          updatedAt: new Date()
        },
        create: postData
      }),
    
    getRecentPosts: (socialAccountId: string, limit = 50) =>
      prisma.post.findMany({
        where: { socialAccountId, isDeleted: false },
        orderBy: { postDate: 'desc' },
        take: limit,
        include: { analyticsResults: true }
      })
  }
}
