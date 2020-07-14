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
          <title>Josh Flayhart</title>
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}
