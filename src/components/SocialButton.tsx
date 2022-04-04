import styled, { CSSObject } from 'styled-components'

import { MdEmail, MdFacebook } from 'react-icons/md'
import { FaGithub } from 'react-icons/fa'
import { ImGooglePlus } from 'react-icons/im'

interface ButtonProps  {
  variant?: 'github' | 'facebook' | 'google' | 'email'
}

export function SocialButton({ variant = 'email' }: ButtonProps) {
  function Icon() {
    switch (variant) {
      case "email":
        return <MdEmail size={24} />
      case "github":
        return <FaGithub size={24} />
      case "google":
        return <ImGooglePlus size={24} />
      case "facebook":
        return <MdFacebook size={24} />
      default:
        return <MdEmail size={24} />
    }
  }

  return (
    <Button variant={variant}>
      <IconContainer variant={variant}>
        <Icon />
      </IconContainer>
      <LabelContainer>
        {`Entrar com o ${variant.charAt(0).toUpperCase() + variant.slice(1)}`}
      </LabelContainer>
    </Button>
  )
}
const Button = styled.button<ButtonProps>(({ theme, variant }) => {
  const button: CSSObject = {
    height: '50px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    alignItems: 'center',
    fontWeight: '500',
    color: 'white',
    borderRadius: '8px',
    transitionProperty: 'background',
    transitionDuration: '0.3s'
  }

  const email: CSSObject = {
    backgroundColor: '#8E68FF',
    ":hover": {
      backgroundColor: theme.colors.primary
    }
  }

  const github: CSSObject = {
    backgroundColor: '#181818',
    ":hover": {
      backgroundColor: '#000000'
    }
  }

  const google: CSSObject = {
    backgroundColor: "#F05A4F",
    ":hover": {
      backgroundColor: '#F4493D'
    }
  }

  const facebook: CSSObject = {
    backgroundColor: '#3E62AD',
    ":hover": {
      backgroundColor: '#3B5998'
    }
  }

  switch (variant) {
    case "email":
      return {...button, ...email}
    case "github":
      return {...button, ...github}
    case "google":
      return {...button, ...google}
    case "facebook":
      return {...button, ...facebook}
    default:
      return {...button, ...email}
  }
})

const IconContainer = styled.div<ButtonProps>(({ theme, variant }) => {
  const container: CSSObject = {
    height: '100%',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const email: CSSObject = {
    backgroundColor: theme.colors.primary
  }

  const github: CSSObject = {
    backgroundColor: '#000000'
  }

  const google: CSSObject = {
    backgroundColor: '#F4493D'
  }

  const facebook: CSSObject = {
    backgroundColor: '#3B5998'
  }

  switch (variant) {
    case "email":
      return {...container, ...email}
    case "github":
      return {...container, ...github}
    case "google":
      return {...container, ...google}
    case "facebook":
      return {...container, ...facebook}
    default:
      return {...container, ...email}
  }
})

const LabelContainer = styled.p(({ theme }) => {
  return {
    textAlign: 'center'
  }
})
