import App from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import theme from '../styles'

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider theme={theme}>
        <Head>
          <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height" />
          <title>Josh Flayhart</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
