import { TextareaHTMLAttributes } from 'react'

import * as Styled from './styles'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {

}

function Textarea({ ...props }: TextareaProps) {
  return (
    <Styled.Container 
      {...props} 
    />
  )
}

export default Textarea
