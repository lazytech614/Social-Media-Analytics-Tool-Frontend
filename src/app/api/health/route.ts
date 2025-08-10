import { NextResponse } from 'next/server'
import { checkDatabaseConnection } from '@/lib/prisma'

export async function GET() {
  try {
    const isConnected = await checkDatabaseConnection()
    
    return NextResponse.json({
      status: 'healthy',
      database: isConnected ? 'connected' : 'disconnected',
      timestamp: new Date().toISOString()
    })
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Health check failed',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    )
  }
}
