import { useNavigate } from 'react-router-dom'

import AccountNavigation from '../../../components/AccountNavigation'
import { SocialButton } from '../../../components/SocialButton'
import Link from '../../../components/Link'
import * as Styled from './styles'

function Login() {
  const navigate = useNavigate()

  function signinWithEmail() {
    navigate('/login/email')
  }

  return (
    <AccountNavigation 
      title="Faça login:" 
      backPath="/"
    >
      <Styled.Buttons>
        <SocialButton variant="github" />
        <SocialButton variant="facebook" />
        <SocialButton variant="google" />
        <SocialButton variant="email" onClick={signinWithEmail} />
      </Styled.Buttons>
      <Styled.Text>
        Deseja criar uma conta?
        <Link to="/register">Clique aqui</Link>
      </Styled.Text>
    </AccountNavigation>
  )
}

export default Login
