import { useState } from 'react'
import { Link } from 'react-router-dom'

import Textarea from '../../components/Textarea'
import Question from '../../components/Question'
import logoSvg from '../../assets/images/logo.svg'
import accountImg from '../../assets/images/account.png'
import messagesSvg from '../../assets/images/messages.svg'
import * as Styled from './styles'

const fakeQuestions = [
  {
    content: 'Cillum reprehenderit nulla sint reprehenderit sint minim qui adipisicing. Officia commodo cupidatat sint laborum voluptate officia ex non Lorem consectetur in commodo quis eiusmod. Enim eu exercitation enim anim ea dolor ullamco. Eu sit cillum amet consequat. Dolore laboris proident sit duis esse quis sint sit aliqua minim id pariatur consequat aliquip. Fugiat velit esse sit ullamco deserunt consequat dolore reprehenderit sint voluptate anim. Excepteur aliqua minim ex dolor magna id.',
    author: {
      name: 'Luiz Henrique',
      avatar: accountImg
    }
  },
  {
    content: 'Olá tudo bem?',
    author: {
      name: 'Luiz Henrique2',
      avatar: accountImg
    }
  }
]

function Room() {
  const [questions, setQuestions] = useState(fakeQuestions)
  const [isDashboardOpen, setIsDashboardOpen] = useState(false)

  return (
    <Styled.Container>
      <Styled.Header>
        <Link to="/">
          <Styled.Logo src={logoSvg} />
        </Link>
        <Styled.AccountContainer>
          <Styled.AccountImage src={accountImg} onClick={() => setIsDashboardOpen(s => !s)} />
          {/* { isDashboardOpen && <Dashboard /> } */}
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
              { questions.map(({ author, content }) => (
                  <Question 
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
