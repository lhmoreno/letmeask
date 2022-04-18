import AccountNavigation from '../../../components/AccountNavigation'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'

function ChangePassword() {
  return (
    <AccountNavigation 
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
    </AccountNavigation>
  )
}

export default ChangePassword
