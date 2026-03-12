import { Html, Head, Main, NextScript } from 'next/document'
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v13-pagesRouter'

export default function MyDocument(props) {

  return (
    <Html lang='es'>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@700&display=swap" rel="stylesheet" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <DocumentHeadTags {...props} />
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YDXBPMHC9Y" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YDXBPMHC9Y');
            `,
          }}
        />
      </Head>
      <body>
        <script>0</script>
        <a id="top" name="top" style={{ display: 'hidden' }}></a>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


MyDocument.getInitialProps = async (ctx) => {
  const initialProps = await documentGetInitialProps(ctx)
  return { ...initialProps }
}