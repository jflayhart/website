import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import Main from '../components/Main'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100%;
    margin: 0;
    font-family: ${props => props.theme.fontFamily};
    color: ${props => props.theme.fontColor};
    background: #FFFFF8;
  }
  .stripe-one,
  .stripe-two,
  .stripe-three,
  .stripe-four {
    position: absolute;
    left: -25%;
    height: 20px;
    width: 100%;
    transform: rotate(-45deg) skew(-45deg);
  }
  .stripe-one {
    background-color: #a0d2c8;
  }
  .stripe-two {
    background-color: #a1d29e;
    top: 30px;
  }
  .stripe-three {
    background-color: #f16146;
    top: 60px;
  }
  .stripe-four {
    background-color: #eb1f44;
    top: 90px;
  }
`

export const Home = () => (
  <>
    <GlobalStyle />
    <div className="stripe-one" />
    <div className="stripe-two" />
    <div className="stripe-three" />
    <div className="stripe-four" />
    <Main />
  </>
)

export default Home
