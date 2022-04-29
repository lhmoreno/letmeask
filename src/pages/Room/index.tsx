import { FormEvent, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getDatabase, push, ref, remove, set } from 'firebase/database'

import useRoom from '../../hooks/useRoom'
import { useUser } from '../../hooks/useUser'
import SplashScreen from '../../components/SplashScreen'
import AccountOptions from '../../components/AccountOptions'
import Textarea from '../../components/Textarea'
import Question from '../../components/Question'
import logoSvg from '../../assets/images/logo.svg'
import accountImg from '../../assets/images/account.png'
import messagesSvg from '../../assets/images/messages.svg'
import * as Styled from './styles'
import ModalLogin from '../../components/ModalLogin'

type RoomParams = {
  id: string
}

function Room() {
  const params = useParams<RoomParams>()
  const { authStatus, user, signin } = useUser()
  const { isLoading, title, questions } = useRoom(params.id || '')
  const [isAccountOptionsOpen, setIsAccountOptionsOpen] = useState(false)
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false)
  const [newQuestion, setNewQuestion] = useState('')

  async function handleLoginUser() {
    try {
      await signin()
      setIsModalLoginOpen(false)
    } catch {}
  }

  async function handleSendQuestion(event?: FormEvent) {
    event?.preventDefault()

    if (newQuestion.trim() === '') return

    if(!user || authStatus === 'unauthenticated') return setIsModalLoginOpen(true)

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      }
    }

    const questionsRef = ref(getDatabase(), `rooms/${params.id || ''}/questions`)
    const newQuestionRef = push(questionsRef)

    await set(newQuestionRef, question)

    setNewQuestion('')
  }

  async function handleLikeQuestion(questionId: string, likeId: string | undefined) {
    if(!user || authStatus === 'unauthenticated') return setIsModalLoginOpen(true)

    if (likeId) {
      await remove(ref(getDatabase(), `rooms/${params.id || ''}/questions/${questionId}/likes/${likeId}`))
    } else {
      const likesRef = ref(getDatabase(), `rooms/${params.id || ''}/questions/${questionId}/likes`)
      const newLikeRef = push(likesRef)
      
      await set(newLikeRef, { authorId: user?.id }) 
    }
  }

  if (authStatus === 'pending' || isLoading) return <SplashScreen />

  return (
    <Styled.Container>
      { isModalLoginOpen && (
          <ModalLogin 
            onChancelButton={() => setIsModalLoginOpen(false)} 
            onLoginButton={handleLoginUser}
          />
        ) 
      }

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
            <Styled.RoomTitle>{ title }</Styled.RoomTitle>
            <Styled.RoomCode>{ `#${params.id}` }</Styled.RoomCode>
          </div>
          <Styled.QuestionsLenght>1 pergunta(s)</Styled.QuestionsLenght>
        </Styled.RoomHeader>

        <Styled.QuestionForm onSubmit={handleSendQuestion}>
          <Textarea 
            value={newQuestion}
            onChange={({ target }) => setNewQuestion(target.value)}
            placeholder="O que você quer perguntar?"
          />
         <Styled.Button type="submit">
           Enviar pergunta
          </Styled.Button>
        </Styled.QuestionForm>

        { questions.length === 0 ? (
          <Styled.NoQuestionsContainer>
              <Styled.MessagesImge src={messagesSvg} />
              <Styled.NoQuestionsTitle>Nenhuma pergunta por aqui...</Styled.NoQuestionsTitle>
              <Styled.NoQuestionsDescription>Faça o seu login e seja a primeira pessoa a fazer uma pergunta!</Styled.NoQuestionsDescription>
            </Styled.NoQuestionsContainer>
          ) : (
            <Styled.QuestionsContainer>
              { questions.map(({ id, author, content, likes }) => (
                  <Question 
                    key={id}
                    id={id}
                    author={author}
                    content={content}
                    likesLenght={likes?.length || 0}
                    likeId={likes?.find(like => like.authorId === user?.id)?.likeId}
                    handleLikeQuestion={handleLikeQuestion}
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
