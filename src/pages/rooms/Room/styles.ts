import styled from 'styled-components'

export const Header = styled.header(({ theme }) => {
  return {
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0px 160px',
    borderBottom: '1px solid #e2e2e2'
  }
})

export const LogoImage = styled.img(({ theme }) => {
  return {
    height: '40px'
  }
})

export const AccountContainer = styled.div(({ theme }) => {
  return {
    position: 'relative'
  }
})

export const AccountImage = styled.img(({ theme }) => {
  return {
    height: '40px',
    borderRadius: '50%',
    cursor: 'pointer'
  }
})

export const Main = styled.main(({ theme }) => {
  return {
    maxWidth: '800px',
    margin: '0px auto',
    padding: '72px 0px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '24px'
  }
})

export const RoomHeader = styled.div(({ theme }) => {
  return {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  }
})

export const RoomTitle = styled.h1(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '24px',
    color: theme.colors.text.normal
  }
})

export const QuestionsLenght = styled.span(({ theme }) => {
  return {
    background: '#e559f9',
    borderRadius: '9999px',
    padding: '8px 16px',
    color: 'white',
    fontWeight: '500',
    fontSize: '14px'
  }
})

export const QuestionContainer = styled.div(({ theme }) => {
  return {
    width: '100%',
    display: 'grid',
    gap: '16px'
  }
})

export const Textarea = styled.textarea(({ theme }) => {
  return {
    border: '0',
    padding: '16px',
    borderRadius: theme.values.rounded,
    background: '#fefefe',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
    resize: 'vertical',
    minHeight: '130px',
    ":focus-visible": {
      outlineColor: theme.colors.primary.normal
    }
  }
})

export const Flex = styled.div(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export const Text = styled.p(({ theme }) => {
  return {
    cursor: 'default',
    display: 'flex',
    justifyContent: 'center',
    gap: '2px',
    fontSize: '14px',
    color: theme.colors.text.description
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
    marginTop: '40px',
    width: '280px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '8px'
  }
})

export const NoQuestionsTitle = styled.p(({ theme }) => {
  return {
    fontFamily: '"Poppins", sans-serif',
    fontSize: '18px',
    fontWeight: '600',
    color: theme.colors.text.normal
  }
})

export const NoQuestionsDescription= styled.p(({ theme }) => {
  return {
    fontSize: '14px',
    color: theme.colors.text.description
  }
})

export const MessagesImge = styled.img(({ theme }) => {
  return {
    width: '150px'
  }
})