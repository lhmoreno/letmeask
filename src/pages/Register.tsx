import styled from 'styled-components'

import { AccountContainer } from '../components/AccountContainer'
import { Button } from '../components/Button'
import { Input } from '../components/Input'
import { Link } from '../components/Link'

export function Register() {
  return (
    <AccountContainer 
      title="Crie sua conta:" 
      backPath="/login"
    >
      <Box>
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
      </Box>
      <Box>
        <Button title="Cadastrar" icon="ToInbox" />
        <Text>
          Já tem uma conta?
          <Link to="/login">Clique aqui</Link>
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
