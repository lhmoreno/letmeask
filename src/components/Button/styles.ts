import styled, { CSSObject } from 'styled-components'

const defaultButtonStyles: CSSObject = {
  height: '50px',
  padding: '0px 32px',
  cursor: 'pointer',
  background: 'none',
  border: 'none',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontWeight: '500',
  transitionProperty: 'background',
  transitionDuration: '0.3s'
}

export const ButtonPrimary = styled.button(({ theme }) => {
  return {
    ...defaultButtonStyles,
    borderRadius: theme.rounded,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    ":hover": {
      backgroundColor: theme.colors.primaryHover
    }
  }
})

export const ButtonGray = styled.button(({ theme }) => {
  return {
    ...defaultButtonStyles,
    borderRadius: theme.rounded,
    color: theme.colors.grayHover,
    backgroundColor: '#DBDCDD',
    ":hover": {
      backgroundColor: '#CECECE'
    }
  }
})
