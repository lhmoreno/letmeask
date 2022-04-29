import styled from 'styled-components'

import StyledContainer from '../../styles/components/Container'

export const Container = styled(StyledContainer)(({ theme }) => {
  return {
    position: 'absolute',
    height: '100%',
    minWidth: '100vw',
    minHeight: '100vh',
    top: '0',
    left: '0',
    backgroundColor: '#050206CC',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1
  }
})

export const ModalContainer = styled.div(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '600px',
    height: '360px',
    backgroundColor: theme.colors.white,
    borderRadius: theme.rounded,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      padding: '16px',
      maxWidth: '380px'
    }
  }
})

export const Title = styled.p(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '24px',
    fontWeight: '700',
    color: theme.colors.black,
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '20px'
    }
  }
})

export const Description = styled.p(({ theme }) => {
  return {
    marginTop: '12px',
    color: theme.colors.grayHover
  }
})

export const Buttons = styled.div(({ theme }) => {
  return {
    marginTop: '32px',
    display: 'flex',
    gap: '8px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      flexDirection: 'column-reverse'
    }
  }
})
