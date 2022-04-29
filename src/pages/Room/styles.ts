import styled from 'styled-components'

import * as StyledButton from '../../components/Button'
import StyledContainer from '../../styles/components/Container'

export const Container = styled.div(({ theme }) => {
  return {
    position: 'relative'
  }
})

export const Header = styled(StyledContainer)(({ theme }) => {
  return {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      height: '72px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      height: '64px'
    }
  }
})

export const Divider = styled.hr(({ theme }) => {
  return {
    border: '1px solid #E2E2E2'
  }
})

export const Logo = styled.img(({ theme }) => {
  return {
    transform: 'translateY(2px)',
    height: '48px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      height: '40px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      height: '32px'
    }
  }
})

export const AccountContainer = styled.div(({ theme }) => {
  return {
    position: 'relative'
  }
})

export const AccountImage = styled.img(({ theme }) => {
  return {
    transform: 'translateY(1px)',
    height: '48px',
    borderRadius: '50%',
    cursor: 'pointer',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      transform: 'translateY(2px)',
      height: '40px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      transform: 'translateY(3px)',
      height: '32px'
    }
  }
})

export const Main = styled(StyledContainer)(({ theme }) => {
  return {
    paddingTop: '72px',
    paddingBottom: '72px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }
})

export const RoomHeader = styled.div(({ theme }) => {
  return {
    display: 'flex',
    gap: '16px'
  }
})

export const RoomTitle = styled.h1(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '24px',
    color: theme.colors.black,
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      fontSize: '20px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '18px'
    }
  }
})

export const RoomCode = styled.p(({ theme }) => {
  return {
    fontWeight: '600',
    color: theme.colors.primary,
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      fontSize: '14px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '12px'
    }
  }
})

export const QuestionsLenght = styled.span(({ theme }) => {
  return {
    height: 'min-content',
    background: theme.colors.pink,
    borderRadius: '9999px',
    padding: '9px 16px',
    color: 'white',
    fontWeight: '500',
    fontSize: '14px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      padding: '7px 12px',
      fontSize: '12px'
    },
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      fontSize: '10px'
    }
  }
})

export const QuestionForm = styled.form(({ theme }) => {
  return {
    width: '100%',
    display: 'grid',
    gap: '16px'
  }
})

export const Button = styled(StyledButton.default)(({ theme }) => {
  return {
    justifySelf: 'end',
    width: 'max-content'
  }
})

export const QuestionsContainer = styled.div(({ theme }) => {
  return {
    marginTop: '8px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  }
})

export const NoQuestionsContainer = styled.div(({ theme }) => {
  return {
    alignSelf: 'center',
    width: '100%',
    maxWidth: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px',
    [`@media (max-width: ${theme.breakpoints.small})`]: {
      marginTop: '32px',
      gap: '4px'
    }
  }
})

export const NoQuestionsTitle = styled.p(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.black,
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      fontSize: '16px'
    }
  }
})

export const NoQuestionsDescription= styled.p(({ theme }) => {
  return {
    fontSize: '14px',
    lineHeight: '21px',
    color: theme.colors.grayHover,
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      lineHeight: '18px',
      fontSize: '12px'
    }
  }
})

export const MessagesImge = styled.img(({ theme }) => {
  return {
    width: '150px',
    [`@media (max-width: ${theme.breakpoints.medium})`]: {
      width: '120px'
    }
  }
})
