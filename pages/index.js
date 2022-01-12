import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Container from "@mui/material/Container";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Observatorio urbano</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <h1>Observatorio Urbano</h1>
        <Link href="/indicador">
          <a>
            Indicadores
          </a>
        </Link>
      </Container>
    </div>
  )
}
