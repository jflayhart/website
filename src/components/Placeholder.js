import React, { useState } from 'react'
import { withTheme } from './ThemeProvider'
import GridLayout from './GridLayout'
import SocialLinks from './SocialLinks'
import yoshiEgg from '../../public/img/yoshiegg.png'

const styles = props => ({
  shake: {
    '@keyframes shake': {
      '0%': { transform: 'rotate(5deg)' },
      '50%': { transform: 'rotate(-2deg)' },
      '100%': { transform: 'rotate(0deg)' },
    },
  },
  span: {
    cursor: 'pointer',
    color: props.theme.primaryColor,
    display: 'inline-block',
    marginBottom: 20,
  },
})

const Placeholder = props => {
  const [shake, setShake] = useState(false)
  const themedStyle = styles(props)

  const handleClick = () => {
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }
  // TODO add animation
  return (
    <GridLayout centerVertical>
      <img src={yoshiEgg} width="200" style={{ animation: shake ? 'shake 0.25s infinite' : '' }} />
      <div>
        Hmm... This site hasn&apos;t <span style={themedStyle.span} onClick={handleClick}>hatched</span> quite yet
      </div>
      <SocialLinks />
    </GridLayout>
  )
}

export default withTheme(Placeholder)
