import { InputHTMLAttributes } from 'react'

import * as Styled from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title: string
}

export function Input({ id, title, ...props }: InputProps) {
  return (
    <Styled.Container>
      <Styled.Label htmlFor={id}>{ title }</Styled.Label>
      <Styled.InputStyled 
        id={id}
        {...props}
      />
    </Styled.Container>
  )
}

