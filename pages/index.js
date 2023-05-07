import Head from 'next/head';
import { Inter } from 'next/font/google';
import NavBar from '../pages/components/navbar';
import SplashBox from '../pages/components/splashbox';
import SocialBar from '../pages/components/socialbar';
import Services from '../pages/components/services';
import RecentProject from '../pages/components/recentproject';
import Projects from '../pages/components/projects';
import Footer from '../pages/components/footer';
import styles from '@/styles/Home.module.css';
import Projects2 from '../pages/components/projects2';
import { getProjects } from './lib/data.js';

const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps() {
  const data = await getProjects();
  console.log("gSP:")
  console.log(data);
  return {
      props: {
          data
      }
  };
}

export default function Home({data}) {
  return (
    <>
      <Head>
        <title>Pierce Conwi - Web Developer in San Francisco Bay Area, California</title>
        <meta name="description" content="Pierce Conwi's web developer portfolio" />
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
      <Projects2 data={data} />
      <SocialBar />
      <Footer />
      </main>
    </>
  )
}
