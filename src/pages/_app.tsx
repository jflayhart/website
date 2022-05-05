import { useEffect } from 'react'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../styles'

function MyApp({ Component, pageProps }: any) {
  useEffect(() => {
    if('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js').then(
          function (registration) {
            console.log('Service Worker registration successful with scope: ', registration.scope)
          },
          function (err) {
            console.error('Service Worker registration failed: ', err)
          }
        )
      })
    }
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="initial-scale=1,minimum-scale=1,maximum-scale=5,width=device-width,height=device-height" />
        <meta name="description" content="Hi! This is my personal website for resume, sandboxing, blogging, and anything else tech!" />
        <title>Josh Flayhart</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
