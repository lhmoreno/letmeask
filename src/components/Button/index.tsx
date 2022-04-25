import { ButtonHTMLAttributes } from 'react'

import * as Styled from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  
}

function Button({ children, ...props }: ButtonProps) {
  return (
    <Styled.Container {...props}>
      { children }
    </Styled.Container>
  )
}

export default Button
