import styled from 'styled-components'

import { AccountContainer } from '../components/AccountContainer'
import { SocialButton } from '../components/SocialButton'
import { Link } from '../components/Link'

export function Login() {
  return (
    <AccountContainer title="Faça login:">
      <Buttons>
        <SocialButton variant="github" />
        <SocialButton variant="facebook" />
        <SocialButton variant="google" />
        <SocialButton variant="email" />
      </Buttons>
      <Text>
        Deseja criar uma conta?
        <Link to="/">Clique aqui</Link>
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
    color: theme.colors.gray.medium
  }
})
