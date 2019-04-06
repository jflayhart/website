# personal website
I just wanted a sandbox to play in mainly, but this doubles as a creative way to make my resume and career info publicly available (simply because it's easier to send someone a URL).

### about
Currently, the site uses React + AWS S3 to display content about yours truly. I personally don't love the idea of my information being out there, but this is the 21st century... it already is! I want to use this "sandbox" for POCs, blowing things up, making mistakes, and learning about new technology. So if my site is down, that's me blowing things up. Oops. ^_^

I try to follow best practices in whatever technology I am running with while keeping things as simple and straightforward as possible (say "no" to Javascript fatigue!), so here is the current app structure:
```
.
├── README.md          # what you're reading now :)
├── dist               # generated directory for app distribution
├── package.json       # npm dependencies and script runners
├── public             # static files made publicly available to web
├── src                # react source files
│   ├── components     # react component files
│   ├── index.js       # app entry point
│   └── styles.js      # app theming
├── tests              # test files for jest (try to mirror src folder structure)
└── webpack.config.js  # webpack config for running dev environment and production deploys
```

### attributions
<a href="https://reactjs.org" title="React"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" width="70" alt="React" /></a>
<a href="https://webpack.js.org" title="Webpack"><img src="https://day-journal.com/memo/images/logo/webpack.png" width="50" alt="Webpack" /></a>&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://eslint.org" title="ESLint"><img src="https://eslint.org/img/logo.svg" width="50" alt="ESLint" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
<a href="https://facebook.github.io/jest" title="Jest"><img src="https://cloudinary-a.akamaihd.net/bountysource/image/upload/d_noaoqqwxegvmulwus0un.png,c_pad,w_200,h_200,b_white/ivp5rb3l5uo7vlcam5kc.png" width="40" alt="Jest" /></a>