import { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  variant?: 'primary' | 'gray'
}

function Button({ variant, children, ...props }: ButtonProps) {
  switch (variant) {
    case 'primary':
      return (
        <Styled.ButtonPrimary {...props}>
          { children }
        </Styled.ButtonPrimary>
      )

    case 'gray':
      return (
        <Styled.ButtonGray {...props}>
          { children }
        </Styled.ButtonGray>
      )

    default:
      return (
        <Styled.ButtonPrimary {...props}>
          { children }
        </Styled.ButtonPrimary>
      )
  }
}

export default Button
