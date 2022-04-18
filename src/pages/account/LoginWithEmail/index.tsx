import { useState } from 'react'

import AccountNavigation from '../../../components/AccountNavigation'
import Button from '../../../components/Button'
import { Input } from '../../../components/Input'
import Link from '../../../components/Link'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'
import * as Styled from './styles'

function LoginWithEmail() {
  const [isRemember, setIsRemember] = useState(false)

  return (
    <AccountNavigation 
      title="Login com email:" 
      backPath="/login"
    >
      <Styled.Box>
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
          placeholder="Digite sua senha"
        />
      </Styled.Box>
      <Styled.Options>
        <Styled.CheckboxContainer>
          { isRemember ?
              <MdCheckBox size={18} color="#835AFD" /> :
              <MdCheckBoxOutlineBlank size={18} />
          }
          <Styled.InputHide type="checkbox" onChange={({ target }) => setIsRemember(s => !s)} />
          Lembrar de mim?
        </Styled.CheckboxContainer>
        <Link to="/forgot-password">Esqueci minha senha</Link>
      </Styled.Options>
      <Styled.Box>
        <Button title="Entrar" icon="Login" />
        <Styled.Text>
          Deseja criar uma conta?
          <Link to="/register">Clique aqui</Link>
        </Styled.Text>
      </Styled.Box>
    </AccountNavigation>
  )
}

export default LoginWithEmail
