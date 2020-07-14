import Document, {
  Html,
  Head,
  Main,
  NextScript
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="user-scalable=0, initial-scale=1, minimum-scale=1, width=device-width, height=device-height" />
          <meta name="description" content="Josh Flayhart's personal website for resume, sandboxing, blogging, and anything else techie!" />
          <link rel="shortcut icon" href="/favicon.png" />
        </Head>
        <body>
          <noscript>
            <img alt="Shipt logo" src="/icons/shipt-logo-192.png" />
            <h1>You must enable JavaScript to use this site</h1>
            <div>
              Please review and follow the instructions provided by your
              browser:
            </div>
            <ul>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.google.com/chrome/"
                >
                  Chrome
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.mozilla.org/en-US/firefox/new"
                >
                  Mozilla Firefox
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://support.apple.com/safari"
                >
                  Apple Safari
                </a>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.microsoft.com/en-us/edge"
                >
                  Microsoft Edge
                </a>
              </li>
            </ul>
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
