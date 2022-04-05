import { AccountContainer } from '../components/AccountContainer'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function EnterRoom() {
  return (
    <AccountContainer 
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
    </AccountContainer>
  )
}
