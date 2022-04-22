import { useUser } from '../../hooks/useUser'
import SplashScreen from '../../components/SplashScreen'
import illustrationSvg from '../../assets/images/illustration.svg'
import logoSvg from '../../assets/images/logo-white.svg'
import enterIcon from '../../assets/icons/enter.svg'
import * as Styled from './styles'

function Home() {
  const { authStatus } = useUser()

  if (authStatus === 'pending') return <SplashScreen />

  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.Main>
          <Styled.Logo src={logoSvg} />
          <Styled.Info>
            <Styled.Title>
              Crie salas de Q&amp;A ao-vivo
            </Styled.Title>
            <Styled.Subtitle>
              Tire as dúvidas da sua audiência em tempo-real
            </Styled.Subtitle>
          </Styled.Info>
          <Styled.Links>
            <Styled.LinkPrimary to="/rooms">
              <Styled.EnterIcon src={enterIcon} />
              Entrar em uma sala
            </Styled.LinkPrimary>
            <Styled.LinkSecondary to="/">
              { authStatus === 'authenticated' ? 'Criar uma sala' : 'Fazer login' }
            </Styled.LinkSecondary>
          </Styled.Links>
        </Styled.Main>

        <Styled.IllustrationContainer>
          <Styled.Illustration src={illustrationSvg} />
        </Styled.IllustrationContainer>
      </Styled.Content>
    </Styled.Container>
  )
}

export default Home
