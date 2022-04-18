import AccountNavigation from '../../../components/AccountNavigation'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'

function EnterRoom() {
  return (
    <AccountNavigation 
      title="Entrar em uma sala:" 
      backPath="/"
    >
      <Input 
        id="text"
        title="Código:"
        type="text"
        placeholder="Digite o código da sala"
      />
      <Button title="Entrar na sala" icon="Login" />
    </AccountNavigation>
  )
}

export default EnterRoom
