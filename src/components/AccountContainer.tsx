import type { ReactNode } from 'react'

import styled from 'styled-components'
import { MdArrowBack } from 'react-icons/md'
import { Link as LinkRouter } from 'react-router-dom'

import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'

interface AccountContainerProps {
  title?: string
  backPath?: string
  children?: ReactNode
}

export function AccountContainer({ children, title, backPath = '/' }: AccountContainerProps) {
  return (
    <Container>
      <Aside>
        <Illustration src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <Title>Crie salas de Q&amp;A ao-vivo</Title>
        <Subtitle>Tire as dúvidas da sua audiência em tempo-real</Subtitle>
      </Aside>

      <PageContainer>
        <Header>
          <LinkStyled to={backPath}>
            <MdArrowBack size={32} />
          </LinkStyled>
          <LinkRouter to="/">
            <LogoImage src={logoImg} alt="Logo com o nome Letmeask" />
          </LinkRouter>
        </Header>
        <Box>
          <Content>
            <Heading>{ title }</Heading>
            { children }
          </Content>
        </Box>
      </PageContainer>
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  return {
    height: '100vh',
    display: 'grid',
    gridTemplateColumns: '2fr 3fr',
    "@media (max-width: 1280px)": {
      gridTemplateColumns: '1fr'
    }
  }
})

const Aside = styled.aside(({ theme }) => {
  return {
    background: theme.colors.primary,
    color: 'white',
    display: 'flex',
    gap: '16px',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '120px 80px',
    "@media (max-width: 1280px)": {
      display: 'none'
    }
  }
})

const Illustration = styled.img(({ theme }) => {
  return {
    width: '320px'
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

const PageContainer = styled.div(({ theme }) => {
  return {
    width: '100%',
    padding: '48px',
    display: 'flex',
    flexDirection: 'column'
  }
})

const Header = styled.header(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

const LinkStyled = styled(LinkRouter)(({ theme }) => {
  return {
    color: theme.colors.gray.medium,
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    ":hover": {
      color: theme.colors.gray.dark
    }
  }
})

const LogoImage = styled.img(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between'
  }
})

const Box = styled.div(({ theme }) => {
  return {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Heading = styled.h2(({ theme }) => {
  return {
    fontFamily: 'Poppins',
    fontSize: '24px'
  }
})

const Content = styled.div(({ theme }) => {
  return {
    width: '320px',
    display: 'grid',
    gap: '24px'
  }
})
