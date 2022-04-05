import styled from 'styled-components'
import { Fragment, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import accountImg from '../assets/images/perfil.png'
import { RoomCode } from '../components/RoomCode'
import { Button } from '../components/Button'
import { Link } from '../components/Link'

export function Room() {
  const [questions, setQuestions] = useState([])
  
  return (
    <Fragment>
      <Header>
        <LinkRouter to="/">
          <LogoImage src={logoImg} alt="Logo com o nome Letmeask" />
        </LinkRouter>
        <RoomCode code="123" />
        <AccountImage src={accountImg} alt="Sua foto de perfil" />
      </Header>
      
      <Main>
        <RoomHeader>
          <RoomTitle>Sala 2</RoomTitle>
          <QuestionsLenght>4 perguntas</QuestionsLenght>
        </RoomHeader>

        <QuestionContainer>
          <Textarea 
            placeholder="O que você quer perguntar?"
          />
          <Flex>
            <Text>
              Para enviar uma pergunta,
              <Link to="/login">faça seu login.</Link>
            </Text>
            <Button title="Enviar pergunta" />
          </Flex>
        </QuestionContainer>

        <div>
          Perguntas...
        </div>
      </Main>
    </Fragment>
  )
}

const Header = styled.header(({ theme }) => {
  return {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 160px',
    borderBottom: '1px solid #e2e2e2'
  }
})

const LogoImage = styled.img(({ theme }) => {
  return {
    height: '40px'
  }
})

const AccountImage = styled.img(({ theme }) => {
  return {
    height: '40px',
    borderRadius: '50%'
  }
})

const Main = styled.main(({ theme }) => {
  return {
    maxWidth: '800px',
    margin: '0px auto',
    padding: '72px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  }
})

const RoomHeader = styled.div(({ theme }) => {
  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }
})

const RoomTitle = styled.h1(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '24px',
    color: theme.colors.text
  }
})

const QuestionsLenght = styled.span(({ theme }) => {
  return {
    background: '#e559f9',
    borderRadius: '9999px',
    padding: '8px 16px',
    color: 'white',
    fontWeight: '500',
    fontSize: '14px'
  }
})

const QuestionContainer = styled.div(({ theme }) => {
  return {
    width: '100%',
    display: 'grid',
    gap: '16px'
  }
})

const Textarea = styled.textarea(({ theme }) => {
  return {
    border: '0',
    padding: '16px',
    borderRadius: '8px',
    background: '#fefefe',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
    resize: 'vertical',
    minHeight: '130px',
    ":focus-visible": {
      outlineColor: theme.colors.primary
    }
  }
})

const Flex = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

const Text = styled.p(({ theme }) => {
  return {
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    fontSize: '14px',
    color: theme.colors.gray.dark
  }
})
