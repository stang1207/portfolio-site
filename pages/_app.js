import { ChakraProvider } from '@chakra-ui/react';
import { AnimatePresence } from 'framer-motion';
import Layout from '../src/constant/Layout';
import theme from '../src/constant/theme';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=1.0"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <Layout>
          <AnimatePresence exitBeforeEnter initial={true}>
            <Component {...pageProps} />
          </AnimatePresence>
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
