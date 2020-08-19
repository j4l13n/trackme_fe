import '../styles/globals.css'
import Head from 'next/head';
import React from 'react';

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
          <link href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </>
    )
}

export default App
