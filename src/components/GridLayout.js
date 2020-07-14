import React from 'react'

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

export default GridLayout
