import { useState } from 'react'

import SplashScreen from '../../components/SplashScreen'
import PublicContainer from '../../components/PublicContainer'
import Input from '../../components/Input'
import enterIcon from '../../assets/icons/enter.svg'
import * as Styled from './styles'
import { useUser } from '../../hooks/useUser'

interface RoomProps {
  title: string
  code: string
}

function Rooms() {
  const [rooms, setRooms] = useState<RoomProps[]>([])
  const { authStatus } = useUser()

  if (authStatus === 'pending') return <SplashScreen />

  return (
    <PublicContainer 
      title="Salas"
    >
      <Input 
        placeholder="Digite o código da sala"
      />
      { rooms.map((room, index) => (
          <Room 
            key={String(index)}
            title={room.title}
            code={room.code}
          />
        ))
      }
    </PublicContainer>
  )
}

function Room({ title, code }: RoomProps) {
  return (
    <Styled.RoomContainer>
      <Styled.RoomInfoContainer>
        <Styled.RoomTitle>{ title }</Styled.RoomTitle>
        <Styled.RoomCode>{ `#${code}` }</Styled.RoomCode>
      </Styled.RoomInfoContainer>

      <Styled.RoomLink to={`/rooms/${code}`}>
        <Styled.EnterIcon src={enterIcon} />
      </Styled.RoomLink>
    </Styled.RoomContainer>
  )
}

export default Rooms
