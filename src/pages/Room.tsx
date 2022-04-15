import styled from 'styled-components'
import { Fragment, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg'
import accountImg from '../assets/images/perfil.png'
import messagesImg from '../assets/images/messages.svg'
import { RoomCode } from '../components/RoomCode'
import { Button } from '../components/Button'
import { Link } from '../components/Link'
import { Question } from '../components/Question'
import { Dashboard } from '../components/Dashboard'

export function Room() {
  const [questions, setQuestions] = useState([
    {
      content: 'Olá tudo bem?',
      author: {
        name: 'Luiz Henrique',
        avatar: accountImg
      },
      isAnswered: false,
      isHighlighted: false
    },
    {
      content: 'Olá tudo bem?',
      author: {
        name: 'Luiz Henrique2',
        avatar: accountImg
      },
      isAnswered: false,
      isHighlighted: false
    }
  ])
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)
  
  return (
    <Fragment>
      <Header>
        <LinkRouter to="/">
          <LogoImage src={logoImg} alt="Logo com o nome Letmeask" />
        </LinkRouter>
        <RoomCode code="123" />
        <AccountContainer>
          <AccountImage src={accountImg} alt="Sua foto de perfil" onClick={() => setIsDashboardOpen(s => !s)}/>
          { isDashboardOpen && <Dashboard /> }
        </AccountContainer>
      </Header>
      
      <Main>
        <RoomHeader>
          <RoomTitle>Sala 2</RoomTitle>
          <QuestionsLenght>{`${questions.length} pergunta(s)`}</QuestionsLenght>
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

        { questions.length === 0 ? (
          <NoQuestionsContainer>
              <MessagesImge src={messagesImg} alt="Messages Illustration" />
              <NoQuestionsTitle>Nenhuma pergunta por aqui...</NoQuestionsTitle>
              <NoQuestionsDescription>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</NoQuestionsDescription>
            </NoQuestionsContainer>
          ) : (
            <QuestionsContainer>
              { questions.map(({ author, content, isAnswered, isHighlighted }) => (
                  <Question 
                    author={author}
                    content={content}
                    isAnswered={isAnswered}
                    isHighlighted={isHighlighted}
                  />
                ))
              }
            </QuestionsContainer>
          )
        }
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

const AccountContainer = styled.div(({ theme }) => {
  return {
    position: 'relative'
  }
})

const AccountImage = styled.img(({ theme }) => {
  return {
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer'
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

const QuestionsContainer = styled.div(({ theme }) => {
  return {
    marginTop: '8px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }
})

const NoQuestionsContainer = styled.div(({ theme }) => {
  return {
    marginTop: '40px',
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px'
  }
})

const NoQuestionsTitle = styled.p(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.text
  }
})

const NoQuestionsDescription= styled.p(({ theme }) => {
  return {
    fontSize: '14px',
    color: theme.colors.gray.dark
  }
})

const MessagesImge = styled.img(({ theme }) => {
  return {
    width: '150px'
  }
})
