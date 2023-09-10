import NextAuth from 'next-auth';
import { Google } from 'next-auth/providers'; // Import Google from the correct location

export default NextAuth({
  providers: [
    Google({
      clientId: 'YOUR_GOOGLE_CLIENT_ID',
      clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET',
    }),
    // Add other authentication providers as needed
  ],
  // Customize your authentication flow and callbacks here
});