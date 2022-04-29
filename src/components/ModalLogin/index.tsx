import { useUser } from '../../hooks/useUser'
import Button from '../Button'
import * as Styled from './styles'

interface ModalLoginProps {
  onChancelButton?: () => void
  onLoginButton?: () => Promise<void>
}

function ModalLogin({ onChancelButton, onLoginButton }: ModalLoginProps) {
  const { authStatus } = useUser()

  if (authStatus === "authenticated") return null

  return (
    <Styled.Container>
      <Styled.ModalContainer>
        <Styled.Title>Faça login</Styled.Title>
        <Styled.Description>Para enviar uma pergunta ou dar like, faça o login primeiro</Styled.Description>
        <Styled.Buttons>
          <Button 
            variant="gray"
            onClick={onChancelButton}
          >
            Não fazer login
          </Button>
          <Button 
            variant="primary"
            onClick={onLoginButton}
          >
            Fazer login
          </Button>
        </Styled.Buttons>
      </Styled.ModalContainer>
    </Styled.Container>
  )
}

export default ModalLogin
