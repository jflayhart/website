import GridLayout from './GridLayout'
import SocialLinks from './SocialLinks'
import styled from 'styled-components'

const Image = styled.img`
  margin-bottom: 2rem;
`

const Main = () => (
  <main>
    <GridLayout centerVertical>
      <picture>
        <source srcSet="/images/jf_logo.webp" type="image/webp" />
        <Image src="/images/jf_logo.png" alt="logo" width="200" height="184" />
      </picture>
      <SocialLinks />
    </GridLayout>
  </main>
)

export default Main
