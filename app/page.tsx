'use client'
import Image from 'next/image'
import styles from './page.module.css'
import React,{useState, useEffect} from 'react'
import Header from 'about/Header'
import Footer from 'about/Footer'
// import Data from './about/[id]/page'
// import Data from '@/api/[id]/index'
//import Data3 from './about/[id]/page'
import{ getGameTypes, Login, Browseinit, AccountInfo} from '@/Actions/Api'
import axios from 'axios'
import { useSession, signIn, signOut } from 'next-auth/react'
// const gametypes = async() => {
//   const a = 'api/game88-game-app'
//   const b = await  fetch(`${a}/toWashCode`)
//   const res = await b.json()

//   return

// }


export default function Home() {
  const { data: session } = useSession()
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  useEffect(() => {
    // const a = 'api/game88-game-app'
    // localStorage.setItem('aa', 'https://g8vns.dgg8.cn')
    // fetch(`https://game99.feiwindevelopment.com//game99-platform-app-web/login`)
    // .then(res => res.json())
    // .then(data => console.log('data',data))
    // .catch(error => console.error('Error:', error));

  }, []);
  const handleSubmit = (event : any) => {
    event.preventDefault();
    Login({mobile: user, passwd: pwd})
    .then((res) => {
      console.warn('log',res)
    })
  };

  useEffect(() => {
     getGameTypes()
    .then((res) => {
      console.warn("helloo",res)
    })
  },[])
  // console.warn("helloo")
  return (
    <main className={styles.main}>
      <Header/>
      <div>ss</div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          placeholder="username"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          id="user"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password" // Use "password" type for password input
          placeholder="password"
          value={pwd}
          onChange={(e) => setPwd(e.target.value)}
          id="pwd"
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        {/* {session ? (
          <>
            {session.user ? (
              <>
                <p>Welcome, {session.user.name}!</p>
                <button onClick={() => signOut()}>Sign Out</button>
              </>
            ) : (
              <p>Loading user data...</p>
            )}
          </>
        ) : (
          <>
            <p>You are not signed in.</p>
            <button onClick={() => signIn('google')}>Sign In with Google</button>
          </>
        )} */}
      </div>
      < Footer/>
    </main>
  )
}
