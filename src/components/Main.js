import React from 'react'
import GridLayout from './GridLayout'
import SocialLinks from './SocialLinks'
import logo from '../../public/img/jf_logo.png'
import styled from 'styled-components'

const Image = styled.img`
  width: 200px;
  margin-bottom: 2rem;
`

const Main = () => (
  <GridLayout centerVertical>
    <Image src={logo} alt="logo" />
    <SocialLinks />
  </GridLayout>
)

export default Main
