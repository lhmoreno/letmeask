import { ButtonHTMLAttributes } from 'react'
import googleSvg from '../../assets/icons/google.svg'
import * as Styled from './styles'

interface SocialButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: 'google'
}

function SocialButton({ variant, ...props }: SocialButtonProps) {
  switch (variant) {
    case 'google':
      return <Google {...props} />
    
    default:
      return <Google {...props} />
  }
}

function Google({ ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <Styled.GoogleButton
      {...props}
    >
      <Styled.GoogleIconContainer>
        <Styled.Icon src={googleSvg} />
      </Styled.GoogleIconContainer>
      Entrar com o Google
    </Styled.GoogleButton>
  )
}

export default SocialButton
