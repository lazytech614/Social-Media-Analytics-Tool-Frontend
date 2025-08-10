import { DefaultSession, DefaultUser } from 'next-auth'
import { JWT, DefaultJWT } from 'next-auth/jwt'

// Extend the built-in session types
declare module 'next-auth' {
  interface Session {
    user: {
      id: string
    } & DefaultSession['user']
    accessToken?: string
    provider?: string
  }

  interface User extends DefaultUser {
    id: string
  }
}

// Extend the built-in JWT types
declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT {
    id: string
    accessToken?: string
    provider?: string
  }
}
