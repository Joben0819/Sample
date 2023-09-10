import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: 'process.env.GOOGLE_CLIENT_ID',
      clientSecret: 'process.env.GOOGLE_CLIENT_SECRET',
    }),
    // Add other authentication providers as needed
  ],
  // Customize your authentication flow and callbacks here
})