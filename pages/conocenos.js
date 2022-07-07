import Splashscreen from '@components/commons/Splashscreen'
import AboutUs from '@components/conocenos/AboutUs'
import { Container } from '@mui/material'
import Head from 'next/head'
import React from 'react'


const Conocenos = () => {
  return (
    <>
      <Head>
        <title>Conócenos</title>
        <link rel="icon" href="/icon.ico" />
      </Head>
      <Splashscreen />
      <AboutUs />
    </>
  )
}

export default Conocenos