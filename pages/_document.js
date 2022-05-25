import Document, { Html, Head, Main, NextScript } from 'next/document'
import Image from 'next/image'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang='es'>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <div id='globalLoader'
            style={{
              position: 'fixed',
              height: '100%',
              width: '100%',
              zIndex: 5000,
              backgroundColor: 'black',
              transition: 'all 1s linear',
            }}>
            <div id='loader' style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              transition: 'opacity 0.25s linear',
            }}>
              <img
                alt='Chihuahua Metrica Logo'
                src='/Logotipo-editable-blanco_Mesa-de-trabajo-1.webp'
                style={{ maxWidth: '300px' }} />
            </div>
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument