import { useUser } from '../../hooks/useUser'
import SplashScreen from '../../components/SplashScreen'
import PublicContainer from '../../components/PublicContainer'
import SocialButton from '../../components/SocialButton'

function Login() {
  const { authStatus, signin } = useUser()

  if (authStatus === 'pending') return <SplashScreen />

  return (
    <PublicContainer 
      title="Entrar"
    >
      <SocialButton 
        variant="google"
        onClick={signin} 
      />
    </PublicContainer>
  )
}

export default Login
