import React from 'react'
import PropTypes from 'prop-types'
import IconButton from 'material-ui/IconButton'
import { withStyles } from 'material-ui/styles'
import facebookIcon from '../../public/img/facebook.svg'
import gitIcon from '../../public/img/github.svg'
import linkedinIcon from '../../public/img/linkedin.svg'
import twitterIcon from '../../public/img/twitter.svg'

const styles = theme => ({
  span: {
    margin: '0 10px',
  },
})

class SocialLinks extends React.Component {
  render () {
    const { classes } = this.props

    return [
      <IconButton key="facebook" component="span" className={classes.span}>
        <a href="https://www.facebook.com/jjflayhart" target="_blank"><img src={facebookIcon} width="40" /></a>
      </IconButton>,
      <IconButton key="twitter" component="span" className={classes.span}>
        <a href="https://twitter.com/joshflayhart" target="_blank"><img src={twitterIcon} width="40" /></a>
      </IconButton>,
      <IconButton key="linkedin" component="span" className={classes.span}>
        <a href="https://www.linkedin.com/in/jflayhart" target="_blank"><img src={linkedinIcon} width="40" /></a>
      </IconButton>,
      <IconButton key="github" component="span" className={classes.span}>
        <a href="https://github.com/jflayhart" target="_blank"><img src={gitIcon} width="40" /></a>
      </IconButton>,
    ]
  }
}

SocialLinks.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SocialLinks)
