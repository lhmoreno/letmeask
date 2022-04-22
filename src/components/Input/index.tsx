import { InputHTMLAttributes } from 'react'

import * as Styled from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {

}

function Input({ ...props }: InputProps) {
  return (
    <Styled.Container 
      {...props} 
    />
  )
}

export default Input
