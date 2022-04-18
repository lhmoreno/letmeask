import { MdLogin } from 'react-icons/md'

import illustrationImg from '../../assets/images/illustration-main.svg'
import logoWhiteImg from '../../assets/images/logo-white.svg'
import * as Styled from './styles'

function Home() {
  const auth = false

  return (
    <Styled.Container>
      <Styled.Main>
        <Styled.Logo src={logoWhiteImg} alt="Logo com o nome Letmeask" />

        <Styled.Info>
          <Styled.Title>
            Toda pergunta tem uma resposta.
          </Styled.Title>
          <Styled.Subtitle>
            Aprenda e compartilhe conhecimento com outras pessoas
          </Styled.Subtitle>
        </Styled.Info>

        <Styled.Buttons>
          <Styled.ButtonNormal 
            to="/rooms/enter"
          >
            <MdLogin size={18} />
            Entrar em uma sala
          </Styled.ButtonNormal>
          <Styled.ButtonOutline 
            to={auth ? '/admin/rooms' : '/login'}
          >
            {auth ? 'Criar uma sala' : 'Fazer login'}
          </Styled.ButtonOutline>
        </Styled.Buttons>
      </Styled.Main>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
    </Styled.Container>
  )
}

export default Home
