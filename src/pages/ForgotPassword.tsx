import { AccountContainer } from '../components/AccountContainer'
import { Button } from '../components/Button'
import { Input } from '../components/Input'

export function ForgotPassword() {
  return (
    <AccountContainer 
      title="Esqueci minha senha:" 
      backPath="/login"
    >
      <Input 
        id="email"
        title="Email de recuperação:"
        type="email"
        placeholder="Digite seu email"
      />
      <Button title="Recuperar" icon="ToInbox" />
    </AccountContainer>
  )
}
