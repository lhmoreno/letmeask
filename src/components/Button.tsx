import type { ButtonHTMLAttributes } from 'react'

import styled, { CSSObject } from 'styled-components'
import { MdCheck, MdForwardToInbox, MdLogin } from 'react-icons/md'

type IconType = 'ToInbox' | 'Login' | 'Check'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  icon?: IconType
  variant?: 'primary' | 'danger' | 'simple'
  title: string
}

interface ButtonStyleProps {
  variant?: 'primary' | 'danger' | 'simple'
}

export function Button({ icon, title, variant = 'primary', ...props }: ButtonProps) {
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
    <Container variant={variant} {...props}>
      <Icon />
      { title }
    </Container>
  )
}

const Container = styled.button<ButtonStyleProps>(({ theme, variant }) => {
  const style: CSSObject = {
    height: '50px',
    padding: '0px 32px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    fontWeight: '500',
    color: 'white',
    borderRadius: '8px',
    transitionProperty: 'background',
    transitionDuration: '0.3s'
  }

  switch (variant) {
    case 'primary':
      return {
        ...style,
        backgroundColor: '#8E68FF',
        ":hover": {
          backgroundColor: theme.colors.primary
        }
      }

    case 'simple':
      return {
        ...style,
        backgroundColor: theme.colors.gray.light,
        color: theme.colors.gray.dark,
        ":hover": {
          backgroundColor: '#CECECE'
        }
      }

    case 'danger':
      return {
        ...style,
        backgroundColor: '#E73F5D',
        ":hover": {
          backgroundColor: '#D73754'
        }
      }

    default:
      return {
        ...style,
        backgroundColor: '#8E68FF',
        ":hover": {
          backgroundColor: theme.colors.primary
        }
      }
  }
})
