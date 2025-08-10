-- CreateEnum
CREATE TYPE "public"."platform" AS ENUM ('TWITTER', 'INSTAGRAM', 'LINKEDIN', 'FACEBOOK', 'TIKTOK', 'YOUTUBE');

-- CreateEnum
CREATE TYPE "public"."post_type" AS ENUM ('TEXT', 'IMAGE', 'VIDEO', 'CAROUSEL', 'STORY', 'REEL', 'LIVE');

-- CreateEnum
CREATE TYPE "public"."insight_type" AS ENUM ('BEST_POST_TIME', 'HASHTAG_RECOMMENDATIONS', 'SENTIMENT_TREND', 'ENGAGEMENT_PATTERN', 'AUDIENCE_ANALYSIS', 'CONTENT_PERFORMANCE', 'GROWTH_OPPORTUNITIES', 'COMPETITIVE_ANALYSIS');

-- CreateEnum
CREATE TYPE "public"."priority" AS ENUM ('LOW', 'MEDIUM', 'HIGH', 'CRITICAL');

-- CreateTable
CREATE TABLE "public"."users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,
    "avatar" TEXT,
    "timezone" TEXT NOT NULL DEFAULT 'UTC',
    "preferences" JSONB,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."social_accounts" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "platform" "public"."platform" NOT NULL,
    "accountId" TEXT NOT NULL,
    "username" TEXT,
    "displayName" TEXT,
    "followerCount" INTEGER,
    "followingCount" INTEGER,
    "accessToken" TEXT NOT NULL,
    "refreshToken" TEXT,
    "tokenExpiresAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "connectedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSyncAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "social_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."posts" (
    "id" TEXT NOT NULL,
    "socialAccountId" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "content" TEXT,
    "mediaUrls" TEXT[],
    "postType" "public"."post_type" NOT NULL DEFAULT 'TEXT',
    "postDate" TIMESTAMP(3) NOT NULL,
    "likesCount" INTEGER NOT NULL DEFAULT 0,
    "commentsCount" INTEGER NOT NULL DEFAULT 0,
    "sharesCount" INTEGER NOT NULL DEFAULT 0,
    "viewsCount" INTEGER,
    "engagementRate" DOUBLE PRECISION,
    "hashtags" TEXT[],
    "mentions" TEXT[],
    "language" TEXT,
    "isDeleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "posts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."analytics_results" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "sentimentScore" DOUBLE PRECISION,
    "sentimentLabel" TEXT,
    "confidence" DOUBLE PRECISION,
    "engagementScore" DOUBLE PRECISION,
    "viralityScore" DOUBLE PRECISION,
    "performanceScore" DOUBLE PRECISION,
    "optimalPostTime" TIMESTAMP(3),
    "processingVersion" TEXT NOT NULL DEFAULT '1.0',
    "processedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "analytics_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."ai_insights" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "insightType" "public"."insight_type" NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "insightData" JSONB NOT NULL,
    "confidence" DOUBLE PRECISION,
    "priority" "public"."priority" NOT NULL DEFAULT 'MEDIUM',
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "validUntil" TIMESTAMP(3),
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ai_insights_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."api_keys" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "keyHash" TEXT NOT NULL,
    "permissions" JSONB NOT NULL,
    "lastUsedAt" TIMESTAMP(3),
    "expiresAt" TIMESTAMP(3),
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "api_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_email_idx" ON "public"."users"("email");

-- CreateIndex
CREATE INDEX "users_createdAt_idx" ON "public"."users"("createdAt");

-- CreateIndex
CREATE INDEX "social_accounts_platform_idx" ON "public"."social_accounts"("platform");

-- CreateIndex
CREATE INDEX "social_accounts_lastSyncAt_idx" ON "public"."social_accounts"("lastSyncAt");

-- CreateIndex
CREATE INDEX "social_accounts_isActive_idx" ON "public"."social_accounts"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "social_accounts_userId_platform_key" ON "public"."social_accounts"("userId", "platform");

-- CreateIndex
CREATE INDEX "posts_postDate_idx" ON "public"."posts"("postDate");

-- CreateIndex
CREATE INDEX "posts_socialAccountId_postDate_idx" ON "public"."posts"("socialAccountId", "postDate");

-- CreateIndex
CREATE INDEX "posts_isDeleted_idx" ON "public"."posts"("isDeleted");

-- CreateIndex
CREATE UNIQUE INDEX "posts_socialAccountId_postId_key" ON "public"."posts"("socialAccountId", "postId");

-- CreateIndex
CREATE INDEX "analytics_results_postId_idx" ON "public"."analytics_results"("postId");

-- CreateIndex
CREATE INDEX "analytics_results_processedAt_idx" ON "public"."analytics_results"("processedAt");

-- CreateIndex
CREATE INDEX "ai_insights_userId_insightType_idx" ON "public"."ai_insights"("userId", "insightType");

-- CreateIndex
CREATE INDEX "ai_insights_generatedAt_idx" ON "public"."ai_insights"("generatedAt");

-- CreateIndex
CREATE INDEX "ai_insights_isActive_idx" ON "public"."ai_insights"("isActive");

-- CreateIndex
CREATE UNIQUE INDEX "api_keys_keyHash_key" ON "public"."api_keys"("keyHash");

-- CreateIndex
CREATE INDEX "api_keys_keyHash_idx" ON "public"."api_keys"("keyHash");

-- CreateIndex
CREATE INDEX "api_keys_userId_idx" ON "public"."api_keys"("userId");

-- AddForeignKey
ALTER TABLE "public"."social_accounts" ADD CONSTRAINT "social_accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."posts" ADD CONSTRAINT "posts_socialAccountId_fkey" FOREIGN KEY ("socialAccountId") REFERENCES "public"."social_accounts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."analytics_results" ADD CONSTRAINT "analytics_results_postId_fkey" FOREIGN KEY ("postId") REFERENCES "public"."posts"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."ai_insights" ADD CONSTRAINT "ai_insights_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "public"."api_keys" ADD CONSTRAINT "api_keys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
