import logoSvg from '../../assets/images/logo-white.svg'
import * as Styled from './styles'

function SplashScreen() {
  return (
    <Styled.Container>
      <Styled.Logo src={logoSvg} />
    </Styled.Container>
  )
}

export default SplashScreen
