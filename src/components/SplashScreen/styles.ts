import styled from 'styled-components'

export const Container = styled.div(({ theme }) => {
  return {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary
  }
})

export const Logo = styled.img(({ theme }) => {
  return {
    width: '100%',
    maxWidth: '480px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      maxWidth: '320px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      maxWidth: '240px'
    }
  }
})
