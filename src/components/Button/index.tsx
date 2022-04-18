import type { ButtonHTMLAttributes } from 'react'

import { MdCheck, MdForwardToInbox, MdLogin } from 'react-icons/md'
import * as Styled from './styles'

type IconType = 'ToInbox' | 'Login' | 'Check'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon?: IconType
  variant?: 'primary' | 'danger' | 'simple'
  title: string
}

function Button({ icon, title, variant = 'primary', ...props }: ButtonProps) {
  function Icon() {
    switch (icon) {
      case 'ToInbox':
        return <MdForwardToInbox size={20} />
      case 'Login':
        return <MdLogin size={20} />
      case 'Check':
        return <MdCheck size={20} />
      default:
        return null
    }
  }

  return (
    <Styled.Container variant={variant} {...props}>
      <Icon />
      { title }
    </Styled.Container>
  )
}

export default Button
