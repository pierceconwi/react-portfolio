import Head from 'next/head';
import { Inter } from 'next/font/google';
import NavBar from './components/navbar';
import SplashBox from './components/splashbox';
import SocialBar from './components/socialbar';
import Services from './components/services';
import RecentProject from './components/recentproject';
import Projects from './components/projects';
import Footer from './components/footer';
import styles from '@/styles/Home.module.css';
import { getProjects } from './components/lib/data';

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
      <Projects data={data} />
      <SocialBar />
      <Footer />
      </main>
    </>
  )
}
