import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import Head from 'next/head';
import theme from '../styles/theme';
import { useState, useEffect } from 'react';
import Router from 'next/router';
import PuffLoader from "react-spinners/PuffLoader";
import '../styles/globals.css';

// Manually generated
import Header from '@components/commons/Header';
import Footer from '@components/commons/Footer';
import Document from './_document';
import { Box } from '@mui/material';


const clientSideEmotionCache = createEmotionCache();


function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on('routeChangeStart', () => setLoading(true));
    Router.events.on('routeChangeComplete', () => setLoading(false));
    Router.events.on('routeChangeError', () => setLoading(false));
    return () => {
      Router.events.off('routeChangeStart', () => setLoading(true));
      Router.events.off('routeChangeComplete', () => setLoading(false));
      Router.events.off('routeChangeError', () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
    
      <CacheProvider value={emotionCache}>
      <Head>
        <title>Observatorio Urbano</title>
        <meta lang='es' name='viewport' content='initial-scale=1, width=device-width' />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        
      {
        (loading)
      ?
        <main>
      <Box sx={{
        position: "fixed", 
        top: "0", 
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.5)", 
        zIndex: "999",
      }}>
      </Box>
      <Box sx={{
        position: "fixed", 
        top: "40%", 
        left: "48%", 
        zIndex: "1000",
      }}>
      <PuffLoader 
      color={'#F5A623'} 
      loading={loading} 
      size={100} 
      />
      </Box>
      <Component {...pageProps} />
      </main>
     
      :
      <main>
      <Component {...pageProps} />
      </main>
      
      }
        <Footer />
      </ThemeProvider>
    </CacheProvider>
    
    </>
  );
}

export default MyApp;
