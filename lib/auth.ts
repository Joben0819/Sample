// import { NextAuthOptions, User, getServerSession } from "next-auth";
// import { useSession } from "next-auth/react";
// import { Redirect } from "next";

// import  CredentialsProvider  from "next-auth/providers/credentials";
// import GoogleProvider from 'next-auth/providers/google'
// import { type } from "os";


// // import prisma from

// export const authConfig: NextAuthOptions = {
//     providers: [
//         CredentialsProvider({
//             name: "Sign in",
//             credentials: {
//                 email :{
//                     label: "Email",
//                     type: "email",
//                     placeholder: "example@gmail.com"
//                 },
//             password: {label: "Password", type: "password"},
//             },
//                 async authorize(credentials){
//                     if(!credentials || !credentials.email ||!credentials.password )
//                     return null;
                    
//                     cosnt
//                 }
//         })
//     ]
// }