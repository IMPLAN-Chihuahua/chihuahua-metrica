import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Head from 'next/head';
import theme from '../styles/theme';
import { useEffect } from 'react';
import Router from 'next/router';
import '../styles/globals.css';

import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { Box } from '@mui/material';
import { useRouter } from 'next/router'

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {

  useEffect(() => {
    const handleRouteStart = () => NProgress.start();
    const handleRouteDone = () => NProgress.done();

    Router.events.on("routeChangeStart", handleRouteStart);
    Router.events.on("routeChangeComplete", handleRouteDone);
    Router.events.on("routeChangeError", handleRouteDone);

    return () => {
      Router.events.off("routeChangeStart", handleRouteStart);
      Router.events.off("routeChangeComplete", handleRouteDone);
      Router.events.off("routeChangeError", handleRouteDone);
    };
  }, []);

  const { pathname } = useRouter();

  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Chihuahua Metrica</title>
          <meta lang='es' name='viewport' content='initial-scale=1, width=device-width' />
          <link rel="icon" href="/icon.ico" />
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {
            pathname !== '/' &&
            <Box id='ghostly-div' marginTop='66px'></Box>
          }
          <Header />
          <main>
            <Component {...pageProps} />
          </main>
          <Footer />
        </ThemeProvider>
      </CacheProvider>

    </>
  );
}

export default MyApp;
