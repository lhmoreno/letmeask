import { useState } from 'react'
import { Link } from 'react-router-dom'

import { useUser } from '../../hooks/useUser'
import SplashScreen from '../../components/SplashScreen'
import AccountOptions from '../../components/AccountOptions'
import Textarea from '../../components/Textarea'
import Question from '../../components/Question'
import logoSvg from '../../assets/images/logo.svg'
import accountImg from '../../assets/images/account.png'
import messagesSvg from '../../assets/images/messages.svg'
import * as Styled from './styles'

function Room() {
  const [questions, setQuestions] = useState([])
  const [isAccountOptionsOpen, setIsAccountOptionsOpen] = useState(false)
  const { authStatus } = useUser()

  if (authStatus === 'pending') return <SplashScreen />

  return (
    <Styled.Container>
      <Styled.Header>
        <Link to="/">
          <Styled.Logo src={logoSvg} />
        </Link>
        <Styled.AccountContainer>
          <Styled.AccountImage src={accountImg} onClick={() => setIsAccountOptionsOpen(s => !s)} />
          { isAccountOptionsOpen && <AccountOptions /> }
        </Styled.AccountContainer>
      </Styled.Header>

      <Styled.Divider />

      <Styled.Main>
        <Styled.RoomHeader>
          <div>
            <Styled.RoomTitle>Uma sala de teste</Styled.RoomTitle>
            <Styled.RoomCode>#12345678</Styled.RoomCode>
          </div>
          <Styled.QuestionsLenght>1 pergunta(s)</Styled.QuestionsLenght>
        </Styled.RoomHeader>

        <Styled.QuestionContainer>
          <Textarea 
            placeholder="O que você quer perguntar?"
          />
         <Styled.Button>Enviar pergunta</Styled.Button>
        </Styled.QuestionContainer>

        { questions.length === 0 ? (
          <Styled.NoQuestionsContainer>
              <Styled.MessagesImge src={messagesSvg} />
              <Styled.NoQuestionsTitle>Nenhuma pergunta por aqui...</Styled.NoQuestionsTitle>
              <Styled.NoQuestionsDescription>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</Styled.NoQuestionsDescription>
            </Styled.NoQuestionsContainer>
          ) : (
            <Styled.QuestionsContainer>
              { questions.map(({ author, content }, index) => (
                  <Question 
                    key={String(index)}
                    author={author}
                    content={content}
                  />
                ))
              }
            </Styled.QuestionsContainer>
          )
        }
      </Styled.Main>
    </Styled.Container>
  )
}

export default Room
