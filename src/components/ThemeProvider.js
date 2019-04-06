/* eslint-disable react/display-name */
import React from 'react'
import PropTypes from 'prop-types'
import styles from '../styles'

const ThemeContext = React.createContext(styles)

export const withTheme = Component => props => (
  <ThemeContext.Consumer>
    {value => <Component theme={value} {...props} />}
  </ThemeContext.Consumer>
)

export const ThemeProvider = ({ children }) => (
  <ThemeContext.Provider value={styles}>
    {children}
  </ThemeContext.Provider>
)

ThemeProvider.propTypes = {
  children: PropTypes.node,
}

export default ThemeProvider
