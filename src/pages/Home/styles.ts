import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface StyledButtonProps {
  variant: 'normal' | 'outline'
}

export const Container = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.colors.primary.normal,
    color: theme.colors.background.box,
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '80px'
  }
})
  
export const Main = styled.main(({ theme }) => {
  return {
    maxWidth: '440px',
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  }
})
  
export const Logo = styled.img(({ theme }) => {
  return {
    width: '272px'
  }
})
  
export const Info = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }
})


export const Title = styled.h1(({ theme }) => {
  return {
    fontSize: '36px'
  }
})

export const Subtitle = styled.p(({ theme }) => {
  return {
    fontSize: '24px'
  }
})

export const Buttons = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }
})

export const ButtonNormal = styled(Link)(({ theme }) => {
  return {
    width: '320px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '500',
    borderRadius: theme.values.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    backgroundColor: theme.colors.background.box,
    textDecoration: 'none',
    color: theme.colors.text.normal,
    ':hover': {
      backgroundColor: theme.colors.background.normal
    }
  }
})

export const ButtonOutline = styled(Link)(({ theme }) => {
  return {
    width: '320px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '500',
    borderRadius: theme.values.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    textDecoration: 'none',
    color: theme.colors.background.box,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme.colors.background.box,
    ":hover": {
      backgroundColor: theme.colors.primary.hover
    }
  }
})
