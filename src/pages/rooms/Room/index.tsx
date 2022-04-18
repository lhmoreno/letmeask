import { Fragment, useState } from 'react'
import { Link as LinkRouter } from 'react-router-dom'

import logoImg from '../../../assets/images/logo.svg'
import accountImg from '../../../assets/images/perfil.png'
import messagesImg from '../../../assets/images/messages.svg'
import { RoomCode } from '../../../components/RoomCode'
import Button from '../../../components/Button'
import Link from '../../../components/Link'
import { Question } from '../../../components/Question'
import { Dashboard } from '../../../components/Dashboard'
import * as Styled from './styles'

function Room() {
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
      <Styled.Header>
        <LinkRouter to="/">
          <Styled.LogoImage src={logoImg} alt="Logo com o nome Letmeask" />
        </LinkRouter>
        <RoomCode code="123" />
        <Styled.AccountContainer>
          <Styled.AccountImage src={accountImg} alt="Sua foto de perfil" onClick={() => setIsDashboardOpen(s => !s)}/>
          { isDashboardOpen && <Dashboard /> }
        </Styled.AccountContainer>
      </Styled.Header>
      
      <Styled.Main>
        <Styled.RoomHeader>
          <Styled.RoomTitle>Sala 2</Styled.RoomTitle>
          <Styled.QuestionsLenght>{`${questions.length} pergunta(s)`}</Styled.QuestionsLenght>
        </Styled.RoomHeader>

        <Styled.QuestionContainer>
          <Styled.Textarea 
            placeholder="O que você quer perguntar?"
          />
          <Styled.Flex>
            <Styled.Text>
              Para enviar uma pergunta,
              <Link to="/login">faça seu login.</Link>
            </Styled.Text>
            <Button title="Enviar pergunta" />
          </Styled.Flex>
        </Styled.QuestionContainer>

        { questions.length === 0 ? (
          <Styled.NoQuestionsContainer>
              <Styled.MessagesImge src={messagesImg} alt="Messages Illustration" />
              <Styled.NoQuestionsTitle>Nenhuma pergunta por aqui...</Styled.NoQuestionsTitle>
              <Styled.NoQuestionsDescription>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</Styled.NoQuestionsDescription>
            </Styled.NoQuestionsContainer>
          ) : (
            <Styled.QuestionsContainer>
              { questions.map(({ author, content, isAnswered, isHighlighted }) => (
                  <Question 
                    author={author}
                    content={content}
                    isAnswered={isAnswered}
                    isHighlighted={isHighlighted}
                  />
                ))
              }
            </Styled.QuestionsContainer>
          )
        }
      </Styled.Main>
    </Fragment>
  )
}

export default Room
