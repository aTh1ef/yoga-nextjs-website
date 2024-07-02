// Import necessary dependencies
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Head from 'next/head';
import Layout from '../components/Layout';
import Transition from '../components/Transition';
import '../styles/globals.css'; // Import global CSS

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <Layout>
      <Head>
        <link rel="icon" href="/yogacon.png" type="image/png" />
        <title>Yoga Tech AI</title>
        <meta name="description" content="Your page description" />
      </Head>
      <AnimatePresence mode="wait">
        <motion.div key={router.route} className="h-full">
          <Transition />
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
