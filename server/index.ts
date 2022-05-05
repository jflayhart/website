import next from 'next'
import express from 'express'
import cookieParser from 'cookie-parser'

let port = 8080
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()
    // Reason: https://www.npmjs.com/package/cookies#secure-cookies
    // We are one hop behind a proxy, so this is OK to allow forwarding headers!
    // https://expressjs.com/en/guide/behind-proxies.html
    server.set('trust proxy', 1)

    // Middleware
    server.use(cookieParser())

    // APIs
    server.all('*', (req, res) => handle(req, res))

    // Server
    server.listen(port, () => {
        // TODO: add logInfo here, but required moving logging utils to /shared directory
        // https://app.clubhouse.io/shipt/story/319550
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`)
    })
})
