import React from 'react'

const styles = {
  container: {
    display: 'flex',
  },
  icon: {
    margin: '0 15px',
  },
}

const SocialLinks = () => (
  <div style={styles.container}>
    <div style={styles.icon}>
      <a href="https://www.facebook.com/jjflayhart" target="_blank" rel="noopener noreferrer"><img src="/images/facebook.svg" width="40" height="40" alt="facebook" aria-label="facebook" /></a>
    </div>
    <div style={styles.icon}>
      <a href="https://twitter.com/joshflayhart" target="_blank" rel="noopener noreferrer"><img src="/images/twitter.svg" width="40" height="40" alt="twitter" aria-label="twitter" /></a>
    </div>
    <div style={styles.icon}>
      <a href="https://www.linkedin.com/in/jflayhart" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.svg" width="40" height="40" alt="linkedin" aria-label="linkedin" /></a>
    </div>
    <div style={styles.icon}>
      <a href="https://github.com/jflayhart" target="_blank" rel="noopener noreferrer"><img src="/images/github.svg" width="40" height="40" alt="github" aria-label="github" /></a>
    </div>
  </div>
)

export default SocialLinks
