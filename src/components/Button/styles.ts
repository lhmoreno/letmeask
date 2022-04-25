import styled from 'styled-components'

export const Container = styled.button(({ theme }) => {
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
    color: theme.colors.white,
    borderRadius: theme.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    backgroundColor: theme.colors.primary,
    ":hover": {
      backgroundColor: theme.colors.primaryHover
    }
  }
})
