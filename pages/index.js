import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavBar from '../pages/components/navbar'
import SplashBox from '../pages/components/splashbox'
import SocialBar from '../pages/components/socialbar'
import Services from '../pages/components/services'
import RecentProject from '../pages/components/recentproject'
import Projects from '../pages/components/projects'
import Footer from '../pages/components/footer'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        
      <NavBar />
      <SplashBox />
      <SocialBar />
      <Services />
      <RecentProject />
      <Projects />
      <SocialBar />
      <Footer />

      
      </main>
    </>
  )
}
