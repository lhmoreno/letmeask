import styled from 'styled-components'

import { AccountContainer } from '../components/AccountContainer'
import { SocialButton } from '../components/SocialButton'
import { Link } from '../components/Link'
import { useNavigate } from 'react-router-dom'

export function Login() {
  const navigate = useNavigate()

  function signinWithEmail() {
    navigate('/login/email')
  }

  return (
    <AccountContainer 
      title="Faça login:" 
      backPath="/"
    >
      <Buttons>
        <SocialButton variant="github" />
        <SocialButton variant="facebook" />
        <SocialButton variant="google" />
        <SocialButton variant="email" onClick={signinWithEmail} />
      </Buttons>
      <Text>
        Deseja criar uma conta?
        <Link to="/register">Clique aqui</Link>
      </Text>
    </AccountContainer>
  )
}

const Buttons = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
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
