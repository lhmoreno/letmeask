import { ReactNode } from 'react'
import { FiThumbsUp } from 'react-icons/fi'
import styled from 'styled-components'

interface QuestionProps {
  content: string
  author: {
    name: string
    avatar: string
  }
  children?: ReactNode
  isAnswered?: boolean
  isHighlighted?: boolean
}

export function Question({ content, author, children, isAnswered, isHighlighted }: QuestionProps) {
  return (
    <Container 
      // className={cx (
      //   'question',
      //   { answered: isAnswered },
      //   { highlighted: isHighlighted && !isAnswered }
      // )}
    >
      <QuestionText>{ content }</QuestionText>
      <Footer>
        <UserInfo>
          <UserImage src={author.avatar} alt={author.name} />
          <UserName>{ author.name }</UserName>
        </UserInfo>
        <Icons>
          <ButtonIcon>
            2
            <FiThumbsUp size={20} />
          </ButtonIcon>
        </Icons>
      </Footer>
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  return {
    backgroundColor: '#FEFEFE',
    borderRadius: '8px',
    boxShadow: '0 2px 12px rgba(0, 0, 0, 0.04)',
    padding: '24px'
  }
})

const QuestionText = styled.p(({ theme }) => {
  return {
    // color: theme.colors.text
  }
})

const Footer = styled.footer(({ theme }) => {
  return {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: '24px'
  }
})

const UserInfo = styled.div(({ theme }) => {
  return {
    display: 'flex',
    alignItems: 'center'
  }
})

const UserImage = styled.img(({ theme }) => {
  return {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
  }
})

const UserName = styled.span(({ theme }) => {
  return {
    marginLeft: '8px',
    color: '#737380',
    fontSize: '14px'
  }
})

const Icons = styled.div(({ theme }) => {
  return {
    
  }
})

const ButtonIcon = styled.button(({ theme }) => {
  return {
    cursor: 'pointer',
    background: 'none',
    border: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '8px',
    // color: theme.colors.gray.dark,
    transitionProperty: 'color',
    transitionDuration: '0.3s',
    ":hover": {
      // color: theme.colors.primary
    }
  }
})
