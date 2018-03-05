import React from 'react'
import ReactDOM from 'react-dom'
import Reboot from 'material-ui/Reboot'
import { MuiThemeProvider } from 'material-ui/styles'
import styles from './styles'
import Placeholder from './components/Placeholder'

// App Routing
export const App = () => (
  <MuiThemeProvider theme={styles}>
    <Reboot />
    <Placeholder />
  </MuiThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
