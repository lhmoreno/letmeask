import PublicContainer from '../../components/PublicContainer'
import Input from '../../components/Input'
import enterIcon from '../../assets/icons/enter.svg'
import * as Styled from './styles'

interface RoomProps {
  title: string
  code: string
  link: string
}

const fakeRooms: RoomProps[] = [
  {
    title: 'Teste 123 de titulo bem longo sem limite de tao longo que é',
    code: '#123456',
    link: '/rooms'
  },
  {
    title: 'Teste 123',
    code: '#123456',
    link: '/rooms'
  },
  {
    title: 'Teste 123',
    code: '#123456',
    link: '/rooms'
  }
]

function Rooms() {
  return (
    <PublicContainer 
      title="Salas"
    >
      <Input 
        placeholder="Digite o código da sala"
      />
      { fakeRooms.map((room, index) => (
          <Room 
            key={String(index)}
            title={room.title}
            code={room.code}
            link={room.link}
          />
        ))
      }
    </PublicContainer>
  )
}

function Room({ title, code, link }: RoomProps) {
  return (
    <Styled.RoomContainer>
      <Styled.RoomInfoContainer>
        <Styled.RoomTitle>{ title }</Styled.RoomTitle>
        <Styled.RoomCode>{ code }</Styled.RoomCode>
      </Styled.RoomInfoContainer>

      <Styled.RoomLink to={link}>
        <Styled.EnterIcon src={enterIcon} />
      </Styled.RoomLink>
    </Styled.RoomContainer>
  )
}

export default Rooms
