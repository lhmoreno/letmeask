import styled from 'styled-components'
import { Link } from 'react-router-dom'
import SVG from 'react-inlinesvg'

export const RoomContainer = styled.div(({ theme }) => {
  return {
    height: '82px',
    display: 'flex',
    justifyContent: 'space-between',
    gap: '16px',
    backgroundColor: theme.colors.white,
    borderRadius: theme.rounded,
    padding: '16px',
    boxShadow: '0px 2px 12px rgba(0, 0, 0, 0.04)'
  }
})

export const RoomInfoContainer = styled.div(({ theme }) => {
  return {
    width: 'calc(100% - 66px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '4px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      gap: '2px'
    }
  }
})

export const RoomTitle = styled.h2(({ theme }) => {
  return {
    maxHeight: '24px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    fontSize: '18px',
    fontWeight: '600',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '16px'
    }
  }
})

export const RoomCode = styled.p(({ theme }) => {
  return {
    fontSize: '14px',
    fontWeight: '500',
    color: theme.colors.primary,
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '12px'
    }
  }
})

export const RoomLink = styled(Link)(({ theme }) => {
  return {
    minWidth: '50px',
    height: '50px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.rounded,
    transitionProperty: 'background',
    transitionDuration: '0.3s',
    backgroundColor: theme.colors.primary,
    textDecoration: 'none',
    color: theme.colors.white,
    ":hover": {
      backgroundColor: theme.colors.primaryHover
    }
  }
})

export const EnterIcon = styled(SVG)(({ theme }) => {
  return {
    transform: 'translateX(-2px)',
    height: '16px',
    "path": {
      fill: theme.colors.white
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      transform: 'translateX(-1px)',
      height: '14px'
    }
  }
})
