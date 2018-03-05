import { createMuiTheme } from 'material-ui/styles'
import blue from 'material-ui/colors/blue'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'

// https://material-ui-next.com/customization/themes
export default createMuiTheme({
  palette: {
    type: 'light',
    primary: blue,
    secondary: { main: green[700] },
    error: red,
  },
  typography: {
    fontFamily: 'Orbitron, sans-serif',
  }
})
