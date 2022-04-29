import { useNavigate } from 'react-router-dom'

import exitSvg from '../../assets/icons/exit.svg'
import { useUser } from '../../hooks/useUser'
import * as Styled from './styles'

function AccountOptions() {
  const navigate = useNavigate()
  const { authStatus, signin, signout } = useUser()

  async function handleSignout() {
    await signout()
    navigate('/')
  }

  return (
    <Styled.Container>
      { authStatus === 'unauthenticated' ? (
          <Styled.Button 
            type="button"
            onClick={signin}
          >
            Fazer login
          </Styled.Button>
        ) : (
          <Styled.Button
            type="button"
            onClick={handleSignout}
          >
            <Styled.Icon src={exitSvg} />
            Sair
          </Styled.Button>
        )
      }
    </Styled.Container>
  )
}

export default AccountOptions
