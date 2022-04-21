import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

import StyledContainer from '../../styles/components/Container'

export const Container = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: theme.colors.primary,
    color: theme.colors.white
  }
})

export const Content = styled(StyledContainer)(({ theme }) => {
  return {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      gridTemplateColumns: '1fr'
    }
  }
})

export const Main = styled.main(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '440px',
    justifySelf: 'end',
    display: 'flex',
    alignItems: 'start',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '32px',
    padding: '32px 0px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      zIndex: '1',
      maxWidth: '320px',
      justifySelf: 'center',
      alignItems: 'center',
      gap: '24px'
    }
  }
})

export const Logo = styled.img(({ theme }) => {
  return {
    height: '120px'
  }
})

export const Info = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      gap: '8px',
      textAlign: 'center'
    }
  }
})

export const Title = styled.h1(({ theme }) => {
  return {
    fontSize: '36px',
    lineHeight: '42px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      fontSize: '32px',
      lineHeight: '38px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '24px',
      lineHeight: '30px'
    }
  }
})

export const Subtitle = styled.p(({ theme }) => {
  return {
    fontSize: '24px',
    lineHeight: '32px',
    color: theme.colors.background,
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      fontSize: '20px',
      lineHeight: '28px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '18px',
      lineHeight: '26px'
    }
  }
})

export const Links = styled.div(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '320px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      gap: '8px'
    }
  }
})

export const LinkPrimary = styled(Link)(({ theme }) => {
  return {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontWeight: '500',
    borderRadius: theme.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    backgroundColor: theme.colors.white,
    textDecoration: 'none',
    color: theme.colors.black,
    ":hover": {
      backgroundColor: '#DBDCDD'
    }
  }
})

export const EnterIcon = styled(SVG)(({ theme }) => {
  return {
    transform: 'translateY(-1px)',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      transform: 'none',
      height: '14px'
    }
  }
})

export const LinkSecondary = styled(Link)(({ theme }) => {
  return {
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '500',
    borderRadius: theme.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    textDecoration: 'none',
    color: theme.colors.white,
    borderWidth: '2px',
    borderStyle: 'solid',
    borderColor: theme.colors.white,
    ":hover": {
      backgroundColor: '#6F4BD8'
    }
  }
})

export const IllustrationContainer = styled.div(({ theme }) => {
  return {
    overflow: 'hidden',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      position: 'absolute',
      opacity: '0.25',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  }
})

export const Illustration = styled.img(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '440px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      maxWidth: '320px'
    }
  }
})
