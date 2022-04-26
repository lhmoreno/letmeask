import SVG from 'react-inlinesvg'
import styled from 'styled-components'

export const Icon = styled(SVG)(({ theme }) => {
  return {

  }
})

export const GoogleButton = styled.button(({ theme }) => {
  return {
    height: '50px',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'grid',
    gridTemplateColumns: '80px 1fr',
    alignItems: 'center',
    fontWeight: '500',
    color: theme.colors.white,
    borderRadius: theme.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    backgroundColor: theme.colors.red,
    ":hover": {
      backgroundColor: theme.colors.redHover
    }
  }
})

export const GoogleIconContainer = styled.div(({ theme }) => {
  return {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: theme.rounded,
    backgroundColor: theme.colors.redHover
  }
})

export const GoogleLabel = styled.p(({ theme }) => {
  return {
    textAlign: 'center'
  }
})
