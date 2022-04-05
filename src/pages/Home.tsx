import styled, { CSSObject } from 'styled-components'
import { MdLogin } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration-main.svg'
import logoWhiteImg from '../assets/images/logo-white.svg'

interface ButtonProps {
  variant?: 'normal' | 'outline'
}

export function Home() {
  const navigate = useNavigate()

  function handleEnterRoom() {
    navigate('/rooms')
  }
  
  function handleCreateRoom() {
    navigate('/login')
  }

  return (
    <Container>
      <Content>
        <Logo src={logoWhiteImg} alt="Logo com o nome Letmeask" />
        <Info>
          <Title>Toda pergunta tem uma resposta.</Title>
          <Subtitle>Aprenda e compartilhe conhecimento com outras pessoas</Subtitle>
        </Info>
        <Buttons>
          <Button onClick={handleEnterRoom}>
            <LoginIcon />
            Entrar em uma sala
          </Button>
          <Button variant="outline" onClick={handleCreateRoom}>Criar uma sala</Button>
        </Buttons>
      </Content>
      <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.colors.primary,
    color: 'white',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '80px'
  }
})

const Content = styled.div(({ theme }) => {
  return {
    maxWidth: '440px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }
})

const Logo = styled.img(({ theme }) => {
  return {
    width: '272px'
  }
})

const Info = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }
})


const Title = styled.strong(({ theme }) => {
  return {
    fontFamily: 'Poppins',
    fontSize: '36px'
  }
})

const Subtitle = styled.p(({ theme }) => {
  return {
    fontSize: '24px',
    color: theme.colors.background
  }
})

const Buttons = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }
})

const Button = styled.button<ButtonProps>(({ theme, variant = 'normal' }) => {
  const button: CSSObject = {
    width: '320px',
    height: '50px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '500',
    borderRadius: '8px',
    transitionProperty: 'background',
    transitionDuration: '0.3s'
  }

  const normal: CSSObject = {
    color: theme.colors.text,
    backgroundColor: 'white',
    ":hover": {
      backgroundColor: '#EFEFEF'
    }
  }

  const outline: CSSObject = {
    color: 'white',
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: 'white',
    ":hover": {
      backgroundColor: theme.colors.hover.primary
    }
  }


  return variant === 'normal' ? {...button, ...normal} : {...button, ...outline}
})

const LoginIcon = styled(() => MdLogin({size:18}))(({ theme }) => {
  return {
    color: theme.colors.text
  }
})

