import { useParams, useNavigate } from 'react-router-dom'
import { ref, remove, update } from 'firebase/database'

import logoImg from '../assets/images/logo.svg'
import deleteImg from '../assets/images/delete.svg'
import { database } from '../services/firebase'
import { useRoom } from '../hooks/useRoom'
import { Button } from '../components/Button'
import { Question } from '../components/Question'
import { RoomCode } from '../components/RoomCode'
import '../styles/rooms.scss'

type RoomParams = {
  id: string
}

export function AdminRoom() {
  // const { user } = useAuth()
  const navigate = useNavigate()
  const params = useParams<RoomParams>()
  const roomId = params.id ?? ''

  const { title, questions } = useRoom(roomId)

  async function handleEndRoom() {
    await update(ref(database, `rooms/${roomId}`), { endedAt: new Date() })

    navigate('/')
  }

  async function handleDeleteQuestion(questionId: string) {
    if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
      await remove(ref(database, `rooms/${roomId}/questions/${questionId}`))
    }
  }

  return(
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <div>
            <RoomCode code={roomId} />
            <Button isOutlined onClick={handleEndRoom}>Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{ questions.length } pergunta(s)</span> }
        </div>

        <div className="question-list">
        { questions.map(question => {
          return (
            <Question 
              key={question.id}
              content={question.content} 
              author={question.author} 
            >
              <button
                type="button"
                onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta" />
              </button>
            </Question>
          )}) }
        </div>
      </main>
    </div>
  )
}
