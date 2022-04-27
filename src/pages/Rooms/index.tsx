import useRooms from '../../hooks/useRooms'
import SplashScreen from '../../components/SplashScreen'
import PublicContainer from '../../components/PublicContainer'
import Input from '../../components/Input'
import enterIcon from '../../assets/icons/enter.svg'
import * as Styled from './styles'
import { useUser } from '../../hooks/useUser'

interface RoomProps {
  title: string
  id: string
}

function Rooms() {
  const { search, onChangeSearch, rooms } = useRooms()
  const { authStatus } = useUser()

  if (authStatus === 'pending') return <SplashScreen />

  return (
    <PublicContainer 
      title="Salas"
    >
      <Input 
        value={search}
        onChange={onChangeSearch}
        placeholder="Digite o código da sala"
      />
      { rooms.map((room) => (
          <Room 
            key={room.id}
            id={room.id}
            title={room.title}
          />
        ))
      }
    </PublicContainer>
  )
}

function Room({ title, id }: RoomProps) {
  return (
    <Styled.RoomContainer>
      <Styled.RoomInfoContainer>
        <Styled.RoomTitle>{ title }</Styled.RoomTitle>
        <Styled.RoomCode>{ `#${id}` }</Styled.RoomCode>
      </Styled.RoomInfoContainer>

      <Styled.RoomLink to={`/rooms/${id}`}>
        <Styled.EnterIcon src={enterIcon} />
      </Styled.RoomLink>
    </Styled.RoomContainer>
  )
}

export default Rooms
