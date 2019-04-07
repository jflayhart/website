import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import Placeholder from './components/Placeholder'
import styles from './styles'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.fontColor};
    background: #FFFFF8;
  }
`

export const App = () => (
  <ThemeProvider theme={styles}>
    <Fragment>
      <GlobalStyle />
      <Placeholder />
    </Fragment>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
