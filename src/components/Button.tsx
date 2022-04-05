import styled from 'styled-components'
import { MdCheck, MdForwardToInbox, MdLogin } from 'react-icons/md'

type IconType = 'ToInbox' | 'Login' | 'Check'

interface ButtonProps {
  icon?: IconType
  title: string
}

export function Button({ title, icon }: ButtonProps) {
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
    <Container>
      <Icon />
      { title }
    </Container>
  )
}

const Container = styled.button(({ theme }) => {
  return {
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
    transitionDuration: '0.3s',
    backgroundColor: '#8E68FF',
    ":hover": {
      backgroundColor: theme.colors.primary
    }
  }
})
