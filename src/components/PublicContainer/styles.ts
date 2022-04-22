import styled from 'styled-components'
import SVG from 'react-inlinesvg'

import StyledContainer from '../../styles/components/Container'

export const Container = styled(StyledContainer)(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '40px',
    padding: '64px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      gap: '32px',
      padding: '32px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      gap: '24px',
      padding: '16px'
    }
  }
})

export const Header = styled.header(({ theme }) => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export const BackIcon = styled(SVG)(({ theme }) => {
  return {
    "path": {
      transitionProperty: 'fill',
      transitionDuration: '0.3s'
    },
    ":hover path": {
      fill: theme.colors.primary
    },
    width: '20px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      width: '18px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      width: '16px'
    }
  }
})

export const Logo = styled.img(({ theme }) => {
  return {
    height: '64px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      height: '56px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      height: '48px'
    }
  }
})

export const Content = styled.div(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '400px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }
})

export const Title = styled.h1(({ theme }) => {
  return {
    fontSize: '24px'
  }
})

