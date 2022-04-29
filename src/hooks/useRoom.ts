import { getDatabase, onValue, ref } from 'firebase/database'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface FirebaseQuestion extends Record<string, {
  author: {
    avatar: string
    name: string
  }
  content: string
  likes?: Record<string, {
    authorId: string
  }>
}> {}


interface FirebaseRoom  {
  title: string
  questions?: FirebaseQuestion
}

interface Question {
  id: string
  author: {
    avatar: string
    name: string
  }
  content: string
  likes?: Array<{
    likeId: string
    authorId: string
  }>
}

function useRoom(room_id: string) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [questions, setQuestions] = useState<Question[]>([])
  
  useEffect(() => {
    const roomRef = ref(getDatabase(), `rooms/${room_id}`)

    const unsubscribe = onValue(roomRef, firebaseRoom => {
      const room = firebaseRoom.val() as FirebaseRoom || null
      if (!room) return navigate('/rooms')

      const parsedQuestions: Question[] = Object.entries(room.questions || []).map(([id, question]) => {
        return {
          id,
          author: question.author,
          content: question.content,
          likes: question.likes && Object.entries(question.likes).map(([likeId, { authorId }]) => ({ likeId, authorId }))
        }
      })

      setTitle(room.title)
      setQuestions(parsedQuestions)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [room_id, navigate])

  return { isLoading, title, questions }
}

export default useRoom
