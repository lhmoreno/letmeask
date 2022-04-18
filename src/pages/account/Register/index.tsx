import AccountNavigation from '../../../components/AccountNavigation'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'
import Link from '../../../components/Link'
import * as Styled from './styles'

function Register() {
  return (
    <AccountNavigation 
      title="Crie sua conta:" 
      backPath="/login"
    >
      <Styled.Box>
        <Input 
          id="name"
          title="Nome:"
          type="text"
          placeholder="Digite seu nome"
        />
        <Input 
          id="email"
          title="Email:"
          type="email"
          placeholder="Digite seu email"
        />
        <Input 
          id="password"
          title="Senha:"
          type="password"
          placeholder="Digite uma senha"
        />
      </Styled.Box>
      <Styled.Box>
        <Button title="Cadastrar" icon="ToInbox" />
        <Styled.Text>
          Já tem uma conta?
          <Link to="/login">Clique aqui</Link>
        </Styled.Text>
      </Styled.Box>
    </AccountNavigation>
  )
}

export default Register
