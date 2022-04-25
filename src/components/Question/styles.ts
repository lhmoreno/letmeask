import styled from 'styled-components'
import SVG from 'react-inlinesvg'

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
    width: '32px',
    height: '32px',
    borderRadius: '50%'
  }
})

export const UserName = styled.p(({ theme }) => {
  return {
    marginLeft: '8px',
    color: theme.colors.grayHover,
    fontSize: '14px'
  }
})

export const QuestionInfo = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '24px'
  }
})

export const ButtonIcon = styled.button(({ theme }) => {
  return {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'flex',
    gap: '8px',
    fontFamily: 'Poppins, sans-serif',
    color: theme.colors.gray,
    transitionProperty: 'color',
    transitionDuration: '0.2s',
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
})

export const LikeIcon = styled(SVG)(({ theme }) => {
  return {
    
  }
})
