import exitSvg from '../../assets/icons/exit.svg'
import { useUser } from '../../hooks/useUser'
import * as Styled from './styles'

function AccountOptions() {
  const { authStatus, signout } = useUser()

  return (
    <Styled.Container>
      { authStatus === 'unauthenticated' ? (
          <Styled.LinkStyled to="/login">
            Fazer login
          </Styled.LinkStyled>
        ) : (
          <Styled.ButtonSignOut
            type="button"
            onClick={signout}
          >
            <Styled.Icon src={exitSvg} />
            Sair
          </Styled.ButtonSignOut>
        )
      }
    </Styled.Container>
  )
}

export default AccountOptions
