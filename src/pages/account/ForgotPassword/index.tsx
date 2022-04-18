import AccountNavigation from '../../../components/AccountNavigation'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'

function ForgotPassword() {
  return (
    <AccountNavigation 
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
    </AccountNavigation>
  )
}

export default ForgotPassword
