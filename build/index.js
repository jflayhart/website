"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const next_1 = __importDefault(require("next"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
let port = 8080;
const dev = process.env.NODE_ENV !== 'production';
const app = next_1.default({ dev });
const handle = app.getRequestHandler();
app.prepare().then(() => {
    const server = express_1.default();
    // Reason: https://www.npmjs.com/package/cookies#secure-cookies
    // We are one hop behind a proxy, so this is OK to allow forwarding headers!
    // https://expressjs.com/en/guide/behind-proxies.html
    server.set('trust proxy', 1);
    // Middleware
    server.use(cookie_parser_1.default());
    // APIs
    server.all('*', (req, res) => handle(req, res));
    // Server
    server.listen(port, () => {
        // TODO: add logInfo here, but required moving logging utils to /shared directory
        // https://app.clubhouse.io/shipt/story/319550
        // eslint-disable-next-line no-console
        console.log(`> Ready on http://localhost:${port}`);
    });
});
