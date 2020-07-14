import React from 'react'
import GridLayout from './GridLayout'
import SocialLinks from './SocialLinks'
import styled from 'styled-components'

const Image = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`

const Main = () => (
  <GridLayout centerVertical>
    <Image src="/images/jf_logo.png" alt="logo" />
    <SocialLinks />
  </GridLayout>
)

export default Main
