import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'

const GridLayout = props =>
  <Grid
    container
    justify="center"
    alignItems="center"
    style={{ width: '100%', height: props.centerVertical ? '100vh' : '100%' }}
  >
    {props.children}
  </Grid>

GridLayout.defaultProps = {
  centerVertical: false,
}

GridLayout.propTypes = {
  children: PropTypes.object.isRequired,
  centerVertical: PropTypes.bool,
}

export default GridLayout
