import React from 'react'
import PropTypes from 'prop-types'

const styles = props => ({
  display: 'flex',
  flexDirection: props.centerVertical ? 'column' : 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: props.centerVertical ? '100vh' : '100%',
})

const GridLayout = props =>
  <div style={styles(props)}>
    {props.children}
  </div>

GridLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default GridLayout
