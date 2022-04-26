import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SVG from 'react-inlinesvg'

export const Container = styled.div(({ theme }) => {
  return {
    position: 'absolute',
    top: '56px',
    left: '-144px',
    margin: 'auto',
    width: '192px',
    padding: '16px',
    border: '1px solid #DBDCDD',
    borderRadius: theme.rounded,
    backgroundColor: theme.colors.white,
    display: 'grid',
    gap: '16px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      top: '48px',
      width: '184px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      top: '40px',
      width: '176px'
    }
  }
})

export const LinkStyled = styled(Link)(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    textDecoration: 'none',
    color: theme.colors.gray,
    ":hover": {
      fontWeight: '500',
      color: theme.colors.primary
    },

    ":hover path": {
      fill: theme.colors.primary
    }
  }
})

export const Icon = styled(SVG)(({ theme }) => {
  return {
    width: '14px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      width: '12px'
    }
  }
})

export const ButtonSignOut = styled.button(({ theme }) => {
  return {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    color: theme.colors.gray,
    ":hover": {
      fontWeight: '500',
      color: theme.colors.primary
    },

    ":hover path": {
      fill: theme.colors.primary
    }
  }
})

