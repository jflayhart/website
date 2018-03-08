import React from 'react'
import PropTypes from 'prop-types'
import Grid from 'material-ui/Grid'
import { withStyles } from 'material-ui/styles'
import Typography from 'material-ui/Typography'
import GridLayout from './GridLayout'
import SocialLinks from './SocialLinks'
import yoshiEgg from '../../public/img/yoshiegg.png'

const styles = theme => ({
  '@keyframes shake': {
    '0%': { transform: 'rotate(5deg)' },
    '50%': { transform: 'rotate(-2deg)' },
    '100%': { transform: 'rotate(0deg)' },
  },
  content: {
    textAlign: 'center',
  },
  a: {
    cursor: 'pointer',
    color: theme.palette.secondary.main,
    display: 'inline-block',
    marginBottom: '40px',
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
    this.setState({ shakeEgg: true })
    setTimeout(() => this.setState({ shakeEgg: false }), 300)
  }

  render () {
    const { classes } = this.props
    const { shakeEgg } = this.state

    return (
      <GridLayout centerVertical>
        <Grid item className={classes.content}>
          <img src={yoshiEgg} width="200" style={{ animation: shakeEgg ? 'shake 0.25s infinite' : 'none' }} />
          <Typography variant="subheading">
            Hmm... This site hasn&apos;t <a onClick={this.handleClick} className={classes.a}>hatched</a> quite yet
          </Typography>
          <SocialLinks />
        </Grid>
      </GridLayout>
    )
  }
}

Placeholder.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Placeholder)