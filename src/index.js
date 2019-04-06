import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from './components/ThemeProvider'
import Placeholder from './components/Placeholder'

export const App = () => (
  <Placeholder />
)

ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  , document.getElementById('root'))
