import { useNavigate } from 'react-router-dom'

import { useUser } from '../../hooks/useUser'
import SplashScreen from '../../components/SplashScreen'
import PublicContainer from '../../components/PublicContainer'
import SocialButton from '../../components/SocialButton'

function Login() {
  const navigate = useNavigate()
  const { authStatus, signin } = useUser()

  async function handleSignin() {
    await signin()
    navigate('/rooms')
  }

  if (authStatus === 'pending') return <SplashScreen />

  return (
    <PublicContainer 
      title="Entrar"
    >
      <SocialButton 
        variant="google"
        onClick={handleSignin} 
      />
    </PublicContainer>
  )
}

export default Login
