import type { ReactNode } from 'react'

import { MdArrowBack } from 'react-icons/md'
import { Link as LinkRouter } from 'react-router-dom'

import illustrationImg from '../../assets/images/illustration.svg'
import logoImg from '../../assets/images/logo.svg'
import * as Styled from './styles'

interface AccountNavigationProps {
  title?: string
  backPath?: string
  children?: ReactNode
}

function AccountNavigation({ children, title, backPath = '/' }: AccountNavigationProps) {
  return (
    <Styled.Container>
      <Styled.Aside>
        <Styled.Illustration 
          src={illustrationImg} 
          alt="Ilustração simbolizando perguntas e respostas" 
        />
        <Styled.Title>
          Crie salas de Q&amp;A ao-vivo
        </Styled.Title>
        <Styled.Subtitle>
          Tire as dúvidas da sua audiência em tempo-real
        </Styled.Subtitle>
      </Styled.Aside>

      <Styled.PageContainer>
        <Styled.Header>
          <Styled.Link 
            to={backPath}
          >
            <MdArrowBack size={32} />
          </Styled.Link>
          <LinkRouter 
            to="/"
          >
            <Styled.LogoImage src={logoImg} alt="Logo com o nome Letmeask" />
          </LinkRouter>
        </Styled.Header>
        
        <Styled.Box>
          <Styled.Content>
            <Styled.Heading>{ title }</Styled.Heading>
            { children }
          </Styled.Content>
        </Styled.Box>
      </Styled.PageContainer>
    </Styled.Container>
  )
}

export default AccountNavigation
