import styled from 'styled-components'
import { useState } from 'react'

import { AccountContainer } from '../components/AccountContainer'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Link } from '../components/Link'
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md'

export function LoginWithEmail() {
  const [isRemember, setIsRemember] = useState(false)

  return (
    <AccountContainer 
      title="Login com email:" 
      backPath="/login"
    >
      <Box>
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
      </Box>
      <Options>
        <CheckboxContainer>
          { isRemember ?
              <MdCheckBox size={18} color="#835AFD" /> :
              <MdCheckBoxOutlineBlank size={18} />
          }
          <InputHide type="checkbox" onChange={({ target }) => setIsRemember(s => !s)} />
          Lembrar de mim?
        </CheckboxContainer>
        <Link to="/forgot-password">Esqueci minha senha</Link>
      </Options>
      <Box>
        <Button title="Entrar" icon="Login" />
        <Text>
          Deseja criar uma conta?
          <Link to="/register">Clique aqui</Link>
        </Text>
      </Box>
    </AccountContainer>
  )
}

const Box = styled.div(({ theme }) => {
  return {
    display: 'grid',
    gap: '16px'
  }
})

const Options = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 8px',
    fontSize: '14px',
    color: theme.colors.gray.dark
  }
})

const CheckboxContainer = styled.label(({ theme }) => {
  return {
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
  }
})

const InputHide = styled.input(({ theme }) => {
  return {
    display: 'none'
  }
})

const Text = styled.p(({ theme }) => {
  return {
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    fontSize: '14px',
    color: theme.colors.gray.dark
  }
})
