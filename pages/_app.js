import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../styles/createEmotionCache';
import  Head  from 'next/head';
import "/styles/globals.css";
import theme from '../styles/theme';

// Manually generated
import Header from '@components/Header';

const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Observatorio Urbano</title>
        <meta name='viewport' content='initial-scale=1, width=device-width'/>
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
          <Header />
        <Component {...pageProps}/>
      </ThemeProvider>
    </CacheProvider>);
}

export default MyApp;
