import styled from 'styled-components'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string
  title: string
}

export function Input({ id, title, ...props }: InputProps) {
  return (
    <Container>
      <Label htmlFor={id}>{ title }</Label>
      <InputStyled 
        id={id}
        {...props}
      />
    </Container>
  )
}

const Container = styled.div(({ theme }) => {
  return {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px'
  }
})

const Label = styled.label(({ theme }) => {
  return {
    fontWeight: '500',
    color: theme.colors.text
  }
})

const InputStyled = styled.input(({ theme }) => {
  return {
    height: '50px',
    padding: '0px 16px',
    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: theme.colors.gray.medium,
    borderRadius: '8px',
    color: theme.colors.text,
    "::placeholder": {
      color: theme.colors.gray.medium,
    },
    ":focus-visible": {
      // borderColor: theme.colors.primary,
      // borderStyle: 'solid',
      // borderWidth: '2px',
      outlineColor: theme.colors.primary
    }
  }
})

