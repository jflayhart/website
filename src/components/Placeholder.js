import React, { useState } from 'react'
import GridLayout from './GridLayout'
import SocialLinks from './SocialLinks'
import yoshiEgg from '../../static/img/yoshiegg.png'
import styled, { keyframes } from 'styled-components'

const shakeKeyframe = keyframes`
  0% { transform: rotate(5deg) }
  50% { transform: rotate(-2deg) }
  100% { transform: rotate(0deg) }
`

const StyledImage = styled.img`
  width: 200px;
  animation-name: ${props => props.shake ? shakeKeyframe : ''};
  animation-duration: 0.25s;
  animation-iteration-count: infinite;
`

const StyledSpan = styled.span`
  cursor: pointer;
  color: ${props => props.theme.accentColor};
`

const Placeholder = () => {
  const [shake, setShake] = useState(false)

  const handleClick = () => {
    setShake(true)
    setTimeout(() => setShake(false), 300)
  }

  return (
    <GridLayout centerVertical>
      <StyledImage src={yoshiEgg} shake={shake} />
      <div style={{ marginBottom: 25 }}>
        Hmm... This site hasn&apos;t <StyledSpan onClick={handleClick}>hatched</StyledSpan> quite yet
      </div>
      <SocialLinks />
    </GridLayout>
  )
}

export default Placeholder
