import React from 'react'
import facebookIcon from '../../public/img/facebook.svg'
import gitIcon from '../../public/img/github.svg'
import linkedinIcon from '../../public/img/linkedin.svg'
import twitterIcon from '../../public/img/twitter.svg'

const styles = {
  container: {
    display: 'flex',
  },
  icon: {
    margin: '0 15px',
  },
}

class SocialLinks extends React.Component {
  render () {
    return (
      <div style={styles.container}>
        <div style={styles.icon}>
          <a href="https://www.facebook.com/jjflayhart" target="_blank" rel="noopener noreferrer"><img src={facebookIcon} width="40" alt="facebook" aria-label="facebook" /></a>
        </div>
        <div style={styles.icon}>
          <a href="https://twitter.com/joshflayhart" target="_blank" rel="noopener noreferrer"><img src={twitterIcon} width="40" alt="twitter" aria-label="twitter" /></a>
        </div>
        <div style={styles.icon}>
          <a href="https://www.linkedin.com/in/jflayhart" target="_blank" rel="noopener noreferrer"><img src={linkedinIcon} width="40" alt="linkedin" aria-label="linkedin" /></a>
        </div>
        <div style={styles.icon}>
          <a href="https://github.com/jflayhart" target="_blank" rel="noopener noreferrer"><img src={gitIcon} width="40" alt="github" aria-label="github" /></a>
        </div>
      </div>
    )
  }
}

export default SocialLinks
