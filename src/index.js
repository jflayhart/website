import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from './components/ThemeProvider'
import Placeholder from './components/Placeholder'

export const App = () => (
  <ThemeProvider>
    <Placeholder />
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('root'))
