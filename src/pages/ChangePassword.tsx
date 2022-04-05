import { AccountContainer } from '../components/AccountContainer'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function ChangePassword() {
  return (
    <AccountContainer 
      title="Recuperação de senha:" 
      backPath="/login"
    >
      <Input 
        id="password"
        title="Nova senha:"
        type="password"
        placeholder="Digite uma senha"
      />
      <Button title="Atualizar" icon="Check" />
    </AccountContainer>
  )
}
