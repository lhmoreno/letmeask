import styled, { CSSObject } from 'styled-components'
import SVG from 'react-inlinesvg'

interface StyledButtonIconProps {
  liked?: boolean
}

export const Container = styled.div(({ theme }) => {
  return {
    backgroundColor: theme.colors.white,
    borderRadius: theme.rounded,
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
    padding: '24px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  }
})

export const UserInfo = styled.div(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center'
  }
})

export const UserImage = styled.img(({ theme }) => {
  return {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      width: '32px',
      height: '32px'
    }
  }
})

export const UserName = styled.p(({ theme }) => {
  return {
    marginLeft: '8px',
    color: theme.colors.grayHover,
    fontSize: '16px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '14px'
    }
  }
})

export const ButtonIcon = styled.button<StyledButtonIconProps>(({ theme, liked }) => {
  const styles: CSSObject = {
    width: 'min-content',
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'Poppins, sans-serif',
    transitionProperty: 'color',
    transitionDuration: '0.2s',
    "p": {
      transform: 'translateY(3px)'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      gap: '4px',
      "p": {
        transform: 'translateY(2px)'
      }
    },

    
  }

  if (!liked) {
    return {
      ...styles,
      color: theme.colors.gray,
      ":hover": {
        color: theme.colors.grayHover
      },
      "path": {
        transitionProperty: 'stroke',
        transitionDuration: '0.2s',
        stroke: theme.colors.gray
      },
      ":hover path": {
        stroke: theme.colors.grayHover
      }
    }
  }

  return {
    ...styles,
    color: theme.colors.primary,
    "path": {
      stroke: theme.colors.primary
    }
  }
})

export const LikeIcon = styled(SVG)(({ theme }) => {
  return {
    height: '20px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      height: '16px'
    }
  }
})
