import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import Typography from 'material-ui/Typography'
import yoshiEgg from '../../public/img/yoshiegg.png'

const styles = theme => ({
  '@keyframes shake': {
    '0%': { transform: 'rotate(5deg)' },
    '50%': { transform: 'rotate(-2deg)' },
    '100%': { transform: 'rotate(0deg)' },
  },
  a: {
    cursor: 'pointer',
    color: theme.palette.secondary.main,
  },
})

class Placeholder extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      shakeEgg: false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    this.setState({ shakeEgg: true });
    setTimeout(() => this.setState({ shakeEgg: false }), 300)
  }

  render () {
    const { classes } = this.props
    const { shakeEgg } = this.state

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{ width: '100%', height: '100vh' }}
      >
        <img src={yoshiEgg} width="200" style={{ animation: shakeEgg ? 'shake 0.25s infinite' : 'none' }} />
        <Typography variant="subheading">
          Hmm... This site hasn&apos;t <a onClick={this.handleClick} className={classes.a}>hatched</a> quite yet
        </Typography>
      </Grid>
    )
  }
}

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Placeholder)
