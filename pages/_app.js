import '../styles/globals.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  
  return (
    <>
       <Head>
        <title>Brutalism</title>
        
        <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@600&family=Poppins:wght@400&family=Roboto+Mono:wght@200&display=swap" rel="stylesheet" />
       </Head>
       <Component {...pageProps} />
     </>
  )
}

export default MyApp
